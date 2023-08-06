import builtins
import re
import string
import sys
import os
import unicodedata
from functools import reduce
from heapq import nlargest

import fastnumbers
import pyspark
import simplejson as json
from glom import glom, assign
from multipledispatch import dispatch
from pypika import MySQLQuery
from pyspark.ml.feature import Imputer, QuantileDiscretizer
from pyspark.ml.feature import VectorAssembler
from pyspark.ml.linalg import Vectors, VectorUDT
from pyspark.ml.stat import Correlation
from pyspark.sql import DataFrame
from pyspark.sql import functions as F
from pyspark.sql.functions import when
from pyspark.sql.types import StringType, ArrayType, StructType

# Helpers
from optimus.helpers.check import has_, is_column_a
from optimus.helpers.columns import get_output_cols, parse_columns, check_column_numbers, validate_columns_names, \
    name_col
from optimus.helpers.columns_expression import match_nulls_strings, match_null, zeros_agg, hist_agg, count_na_agg, \
    percentile_agg, count_uniques_agg, range_agg
from optimus.helpers.constants import RELATIVE_ERROR, Actions
from optimus.helpers.converter import one_list_to_val, tuple_to_dict, format_dict, val_to_list
from optimus.helpers.decorators import add_attr
from optimus.helpers.functions import append as append_df
from optimus.helpers.functions import filter_list, collect_as_list, create_buckets
from optimus.helpers.logger import logger
from optimus.helpers.parser import compress_list, compress_dict, parse_python_dtypes, parse_col_names_funcs_to_keys
from optimus.helpers.raiseit import RaiseIt
from optimus.ml.encoding import string_to_index as ml_string_to_index
from optimus.ml.encoding import index_to_string as ml_index_to_string
from optimus.profiler.functions import fill_missing_var_types, parse_profiler_dtypes

from optimus import ROOT_DIR

print(os.path.abspath("."))
# Add the directory containing your module to the Python path (wants absolute paths)
sys.path.append(os.path.abspath(ROOT_DIR))

# to use this functions as a Spark udf function we need to load it using addPyFile but the file can no be loaded
# as python module becasuse it generate a pickle error.
from infer import Infer

from optimus.infer import Infer, is_, is_type, is_function, is_list, is_tuple, is_list_of_str, \
    is_list_of_dataframes, is_list_of_tuples, is_one_element, is_num_or_str, is_numeric, is_str, is_int, is_dataframe, \
    parse_spark_class_dtypes, PYSPARK_NUMERIC_TYPES, PYSPARK_NOT_ARRAY_TYPES, PYSPARK_STRING_TYPES, PYSPARK_ARRAY_TYPES
from optimus.audf import abstract_udf as audf, filter_row_by_data_type as fbdt

ENGINE = "spark"
# Because the monkey patching and the need to call set a function we need to rename the standard python set.
# This is awful but the best option for the user.
python_set = set


def cols(self):
    @add_attr(cols)
    @dispatch(str, object)
    def append(col_name=None, value=None):
        """
        Append a column to a Dataframe
        :param col_name: Name of the new column
        :param value: List of data values
        :return:
        """

        def lit_array(_value):
            temp = []
            for v in _value:
                temp.append(F.lit(v))
            return F.array(temp)

        df = self

        if is_num_or_str(value):
            value = F.lit(value)
        elif is_list(value):
            value = lit_array(value)
        elif is_tuple(value):
            value = lit_array(list(value))

        if is_(value, F.Column):
            df = df.withColumn(col_name, value)

        return df

    @add_attr(cols)
    @dispatch((list, pyspark.sql.dataframe.DataFrame))
    def append(cols_values=None):
        """
        Append a column or a Dataframe to a Dataframe
        :param cols_values: New Column Names and data values
        :type cols_values: List of tuples
        :return:
        """
        df = self
        df_result = None
        if is_list_of_tuples(cols_values):

            for c in cols_values:
                col_name = c[0]
                value = c[1]
                df_result = df.cols.append(col_name, value)

        elif is_list_of_dataframes(cols_values) or is_dataframe(cols_values):
            cols_values = val_to_list(cols_values)
            cols_values.insert(0, df)
            df_result = append_df(cols_values, like="columns")

        else:
            RaiseIt.type_error(cols_values, ["list of tuples", "dataframes"])

        return df_result

    @add_attr(cols)
    def select(columns="*", regex=None, data_type=None, invert=False):
        """
        Select columns using index, column name, regex to data type
        :param columns:
        :param regex: Regular expression to filter the columns
        :param data_type: Data type to be filtered for
        :param invert: Invert the selection
        :return:
        """
        df = self
        columns = parse_columns(df, columns, is_regex=regex, filter_by_column_dtypes=data_type, invert=invert)
        if columns is not None:
            df = df.select(columns)
            # Metadata get lost when using select(). So we copy here again.
            df = df.preserve_meta(self)

        else:
            df = None

        return df

    @add_attr(cols)
    def copy(input_cols, output_cols=None, columns=None):
        """
        Copy one or multiple columns
        :param input_cols: Source column to be copied
        :param output_cols: Destination column
        :param columns: tuple of column [('column1','column_copy')('column1','column1_copy')()]
        :return:
        """
        df = self

        if is_list_of_str(columns):
            output_cols = [col_name + "_copy" for col_name in columns]
            output_cols = get_output_cols(columns, output_cols)
            columns = zip(columns, output_cols)
        else:
            input_cols = parse_columns(df, input_cols)
            output_cols = get_output_cols(input_cols, output_cols)

            columns = list(zip(input_cols, output_cols))

        for input_col, output_col in columns:
            current_meta = self.get_meta()
            df = df.withColumn(output_col, F.col(input_col))
            df = df.set_meta(value=current_meta)
            df = df.copy_meta({input_col: output_col})
        return df

    @add_attr(cols)
    def to_timestamp(input_cols, date_format=None, output_cols=None):
        """
        Convert a string to timestamp
        :param input_cols:
        :param output_cols:
        :param date_format:
        :return:
        """

        input_cols = parse_columns(self, input_cols)
        output_cols = get_output_cols(input_cols, output_cols)

        df = self
        for input_col, output_col in zip(input_cols, output_cols):
            df = df.withColumn(output_col, F.to_timestamp(input_col, date_format))
        return df

    @add_attr(cols)
    def apply_expr(input_cols, func=None, args=None, filter_col_by_dtypes=None, output_cols=None, meta=None):
        """
        Apply a expression to column.
        :param input_cols: Columns in which the function is going to be applied
        :param func: Function to be applied to the data
        :type func: A plain expression or a function
        :param args: Argument passed to the function
        :param filter_col_by_dtypes: Only apply the filter to specific type of value ,integer, float, string or bool
        :param output_cols: Columns in which the transformed data will saved
        :return: Dataframe
        """

        return apply(input_cols, func=func, args=args, filter_col_by_dtypes=filter_col_by_dtypes,
                     output_cols=output_cols, meta=meta)

    @add_attr(cols)
    def apply(input_cols, func=None, func_return_type=None, args=None, func_type=None, when=None,
              filter_col_by_dtypes=None, output_cols=None, skip_output_cols_processing=False, meta="apply"):
        """
        Apply a function using pandas udf or udf if apache arrow is not available
        :param input_cols: Columns in which the function is going to be applied
        :param output_cols: Columns in which the transformed data will saved
        :param func: Functions to be applied to a columns. The declaration must have always 2 params.
            def func(value, args):
        :param func_return_type: function return type. This is required by UDF and Pandas UDF.
        :param args: Arguments to be passed to the function
        :param func_type: pandas_udf or udf. If none try to use pandas udf (Pyarrow needed)
        :param when: A expression to better control when the function is going to be applied
        :param filter_col_by_dtypes: Only apply the filter to specific type of value ,integer, float, string or bool
        :param skip_output_cols_processing: In some special cases we do not want apply() to construct the output columns.
        True or False
        :param meta: Pass metadata transformation to a dataframe
        :return: DataFrame
        """
        input_cols = parse_columns(self, input_cols, filter_by_column_dtypes=filter_col_by_dtypes,
                                   accepts_missing_cols=True)
        check_column_numbers(input_cols, "*")

        if skip_output_cols_processing:
            output_cols = val_to_list(output_cols)
        else:
            output_cols = get_output_cols(input_cols, output_cols)

        if output_cols is None:
            output_cols = input_cols

        df = self

        def expr(_when):
            main_query = audf(input_col, func, func_return_type, args, func_type)
            if when is not None:
                # Use the data type to filter the query
                main_query = F.when(_when, main_query).otherwise(F.col(input_col))

            return main_query

        for input_col, output_col in zip(input_cols, output_cols):
            df = df.withColumn(output_col, expr(when))
            df = df.preserve_meta(self, meta, output_col)

        return df

    @add_attr(cols)
    def apply_by_dtypes(columns, func, func_return_type, args=None, func_type=None, data_type=None):
        """
        Apply a function using pandas udf or udf if apache arrow is not available
        :param columns: Columns in which the function is going to be applied
        :param func: Functions to be applied to a columns
        :param func_return_type
        :param args:
        :param func_type: pandas_udf or udf. If none try to use pandas udf (Pyarrow needed)
        :param data_type:
        :return:
        """
        columns = parse_columns(self, columns)
        df = self
        for col_name in columns:
            df = df.cols.apply(col_name, func=func, func_return_type=func_return_type, args=args, func_type=func_type,
                               when=fbdt(col_name, data_type))
        return df

    # TODO: Maybe we could merge this with apply()
    @add_attr(cols)
    def set(output_col, value=None):
        """
        Execute a hive expression. Also handle ints and list in columns
        :param output_col:
        :param value: numeric, list or hive expression
        :return:
        """
        df = self

        columns = parse_columns(self, output_col, accepts_missing_cols=True)
        check_column_numbers(columns, 1)

        if is_list(value):
            expr = F.array([F.lit(x) for x in value])
        elif is_numeric(value):
            expr = F.lit(value)
        elif is_str(value):
            expr = F.expr(value)
        else:
            RaiseIt.value_error(value, ["numeric", "list", "hive expression"])

        df = df.withColumn(output_col, expr)
        df = df.preserve_meta(self, Actions.SET.value, columns)
        return df

    # TODO: Check if we must use * to select all the columns
    @add_attr(cols)
    @dispatch(object, object)
    def rename(columns_old_new=None, func=None):
        """"
        Changes the name of a column(s) dataFrame.
        :param columns_old_new: List of tuples. Each tuple has de following form: (oldColumnName, newColumnName).
        :param func: can be lower, upper or any string transformation function
        """

        df = self

        # Apply a transformation function
        if is_function(func):
            exprs = [F.col(c).alias(func(c)) for c in df.columns]
            df = df.select(exprs)

        elif is_list_of_tuples(columns_old_new):
            # Check that the 1st element in the tuple is a valid set of columns

            validate_columns_names(self, columns_old_new)
            for col_name in columns_old_new:
                old_col_name = col_name[0]
                new_col_name = col_name[1]

                current_meta = self.get_meta()

                if is_str(old_col_name):
                    df = df.withColumnRenamed(old_col_name, new_col_name)
                elif is_int(old_col_name):
                    old_col_name = self.schema.names[old_col_name]
                    df = df.withColumnRenamed(old_col_name, new_col_name)

                # df = df.rename_meta([(old_col_name, new_col_name)])
                df = df.set_meta(value=current_meta)

                df = df.rename_meta((old_col_name, new_col_name))

        return df

    @add_attr(cols)
    @dispatch(list)
    def rename(columns_old_new=None):
        return rename(columns_old_new, None)

    @add_attr(cols)
    @dispatch(object)
    def rename(func=None):
        return rename(None, func)

    @add_attr(cols)
    @dispatch(str, str, object)
    def rename(old_column, new_column, func=None):
        return rename([(old_column, new_column)], func)

    @add_attr(cols)
    @dispatch(str, str)
    def rename(old_column, new_column):
        return rename([(old_column, new_column)], None)

    # TODO: Maybe should be possible to cast and array of integer for example to array of double
    @add_attr(cols)
    def cast(input_cols=None, dtype=None, output_cols=None, columns=None):
        """
        Cast a column or a list of columns to a specific data type
        :param input_cols: Columns names to be casted
        :param output_cols:
        :param dtype: final data type
        :param columns: List of tuples of column names and types to be casted. This variable should have the
                following structure:

                colsAndTypes = [('columnName1', 'integer'), ('columnName2', 'float'), ('columnName3', 'string')]

                The first parameter in each tuple is the column name, the second is the final datatype of column after
                the transformation is made.
        :return: Spark DataFrame
        """

        _dtype = []
        # Parse params
        if columns is None:
            input_cols = parse_columns(self, input_cols)
            if is_list(input_cols) or is_one_element(input_cols):

                output_cols = get_output_cols(input_cols, output_cols)

                for _ in builtins.range(0, len(input_cols)):
                    _dtype.append(dtype)
        else:

            input_cols = list([c[0] for c in columns])
            if len(columns[0]) == 2:
                output_cols = get_output_cols(input_cols, output_cols)
                _dtype = list([c[1] for c in columns])
            elif len(columns[0]) == 3:
                output_cols = list([c[1] for c in columns])
                _dtype = list([c[2] for c in columns])

            output_cols = get_output_cols(input_cols, output_cols)

        # Helper function to return
        def cast_factory(cls):

            # Parse to Vector
            if is_type(cls, Vectors):
                _func_type = "udf"

                def _cast_to(val, attr):
                    return Vectors.dense(val)

                _func_return_type = VectorUDT()
            # Parse standard data types
            elif parse_spark_class_dtypes(cls):

                _func_type = "column_exp"

                def _cast_to(col_name, attr):
                    return F.col(col_name).cast(parse_spark_class_dtypes(cls))

                _func_return_type = None

            # Add here any other parse you want
            else:
                RaiseIt.value_error(cls)

            return _func_return_type, _cast_to, _func_type

        df = self

        for input_col, output_col, data_type in zip(input_cols, output_cols, _dtype):
            return_type, func, func_type = cast_factory(data_type)

            df = df.cols.apply(input_col, func, func_return_type=return_type, args=data_type, func_type=func_type,
                               output_cols=output_col, meta=Actions.CAST.value)

        return df

    @add_attr(cols)
    @add_attr(cols)
    def astype(*args, **kwargs):
        """
        Like pandas helper
        :param args:
        :param kwargs:
        :return:
        """
        return cast(*args, **kwargs)

    @add_attr(cols)
    def move(column, position, ref_col=None):
        """
        Move a column to specific position
        :param column: Column to be moved
        :param position: Column new position. Accepts 'after', 'before', 'beginning', 'end'
        :param ref_col: Column taken as reference
        :return: Spark DataFrame
        """
        # Check that column is a string or a list
        column = parse_columns(self, column)
        ref_col = parse_columns(self, ref_col)

        # Get dataframe columns
        columns = self.columns

        # Get source and reference column index position
        new_index = columns.index(ref_col[0])

        # Column to move
        column_to_move_index = columns.index(column[0])

        if position == 'after':
            # Check if the movement is from right to left:
            if new_index < column_to_move_index:
                new_index = new_index + 1
        elif position == 'before':  # If position if before:
            if new_index >= column_to_move_index:  # Check if the movement if from right to left:
                new_index = new_index - 1
        elif position == 'beginning':
            new_index = 0
        elif position == 'end':
            new_index = len(columns)
        else:
            RaiseIt.value_error(position, ["after", "before", "beginning", "end"])

        # Move the column to the new place
        columns.insert(new_index, columns.pop(column_to_move_index))  # insert and delete a element

        return self[columns]

    @add_attr(cols)
    def keep(columns=None, regex=None):
        """
        Only keep the columns specified
        :param columns: Columns to Keep in the dataFrame
        :param regex: Regular expression to filter
        :return: Spark DataFrame
        """

        df = self
        if regex:
            r = re.compile(regex)
            columns = list((r.match, self.columns))

        columns = parse_columns(self, columns)

        df = df.cols.select(columns)
        df = df.action_meta("keep", columns)
        return df

    @add_attr(cols)
    # TODO: Create a function to sort by datatype?
    def sort(order="asc", columns=None):
        """
        Sort dataframes columns asc or desc
        :param order: 'asc' or 'desc' accepted
        :param columns:
        :return: Spark DataFrame
        """
        df = self
        if columns is None:
            _reverse = None
            if order == "asc":
                _reverse = False
            elif order == "desc":
                _reverse = True
            else:
                RaiseIt.value_error(order, ["asc", "desc"])

            columns = df.cols.names()
            columns.sort(key=lambda v: v.upper(), reverse=_reverse)

        return df.select(columns)

    @add_attr(cols)
    def drop(columns=None, regex=None, data_type=None):
        """
        Drop a list of columns
        :param columns: Columns to be dropped
        :param regex: Regex expression to select the columns
        :param data_type:
        :return:
        """
        df = self
        if regex:
            r = re.compile(regex)
            columns = list((r.match, self.columns))

        columns = parse_columns(self, columns, filter_by_column_dtypes=data_type)
        check_column_numbers(columns, "*")

        df = df.drop(*columns)

        df = df.preserve_meta(self, "drop", columns)

        return df

    @add_attr(cols)
    def create_exprs(columns, funcs, *args):
        """
        Helper function to apply multiple columns expression to multiple columns
        :param columns:
        :param funcs:
        :param args:
        :return:
        """

        columns = parse_columns(self, columns)
        funcs = val_to_list(funcs)
        exprs = []

        for col_name in columns:
            for func in funcs:
                exprs.append((func, (col_name, *args)))

        df = self

        # Std, kurtosis, mean, skewness and other agg functions can not process date columns.
        filters = {"date": [F.stddev, F.kurtosis, F.mean, F.skewness, F.sum, F.variance, F.approx_count_distinct,
                            zeros_agg],
                   "array": [F.stddev, F.kurtosis, F.mean, F.skewness, F.sum, F.variance, F.approx_count_distinct,
                             zeros_agg],
                   "timestamp": [F.stddev, F.kurtosis, F.mean, F.skewness, F.sum, F.variance, F.approx_count_distinct,
                                 zeros_agg, percentile_agg],
                   "null": [F.stddev, F.kurtosis, F.mean, F.skewness, F.sum, F.variance, F.approx_count_distinct,
                            zeros_agg],
                   "boolean": [F.stddev, F.kurtosis, F.mean, F.skewness, F.sum, F.variance, F.approx_count_distinct,
                               zeros_agg],
                   "binary": [F.stddev, F.kurtosis, F.mean, F.skewness, F.sum, F.variance, F.approx_count_distinct,
                              zeros_agg]
                   }

        def _filter(_col_name, _func):
            for data_type, func_filter in filters.items():
                for f in func_filter:
                    if (_func == f) and (is_column_a(df, _col_name, data_type)):
                        return True
            return False

        beauty_col_names = {"hist_agg": "hist", "percentile_agg": "percentile", "zeros_agg": "zeros",
                            "count_na_agg": "count_na", "range_agg": "range", "count_uniques_agg": "count_uniques"}

        def _beautify_col_names(_func):
            if _func.__name__ in beauty_col_names:
                func_name = beauty_col_names[_func.__name__]
            else:
                func_name = _func.__name__
            return func_name

        def _agg_exprs(_funcs):
            _exprs = []
            for f in _funcs:
                _func = f[0]
                _args = f[1]
                _col_name = _args[0]

                if not _filter(_col_name, _func):
                    agg = _func(*_args)
                    if agg is not None:
                        func_name = _beautify_col_names(_func)
                        if ENGINE == "spark":
                            _exprs.append(agg.alias(func_name + "_" + _col_name))
                        elif ENGINE == "sql":
                            _exprs.append(agg.as_(func_name + "_" + _col_name))

            return _exprs

        r = _agg_exprs(exprs)

        return r

    @add_attr(cols)
    def agg_exprs(columns, funcs, *args):
        """
        Create and run aggregation
        :param columns:
        :param funcs:
        :param args:
        :return:
        """
        return exec_agg(create_exprs(columns, funcs, *args))

    @add_attr(cols)
    def exec_agg(exprs):
        """
        Execute and aggregation
        :param exprs:
        :return:
        """

        if len(exprs) > 0:
            df = self
            if ENGINE == "sql":
                def clean(c):
                    return c.get_sql().replace("'", "`")

                exprs = clean(MySQLQuery.from_("df").select(*exprs))
                df = self.query(exprs)
            elif ENGINE == "spark":
                df = self.agg(*exprs)

            result = parse_col_names_funcs_to_keys(df.to_dict())
        else:
            result = None

        return result

    # Quantile statistics
    @add_attr(cols)
    def min(columns):
        """
        Return the min value from a column dataframe
        :param columns: '*', list of columns names or a single column name.
        :return:
        """

        return format_dict(agg_exprs(columns, F.min))
        # agg_exprs(columns, OF.min())

    @add_attr(cols)
    def max(columns):
        """
        Return the max value from a column dataframe
        :param columns: '*', list of columns names or a single column name.
        :return:
        """
        return format_dict(agg_exprs(columns, F.max))

    @add_attr(cols)
    def range(columns):
        """
        Return the range form the min to the max value
        :param columns: '*', list of columns names or a single column name.
        :return:
        """

        return agg_exprs(columns, range_agg)

    @add_attr(cols)
    def median(columns, relative_error=RELATIVE_ERROR):
        """
        Return the median of a column dataframe
        :param columns: '*', list of columns names or a single column name.
        :param relative_error: If set to zero, the exact median is computed, which could be very expensive. 0 to 1 accepted
        :return:
        """

        return format_dict(percentile(columns, [0.5], relative_error))

    @add_attr(cols, log_time=True)
    def percentile(columns, values=None, relative_error=RELATIVE_ERROR):
        """
        Return the percentile of a dataframe
        :param columns:  '*', list of columns names or a single column name.
        :param values: list of percentiles to be calculated
        :param relative_error:  If set to zero, the exact percentiles are computed, which could be very expensive.
        :return: percentiles per columns
        """
        values = [str(v) for v in values]
        return agg_exprs(columns, percentile_agg, self, values, relative_error)

    # Descriptive Analytics
    @add_attr(cols)
    # TODO: implement double MAD http://eurekastatistics.com/using-the-median-absolute-deviation-to-find-outliers/
    def mad(columns, relative_error=RELATIVE_ERROR, more=None):
        """
        Return the Median Absolute Deviation
        :param columns: Column to be processed
        :param more: Return some extra computed values (Median).
        :param relative_error: Relative error calculating the media
        :return:
        """
        columns = parse_columns(self, columns, filter_by_column_dtypes=PYSPARK_NUMERIC_TYPES)
        check_column_numbers(columns, "*")

        result = {}
        for col_name in columns:

            _mad = {}
            median_value = self.cols.median(col_name, relative_error)
            mad_value = self.withColumn(col_name, F.abs(F.col(col_name) - median_value)) \
                .cols.median(col_name, relative_error)

            if more:
                _mad = {"mad": mad_value, "median": median_value}
            else:
                _mad = {"mad": mad_value}

            result[col_name] = _mad

        return format_dict(result)

    @add_attr(cols)
    def std(columns):
        """
        Return the standard deviation of a column dataframe
        :param columns: '*', list of columns names or a single column name.
        :return:
        """
        columns = parse_columns(self, columns, filter_by_column_dtypes=PYSPARK_NUMERIC_TYPES)
        check_column_numbers(columns, "*")

        return format_dict(agg_exprs(columns, F.stddev))

    @add_attr(cols)
    def kurt(columns):
        """
        Return the kurtosis of a column dataframe
        :param columns: '*', list of columns names or a single column name.
        :return:
        """
        columns = parse_columns(self, columns, filter_by_column_dtypes=PYSPARK_NUMERIC_TYPES)
        check_column_numbers(columns, "*")

        return format_dict(agg_exprs(columns, F.kurtosis))

    @add_attr(cols)
    def mean(columns):
        """
        Return the mean of a column dataframe
        :param columns: '*', list of columns names or a single column name.
        :return:
        """
        columns = parse_columns(self, columns, filter_by_column_dtypes=PYSPARK_NUMERIC_TYPES)
        check_column_numbers(columns, "*")

        return format_dict(agg_exprs(columns, F.mean))

    @add_attr(cols)
    def skewness(columns):
        """
        Return the skewness of a column dataframe
        :param columns: '*', list of columns names or a single column name.
        :return:
        """
        columns = parse_columns(self, columns, filter_by_column_dtypes=PYSPARK_NUMERIC_TYPES)
        check_column_numbers(columns, "*")

        return format_dict(agg_exprs(columns, F.skewness))

    @add_attr(cols)
    def sum(columns):
        """
        Return the sum of a column dataframe
        :param columns: '*', list of columns names or a single column name.
        :return:
        """
        columns = parse_columns(self, columns, filter_by_column_dtypes=PYSPARK_NUMERIC_TYPES)
        check_column_numbers(columns, "*")

        return format_dict(agg_exprs(columns, F.sum))

    @add_attr(cols)
    def variance(columns):
        """
        Return the column variance
        :param columns: '*', list of columns names or a single column name.
        :return:
        """
        columns = parse_columns(self, columns, filter_by_column_dtypes=PYSPARK_NUMERIC_TYPES)
        check_column_numbers(columns, "*")

        return format_dict(agg_exprs(columns, F.variance))

    @add_attr(cols)
    def abs(columns):
        """
        Apply abs to the values in a column
        :param columns:
        :return:
        """
        columns = parse_columns(self, columns, filter_by_column_dtypes=PYSPARK_NUMERIC_TYPES)
        check_column_numbers(columns, "*")
        # Abs not accepts column's string names. Convert to Spark Column

        # TODO: make this in one pass.
        df = self
        for col_name in columns:
            df = df.withColumn(col_name, F.abs(F.col(col_name)))
        return df
        # return agg_exprs(columns, abs_agg)

    @add_attr(cols)
    def mode(columns):
        """
        Return the the column mode
        :param columns: '*', list of columns names or a single column name.
        :return:
        """

        columns = parse_columns(self, columns)
        mode_result = []

        for col_name in columns:
            count = self.groupBy(col_name).count()
            mode_df = count.join(
                count.agg(F.max("count").alias("max_")), F.col("count") == F.col("max_")
            )

            mode_df = mode_df.cache()
            # if none of the values are repeated we not have mode
            mode_list = (mode_df
                         .rows.select(mode_df["count"] > 1)
                         .cols.select(col_name)
                         .collect())

            mode_result.append({col_name: filter_list(mode_list)})

        return format_dict(mode_result)

    # String Operations
    @add_attr(cols)
    def lower(input_cols, output_cols=None):
        """
        Lowercase all the string in a column
        :param input_cols: '*', list of columns names or a single column name
        :param output_cols:
        :return:
        """

        def _lower(col, args):
            return F.lower(F.col(col))

        return apply(input_cols, _lower, filter_col_by_dtypes="string", output_cols=output_cols,
                     meta=Actions.LOWER.value)

    @add_attr(cols)
    def upper(input_cols, output_cols=None):
        """
        Uppercase all the strings column
        :param input_cols: '*', list of columns names or a single column name.
        :param output_cols:
        :return:
        """

        def _upper(col, args):
            return F.upper(F.col(col))

        return apply(input_cols, _upper, filter_col_by_dtypes="string", output_cols=output_cols,
                     meta=Actions.UPPER.value)

    @add_attr(cols)
    def trim(input_cols, output_cols=None):
        """
        Trim the string in a column
        :param input_cols: '*', list of columns names or a single column name.
        :param output_cols:
        :return:
        """

        def _trim(col_name, args):
            return F.trim(F.col(col_name))

        return apply(input_cols, _trim, filter_col_by_dtypes=PYSPARK_NOT_ARRAY_TYPES, output_cols=output_cols,
                     meta=Actions.TRIM.value)

    @add_attr(cols)
    def reverse(input_cols, output_cols=None):
        """
        Reverse the order of all the string in a column
        :param input_cols: '*', list of columns names or a single column name.
        :param output_cols:
        :return:
        """

        def _reverse(col, args):
            return F.reverse(F.col(col))

        df = apply_expr(input_cols, _reverse, filter_col_by_dtypes="string", output_cols=output_cols,
                        meta=Actions.REVERSE.value)

        return df

    @add_attr(cols)
    def remove(columns, search=None, search_by="chars", output_cols=None):
        """
        Remove chars or words
        :param columns: '*', list of columns names or a single column name.
        :param search: values to look at to be replaced
        :param search_by: Match substring or words
        :param output_cols:
        :return:
        """
        return self.cols.replace(columns, search, "", search_by, output_cols)

    @add_attr(cols)
    def remove_accents(input_cols, output_cols=None):
        """
        Remove accents in specific columns
        :param input_cols: '*', list of columns names or a single column name.
        :param output_cols:
        :return:
        """

        def _remove_accents(value, attr):
            cell_str = str(value)

            # first, normalize strings:
            nfkd_str = unicodedata.normalize('NFKD', cell_str)

            # Keep chars that has no other char combined (i.e. accents chars)
            with_out_accents = u"".join([c for c in nfkd_str if not unicodedata.combining(c)])
            return with_out_accents

        df = apply(input_cols, _remove_accents, "string", output_cols=output_cols, meta=Actions.REMOVE_ACCENTS.value)
        return df

    @add_attr(cols)
    def remove_special_chars(input_cols, output_cols=None):
        """
        Reference https://stackoverflow.com/questions/265960/best-way-to-strip-punctuation-from-a-string-in-python
        This method remove special characters (i.e. !”#$%&/()=?) in columns of dataFrames.
        :param input_cols: '*', list of columns names or a single column name.
        :param output_cols:
        :return:
        """

        input_cols = parse_columns(self, input_cols, filter_by_column_dtypes=PYSPARK_STRING_TYPES)
        check_column_numbers(input_cols, "*")

        df = self.cols.replace(input_cols, [s for s in string.punctuation], "", "chars", output_cols=output_cols)
        return df

    @add_attr(cols)
    def remove_white_spaces(input_cols, output_cols=None):
        """
        Remove all the white spaces from a string
        :param input_cols:
        :param output_cols:
        :return:
        """

        def _remove_white_spaces(col_name, args):
            return F.regexp_replace(F.col(col_name), " ", "")

        df = apply(input_cols, _remove_white_spaces, output_cols=output_cols,
                   filter_col_by_dtypes=PYSPARK_NOT_ARRAY_TYPES, meta=Actions.REMOVE_WHITE_SPACES.value)
        return df

    @add_attr(cols)
    def date_transform(input_cols, current_format=None, output_format=None, output_cols=None):
        """
        Transform a column date to a specified format
        :param input_cols: Columns to be transformed.
        :param output_cols: Output columns
        :param current_format: Current_format is the current string dat format of columns specified. Of course,
                                all columns specified must have the same format. Otherwise the function is going
                                to return tons of null values because the transformations in the columns with
                                different formats will fail. For example "yyyy/MM/dd"
        :param output_format: Output date string format to be expected. For example "dd-MM-YYYY"
        """

        def _date_transform(col_name, attr):
            _current_format = attr[0]
            _output_format = attr[1]

            return F.date_format(F.unix_timestamp(col_name, _current_format).cast("timestamp"), _output_format).alias(
                col_name)

        # Asserting if column if in dataFrame:
        df = apply(input_cols, _date_transform, args=[current_format, output_format], output_cols=output_cols)

        return df

    @add_attr(cols)
    def years_between(input_cols, date_format=None, output_cols=None):
        """
        This method compute the age based on a born date.
        :param input_cols: Name of the column born dates column.
        :param output_cols:
        :param date_format: String format date of the column provided. For example "yyyyMMdd"
        """

        # Output format date
        format_dt = "yyyy-MM-dd"

        def _years_between(col_name, attr):
            _date_format = attr[0]

            return F.format_number(
                F.abs(
                    F.months_between(
                        F.date_format(
                            F.unix_timestamp(
                                col_name,
                                _date_format).cast("timestamp"),
                            format_dt),
                        F.current_date()) / 12), 4) \
                .alias(
                col_name)

        # output_cols = get_output_cols(input_cols, output_cols)

        df = apply(input_cols, func=_years_between, args=[date_format],
                   filter_col_by_dtypes=PYSPARK_NOT_ARRAY_TYPES, output_cols=output_cols)

        df = df.cols.cast(output_cols, "float")

        return df

    @add_attr(cols)
    def replace(input_cols, search=None, replace_by=None, search_by="chars", output_cols=None):
        """
        Replace a value, list of values by a specified string
        :param input_cols: '*', list of columns names or a single column name.
        :param output_cols:
        :param search: Values to look at to be replaced
        :param replace_by: New value to replace the old one
        :param search_by: Can be "full","words","chars" or "numeric".
        :return:
        """

        # TODO check if .contains can be used instead of regexp
        def func_chars_words(_df, _input_col, _output_col, _search, _replace_by):
            # Reference https://www.oreilly.com/library/view/python-cookbook/0596001673/ch03s15.html

            # Create as dict
            _search_and_replace_by = None
            if is_list(search):
                _search_and_replace_by = {s: _replace_by for s in search}
            elif is_one_element(search):
                _search_and_replace_by = {search: _replace_by}

            _search_and_replace_by = {str(k): str(v) for k, v in _search_and_replace_by.items()}
            _regex = re.compile("|".join(map(re.escape, _search_and_replace_by.keys())))

            def multiple_replace(_value, __search_and_replace_by):
                # Create a regular expression from all of the dictionary keys
                if _value is not None:
                    __regex = None
                    if search_by == "chars":
                        __regex = re.compile("|".join(map(re.escape, __search_and_replace_by.keys())))
                    elif search_by == "words":
                        __regex = re.compile(r'\b%s\b' % r'\b|\b'.join(map(re.escape, __search_and_replace_by.keys())))

                    result = __regex.sub(lambda match: __search_and_replace_by[match.group(0)], str(_value))
                else:
                    result = None
                return result

            return _df.cols.apply(_input_col, multiple_replace, "string", _search_and_replace_by,
                                  output_cols=_output_col)

        def func_full(_df, _input_col, _output_col, _search, _replace_by):
            _search = val_to_list(search)

            if _input_col != output_col:
                _df = _df.cols.copy(_input_col, _output_col)

            return _df.replace(_search, _replace_by, _input_col)

        def func_numeric(_df, _input_col, _output_col, _search, _replace_by):
            _df = _df.withColumn(_output_col, F.when(df[_input_col] == _search, _replace_by).otherwise(df[_output_col]))
            return _df

        func = None
        if search_by == "full":
            func = func_full
        elif search_by == "chars" or search_by == "words":
            func = func_chars_words
        elif search_by == "numeric":
            func = func_numeric
        else:
            RaiseIt.value_error(search_by, ["chars", "words", "full", "numeric"])

        filter_dtype = None
        if search_by in ["chars", "words", "full"]:
            filter_dtype = [PYSPARK_STRING_TYPES]
        elif search_by == "numeric":
            filter_dtype = [PYSPARK_NUMERIC_TYPES]

        input_cols = parse_columns(self, input_cols, filter_by_column_dtypes=filter_dtype)

        check_column_numbers(input_cols, "*")
        output_cols = get_output_cols(input_cols, output_cols)

        df = self
        for input_col, output_col in zip(input_cols, output_cols):
            df = func(df, input_col, output_col, search, replace_by)

            df = df.preserve_meta(self, Actions.REPLACE.value, output_col)
        return df

    @add_attr(cols)
    def replace_regex(input_cols, regex=None, value=None, output_cols=None):
        """
        Use a Regex to replace values
        :param input_cols: '*', list of columns names or a single column name.
        :param output_cols:
        :param regex: values to look at to be replaced
        :param value: new value to replace the old one
        :return:
        """

        # if regex or normal replace we use regexp or replace functions
        def func_regex(_input_cols, attr):
            _search = attr[0]
            _replace = attr[1]
            return F.regexp_replace(_input_cols, _search, _replace)

        return apply(input_cols, func=func_regex, args=[regex, value], output_cols=output_cols,
                     filter_col_by_dtypes=PYSPARK_STRING_TYPES + PYSPARK_NUMERIC_TYPES,
                     meta=Actions.REPLACE_REGEX.value)

    @add_attr(cols)
    def impute(input_cols, data_type="continuous", strategy="mean", output_cols=None):
        """
        Imputes missing data from specified columns using the mean or median.
        :param input_cols: list of columns to be analyze.
        :param output_cols:
        :param data_type: "continuous" or "categorical"
        :param strategy: String that specifies the way of computing missing data. Can be "mean", "median" for continuous
        or "mode" for categorical columns
        :return: Dataframe object (DF with columns that has the imputed values).
        """
        df = self

        if data_type is "continuous":
            input_cols = parse_columns(self, input_cols,
                                       filter_by_column_dtypes=PYSPARK_NUMERIC_TYPES)
            check_column_numbers(input_cols, "*")
            output_cols = get_output_cols(input_cols, output_cols)

            # Imputer require not only numeric but float or double
            # print("{} values imputed for column(s) '{}'".format(df.cols.count_na(input_col), input_col))
            df = df.cols.cast(input_cols, "float", output_cols)
            imputer = Imputer(inputCols=output_cols, outputCols=output_cols)

            model = imputer.setStrategy(strategy).fit(df)

            df = model.transform(df)

        elif data_type is "categorical":

            input_cols = parse_columns(self, input_cols, filter_by_column_dtypes=PYSPARK_STRING_TYPES)
            check_column_numbers(input_cols, "*")
            output_cols = get_output_cols(input_cols, output_cols)

            value = df.cols.mode(input_cols)
            df = df.cols.fill_na(output_cols, value, output_cols)
        else:
            RaiseIt.value_error(data_type, ["continuous", "categorical"])

        return df

    @add_attr(cols)
    def fill_na(input_cols, value=None, output_cols=None):
        """
        Replace null data with a specified value
        :param input_cols: '*', list of columns names or a single column name.
        :param output_cols:
        :param value: value to replace the nan/None values
        :return:
        """
        input_cols = parse_columns(self, input_cols)
        check_column_numbers(input_cols, "*")
        output_cols = get_output_cols(input_cols, output_cols)

        df = self
        for input_col, output_col in zip(input_cols, output_cols):
            func = None
            if is_column_a(self, input_col, PYSPARK_NUMERIC_TYPES):

                new_value = fastnumbers.fast_float(value)
                func = F.when(match_nulls_strings(input_col), new_value).otherwise(F.col(input_col))
            elif is_column_a(self, input_col, PYSPARK_STRING_TYPES):
                new_value = str(value)
                func = F.when(match_nulls_strings(input_col), new_value).otherwise(F.col(input_col))
            elif is_column_a(self, input_col, PYSPARK_ARRAY_TYPES):
                if is_one_element(value):
                    new_value = F.array(F.lit(value))
                else:
                    new_value = F.array(*[F.lit(v) for v in value])
                func = F.when(match_null(input_col), new_value).otherwise(F.col(input_col))
            else:
                if df.cols.dtypes(input_col)[input_col] == parse_python_dtypes(type(value).__name__):

                    new_value = value
                    func = F.when(match_null(input_col), new_value).otherwise(F.col(input_col))
                else:
                    RaiseIt.type_error(value, [df.cols.dtypes(input_col)])

            df = df.cols.apply(input_col, func=func, output_cols=output_col, meta=Actions.FILL_NA.value)

        return df

    @add_attr(cols)
    def is_na(input_cols, output_cols=None):
        """
        Replace null values with True and non null with False
        :param input_cols: '*', list of columns names or a single column name.
        :param output_cols:
        :return:
        """

        def _replace_na(_col_name, _value):
            return F.when(F.col(_col_name).isNull(), True).otherwise(False)

        return self.cols.apply(input_cols, _replace_na, output_cols=output_cols, meta=Actions.IS_NA.value)

    @add_attr(cols)
    def count():
        """
        Return the columns number
        :return:
        """
        return len(self.columns)

    @add_attr(cols)
    def count_na(columns):
        """
        Return the NAN and Null count in a Column
        :param columns: '*', list of columns names or a single column name.
        :return:
        """

        return format_dict(agg_exprs(columns, count_na_agg, self))

    @add_attr(cols)
    def count_zeros(columns):
        """
        Count zeros in a column
        :param columns: '*', list of columns names or a single column name.
        :return:
        """
        columns = parse_columns(self, columns)

        return format_dict(agg_exprs(columns, zeros_agg))

    @add_attr(cols)
    def count_uniques(columns, estimate=True):
        """
        Return how many unique items exist in a columns
        :param columns: '*', list of columns names or a single column name.
        :param estimate: If true use HyperLogLog to estimate distinct count. If False use full distinct
        :type estimate: bool
        :return:
        """
        columns = parse_columns(self, columns)

        return format_dict(agg_exprs(columns, count_uniques_agg, estimate))

    @add_attr(cols)
    def value_counts(columns):
        """
        Return the counts of uniques values
        :param columns:
        :return:
        """
        columns = parse_columns(self, columns)
        # .value(columns, 1)

        result = {}
        for col_name in columns:
            result.update(compress_dict(self.groupBy(col_name).count().orderBy('count').to_dict(), col_name))
        return result

    @add_attr(cols)
    def unique(columns):
        """
        Return uniques values from a columns
        :param columns:
        :return:
        """
        columns = parse_columns(self, columns)

        # .value(columns, "1")

        result = {}
        for col_name in columns:
            result.update(compress_list(self.select(col_name).distinct().to_dict()))
        return result

    @add_attr(cols)
    def nunique(*args, **kwargs):
        """
        Just a pandas compatible shortcut for count uniques
        :param args:
        :param kwargs:
        :return:
        """
        return count_uniques(*args, **kwargs)

    @add_attr(cols)
    def select_by_dtypes(data_type):
        """
        This function returns one or multiple dataFrame columns which match with the data type provided.
        :param data_type: Datatype column to look at
        :return:
        """

        columns = parse_columns(self, '*', is_regex=None, filter_by_column_dtypes=data_type)

        return self.select(columns)

    # Operations between columns
    @add_attr(cols)
    def _math(columns, operator, new_column):
        """
        Helper to process arithmetic operation between columns. If a
        :param columns: Columns to be used to make the calculation
        :param operator: A lambda function
        :return:
        """

        columns = parse_columns(self, columns, filter_by_column_dtypes=PYSPARK_NUMERIC_TYPES)
        check_column_numbers(columns, "*")

        df = self
        for col_name in columns:
            df = df.cols.cast(col_name, "float")

        if len(columns) < 2:
            raise Exception("Error: 2 or more columns needed")

        columns = list(map(lambda x: F.col(x), columns))
        expr = reduce(operator, columns)

        return df.withColumn(new_column, expr)

    @add_attr(cols)
    def add(columns, col_name="sum"):
        """
        Add two or more columns
        :param columns: '*', list of columns names or a single column name
        :param col_name:
        :return:
        """

        return _math(columns, lambda x, y: x + y, col_name)

    @add_attr(cols)
    def sub(columns, col_name="sub"):
        """
        Subs two or more columns
        :param columns: '*', list of columns names or a single column name
        :param col_name:
        :return:
        """
        return _math(columns, lambda x, y: x - y, col_name)

    @add_attr(cols)
    def mul(columns, col_name="mul"):
        """
        Multiply two or more columns
        :param columns: '*', list of columns names or a single column name
        :param col_name:
        :return:
        """
        return _math(columns, lambda x, y: x * y, col_name)

    @add_attr(cols)
    def div(columns, col_name="div"):
        """
        Divide two or more columns
        :param columns: '*', list of columns names or a single column name
        :param col_name:
        :return:
        """
        return _math(columns, lambda x, y: x / y, col_name)

    # Stats
    @add_attr(cols)
    def z_score(input_cols, output_cols=None):
        """
        Return the column z score
        :param input_cols: '*', list of columns names or a single column name
        :param output_cols:
        :return:
        """

        def _z_score(col_name, attr):
            mean_value = self.cols.mean(col_name)
            stdev_value = self.cols.std(col_name)
            return F.abs((F.col(col_name) - mean_value) / stdev_value)

        df = self

        input_cols = parse_columns(df, input_cols)

        # Hint the user if the column has not the correct data type
        for input_col in input_cols:
            if not is_column_a(self, input_col, PYSPARK_NUMERIC_TYPES):
                print(
                    "'{}' column is not numeric, z-score can not be calculated. Cast column to numeric using df.cols.cast()".format(
                        input_col))

        return apply(input_cols, func=_z_score, filter_col_by_dtypes=PYSPARK_NUMERIC_TYPES, output_cols=output_cols,
                     meta=Actions.Z_SCORE.value)

    @add_attr(cols)
    def min_max_scaler(input_cols, output_cols=None):
        """
        Return the column min max scaler result
        :param input_cols: '*', list of columns names or a single column name
        :param output_cols:
        :return:
        """

        def _min_max(col_name, attr):
            range_value = self.cols.range(col_name)
            min_value = range_value[col_name]["range"]["min"]
            max_value = range_value[col_name]["range"]["max"]
            return F.abs((F.col(col_name) - min_value) / max_value - min_value)

        return apply(input_cols, func=_min_max, filter_col_by_dtypes=PYSPARK_NUMERIC_TYPES, output_cols=output_cols,
                     meta=Actions.MIN_MAX_SCALER.value)

    @add_attr(cols)
    def max_abs_scaler(input_cols, output_cols=None):
        """
        Return the max abs scaler result
        :param input_cols: '*', list of columns names or a single column name
        :param output_cols:
        :return:
        """

        def _result(col_name, attr):
            def max_abs(col_name):
                return F.max(F.abs(F.col(col_name)))

            max_abs_result = format_dict(agg_exprs(input_cols, max_abs))

            return (F.col(col_name)) / max_abs_result

        return apply(input_cols, func=_result, filter_col_by_dtypes=PYSPARK_NUMERIC_TYPES, output_cols=output_cols,
                     meta=Actions.MAX_ABS_SCALER.value)

    @add_attr(cols)
    def iqr(columns, more=None, relative_error=RELATIVE_ERROR):
        """
        Return the column Inter Quartile Range
        :param columns:
        :param more: Return info about q1 and q3
        :param relative_error:
        :return:
        """
        iqr_result = {}
        columns = parse_columns(self, columns, filter_by_column_dtypes=PYSPARK_NUMERIC_TYPES)
        check_column_numbers(columns, "*")

        quartile = self.cols.percentile(columns, [0.25, 0.5, 0.75], relative_error=relative_error)
        for col_name in columns:

            q1 = quartile[col_name]["percentile"]["0.25"]
            q2 = quartile[col_name]["percentile"]["0.5"]
            q3 = quartile[col_name]["percentile"]["0.75"]

            iqr_value = q3 - q1
            if more:
                result = {"iqr": iqr_value, "q1": q1, "q2": q2, "q3": q3}
            else:
                result = iqr_value
            iqr_result[col_name] = result

        return format_dict(iqr_result)

    @add_attr(cols)
    # TODO: Maybe we should create nest_to_vector and nest_array, nest_to_string
    def nest(input_cols, shape="string", separator="", output_col=None):
        """
        Concat multiple columns to one with the format specified
        :param input_cols: columns to be nested
        :param separator: char to be used as separator at the concat time
        :param shape: final data type, 'array', 'string' or 'vector'
        :param output_col:
        :return: Spark DataFrame
        """
        df = self
        output_col = parse_columns(df, output_col, accepts_missing_cols=True)
        check_column_numbers(output_col, 1)

        if has_(input_cols, F.Column):
            # Transform non Column data to lit
            input_cols = [F.lit(col) if not is_(col, F.col) else col for col in input_cols]
        else:
            input_cols = parse_columns(self, input_cols)

        if shape is "vector":
            input_cols = parse_columns(self, input_cols, filter_by_column_dtypes=PYSPARK_NUMERIC_TYPES)
            output_col = one_list_to_val(output_col)
            vector_assembler = VectorAssembler(
                inputCols=input_cols,
                outputCol=output_col)

            df = vector_assembler.transform(df)

            df = df.preserve_meta(self, Actions.NEST.value, output_col)

        elif shape is "array":
            # Arrays needs all the elements with the same data type. We try to cast to type
            df = df.cols.cast("*", "str")
            df = df.cols.apply(input_cols, F.array(*input_cols), output_cols=output_col,
                               skip_output_cols_processing=True, meta=Actions.NEST.value)

        elif shape is "string":
            df = df.cols.apply(input_cols, F.concat_ws(separator, *input_cols), output_cols=output_col,
                               skip_output_cols_processing=True, meta=Actions.NEST.value)
        else:
            RaiseIt.value_error(shape, ["vector", "array", "string"])

        df = df.preserve_meta(self, Actions.NEST.value, output_col)
        return df

    @add_attr(cols)
    def unnest(input_cols, separator=None, splits=None, index=None, output_cols=None) -> DataFrame:
        """
        Split an array or string in different columns
        :param input_cols: Columns to be un-nested
        :param output_cols: Resulted on or multiple columns  after the unnest operation [(output_col_1_1,output_col_1_2), (output_col_2_1, output_col_2]
        :param separator: char or regex
        :param splits: Number of rows to un-nested. Because we can not know beforehand the number of splits
        :param index: Return a specific index per columns. [{1,2},()]
        """

        # If a number of split was not defined try to infer the length with the first element
        infer_splits = None
        if splits is None:
            infer_splits = True

        # Special case. A dot must be escaped
        if separator == ".":
            separator = "\\."
        df = self

        input_cols = parse_columns(self, input_cols)
        output_cols = get_output_cols(input_cols, output_cols)
        final_columns = None

        def _final_columns(_index, _splits, _output_col):

            if _index is None:
                actual_index = builtins.range(0, _splits)
            else:
                _index = val_to_list(_index)

                if is_list_of_tuples(_index):
                    _index = [(i - 1, j - 1) for i, j in _index]
                elif is_list(_index):
                    _index = [i - 1 for i in _index]

                actual_index = _index

            # Create final output columns
            if is_tuple(_output_col):
                columns = zip(actual_index, _output_col)
            else:
                columns = [(i, _output_col + "_" + str(i)) for i in actual_index]
            return columns

        for idx, (input_col, output_col) in enumerate(zip(input_cols, output_cols)):

            # If numeric convert and parse as string.
            if is_column_a(df, input_col, PYSPARK_NUMERIC_TYPES):
                df = df.cols.cast(input_col, "str")

            # Parse depending of data types
            if is_column_a(df, input_col, StructType):
                # Unnest a data Struct
                df = df.select(output_col + ".*")

            # Array
            elif is_column_a(df, input_col, ArrayType):
                # Try to infer the array length using the first row
                if infer_splits is True:
                    splits = format_dict(df.agg(F.max(F.size(input_col))).to_dict())

                expr = F.col(input_col)
                final_columns = _final_columns(index, splits, output_col)
                for i, col_name in final_columns:
                    df = df.withColumn(col_name, expr.getItem(i))

            # String
            elif is_column_a(df, input_col, StringType):
                if separator is None:
                    RaiseIt.value_error(separator, "regular expression")

                # Try to infer the array length using the first row
                if infer_splits is True:
                    splits = format_dict(df.agg(F.max(F.size(F.split(F.col(input_col), separator)))).to_dict())

                expr = F.split(F.col(input_col), separator)
                final_columns = _final_columns(index, splits, output_col)
                for i, col_name in final_columns:
                    df = df.withColumn(col_name, expr.getItem(i))

            # Vector
            # TODO: Maybe we could implement Pandas UDF for better control columns output
            elif is_column_a(df, input_col, VectorUDT):

                def _unnest(row):
                    _dict = row.asDict()

                    # Get the column we want to unnest
                    _list = _dict[input_col]

                    # Ensure that float are python floats and not np floats
                    if index is None:
                        _list = [float(x) for x in _list]
                    else:
                        _list = [float(_list[1])]

                    return row + tuple(_list)

                df = df.rdd.map(_unnest).toDF(df.columns)

            else:
                RaiseIt.type_error(input_col, ["string", "struct", "array", "vector"])
            df = df.preserve_meta(self, Actions.UNNEST.value, [v for k, v in final_columns])
        return df

    @add_attr(cols)
    def cell(column):
        """
        Get the value for the first cell from a column in a data frame
        :param column: Column to be processed
        :return:
        """
        return self.cols.select(column).first()[0]

    @add_attr(cols)
    def scatter(columns, buckets=10):
        """
        Return scatter plot data in json format
        :param columns:
        :param buckets: number of buckets
        :return:
        """

        if len(columns) != 2:
            RaiseIt.length_error(columns, "2")

        columns = parse_columns(self, columns)
        df = self

        values = df.cols.range(columns)

        for col_name in columns:
            # Create splits
            splits = create_buckets(values[col_name]["range"]["min"], values[col_name]["range"]["max"], buckets)

            # Create buckets in the dataFrame
            df = df.cols.bucketizer(col_name, splits=splits, output_cols=name_col(col_name, "bucketizer"))

        columns_bucket = [name_col(col_name, "bucketizer") for col_name in columns]

        size_name = "count"
        result = df.groupby(columns_bucket).agg(F.count('*').alias(size_name),
                                                F.round((F.max(columns[0]) + F.min(columns[0])) / 2).alias(columns[0]),
                                                F.round((F.max(columns[1]) + F.min(columns[1])) / 2).alias(columns[1]),
                                                ).rows.sort(columns).toPandas()
        x = result[columns[0]].tolist()
        y = result[columns[1]].tolist()
        s = result[size_name].tolist()

        return {"x": {"name": columns[0], "data": x}, "y": {"name": columns[1], "data": y}, "s": s}

    @add_attr(cols, log_time=True)
    def hist(columns, buckets=20):

        result = agg_exprs(columns, hist_agg, self, buckets)
        # TODO: for some reason casting to int in the exprs do not work. Casting Here. A Spark bug?
        # Example
        # Column < b'array(map(count, CAST(sum(CASE WHEN ((rank >= 7) AND (rank < 7.75)) THEN 1 ELSE 0 END) AS INT),
        # lower, 7, upper, 7.75) AS `hist_agg_rank_0`, map(count, CAST(sum(CASE WHEN ((rank >= 7.75) AND (rank < 8.5))
        # THEN 1 ELSE 0 END) AS INT), lower, 7.75, upper, 8.5) AS `hist_agg_rank_1`, map(count,
        # CAST(sum(CASE WHEN ((rank >= 8.5) AND (rank < 9.25)) THEN 1 ELSE 0 END) AS INT), lower, 8.5, upper, 9.25)
        # AS `hist_agg_rank_2`, map(count, CAST(sum(CASE WHEN ((rank >= 9.25) AND (rank < 10))
        # THEN 1 ELSE 0 END) AS INT), lower, 9.25, upper, 10) AS `hist_agg_rank_3`) AS `histrank`' >

        return result

        # TODO: In tests this code run faster than using agg_exprs when run over all the columns.
        #  Not when running over columns individually
        # columns = parse_columns(self, columns)
        # df = self
        # for col_name in columns:
        #     print(agg_exprs(hist_agg, col_name, self, buckets))
        #     # print(df.agg(hist_agg(col_name, self, buckets)))
        # return result

    @add_attr(cols)
    def frequency_by_group(columns, n=10, percentage=False, total_rows=None):
        """
        Output values frequency in json format
        :param columns: Columns to be processed
        :param n: Number of buckets
        :param percentage:
        :param total_rows:
        :return:
        """
        columns = parse_columns(self, columns)
        df = self

        result = {}
        for col_name in columns:
            result[col_name] = df.groupBy(col_name).count().rows.sort([("count", "desc")]).limit(n).cols.rename(
                col_name, "value").rows.sort([("value", "desc")]).to_dict()
            logger.print(col_name)
            if percentage:
                if total_rows is None:
                    RaiseIt.type_error(total_rows, "int")

                for c in result[col_name]:
                    c["percentage"] = round((c["count"] * 100 / total_rows), 4)

        return result

    @add_attr(cols)
    def count_mismatch(columns_mismatch: dict = None):
        """
        Return the num of mismatches
        :param columns_mismatch: dict of {col_name:datatype}
        :return: 
        """
        df = self
        columns = list(columns_mismatch.keys())
        columns = parse_columns(df, columns)

        _count = (df.select(columns).rdd
                  .flatMap(lambda x: x.asDict().items())
                  .map(lambda x: Infer.mismatch(x, columns_mismatch))
                  .reduceByKey(lambda a, b: (a + b)))

        result = {}
        for c in _count.collect():
            result.setdefault(c[0][0], {})[c[0][1]] = c[1]

        # Be sure that we have the some default keys keys
        for col_results in result.values():
            col_results.setdefault("mismatch", 0)
            col_results.setdefault("null", 0)
            col_results.setdefault("missing", 0)

        return result

    @add_attr(cols)
    def count_by_dtypes(columns, infer=False, str_funcs=None, int_funcs=None):
        """
        Use rdd to count the inferred data type in a row
        :param columns: Columns to be processed
        :param str_funcs: list of tuples for create a custom string parsers
        :param int_funcs: list of tuples for create a custom int parsers
        :param infer: Infer data type
        :return:
        """

        df = self

        columns = parse_columns(df, columns)
        columns_dtypes = df.cols.dtypes()

        df_count = (df.select(columns).rdd
                    .flatMap(lambda x: x.asDict().items())
                    .map(lambda x: Infer.parse(x, infer, columns_dtypes, str_funcs, int_funcs))
                    .reduceByKey(lambda a, b: (a + b)))

        result = {}
        for c in df_count.collect():
            result.setdefault(c[0][0], {})[c[0][1]] = c[1]

        # Process mismatch
        for col_name, result_dtypes in result.items():
            for result_dtype, count in result_dtypes.items():
                if is_tuple(count):
                    result[col_name][result_dtype] = count[0]

        if infer is True:
            result = fill_missing_var_types(result, columns_dtypes)
        else:
            result = parse_profiler_dtypes(result)
        return result

    @add_attr(cols)
    def frequency(columns, n=10, percentage=False, total_rows=None):
        """
        Output values frequency in json format
        :param columns: Columns to be processed
        :param n: n top elements
        :param percentage: Get
        :param total_rows: Total rows to calculate the percentage. If not provided is calculated
        :return:
        """
        columns = parse_columns(self, columns)

        if columns is not None:
            df = self

            # Convert non compatible columns(non str, int or float) to string
            non_compatible_columns = df.cols.names(columns, ["array", "vector", "byte", "date", "binary"])

            if non_compatible_columns is not None:
                df = df.cols.cast(non_compatible_columns, "str")

            freq = (df.select(columns).rdd
                    .flatMap(lambda x: x.asDict().items())
                    .map(lambda x: (x, 1))
                    .reduceByKey(lambda a, b: a + b)
                    .groupBy(lambda x: x[0][0])
                    .flatMap(lambda g: nlargest(n, g[1], key=lambda x: x[1]))
                    .repartition(1)  # Because here we have small data move all to 1 partition
                    .map(lambda x: (x[0][0], (x[0][1], x[1])))
                    .groupByKey().map(lambda x: (x[0], list(x[1]))))

            result = {}
            for f in freq.collect():
                result[f[0]] = [{"value": kv[0], "count": kv[1]} for kv in f[1]]

            if percentage:
                if total_rows is None:
                    total_rows = df.count()

                    RaiseIt.type_error(total_rows, ["int"])
                for col_name in columns:
                    for c in result[col_name]:
                        c["percentage"] = round((c["count"] * 100 / total_rows), 2)

            return result

    @add_attr(cols)
    def correlation(input_cols, method="pearson", output="json"):
        """
        Calculate the correlation between columns. It will try to cast a column to float where necessary and impute
        missing values
        :param input_cols: Columns to be processed
        :param method: Method used to calculate the correlation
        :param output: array or json
        :return:
        """

        df = self

        # Values in columns can not be null. Warn user
        input_cols = parse_columns(self, input_cols, filter_by_column_dtypes=PYSPARK_NUMERIC_TYPES)

        # Input is not a vector transform to a vector
        output_col = name_col(input_cols, "correlation")
        check_column_numbers(input_cols, ">1")

        for col_name in input_cols:
            df = df.cols.cast(col_name, "float")
            logger.print("Casting {col_name} to float...".format(col_name=col_name))

        df = df.cols.nest(input_cols, "vector", output_col=output_col)

        # Correlation can not handle null values. Check if exist ans warn the user.
        cols = {x: y for x, y in df.cols.count_na(input_cols).items() if y != 0}

        if cols:
            message = "Correlation can not handle nulls. " + " and ".join(
                {str(x) + " has " + str(y) + " null(s)" for x, y in cols.items()})
            RaiseIt.message(ValueError, message)

        corr = Correlation.corr(df, output_col, method).head()[0].toArray()
        result = None
        if output is "array":
            result = corr

        elif output is "json":
            # Parse result to json
            col_pair = []
            for col_name in input_cols:
                for col_name_2 in input_cols:
                    col_pair.append({"between": col_name, "an": col_name_2})

            # flat array
            values = corr.flatten('F').tolist()

            result = []
            for n, v in zip(col_pair, values):
                # Remove correlation between the same column
                if n["between"] is not n["an"]:
                    n["value"] = v
                    result.append(n)

            result = sorted(result, key=lambda k: k['value'], reverse=True)

        return {"cols": input_cols, "data": result}

    @add_attr(cols)
    def boxplot(columns):
        """
        Output values frequency in json format
        :param columns: Columns to be processed
        :return:
        """
        columns = parse_columns(self, columns)
        df = self

        for col_name in columns:
            iqr = df.cols.iqr(col_name, more=True)
            lb = iqr["q1"] - (iqr["iqr"] * 1.5)
            ub = iqr["q3"] + (iqr["iqr"] * 1.5)

            _mean = df.cols.mean(columns)

            query = ((F.col(col_name) < lb) | (F.col(col_name) > ub))
            fliers = collect_as_list(df.rows.select(query).cols.select(col_name).limit(1000))
            stats = [{'mean': _mean, 'med': iqr["q2"], 'q1': iqr["q1"], 'q3': iqr["q3"], 'whislo': lb, 'whishi': ub,
                      'fliers': fliers, 'label': one_list_to_val(col_name)}]

            return stats

    @add_attr(cols)
    def schema_dtype(columns="*"):
        """
        Return the column(s) data type as Type
        :param columns: Columns to be processed
        :return:
        """
        columns = parse_columns(self, columns)
        return format_dict([self.schema[col_name].dataType for col_name in columns])

    @add_attr(cols)
    def dtypes(columns="*"):
        """
        Return the column(s) data type as string
        :param columns: Columns to be processed
        :return:
        """

        columns = parse_columns(self, columns)
        data_types = tuple_to_dict(self.dtypes)
        return {col_name: data_types[col_name] for col_name in columns}

    @add_attr(cols)
    def names(col_names="*", filter_by_column_dtypes=None, invert=False):
        """
        Get columns names
        :param col_names: Columns names to be processed '*' for all or a list of column names
        :param filter_by_column_dtypes: Data type used to select the columns
        :param invert: Invert the columns selection
        :return:
        """
        columns = parse_columns(self, col_names, filter_by_column_dtypes=filter_by_column_dtypes, invert=invert)
        return columns

    @add_attr(cols)
    def qcut(columns, num_buckets, handle_invalid="skip"):
        """
        Bin columns into n buckets. Quantile Discretizer
        :param columns: Input columns to processed
        :param num_buckets: Number of buckets in which the column will be divided
        :param handle_invalid:
        :return:
        """
        df = self
        columns = parse_columns(self, columns, filter_by_column_dtypes=PYSPARK_NUMERIC_TYPES)
        check_column_numbers(columns, "*")

        for col_name in columns:
            discretizer = QuantileDiscretizer(numBuckets=num_buckets, inputCol=col_name,
                                              outputCol=name_col(col_name, "qcut"),
                                              handleInvalid=handle_invalid)
            df = discretizer.fit(df).transform(df)
        return df

    @add_attr(cols)
    def clip(columns, lower_bound, upper_bound):
        """
        Trim values at input thresholds
        :param columns: Columns to be trimmed
        :param lower_bound: Lower value bound
        :param upper_bound: Upper value bound
        :return:
        """

        columns = parse_columns(self, columns, filter_by_column_dtypes=PYSPARK_NUMERIC_TYPES)
        check_column_numbers(columns, "*")

        def _clip(_col_name, args):
            _lower = args[0]
            _upper = args[1]
            return (F.when(F.col(_col_name) <= _lower, _lower)
                    .when(F.col(_col_name) >= _upper, _upper)).otherwise(F.col(col_name))

        df = self
        for col_name in columns:
            df = df.cols.apply_expr(col_name, _clip, [lower_bound, upper_bound])
        return df

    @add_attr(cols)
    def values_to_cols(input_cols):
        """
        Create as many columns as values in an specific column. Fill with '1' the column that match the column value.
        :param input_cols:
        :return:
        """
        before = self
        keys = before.cols.names()

        def join_all(_dfs):
            # _dfs[0].table()
            if len(_dfs) > 1:
                # print(_keys)
                return _dfs[0].join(join_all(_dfs[1:]), on=keys, how='inner')
            else:
                return _dfs[0]

        combined = []

        pivot_cols = parse_columns(before, input_cols)

        for pivot_col in pivot_cols:
            pivotDF = before.groupBy(keys).pivot(pivot_col).count()

            # pivotDF.table()
            new_names = ["{0}_{1}".format(pivot_col, c) for c in pivotDF.columns[len(keys):]]
            names = pivotDF.columns[:len(keys)] + new_names

            # names = before.cols.names(keys, invert=True)
            # print(names)
            pivotDF = pivotDF.preserve_meta(self)
            df = pivotDF.toDF(*names).cols.fill_na(new_names, 0)
            df = df.preserve_meta(self, Actions.VALUES_TO_COLS.value, new_names)

            combined.append(df)

        df = join_all(combined)

        return df

    @add_attr(cols)
    def string_to_index(input_cols=None, output_cols=None, columns=None):
        """
        Encodes a string column of labels to a column of label indices
        :param input_cols:
        :param output_cols:
        :param columns:
        :return:
        """
        df = self

        df = ml_string_to_index(df, input_cols, output_cols, columns)

        return df

    @add_attr(cols)
    def index_to_string(input_cols=None, output_cols=None, columns=None):
        """
        Encodes a string column of labels to a column of label indices
        :param input_cols:
        :param output_cols:
        :param columns:
        :return:
        """
        df = self

        df = ml_index_to_string(df, input_cols, output_cols, columns)

        return df

    @add_attr(cols)
    def bucketizer(input_cols, splits, output_cols=None):
        """
        Bucketize multiples columns at the same time.
        :param input_cols:
        :param splits: Dict of splits or ints. You can use create_buckets() to make it
        :param output_cols:
        :return:
        """
        df = self

        if is_int(splits):
            min_max = df.cols.range(input_cols)[input_cols]["range"]
            splits = create_buckets(min_max["min"], min_max["max"], splits)

        def _bucketizer(col_name, args):
            """
            Create a column expression that create buckets in a range of values
            :param col_name: Column to be processed
            :return:
            """

            buckets = args
            expr = []

            for i, b in enumerate(buckets):
                if i == 0:
                    expr = when((F.col(col_name) >= b["lower"]) & (F.col(col_name) <= b["upper"]), b["bucket"])
                else:
                    expr = expr.when((F.col(col_name) >= b["lower"]) & (F.col(col_name) <= b["upper"]),
                                     b["bucket"])

            return expr

        df = df.cols.apply(input_cols, func=_bucketizer, args=splits, output_cols=output_cols)
        return df

    @add_attr(cols)
    def set_meta(col_name, spec=None, value=None, missing=dict):
        """
        Set meta data in a column
        :param col_name: Column from where to get the value
        :param spec: Path to the key to be modified
        :param value: dict value
        :param missing:
        :return:
        """
        if spec is not None:
            target = self.cols.get_meta(col_name)
            data = assign(target, spec, value, missing=missing)
        else:
            data = value
        return self.withColumn(col_name, F.col(col_name).alias(col_name, metadata=data))

    @add_attr(cols)
    def get_meta(col_name, spec=None):
        """
        Get meta data from a specific column
        :param col_name: Column in which to set the value
        :param spec: Path to the key to be modified
        :return:
        """

        col_name = parse_columns(self, col_name, accepts_missing_cols=False)
        data = ""
        meta_json = self._jdf.schema().json()
        fields = json.loads(meta_json)["fields"]

        for col_info in fields:
            if col_info["name"] == col_name:
                data = col_info["metadata"]
        if spec is not None:
            data = glom(data, spec, skip_exc=KeyError)

        if data == "":
            data = {}
        return data

    return cols


DataFrame.cols = property(cols)

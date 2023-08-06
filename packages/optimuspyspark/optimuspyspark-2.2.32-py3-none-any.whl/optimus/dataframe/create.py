import pandas as pd
from pyspark.sql.types import StringType, StructField, StructType

from optimus.infer import Infer, is_, is_tuple, is_list_of_tuples, is_one_element, parse_spark_class_dtypes
from optimus.spark import Spark


class Create:
    @staticmethod
    def data_frame(cols=None, rows=None, infer_schema=True, pdf=None):
        """
        Helper to create a Spark dataframe:
        :param cols: List of Tuple with name, data type and a flag to accept null
        :param rows: List of Tuples with the same number and types that cols
        :param infer_schema: Try to infer the schema data type.
        :param pdf: a pandas dataframe
        :return: Dataframe
        """
        if is_(pdf, pd.DataFrame):
            df = Spark.instance.spark.createDataFrame(pdf)
        else:

            specs = []
            # Process the rows
            if not is_list_of_tuples(rows):
                rows = [(i,) for i in rows]

            # Process the columns
            for c, r in zip(cols, rows[0]):
                # Get columns name

                if is_one_element(c):
                    col_name = c

                    if infer_schema is True:
                        var_type = Infer.to_spark(r)
                        # print(var_type)
                    else:
                        var_type = StringType()
                    nullable = True

                elif is_tuple(c):

                    # Get columns data type
                    col_name = c[0]
                    var_type = parse_spark_class_dtypes(c[1])

                    count = len(c)
                    if count == 2:
                        nullable = True
                    elif count == 3:
                        nullable = c[2]

                # If tuple has not the third param with put it to true to accepts Null in columns
                specs.append([col_name, var_type, nullable])

            struct_fields = list(map(lambda x: StructField(*x), specs))

            df = Spark.instance.spark.createDataFrame(rows, StructType(struct_fields))
            df = df.columns_meta(df.cols.names())
        return df

    df = data_frame

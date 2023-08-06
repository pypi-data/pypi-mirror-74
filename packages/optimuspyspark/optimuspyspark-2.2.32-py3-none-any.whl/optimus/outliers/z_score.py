from pyspark.sql import functions as F

from optimus.infer import is_numeric, is_dataframe
from optimus.helpers.columns import parse_columns, name_col
from optimus.helpers.converter import one_list_to_val
from optimus.outliers.abstract_outliers_threshold import AbstractOutlierThreshold


class ZScore(AbstractOutlierThreshold):
    """
    Handle outliers using z Score
    """

    def __init__(self, df, col_name, threshold):
        """

        :para df:
        :param col_name:
        :param threshold:
        """
        if not is_dataframe(df):
            raise TypeError("Spark Dataframe expected")

        if not is_numeric(threshold):
            raise TypeError("Numeric expected")

        self.df = df
        self.threshold = threshold
        self.col_name = one_list_to_val(parse_columns(df, col_name))
        self.tmp_col = name_col(col_name, "z_score")
        self.df_score = self.z_score()
        super().__init__(self.df_score, col_name, "z_score")

    def z_score(self):
        df = self.df
        col_name = self.col_name

        return df.cols.z_score(col_name, output_cols=self.tmp_col)

    def info(self):
        self.tmp_col = name_col(self.col_name, "z_score")

        df = self.z_score()
        max_z_score = df.rows.select(F.col(self.tmp_col) > self.threshold).cols.max(self.tmp_col)

        return {"count_outliers": self.count(), "count_non_outliers": self.non_outliers_count(),
                "max_z_score": max_z_score}

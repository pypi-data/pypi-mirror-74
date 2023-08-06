from pyspark.ml import feature, classification
from pyspark.ml.classification import RandomForestClassifier, DecisionTreeClassifier, GBTClassifier
from pyspark.sql import functions as F
from pysparkling import *
from pysparkling.ml import H2OAutoML, H2ODeepLearning, H2OXGBoost, H2OGBM

from optimus.infer import is_str, is_dataframe
from optimus.helpers.columns import parse_columns, name_col
from optimus.ml.contants import STRING_TO_INDEX
from optimus.ml.encoding import string_to_index, vector_assembler
from optimus.spark import Spark


class ML:
    @staticmethod
    def logistic_regression_text(df, input_col):
        """
        Runs a logistic regression for input (text) DataFrame.
        :param df: Pyspark dataframe to analyze
        :param input_col: Column to predict
        :return: DataFrame with logistic regression and prediction run.
        """

        if not is_dataframe(df):
            raise TypeError("Spark dataframe expected")

        pl = feature.Tokenizer().setInputCol(input_col) | feature.CountVectorizer()
        ml = pl | classification.LogisticRegression()
        ml_model = ml.fit(df)
        df_model = ml_model.transform(df)
        return df_model, ml_model

    @staticmethod
    def random_forest(df, columns, input_col, **kwargs):
        """
        Runs a random forest classifier for input DataFrame.
        :param df: Pyspark dataframe to analyze.
        :param columns: List of columns to select for prediction.
        :param input_col: Column to predict.
        :return: DataFrame with random forest and prediction run.
        """

        columns = parse_columns(df, columns)

        data = df.select(columns)
        feats = data.columns
        feats.remove(input_col)

        df = string_to_index(df, input_cols=input_col)
        df = vector_assembler(df, input_cols=feats, output_col="features")

        model = RandomForestClassifier(**kwargs)
        df.table()
        df = df.cols.rename(name_col(input_col, STRING_TO_INDEX), "label")

        rf_model = model.fit(df)
        df_model = rf_model.transform(df)
        return df_model, rf_model

    @staticmethod
    def decision_tree(df, columns, input_col, **kwargs):
        """
        Runs a decision tree classifier for input DataFrame.
        :param df: Pyspark dataframe to analyze.
        :param columns: List of columns to select for prediction.
        :param input_col: Column to predict.
        :return: DataFrame with decision tree and prediction run.
        """

        if not is_dataframe(df):
            raise TypeError("Spark dataframe expected")

        columns = parse_columns(df, columns)

        if not is_str(input_col):
            raise TypeError("Error, input column must be a string")

        data = df.select(columns)
        feats = data.columns
        feats.remove(input_col)

        df = string_to_index(df, input_cols=input_col)
        df = vector_assembler(df, input_cols=feats, output_col="features")

        model = DecisionTreeClassifier(**kwargs)

        df = df.cols.rename(name_col(input_col, STRING_TO_INDEX), "label")

        dt_model = model.fit(df)
        df_model = dt_model.transform(df)
        return df_model, dt_model

    @staticmethod
    def gbt(df, columns, input_col, **kwargs):
        """
        Runs a gradient boosting tree classifier for input DataFrame.
        :param df: Pyspark dataframe to analyze.
        :param columns: List of columns to select for prediction.
        :param input_col: Column to predict.
        :return: DataFrame with gradient boosting tree and prediction run.
        """

        if not is_dataframe(df):
            raise TypeError("Spark dataframe expected")

        columns = parse_columns(df, columns)

        if not is_str(input_col):
            raise TypeError("Error, input column must be a string")

        data = df.select(columns)
        feats = data.columns
        feats.remove(input_col)

        df = string_to_index(df, input_cols=input_col)
        df = vector_assembler(df, input_cols=feats, output_col="features")

        model = GBTClassifier(**kwargs)

        df = df.cols.rename(name_col(input_col, STRING_TO_INDEX), "label")

        gbt_model = model.fit(df)
        df_model = gbt_model.transform(df)
        return df_model, gbt_model

    @staticmethod
    def h2o_automl(df, label, columns, **kwargs):

        H2OContext.getOrCreate(Spark.instance.spark)

        df_sti = string_to_index(df, input_cols=label)
        df_va = vector_assembler(df_sti, input_cols=columns)
        automl = H2OAutoML(convertUnknownCategoricalLevelsToNa=True,
                           maxRuntimeSecs=60,  # 1 minutes
                           seed=1,
                           maxModels=3,
                           labelCol=name_col(label, STRING_TO_INDEX),
                           **kwargs)

        model = automl.fit(df_va)
        df_raw = model.transform(df_va)

        df_pred = df_raw.withColumn("prediction", F.when(df_raw.prediction_output["value"] > 0.5, 1.0).otherwise(0.0))

        return df_pred, model

    @staticmethod
    def h2o_deeplearning(df, label, columns, **kwargs):

        H2OContext.getOrCreate(Spark.instance.spark)

        df_sti = string_to_index(df, input_cols=label)
        df_va = vector_assembler(df_sti, input_cols=columns)
        h2o_deeplearning = H2ODeepLearning(epochs=10,
                                           seed=1,
                                           l1=0.001,
                                           l2=0.0,
                                           hidden=[200, 200],
                                           featuresCols=columns,
                                           labelCol=label,
                                           **kwargs)
        model = h2o_deeplearning.fit(df_va)
        df_raw = model.transform(df_va)

        df_pred = df_raw.withColumn("prediction", F.when(df_raw.prediction_output["p1"] > 0.5, 1.0).otherwise(0.0))

        return df_pred, model

    @staticmethod
    def h2o_xgboost(df, label, columns, **kwargs):

        H2OContext.getOrCreate(Spark.instance.spark)

        df_sti = string_to_index(df, input_cols=label)
        df_va = vector_assembler(df_sti, input_cols=columns)
        h2o_xgboost = H2OXGBoost(convertUnknownCategoricalLevelsToNa=True,
                                 featuresCols=columns,
                                 labelCol=label,
                                 **kwargs)
        model = h2o_xgboost.fit(df_va)
        df_raw = model.transform(df_va)

        df_pred = df_raw.withColumn("prediction", F.when(df_raw.prediction_output["p1"] > 0.5, 1.0).otherwise(0.0))

        return df_pred, model

    @staticmethod
    def h2o_gbm(df, label, columns, **kwargs):

        H2OContext.getOrCreate(Spark.instance.spark)

        df_sti = string_to_index(df, input_cols=label)
        df_va = vector_assembler(df_sti, input_cols=columns)
        h2o_gbm = H2OGBM(ratio=0.8,
                         seed=1,
                         featuresCols=columns,
                         labelCol=label,
                         **kwargs)
        model = h2o_gbm.fit(df_va)
        df_raw = model.transform(df_va)

        df_pred = df_raw.withColumn("prediction", F.when(df_raw.prediction_output["p1"] > 0.5, 1.0).otherwise(0.0))

        return df_pred, model

from optimus.helpers.logger import logger

# Python to PySpark reference
#
# type(None): NullType,
# bool: BooleanType,
# int: LongType,
# float: DoubleType,
# str: StringType,
# bytearray: BinaryType,
# decimal.Decimal: DecimalType,
# datetime.date: DateType,
# datetime.datetime: TimestampType,
# datetime.time: TimestampType,


# Profiler

from enum import Enum


class Actions(Enum):
    """
    Actions that modify a columns.
    """
    LOWER = "lower"
    UPPER = "upper"
    TRIM = "trim"
    REVERSE = "reverse"
    REMOVE_ACCENTS = "remove"
    REMOVE_SPECIAL_CHARS = "remove"
    REMOVE_WHITE_SPACES = "remove"
    REPLACE = "replace"
    REPLACE_REGEX = "replace"
    FILL_NA = "fill_na"
    CAST = "cast"
    IS_NA = "is_na"
    Z_SCORE = "z_score"
    NEST = "nest"
    UNNEST = "unnest"
    VALUES_TO_COLS = "values_to_cols"
    SET = "set"
    STRING_TO_INDEX = "string_to_index"
    INDEX_TO_STRING = "index_to_string"
    MIN_MAX_SCALER = "min_max_scaler"
    MAX_ABS_SCALER = "max_abs_scaler"
    # ROWS
    SELECT_ROW = "select_row"
    DROP_ROW = "drop_row"
    BETWEEN_ROW = "between_drop"
    SORT_ROW = "sort_row"

    @staticmethod
    def list():
        return list(map(lambda c: c.value, Actions))


class ProfilerDataTypes(Enum):
    INT = "int"
    DECIMAL = "decimal"
    TRIM = "string"
    BOOLEAN = "boolean"
    DATE = "date"
    ARRAY = "array"
    OBJECT = "object"
    GENDER = "gender"
    IP = "ip"
    URL = "url"
    EMAIL = "email"
    CREDIT_CARD_NUMBER = "credit_card_number"
    ZIP_CODE = "zip_code"
    NULL = "null"
    MISSING = "missing"


# Strings and Function Messages
JUST_CHECKING = "Just check that Spark and all necessary environments vars are present..."
STARTING_SPARK = "Starting or getting SparkSession and SparkContext..."
STARTING_OPTIMUS = "Transform and Roll out..."

SUCCESS = "Optimus successfully imported. Have fun :)."

CONFIDENCE_LEVEL_CONSTANT = [50, .67], [68, .99], [90, 1.64], [95, 1.96], [99, 2.57]


def print_check_point_config(filesystem):
    logger.print(
        "Setting checkpoint folder %s. If you are in a cluster initialize Optimus with master='your_ip' as param",
        filesystem)


SPARK_VERSION = "2.4.1"
HADOOP_VERSION = "2.7"

SPARK_FILE = "spark-{SPARK_VERSION}-bin-hadoop{HADOOP_VERSION}.tgz".format(SPARK_VERSION=SPARK_VERSION,
                                                                           HADOOP_VERSION=HADOOP_VERSION)
SPARK_URL = "https://archive.apache.org/dist/spark/spark-{SPARK_VERSION}//{SPARK_FILE}".format(
    SPARK_VERSION=SPARK_VERSION, SPARK_FILE=SPARK_FILE)

# For Google Colab
SPARK_PATH_COLAB = "/content/spark-{SPARK_VERSION}-bin-hadoop{HADOOP_VERSION}".format(SPARK_VERSION=SPARK_VERSION,
                                                                                      HADOOP_VERSION=HADOOP_VERSION)
JAVA_PATH_COLAB = "/usr/lib/jvm/java-8-openjdk-amd64"
RELATIVE_ERROR = 10000

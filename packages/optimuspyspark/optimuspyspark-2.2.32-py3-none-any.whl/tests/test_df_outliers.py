from pyspark.sql.types import *
from optimus import Optimus
from optimus.helpers.json import json_enconding
from optimus.helpers.functions import deep_sort
import unittest
from pyspark.ml.linalg import Vectors, VectorUDT, DenseVector
import numpy as np
nan = np.nan
import datetime
from pyspark.sql import functions as F
op = Optimus(master='local')
source_df=op.create.df([('names', StringType(), True),('height(ft)', ShortType(), True),('function', StringType(), True),('rank', ByteType(), True),('age', IntegerType(), True),('weight(t)', FloatType(), True),('japanese name', ArrayType(StringType(),True), True),('last position seen', StringType(), True),('date arrival', StringType(), True),('last date seen', StringType(), True),('attributes', ArrayType(FloatType(),True), True),('Date Type', DateType(), True),('timestamp', TimestampType(), True),('Cybertronian', BooleanType(), True),('function(binary)', BinaryType(), True),('NullType', NullType(), True)], [("Optim'us", -28, 'Leader', 10, 5000000, 4.300000190734863, ['Inochi', 'Convoy'], '19.442735,-99.201111', '1980/04/10', '2016/09/10', [8.53439998626709, 4300.0], datetime.date(2016, 9, 10), datetime.datetime(2014, 6, 24, 0, 0), True, bytearray(b'Leader'), None), ('bumbl#ebéé  ', 17, 'Espionage', 7, 5000000, 2.0, ['Bumble', 'Goldback'], '10.642707,-71.612534', '1980/04/10', '2015/08/10', [5.334000110626221, 2000.0], datetime.date(2015, 8, 10), datetime.datetime(2014, 6, 24, 0, 0), True, bytearray(b'Espionage'), None), ('ironhide&', 26, 'Security', 7, 5000000, 4.0, ['Roadbuster'], '37.789563,-122.400356', '1980/04/10', '2014/07/10', [7.924799919128418, 4000.0], datetime.date(2014, 6, 24), datetime.datetime(2014, 6, 24, 0, 0), True, bytearray(b'Security'), None), ('Jazz', 13, 'First Lieutenant', 8, 5000000, 1.7999999523162842, ['Meister'], '33.670666,-117.841553', '1980/04/10', '2013/06/10', [3.962399959564209, 1800.0], datetime.date(2013, 6, 24), datetime.datetime(2014, 6, 24, 0, 0), True, bytearray(b'First Lieutenant'), None), ('Megatron', None, 'None', 10, 5000000, 5.699999809265137, ['Megatron'], None, '1980/04/10', '2012/05/10', [None, 5700.0], datetime.date(2012, 5, 10), datetime.datetime(2014, 6, 24, 0, 0), True, bytearray(b'None'), None), ('Metroplex_)^$', 300, 'Battle Station', 8, 5000000, None, ['Metroflex'], None, '1980/04/10', '2011/04/10', [91.44000244140625, None], datetime.date(2011, 4, 10), datetime.datetime(2014, 6, 24, 0, 0), True, bytearray(b'Battle Station'), None), (None, None, None, None, None, None, None, None, None, None, None, None, None, None, None, None)])
class Test_df_outliers(unittest.TestCase):
	maxDiff = None
	@staticmethod
	def test_outliers_mad_count():
		actual_df =source_df.outliers.mad('height(ft)',0.5,10000).count()
		actual_df =json_enconding(actual_df)
		expected_value =json_enconding(3)
		assert(expected_value == actual_df)
	@staticmethod
	def test_outliers_mad_drop():
		actual_df =source_df.outliers.mad('height(ft)',0.5,10000).drop()
		expected_df = op.create.df([('names', StringType(), True),('height(ft)', ShortType(), True),('function', StringType(), True),('rank', ByteType(), True),('age', IntegerType(), True),('weight(t)', FloatType(), True),('japanese name', ArrayType(StringType(),True), True),('last position seen', StringType(), True),('date arrival', StringType(), True),('last date seen', StringType(), True),('attributes', ArrayType(FloatType(),True), True),('Date Type', DateType(), True),('timestamp', TimestampType(), True),('Cybertronian', BooleanType(), True),('function(binary)', BinaryType(), True),('NullType', NullType(), True)], [('bumbl#ebéé  ', 17, 'Espionage', 7, 5000000, 2.0, ['Bumble', 'Goldback'], '10.642707,-71.612534', '1980/04/10', '2015/08/10', [5.334000110626221, 2000.0], datetime.date(2015, 8, 10), datetime.datetime(2014, 6, 24, 0, 0), True, bytearray(b'Espionage'), None), ('Jazz', 13, 'First Lieutenant', 8, 5000000, 1.7999999523162842, ['Meister'], '33.670666,-117.841553', '1980/04/10', '2013/06/10', [3.962399959564209, 1800.0], datetime.date(2013, 6, 24), datetime.datetime(2014, 6, 24, 0, 0), True, bytearray(b'First Lieutenant'), None)])
		assert (expected_df.collect() == actual_df.collect())
	@staticmethod
	def test_outliers_mad_info():
		actual_df =source_df.outliers.mad('height(ft)',0.5,10000).info()
		actual_df =json_enconding(actual_df)
		expected_value =json_enconding({'count_outliers': 3, 'count_non_outliers': 2, 'lower_bound': 12.5, 'lower_bound_count': 1, 'upper_bound': 21.5, 'upper_bound_count': 2})
		assert(expected_value == actual_df)
	@staticmethod
	def test_outliers_mad_non_outliers_count():
		actual_df =source_df.outliers.mad('height(ft)',0.5,10000).non_outliers_count()
		actual_df =json_enconding(actual_df)
		expected_value =json_enconding(2)
		assert(expected_value == actual_df)
	@staticmethod
	def test_outliers_mad_select():
		actual_df =source_df.outliers.mad('height(ft)',0.5,10000).select()
		expected_df = op.create.df([('names', StringType(), True),('height(ft)', ShortType(), True),('function', StringType(), True),('rank', ByteType(), True),('age', IntegerType(), True),('weight(t)', FloatType(), True),('japanese name', ArrayType(StringType(),True), True),('last position seen', StringType(), True),('date arrival', StringType(), True),('last date seen', StringType(), True),('attributes', ArrayType(FloatType(),True), True),('Date Type', DateType(), True),('timestamp', TimestampType(), True),('Cybertronian', BooleanType(), True),('function(binary)', BinaryType(), True),('NullType', NullType(), True)], [("Optim'us", -28, 'Leader', 10, 5000000, 4.300000190734863, ['Inochi', 'Convoy'], '19.442735,-99.201111', '1980/04/10', '2016/09/10', [8.53439998626709, 4300.0], datetime.date(2016, 9, 10), datetime.datetime(2014, 6, 24, 0, 0), True, bytearray(b'Leader'), None), ('ironhide&', 26, 'Security', 7, 5000000, 4.0, ['Roadbuster'], '37.789563,-122.400356', '1980/04/10', '2014/07/10', [7.924799919128418, 4000.0], datetime.date(2014, 6, 24), datetime.datetime(2014, 6, 24, 0, 0), True, bytearray(b'Security'), None), ('Metroplex_)^$', 300, 'Battle Station', 8, 5000000, None, ['Metroflex'], None, '1980/04/10', '2011/04/10', [91.44000244140625, None], datetime.date(2011, 4, 10), datetime.datetime(2014, 6, 24, 0, 0), True, bytearray(b'Battle Station'), None)])
		assert (expected_df.collect() == actual_df.collect())
	@staticmethod
	def test_outliers_modified_z_score_count():
		actual_df =source_df.outliers.modified_z_score('height(ft)',0.5,10000).count()
		actual_df =json_enconding(actual_df)
		expected_value =json_enconding(3)
		assert(expected_value == actual_df)
	@staticmethod
	def test_outliers_modified_z_score_drop():
		actual_df =source_df.outliers.modified_z_score('height(ft)',0.5,10000).drop()
		expected_df = op.create.df([('names', StringType(), True),('height(ft)', ShortType(), True),('function', StringType(), True),('rank', ByteType(), True),('age', IntegerType(), True),('weight(t)', FloatType(), True),('japanese name', ArrayType(StringType(),True), True),('last position seen', StringType(), True),('date arrival', StringType(), True),('last date seen', StringType(), True),('attributes', ArrayType(FloatType(),True), True),('Date Type', DateType(), True),('timestamp', TimestampType(), True),('Cybertronian', BooleanType(), True),('function(binary)', BinaryType(), True),('NullType', NullType(), True)], [('bumbl#ebéé  ', 17, 'Espionage', 7, 5000000, 2.0, ['Bumble', 'Goldback'], '10.642707,-71.612534', '1980/04/10', '2015/08/10', [5.334000110626221, 2000.0], datetime.date(2015, 8, 10), datetime.datetime(2014, 6, 24, 0, 0), True, bytearray(b'Espionage'), None), ('Jazz', 13, 'First Lieutenant', 8, 5000000, 1.7999999523162842, ['Meister'], '33.670666,-117.841553', '1980/04/10', '2013/06/10', [3.962399959564209, 1800.0], datetime.date(2013, 6, 24), datetime.datetime(2014, 6, 24, 0, 0), True, bytearray(b'First Lieutenant'), None)])
		assert (expected_df.collect() == actual_df.collect())
	@staticmethod
	def test_outliers_modified_z_score_info():
		actual_df =source_df.outliers.modified_z_score('height(ft)',0.5,10000).info()
		actual_df =json_enconding(actual_df)
		expected_value =json_enconding({'count_outliers': 3, 'count_non_outliers': 2, 'max_m_z_score': 21.20928})
		assert(expected_value == actual_df)
	@staticmethod
	def test_outliers_modified_z_score_non_outliers_count():
		actual_df =source_df.outliers.modified_z_score('height(ft)',0.5,10000).non_outliers_count()
		actual_df =json_enconding(actual_df)
		expected_value =json_enconding(2)
		assert(expected_value == actual_df)
	@staticmethod
	def test_outliers_modified_z_score_select():
		actual_df =source_df.outliers.modified_z_score('height(ft)',0.5,10000).select()
		expected_df = op.create.df([('names', StringType(), True),('height(ft)', ShortType(), True),('function', StringType(), True),('rank', ByteType(), True),('age', IntegerType(), True),('weight(t)', FloatType(), True),('japanese name', ArrayType(StringType(),True), True),('last position seen', StringType(), True),('date arrival', StringType(), True),('last date seen', StringType(), True),('attributes', ArrayType(FloatType(),True), True),('Date Type', DateType(), True),('timestamp', TimestampType(), True),('Cybertronian', BooleanType(), True),('function(binary)', BinaryType(), True),('NullType', NullType(), True)], [("Optim'us", -28, 'Leader', 10, 5000000, 4.300000190734863, ['Inochi', 'Convoy'], '19.442735,-99.201111', '1980/04/10', '2016/09/10', [8.53439998626709, 4300.0], datetime.date(2016, 9, 10), datetime.datetime(2014, 6, 24, 0, 0), True, bytearray(b'Leader'), None), ('ironhide&', 26, 'Security', 7, 5000000, 4.0, ['Roadbuster'], '37.789563,-122.400356', '1980/04/10', '2014/07/10', [7.924799919128418, 4000.0], datetime.date(2014, 6, 24), datetime.datetime(2014, 6, 24, 0, 0), True, bytearray(b'Security'), None), ('Metroplex_)^$', 300, 'Battle Station', 8, 5000000, None, ['Metroflex'], None, '1980/04/10', '2011/04/10', [91.44000244140625, None], datetime.date(2011, 4, 10), datetime.datetime(2014, 6, 24, 0, 0), True, bytearray(b'Battle Station'), None)])
		assert (expected_df.collect() == actual_df.collect())
	@staticmethod
	def test_outliers_tukey_count():
		actual_df =source_df.outliers.tukey('height(ft)').count()
		actual_df =json_enconding(actual_df)
		expected_value =json_enconding(2)
		assert(expected_value == actual_df)
	@staticmethod
	def test_outliers_tukey_drop():
		actual_df =source_df.outliers.tukey('height(ft)').drop()
		expected_df = op.create.df([('names', StringType(), True),('height(ft)', ShortType(), True),('function', StringType(), True),('rank', ByteType(), True),('age', IntegerType(), True),('weight(t)', FloatType(), True),('japanese name', ArrayType(StringType(),True), True),('last position seen', StringType(), True),('date arrival', StringType(), True),('last date seen', StringType(), True),('attributes', ArrayType(FloatType(),True), True),('Date Type', DateType(), True),('timestamp', TimestampType(), True),('Cybertronian', BooleanType(), True),('function(binary)', BinaryType(), True),('NullType', NullType(), True)], [('bumbl#ebéé  ', 17, 'Espionage', 7, 5000000, 2.0, ['Bumble', 'Goldback'], '10.642707,-71.612534', '1980/04/10', '2015/08/10', [5.334000110626221, 2000.0], datetime.date(2015, 8, 10), datetime.datetime(2014, 6, 24, 0, 0), True, bytearray(b'Espionage'), None), ('ironhide&', 26, 'Security', 7, 5000000, 4.0, ['Roadbuster'], '37.789563,-122.400356', '1980/04/10', '2014/07/10', [7.924799919128418, 4000.0], datetime.date(2014, 6, 24), datetime.datetime(2014, 6, 24, 0, 0), True, bytearray(b'Security'), None), ('Jazz', 13, 'First Lieutenant', 8, 5000000, 1.7999999523162842, ['Meister'], '33.670666,-117.841553', '1980/04/10', '2013/06/10', [3.962399959564209, 1800.0], datetime.date(2013, 6, 24), datetime.datetime(2014, 6, 24, 0, 0), True, bytearray(b'First Lieutenant'), None)])
		assert (expected_df.collect() == actual_df.collect())
	@staticmethod
	def test_outliers_tukey_info():
		actual_df =source_df.outliers.tukey('height(ft)').info()
		actual_df =json_enconding(actual_df)
		expected_value =json_enconding({'count_outliers': 2, 'count_non_outliers': 3, 'lower_bound': -6.5, 'lower_bound_count': 1, 'upper_bound': 45.5, 'upper_bound_count': 1, 'q1': 13, 'median': 17, 'q3': 26, 'iqr': 13})
		assert(expected_value == actual_df)
	@staticmethod
	def test_outliers_tukey_non_outliers_count():
		actual_df =source_df.outliers.tukey('height(ft)').non_outliers_count()
		actual_df =json_enconding(actual_df)
		expected_value =json_enconding(3)
		assert(expected_value == actual_df)
	@staticmethod
	def test_outliers_tukey_select():
		actual_df =source_df.outliers.tukey('height(ft)').select()
		expected_df = op.create.df([('names', StringType(), True),('height(ft)', ShortType(), True),('function', StringType(), True),('rank', ByteType(), True),('age', IntegerType(), True),('weight(t)', FloatType(), True),('japanese name', ArrayType(StringType(),True), True),('last position seen', StringType(), True),('date arrival', StringType(), True),('last date seen', StringType(), True),('attributes', ArrayType(FloatType(),True), True),('Date Type', DateType(), True),('timestamp', TimestampType(), True),('Cybertronian', BooleanType(), True),('function(binary)', BinaryType(), True),('NullType', NullType(), True)], [("Optim'us", -28, 'Leader', 10, 5000000, 4.300000190734863, ['Inochi', 'Convoy'], '19.442735,-99.201111', '1980/04/10', '2016/09/10', [8.53439998626709, 4300.0], datetime.date(2016, 9, 10), datetime.datetime(2014, 6, 24, 0, 0), True, bytearray(b'Leader'), None), ('Metroplex_)^$', 300, 'Battle Station', 8, 5000000, None, ['Metroflex'], None, '1980/04/10', '2011/04/10', [91.44000244140625, None], datetime.date(2011, 4, 10), datetime.datetime(2014, 6, 24, 0, 0), True, bytearray(b'Battle Station'), None)])
		assert (expected_df.collect() == actual_df.collect())
	@staticmethod
	def test_outliers_tukey_whiskers():
		actual_df =source_df.outliers.tukey('height(ft)').whiskers()
		actual_df =json_enconding(actual_df)
		expected_value =json_enconding({'lower_bound': -6.5, 'upper_bound': 45.5, 'q1': 13, 'median': 17, 'q3': 26, 'iqr': 13})
		assert(expected_value == actual_df)
	@staticmethod
	def test_outliers_z_score_count():
		actual_df =source_df.outliers.z_score('height(ft)',0.5).count()
		actual_df =json_enconding(actual_df)
		expected_value =json_enconding(2)
		assert(expected_value == actual_df)
	@staticmethod
	def test_outliers_z_score_drop():
		actual_df =source_df.outliers.z_score('height(ft)',0.5).drop()
		expected_df = op.create.df([('names', StringType(), True),('height(ft)', ShortType(), True),('function', StringType(), True),('rank', ByteType(), True),('age', IntegerType(), True),('weight(t)', FloatType(), True),('japanese name', ArrayType(StringType(),True), True),('last position seen', StringType(), True),('date arrival', StringType(), True),('last date seen', StringType(), True),('attributes', ArrayType(FloatType(),True), True),('Date Type', DateType(), True),('timestamp', TimestampType(), True),('Cybertronian', BooleanType(), True),('function(binary)', BinaryType(), True),('NullType', NullType(), True)], [('bumbl#ebéé  ', 17, 'Espionage', 7, 5000000, 2.0, ['Bumble', 'Goldback'], '10.642707,-71.612534', '1980/04/10', '2015/08/10', [5.334000110626221, 2000.0], datetime.date(2015, 8, 10), datetime.datetime(2014, 6, 24, 0, 0), True, bytearray(b'Espionage'), None), ('ironhide&', 26, 'Security', 7, 5000000, 4.0, ['Roadbuster'], '37.789563,-122.400356', '1980/04/10', '2014/07/10', [7.924799919128418, 4000.0], datetime.date(2014, 6, 24), datetime.datetime(2014, 6, 24, 0, 0), True, bytearray(b'Security'), None), ('Jazz', 13, 'First Lieutenant', 8, 5000000, 1.7999999523162842, ['Meister'], '33.670666,-117.841553', '1980/04/10', '2013/06/10', [3.962399959564209, 1800.0], datetime.date(2013, 6, 24), datetime.datetime(2014, 6, 24, 0, 0), True, bytearray(b'First Lieutenant'), None)])
		assert (expected_df.collect() == actual_df.collect())
	@staticmethod
	def test_outliers_z_score_info():
		actual_df =source_df.outliers.z_score('height(ft)',0.5).info()
		actual_df =json_enconding(actual_df)
		expected_value =json_enconding({'count_outliers': 2, 'count_non_outliers': 3, 'max_z_score': 1.76684})
		assert(expected_value == actual_df)
	@staticmethod
	def test_outliers_z_score_non_outliers_count():
		actual_df =source_df.outliers.z_score('height(ft)',0.5).non_outliers_count()
		actual_df =json_enconding(actual_df)
		expected_value =json_enconding(3)
		assert(expected_value == actual_df)
	@staticmethod
	def test_outliers_z_score_select():
		actual_df =source_df.outliers.z_score('height(ft)',0.5).select()
		expected_df = op.create.df([('names', StringType(), True),('height(ft)', ShortType(), True),('function', StringType(), True),('rank', ByteType(), True),('age', IntegerType(), True),('weight(t)', FloatType(), True),('japanese name', ArrayType(StringType(),True), True),('last position seen', StringType(), True),('date arrival', StringType(), True),('last date seen', StringType(), True),('attributes', ArrayType(FloatType(),True), True),('Date Type', DateType(), True),('timestamp', TimestampType(), True),('Cybertronian', BooleanType(), True),('function(binary)', BinaryType(), True),('NullType', NullType(), True)], [("Optim'us", -28, 'Leader', 10, 5000000, 4.300000190734863, ['Inochi', 'Convoy'], '19.442735,-99.201111', '1980/04/10', '2016/09/10', [8.53439998626709, 4300.0], datetime.date(2016, 9, 10), datetime.datetime(2014, 6, 24, 0, 0), True, bytearray(b'Leader'), None), ('Metroplex_)^$', 300, 'Battle Station', 8, 5000000, None, ['Metroflex'], None, '1980/04/10', '2011/04/10', [91.44000244140625, None], datetime.date(2011, 4, 10), datetime.datetime(2014, 6, 24, 0, 0), True, bytearray(b'Battle Station'), None)])
		assert (expected_df.collect() == actual_df.collect())

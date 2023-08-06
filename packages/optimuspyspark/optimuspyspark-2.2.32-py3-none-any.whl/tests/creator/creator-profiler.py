# -*- coding: utf-8 -*-
# ---
# jupyter:
#   jupytext:
#     formats: ipynb,py:light
#     text_representation:
#       extension: .py
#       format_name: light
#       format_version: '1.4'
#       jupytext_version: 1.1.1
#   kernel_info:
#     name: python3
#   kernelspec:
#     display_name: Python 3
#     language: python
#     name: python3
# ---

# # This notebook create the tests in python code. All this cells must be run to executed the tests

# %load_ext autoreload
# %autoreload 2

# + {"outputHidden": false, "inputHidden": false}
import sys
sys.path.append("../..")
# -

from optimus import Optimus
from optimus.helpers.test import Test

op = Optimus(master='local', verbose=True)

# +
import pandas as pd
from pyspark.sql.types import *
from datetime import date, datetime


cols = [
        ("names", "str"),
        ("height(ft)", ShortType()),
        ("function", "str"),
        ("rank", ByteType()),
        ("age", "int"),
        ("weight(t)", "float"),
        "japanese name",
        "last position seen",
        "date arrival",
        "last date seen",
        ("attributes", ArrayType(FloatType())),
        ("Date Type", DateType()),
        ("timestamp", TimestampType()),
        ("Cybertronian", BooleanType()),
        ("function(binary)", BinaryType()),
        ("NullType", NullType())

    ]

rows = [
        ("Optimus", -28, "Leader", 10, 5000000, 4.30, ["Inochi", "Convoy"], "19.442735,-99.201111", "1980/04/10",
         "2016/09/10", [8.5344, 4300.0], date(2016, 9, 10), datetime(2014, 6, 24), True, bytearray("Leader", "utf-8"),
         None),
        ("bumbl#ebéé  ", 17, "Espionage", 7, 5000000, 2.0, ["Bumble", "Goldback"], "10.642707,-71.612534", "1980/04/10",
         "2015/08/10", [5.334, 2000.0], date(2015, 8, 10), datetime(2014, 6, 24), True, bytearray("Espionage", "utf-8"),
         None),
        ("ironhide&", 26, "Security", 7, 5000000, 4.0, ["Roadbuster"], "37.789563,-122.400356", "1980/04/10",
         "2014/07/10", [7.9248, 4000.0], date(2014, 6, 24), datetime(2014, 6, 24), True, bytearray("Security", "utf-8"),
         None),
        ("Jazz", 13, "First Lieutenant", 8, 5000000, 1.80, ["Meister"], "33.670666,-117.841553", "1980/04/10",
         "2013/06/10", [3.9624, 1800.0], date(2013, 6, 24), datetime(2014, 6, 24), True,
         bytearray("First Lieutenant", "utf-8"), None),
        ("Megatron", None, "None", 10, 5000000, 5.70, ["Megatron"], None, "1980/04/10", "2012/05/10", [None, 5700.0],
         date(2012, 5, 10), datetime(2014, 6, 24), True, bytearray("None", "utf-8"), None),
        ("Metroplex_)^$", 300, "Battle Station", 8, 5000000, None, ["Metroflex"], None, "1980/04/10", "2011/04/10",
         [91.44, None], date(2011, 4, 10), datetime(2014, 6, 24), True, bytearray("Battle Station", "utf-8"), None),
        (None, None, None, None, None, None, None, None, None, None, None, None, None, None, None, None),

    ]
source_df = op.create.df(cols ,rows)
source_df.table()
# -


# ### End Init Section

# ## Profiler

from pyspark.ml.linalg import Vectors

import re
a="a\'a"
re.escape(a)

print(a)

t = Test(op, source_df, "df_profiler", imports=["from pyspark.ml.linalg import Vectors, VectorUDT, DenseVector",
                                        "import numpy as np",
                                        "nan = np.nan",
                                        "import datetime",
                                        "from pyspark.sql import functions as F",
                                        "from optimus.profiler.profiler import Profiler",
                                        "null = None",
                                        "true = True",
                                        "p= Profiler()"], path = "df_profiler", final_path="..")

# +
from pyspark.sql import functions as F


def func(col_name, attrs):
    return F.col(col_name) * 2

numeric_col = "height(ft)"
numeric_col_B = "rank"
numeric_col_C = "rank"
string_col = "function"
date_col = "date arrival"
date_col_B = "last date seen"
new_col = "new col"
array_col = "attributes"
# -

from optimus.profiler.profiler import Profiler
p= Profiler()

p.run(source_df, "*")

t.create(p, "dataset", None, 'json', None, source_df,"*")

t.run()

mismatch = {"names":"dd/mm/yyyy","height(ft)":r'^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$',"function":"yyyy-mm-dd"}
t.create(p, "dataset", "mismatch", 'json', None, source_df,"*", mismatch=mismatch)

t.run()

t.create(p, "columns_stats", None, 'json', None, source_df,"*")

t.run()

t.create(p, "columns_agg", None, 'json', None, source_df,"*")

t.run()

a = "{'name'=a'a}"


print(a)

import json
json.dumps("{'name'=a'a}")

from optimus.profiler.profiler import Profiler

op.profiler.run(source_df, "*")

source_df.cols.range("height(ft)")



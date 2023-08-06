import os
import sys
import datetime
import re

try:
    import csv
    import xlrd
    import encodings
except ImportError:
    print(ImportError)

from .info import __VERSION__, __version__
from .PseudoSQLFromCSV import PsuedoSQLFromCSV
from .Transfer2SQLDB import Transfer2SQLDB


def get_data_from_csv(file_path, sep=',', dtype=None, encoding='utf-8'):
    pseudo = PsuedoSQLFromCSV(file_path, sep, dtype, encoding)
    return pseudo


def get_transfer(database_info_dict=None):
    transfer = Transfer2SQLDB(database_info_dict)
    return transfer

def to_list_from_df(df, sep=',', dtype=None, encoding='utf-8'):
    df.to_csv("./tmp_tmp.csv", index=False)
    tmp_pseudo_sql = get_data_from_csv("./tmp_tmp.csv", sep=sep, dtype=dtype, encoding=encoding)
    os.remove("./tmp_tmp.csv")
    return tmp_pseudo_sql

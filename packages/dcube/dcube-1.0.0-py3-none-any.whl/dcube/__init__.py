# -*- coding:utf-8 -*- 
import codecs
import os

__version__ = '1.0.0'
__author__ = 'tushare'



"""
for  fz api
"""
from .data_pro import (pro_api, pro_bar)
from .upass import (get_token, set_token)

# -*- coding: utf-8 -*-
"""
Created on Sun May 27 10:09:45 2018

@author: Lim Yuan Qing
"""
__version__ = '0.1'

import time
import datetime
import requests
import re
import pandas as pd
import numpy as np
import io

import os
import quandl

from dd8 import LOG_PRINT_LEVEL, LOG_WRITE_LEVEL
from dd8.utility.utils import get_basic_logger
from dd8.finance.enums import ENUM_BINARY_METHOD


logger = get_basic_logger(__name__, LOG_PRINT_LEVEL, LOG_WRITE_LEVEL)

class QuandlData(object):
    def __init__(self, str_api_key=None):
        self.data = None
        if str_api_key: 
            self.__api_key = str_api_key
        elif os.getenv('QUANDL_API_KEY'):
            self.__api_key = os.getenv('QUANDL_API_KEY')
        else:
            self.__api_key = None
        
        if self.__api_key:
            quandl.ApiConfig.api_key = self.__api_key
        print(self.__api_key)
    
    def get(self, *args, **kwargs):
        self.data = quandl.get(*args, **kwargs)
        return self.data

class YahooData():
    
    def __init__(self, str_symbol,                   
                 str_start_date, 
                 str_end_date,
                 lst_return_definitions = None,
                 str_csv_path = ''):
        self.str_symbol = str_symbol
        self.str_start_date = str_start_date
        self.str_end_date = str_end_date
        if lst_return_definitions:
            self.lst_return_definitions = lst_return_definitions
        else:
            self.lst_return_definitions = ['Adj Close|0/Adj Close|1']
        if str_csv_path != '':
            self.str_csv_path = str_csv_path + ((str_csv_path[-1] != '\\') * '\\')
        else:
            self.str_csv_path = ''
        self.df_data = self.download_quotes()
        self.df_data = self.df_data.set_index('Date').dropna(how='all').reset_index()
        
        #self.gen_returns()
        self.gen_day()
        self.gen_month()        
    
    def __len__(self):
        pass
    
    def __str__(self):
        return ('Underlying: ' + self.str_symbol + 
                '\n' + 
                'Start Date: ' + self.str_start_date +
                '\n' +
                'End Date: ' + self.str_end_date +
                '\n\n' +
                str(self.df_data.describe()))
    
    def __del__(self):
        print (''.join([self.str_symbol, ' data object deleted.']))
    
    def get_date_time(self, date):
        time_format_one = r'%d %b %Y'
        time_format_two = r'%d%m%Y'
        try:
            dt_start = datetime.datetime.strptime(date, time_format_one)
        except ValueError:
            dt_start = datetime.datetime.strptime(date, time_format_two)

        return dt_start

    def get_time_tuple(self, date_time):
        return date_time.timetuple()

    def split_crumb_store(self, v):
        return v.split(':')[2].strip('"')

    def find_crumb_store(self, lines):
        # Looking for 
        # ,"CrumbStore":{"crumb":"9q.A4D1c.b9}
        for l in lines:
            if re.findall(r'CrumbStore', l):
                return l    
        print ("Did not find CrumbStore")

    def get_cookie_value(self, r):
        return {'B': r.cookies['B']}

    def get_page_data(self, symbol):
        #print(symbol)
        url = 'http://finance.yahoo.com/quote/%s/?p=%s' %(symbol, symbol)
        #print(url)
        r = requests.get(url)     
        #print(r.text)
        cookie = self.get_cookie_value(r)
        #lines = r.text.encode('utf-8').strip().replace('}', '\n')
        #lines = r.content.strip().replace('}', '\n')
        lines = r.text.strip().replace('}', '\n')
        return cookie, lines.split('\n')

    def get_cookie_crumb(self, symbol):
        cookie, lines = self.get_page_data(symbol)
        crumb = self.split_crumb_store(self.find_crumb_store(lines))
        # Note: possible \u002F value
        # ,"CrumbStore":{"crumb":"FWP\u002F5EFll3U"
        # FWP\u002F5EFll3U
        #crumb2 = crumb.decode('unicode-escape')
        #return cookie, crumb2
        return cookie, crumb
    
    def get_now_epoch(self):
        # @see https://www.linuxquestions.org/questions/programming-9/python-datetime-to-epoch-4175520007/#post5244109
        return int(time.mktime(datetime.datetime.now().timetuple()))

    def gen_data(self, symbol, start_date, end_date, cookie, crumb, str_csv_path):
        url = r'https://query1.finance.yahoo.com/v7/finance/download/%s?period1=%s&period2=%s&interval=1d&events=history&crumb=%s' %(symbol, start_date, end_date, crumb)
        response = requests.get(url, cookies =cookie, stream=True)
        counter = 0
        while (not response) and counter<=10:
            response = requests.get(url, cookies =cookie, stream=True)        
        if str_csv_path != '':
            filename = str_csv_path + symbol + '_' + self.str_start_date + ' - ' + self.str_end_date + '.csv'
            #('%s.csv' % (symbol))
            with open(filename, 'w') as handle:
                handle.write(response.text)
                #for block in response.iter_content(1024):                    
                    #handle.write(str(block))
        return pd.read_csv(io.StringIO(response.content.decode('utf-8')))
        
#    def download_quotes(self, symbol, start_date = None, end_date = None, str_csv_path = ''):
#        if start_date == None:
#            start_date = 0
#        else:
#            start_date = int(time.mktime(self.get_time_tuple(self.get_date_time(start_date))))
#
#        if end_date == None:
#            end_date = self.get_now_epoch()
#        else:
#            end_date = int(time.mktime(self.get_time_tuple(self.get_date_time(end_date))))
#
#        cookie, crumb = self.get_cookie_crumb(symbol)
#
#        return self.gen_data(symbol, start_date, end_date, cookie, crumb, str_csv_path)
    
    def download_quotes(self):
        if self.str_start_date == '':
            start_date = 0
        else:
            start_date = int(time.mktime(self.get_time_tuple(self.get_date_time(self.str_start_date))))

        if self.str_end_date == '':
            end_date = self.get_now_epoch()
        else:
            end_date = int(time.mktime(self.get_time_tuple(self.get_date_time(self.str_end_date))))

        cookie, crumb = self.get_cookie_crumb(self.str_symbol)

        return self.gen_data(self.str_symbol, start_date, end_date, cookie, crumb, self.str_csv_path)
    
    def gen_returns(self):
        for return_def in self.lst_return_definitions:
            lst_return_def = return_def.split('/')
            
            lst_num = lst_return_def[0].split('|')
            str_num_return_def = lst_num[0]
            int_num_period = int(lst_num[1])
            
            lst_denom = lst_return_def[1].split('|')
            str_denom_return_def = lst_denom[0]
            int_denom_period = int(lst_denom[1])
            
            self.df_data[return_def] = np.log(self.df_data[str_num_return_def].shift(int_num_period) / 
                                        self.df_data[str_denom_return_def].shift(int_denom_period))
    
    def gen_binary(self, col_name, lower_bound=None, upper_bound=None, 
                   method=ENUM_BINARY_METHOD.EXCEED):
        if lower_bound == None and upper_bound == None:
            raise ValueError('`lower_bound` and `upper_bound` cannot both be `None`.')
        else:            
            if method == ENUM_BINARY_METHOD.EXCEED:
                if lower_bound == None:
                    self.df_data[col_name + '_' + method.name + '_' + str(lower_bound)
                        + '|' +  str(upper_bound)] = np.where(self.df_data[col_name] >= upper_bound,1.0, 0.0)
                elif upper_bound == None:
                    self.df_data[col_name + '_' + method.name + '_' + str(lower_bound)
                        + '|' +  str(upper_bound)] = np.where(self.df_data[col_name] <= lower_bound, 1.0, 0.0)
                else:
                    self.df_data[col_name + '_' + method.name + '_' + str(lower_bound)
                        + '|' +  str(upper_bound)] = np.where((self.df_data[col_name] >= upper_bound)
                                                        | (self.df_data[col_name] <= lower_bound), 1.0, 0.0)
            elif method == ENUM_BINARY_METHOD.WITHIN:
                if lower_bound == None:
                    self.df_data[col_name + '_' + method.name + '_' + str(lower_bound)
                        + '|' +  str(upper_bound)] = np.where(self.df_data[col_name] <= upper_bound,1.0,0.0)
                elif upper_bound == None:
                    self.df_data[col_name + '_' + method.name + '_' + str(lower_bound)
                        + '|' +  str(upper_bound)] = np.where(self.df_data[col_name] >= lower_bound,1.0,0.0)
                else:
                    self.df_data[col_name + '_' + method.name + '_' + str(lower_bound)
                        + '|' +  str(upper_bound)] = np.where((self.df_data[col_name] <= upper_bound)
                                                        & (self.df_data[col_name] >= lower_bound),1.0,0.0)
            else:
                raise ValueError('''Invalid method ENUM. Please see ENUM_BINARY_METHOD 
                                 for supported enumerations.''')
                
    def get_data(self):
        return self.df_data            
    
    def gen_day(self):
        self.df_data['Day'] = pd.to_datetime(self.df_data['Date']).dt.day_name()
    
    def gen_month(self):
        self.df_data['Month'] = pd.to_datetime(self.df_data['Date']).dt.month_name()
        
if __name__ == '__main__':
    pass
#    ticker = "GLE.PA"
#    csv_path = "E:\\Dropbox\\Yuan Qing\\Work\\Projects\\Libraries\\3. Python\\2. Notebooks\\1. Data"
#    #csv_path = ''
#    start_date = "10 Nov 2017"
#    end_date = "09 Nov 2018"
#    
#    data_object = YahooData(ticker,  start_date, end_date)
#    #data_object.gen_binary('Adj Close|0/Adj Close|1',-0.015, 0.015)
#    print(data_object.df_data)
    
    
#    import sys
#    sys.path.append(r'E:\Program Files\Dropbox\Yuan Qing\Work\Projects\Libraries\3. Python\1. Modules\dd8')
#    import dd8
#    import os
#    
#    data = QuandlData()
#    print(data.get('EURONEXT/ABN'))
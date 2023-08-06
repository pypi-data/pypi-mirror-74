#! /usr/bin/env python
__author__ = 'Tser'
__email__ = '807447312@qq.com'
__project__ = 'xiaobaiauto2'
__script__ = 'config.py'
__create_time__ = '2020/7/15 23:18'

from os import path
from xiaobaiauto2.data.GLO_VARS import PUBLIC_VARS

class DBCONFIG:
    def __init__(self):
        if 'dbpath' in PUBLIC_VARS.keys():
            self.dbapth = PUBLIC_VARS['dbpath']
        else:
            self.dbpath = path.dirname(path.abspath(__file__)) + '/../data/xiaobaiauto2.db'

class EMAILCONFIG:
    def __init__(self):
        if 'sender' in PUBLIC_VARS.keys():
            self.sender = PUBLIC_VARS['sender']
        else:
            self.sender = 'jicaiyunshang@163.com'
        if 'receiver' in PUBLIC_VARS.keys():
            self.receiver = PUBLIC_VARS['receiver']
        else:
            self.receiver = 'jicaiyunshang@qq.com'
        if 'smtpserver' in PUBLIC_VARS.keys():
            self.smtpserver = PUBLIC_VARS['smtpserver']
        else:
            self.smtpserver = 'smtp.163.com'
        if 'smtp_port' in PUBLIC_VARS.keys():
            self.smtp_port = PUBLIC_VARS['smtp_port']
        else:
            self.smtp_port = 25
        if 'username' in PUBLIC_VARS.keys():
            self.username = PUBLIC_VARS['username']
        else:
            self.username = 'username'
        if 'password' in PUBLIC_VARS.keys():
            self.password = PUBLIC_VARS['password']
        else:
            self.password = 'password'
        if 'subject' in PUBLIC_VARS.keys():
            self.subject = PUBLIC_VARS['subject']
        else:
            self.subject = 'xxx自动化测试报告'
        if 'report' in PUBLIC_VARS.keys():
            self.report = PUBLIC_VARS['report']
        else:
            self.report = 'report.html'
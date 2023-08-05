# -*- coding: utf-8 -*-

# import scrapy
# import json
# import hashlib
import pymysql
import pytz
import time
import datetime
# import sys
from jk_sgp_lib.items.CJKSGPItem import CJKSGPItem

class AbsJKSGPPipelineOfMysqlSaver(object):
    '''
    自动化数据存储Pipeline-API，目的是辅助项目进行爬取内容到Mysql 的数据存储。

    * 需要注意爬取的item 对象必须继承自 CJKSGPItem 这是很重要的

    数据库配置：需要配置 settings.py

    MYSQL_DB_NAME = '数据库名'
    MYSQL_HOST = '数据库主机'
    MYSQL_PORT = 数据库端口
    MYSQL_USER = '数据库用户'
    MYSQL_PASSWORD = '数据库密码'

    之后继承 AbsJKSGPPipelineOfMysqlSaver 到项目管道中，并且实现如下接口方法

    def beforeProcessItem(self, item, spider):
        # raise NotImplementedError('需要实现：beforeProcessItem (item, spider) 方法')
        pass
        
    def afterProcessItem(self, item, spider, count):
        # raise NotImplementedError('afterProcessItem (item, spider, count) 方法')
        pass
    '''

    # 数据库对象
    dbconn = None

    # 数据库游标对象
    dbcursor = None

    @classmethod # 表示cls 是静态类引用
    def from_crawler(cls, crawler):
        # 从项目的配置文件中读取相应的参数
        cls.MYSQL_DB_NAME = crawler.settings.get("MYSQL_DB_NAME", 'default_none')
        cls.HOST = crawler.settings.get("MYSQL_HOST", 'default_none')
        cls.PORT = crawler.settings.get("MYSQL_PORT", 3306)
        cls.USER = crawler.settings.get("MYSQL_USER", 'default_none')
        cls.PASSWD = crawler.settings.get("MYSQL_PASSWORD", 'default_none')
        # 新增一个时区设置，并且增加默认时区
        cls.TIMEZONE = crawler.settings.get("TIMEZONE", 'Asia/Shanghai')
        return cls()

    def open_spider(self, spider):
        '''
        1、链接数据库赋值给dbconn，并且打开数据库游标对象赋值给dbcursor
        2、进行数据表的创建，如果数据表不存在就进行创建
        '''
        # print("Start Piple mysql --------------  --------------  --------------")
        # print(self.MYSQL_DB_NAME, self.HOST, self.PORT, self.USER, self.PASSWD)
        self.dbconn = pymysql.connect(host=self.HOST, user=self.USER, password=self.PASSWD, database=self.MYSQL_DB_NAME,charset='utf8')
        self.dbcursor = self.dbconn.cursor()

        # 进行数据表的创建，如果数据表不存在就进行创建
        self.createScrapyTable()
        
    def close_spider(self, spider):
        '''
        1、关闭数据库游标对象 dbcursor 
        2、关闭数据库对象 dbconn
        '''
        # print("END Piple mysql --------------  --------------  --------------")
        self.dbcursor.close()
        self.dbconn.close()

    def process_item(self, item, spider):
        '''
        1、触发 process_item 调用前的接口方法 beforeProcessItem 方法
        2、生成SQL 语句并且向数据库进行 commit 操作
        3、触发 process_item 返回值调用前的 afterProcessItem 方法
        '''

        if False == self.isToDo(item, spider) :
            # 如果标记为不执行那么直接返回item 对象
            return item

        self.beforeProcessItem(item, spider)
        
        if not(isinstance(item, CJKSGPItem)) :
            raise Exception('item 参数必须为 CJKSGPItem 类或其子类，否则会导致数据库插入失败！')

        
        # 要执行的SQL 语句
        execsql = self.getExecSqlstr(item, spider)

        # 对应执行SQL 语句的值
        sqlvalues = self.getExecSqlvalues(item, spider)
        
        # self.dbcursor.execute(execsql)
        count = self.dbcursor.execute(execsql, sqlvalues)
        # 打印受影响的行数
        # print("插入%d条数据:" % count)
        self.dbconn.commit()
        # self.dbcursor.fetchall()
        # print("B #############")
        # print(execsql)
        # print("A #############")
        self.afterProcessItem(item, spider, count)
        return item

    def isToDo(self, item, spider):
        '''
        是否处理ITEM 的标记方法。
        1、当方法返回True 时程序继续运行会执行MSYQL 调用。
        2、当方法返回False 是程序直接返回item 对象并退出，这时候不会做任何执行 beforeProcessItem afterProcessItem 均不会调用
        @return boolean
        '''
        return True

    def getExecSqlstr(self, item, spider) :
        '''
        获取要执行的SQL 语句
        '''
        return '''
        INSERT INTO {}
(`signkey`, `groupname`, `status`, `createtime`, `updatetime`, `datadetail`) 
VALUES (%s, %s, %s, %s, %s, %s) 
ON DUPLICATE KEY UPDATE 
`updatetime`=%s, 
`status`= %s, 
`datadetail`= %s;
        '''.format(self.getScrapySaverTablename())

    def getExecSqlvalues(self, item, spider) :
        '''
        获取要执行SQL 预计的填充值
        '''
        currenttime = self.getCurrentTime()
        return [
            item['t_signkey'],
            item['t_group'],
            item['t_status'],
            currenttime,
            currenttime,
            item.getJsonStr(),

            currenttime,
            item['t_status'],
            item.getJsonStr(),
        ]
    
    def getCurrentTime(self):
        '''
        获取当前系统时间
        '''
        return datetime.datetime.now(pytz.timezone(self.TIMEZONE)).strftime('%Y-%m-%d %H:%M:%S')

    def beforeProcessItem(self, item, spider):
        raise NotImplementedError('需要实现：beforeProcessItem (item, spider) 方法')

    def afterProcessItem(self, item, spider, count):
        raise NotImplementedError('需要实现：afterProcessItem (item, spider, count) 方法')
    

    def getScrapySaverTablename(self):
        nameyear = datetime.datetime.now().year
        # namemonth = datetime.datetime.now().month
        # nameday = datetime.datetime.now().day
        return "scrapy_saver_{}_{}".format(self.getScrapySaverTableIden(), nameyear)

    def getScrapySaverTableIden(self):
        return "global"

    def createScrapyTable(self):
        
        createsql = '''
        CREATE TABLE IF NOT EXISTS `{}` (
            `id` int(11) NOT NULL AUTO_INCREMENT,
            `signkey` varchar(45) DEFAULT NULL,
            `groupname` varchar(45) DEFAULT NULL,
            `createtime` datetime DEFAULT NULL,
            `updatetime` datetime DEFAULT NULL,
            `status` int(11) DEFAULT NULL,
            `datadetail` mediumtext,
            PRIMARY KEY (`id`),
            UNIQUE KEY `signkey_group_unique` (`signkey`,`groupname`),
            KEY `groupname` (`groupname`),
            KEY `createtime` (`createtime`),
            KEY `updatetime` (`updatetime`),
            KEY `status` (`status`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
        '''.format(self.getScrapySaverTablename())

        count = self.dbcursor.execute(createsql)
        self.dbconn.commit()
        # 打印受影响的行数
        # print(createsql)
        # print("查询到%d条数据:" % count)
        
        
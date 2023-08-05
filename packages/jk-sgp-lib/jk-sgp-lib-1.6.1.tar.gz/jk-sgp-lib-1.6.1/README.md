# jk_sgp_lib 

Make Scrapy easier and more versatile.

## Version 版本记录

### v1.6.1
* 升级 `AbsJKSGPSpider` 类，让其支持 `start_urls` 的字典输入方式，从而实现`meta` 等参数的定义形式传入。

### v1.5.2
* 升级setup.py 文件新增 `encoding='UTF-8'` 防止Windows上安装出错。
```
import io
import setuptools

with io.open("README.md", mode='r', encoding='utf-8') as fh:
    long_description = fh.read()
```

### v1.5.1
* 升级了 AbsJKSGPPipelineOfMysqlSaver process_item 方法调用时会调用到检查方法 isToDo(item, spider)
* 如果 isToDo( ) 返回true 那么程序继续执行，返回false，这时候不会做任何执行 beforeProcessItem afterProcessItem 均不会调用，process_item 将立即返回item 对象。 
* 使用上可以覆盖这个方法，让管道有选择的处理item
```
# 默认上这个方法直接返回True
def isToDo(self, item, spider):
        return True
```
### v1.4.1

* 为了提高数据库录入管道类的可扩展性，升级了 AbsJKSGPPipelineOfMysqlSaver 
```
# 获取执行SQL 语句主体的方法
getExecSqlstr(item, spider) 

# 获取填充对应SQL 值的方法，这个方法返回的是一个list
getExecSqlvalues(item, spider) 

# 获取当前系统时间的方法，这个也单独做了提取
getCurrentTime()

# SQL 语句执行的过程大致为：
self.dbcursor.execute(getExecSqlstr(item, spider), getExecSqlvalues(item, spider))

```

### v1.3.4

* 修正1.3.3 信息发送格式错误的BUG。


### v1.3.3

* 修正1.3.1 管理员短信通知无法发送的BUG。

### v1.3.1

* 新增API CJKGSPTcMsgSender 用来发送腾讯的短信消息，需要 `pip install qcloudsms_py --user ` 类库的支持。
* 新增短信发送配置段落
```
# 短信发送配置段落
MSG_CONFIG = {
    'tencent' : {
        # 短信应用 SDK AppID
        'appid' : '1400XXXXX' ,
        # 短信应用 SDK AppKey
        'appkey' : "554d1de0bXXXXXXXXXXXXXXXXX" ,
        # 需要发送短信的手机号码
        'phone_numbers' : ['182XXXXXXXX'] ,
        # 短信模板ID，需要在短信控制台中申请
        'template_id' : '142678' ,
        # 签名
        'sms_sign' : 'KAMI1983',
        # 区域
        'sms_zone' : '86'
    }
}
```

### v1.2.1

* 当页面验证出错的时候，新增对比值方便调试。
* 修正ITEM写入的时区设置，可以通过 settings.py 的 TIMEZONE 配置段落进行改变，默认是 'Asia/Shanghai' 。

### v1.1.8 

* 修正早期版本部分BUG
* 这组API提供，Items、Pipelines、Spiders 三组类库，用来辅助Scrapy 的上层功能实现，帮助爬虫完成页面的区域校对、帮助Pipeline 对Mysql 的直接输出

## Install 安装

### 通过pip 命令直接安装

* 安装最新版本：`pip install jk-sgp-lib --upgrade --user`
* 例如仅安装1.2.1版本：`pip install jk-sgp-lib==1.2.1 --upgrade --user`

## 使用方法

### 创建一个普通的Scrapy 项目

* 可以通过 `scrapy startproject` 创建，这是Scrapy 的相关知识，不了解请自行补充。
* 创建之后大致可以得出如下目录结构：
```
# 仅仅介绍与这个项目使用相关的文件。
scrapy_dir
    /spiders # 爬虫文件存放的目录
    items.py # 数据条目定义文件
    pipelines.py # 输出管道定义文件
    settings.py # 设置文件
```

### 辅助格式化 item 对象类

* 需要 `from jk_sgp_lib.items.CJKSGPItem import CJKSGPItem`
* 之后创建一个你需要的item 对象，CJKSGPItem 本身是 scrapy.Item 的子类，所以可以完成可替代
* 继承这个类会增加3个预定义的保留字段：t_signkey，t_group ，t_status 所有jk_sgp_lib 类都会用这些保留字段做识别做标识，所以尽量不要动。
* def setDbSignKey(self, signkey = '') 设置数据库用的唯一索引标识字段，设置后会被自动MD5
* def setDbStatus(self, tstatus ) 设置数据库库表状态索引列，默认值为1
* def setDbGroup(self, tgroup ) 设置数据库库表分组索引列
* def getJsonStr(self) 获取JSON 字符串，这会序列化本对象
* def getMD5Sign(self, makestr) 获取MD5 标识符号，传入makestr ，对其进行MD5序列化

```
# 举例：创建一个 YourItem
class YourItem(CJKSGPItem):

    # 如下是数据列
    s_month = scrapy.Field()  # 月份
    s_name = scrapy.Field()  # 姓名

```

### 直接将爬取的数据输出到MYSQL
* 如下操作会自动将输出的Item 录入到数据库，如果数据重复进行数据表行update，否则执行insert 语句。
* 修改 `pipelines.py` 添加输出管道对象
* 添加：`from jk_sgp_lib.pipelines.AbsJKSGPPipelineOfMysqlSaver import AbsJKSGPPipelineOfMysqlSaver`
```
class YourPipeline(AbsJKSGPPipelineOfMysqlSaver):
    
    def beforeProcessItem(self, item, spider):
        print('必须实现 beforeProcessItem ，否则报错，可以什么都不做。')

    def afterProcessItem(self, item, spider, count):
        print('必须实现 afterProcessItem ，否则报错，可以什么都不做。')
    
```
* 修改settings.py 配置数据库信息和piplines对象
```

MYSQL_DB_NAME = '数据库名称'
MYSQL_HOST = '数据库主机地址'
MYSQL_PORT = 3306
MYSQL_USER = '数据库用户'
MYSQL_PASSWORD = '数据库密码'

# TIMEZONE = 'Asia/Shanghai' # 时区设置，这里决定了createtime、updatetime 的时间输入。

# 定义 YourPipeline 为输出管道，数据库配置好后，会自动建表填充数据，要注意有建表权限。
ITEM_PIPELINES = {
    'cpi_extract.pipelines.YourPipeline': 1000,
}
```

### spider 支持页面变化检测功能
* 需求源自被抓取页面的变化，举例来说，如果我们要抓取一个页面的表格，当前表头列如下：
```

时间、温度、湿度、区域
2012、28、70、北京
2011、30、75、北京

```
* 但是某一天数据发生了一点点小变化，哪怕是仅仅是数据列发生了变化：
```

时间、湿度、温度、区域
2012、70、28、北京
2011、75、30、北京

```
* 这种简单的变化可能让scrapy 抓取到脏数据，而且脏数据可能录入到更深层的数据存储系统中，清理起来是十分麻烦的。
* AbsJKSGPSpider 可以检测这种变化并及时停止Scrapy 的工作。
* 其实实现原理非常简单，我们可以对不变化的部分进行检测，对于上面的数据来说不应该变化的应该就是表头了，也就是说表头发送变化那么就认为表格发生了本质的变化，AbsJKSGPSpider 做了基础的对比实现，可以在检测到变化的时候终止爬虫运行。
* 头部需要引入如下内容：
```
# 注意如果需要数据库直接写入支持 YourItem 应该是 CJKSGPItem 类的子类

import sys
import scrapy

from ..items import YourItem 
# 引入 AbsJKSGPSpider 抽象类
from jk_sgp_lib.spiders.AbsJKSGPSpider import AbsJKSGPSpider

# 如果涉及到中午所以需要处理中文编码，否则可能造成错误
reload(sys)                      # 
sys.setdefaultencoding('utf-8')  # 设置 'utf-8'  

```
* 在spiders 目录下创建爬虫文件，比如 yourspider.py
```
class YourSpider(AbsJKSGPSpider):
    
    name = "your_spider"
    allowed_domains = ["aim.spider.com"]
    start_urls = [
        "http://aim.spider.com/data.html"
    ]

    def parseItems(self, response):
        '''
        解析数据项，通过yield 关键字返回对应数据，这个方法是抽象类的抽象方法
        '''
        print("解析操作，这个必须实现，这是个一个抽象方法。")

        # 举例：
        # # 提取所有数据列的TR数据
        # data_tr_list = response.xpath('//*[@id="pane1"]/div[5]/table/tbody/tr')
        # # print(type(data_tr_list))
        # for data_tr in data_tr_list :
        #     # print(data_tr.xpath('td/text()').extract()[0]) 
        #     # print(data_tr.xpath('td/text()').extract()[1])
        #     item = YourItem(tgroup = self.name )
        #     item['s_month'] = data_tr.xpath('td/text()').extract()[0] # 月份
        #     # 如果写入数据写入一个唯一的数据库标识很重要，这个会和t_group 组成唯一索引
        #     item.setDbSignKey(item['s_month'])
        #     yield item

    def initPageIdenInfo(self) :
        
        '''
        初始化页面标识信息，通过类内容方法：self.appendCheckInfo(checkxpath, checkcontent) 实现
        参数1：checkxpath 是页面匹配的xpath。
        参数2：checkcontent 是页面匹配的内容值，也就是xpath 解析的内容。
        return void()
        '''

        # 表头核验，如果表头发生任何变化，那么程序就会在写入数据库之前卡主，避免脏数据的写入。
        self.appendCheckInfo('//*[@id="pane1"]/div[5]/table/tr[1]', '''<tr class="bg_lan bold">
					    <td rowspan="2">时间</td>
					    <td colspan="3">温度</td>
					    <td colspan="3">湿度</td>
					    <td colspan="3">区域</td>
					</tr>''')
        

```

## 一个爬取的实例

* 我稍后准备，并且更新到github 上面，以供参考。
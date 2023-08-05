#!/usr/bin/env python
#-*- coding:utf-8 -*-
#############################################
# File Name: setup.py
# Author: Snow Wang
# Mail: admin@farseer.vip
# Blog: www.farseer.vip
# Created Time:  2020-07-16 00:00:00
#############################################
import os
from setuptools import setup, find_packages
path = os.path.abspath(os.path.dirname(__file__))

try:
  with open(os.path.join(path, 'README.md')) as f:
    long_description = f.read()
except Exception as e:
  long_description = "suning-sdk from suning open platform"

setup(
    name = "suning-sdk",
    version = "1.0.0",
    keywords = ("pip", "suning", "suning-sdk"),
    description = "suning-sdk from suning open platform",
    long_description = f'''苏宁开放平台Python-SDK，beta版

参考了淘宝sdk的设计结构。

关于平台地址以及appkey和appsecret等的配置可以修改suning.api.config.py 文件

使用方法见test包中的test.py等测试代码

以上是原版suning-sdk-python的README.md，苏宁的python sdk支持python2.7及以上

原版下载地址：[SDK下载](http://open.suning.com/ospos/apipage/downLoadSDK.do?sdkType=python)

此轮子地址：[项目地址](https://github.com/why2lyj/suning-sdk)

---

## 创建轮子的原因：

由于自己的其他项目需要，觉得建一个轮子的方式比丢进自己的代码里更好，然而pip里竟然没有！所以建了这个轮子。

## 关于包的安装：

```
pip install suning-sdk
或
pip3 install suning-sdk
```

## 关于包的引用及示例

我们以调用[suning.netalliance.recommendcommodity.query](https://open.suning.com/ospos/apipage/toApiMethodDetailMenuNew.do?interCode=suning.netalliance.recommendcommodity.query)为例

```
import suning.api as api
try:
	client = api.RecommendcommodityQueryRequest()
	client.setDomainInfo("openpre.cnsuning.com", "80")
	client.setAppInfo('你申请到的appKey', '你申请到的secretKey')
	client.couponMark = '1'
	resp = client.getResponse()
except Exception as e:
	print(e)
```

更多示例请参考官方的SDK下的`test`目录或直接查看：[https://github.com/why2ly/suning-sdk/test](https://github.com/why2lyj/suning-sdk/tree/master/test)

接口的具体说明请查看：[苏宁开放平台API文档](https://open.suning.com/ospos/apipage/toApiMethodDetailMenuNew.do)

## 关于更新：

如果版本落后苏宁官网，请主动前往：[项目github](https://github.com/why2lyj/suning-sdk)提`issue`或`PR`

没`issue`或`PR`就不更新了

## 关于版本

| 版本号 | 苏宁官方sdk下载日期 | 
| -------- | -------------- | 
| 1.0.0 | 2020-07-15 | 

 ''',
    long_description_content_type='text/markdown',
    license = "MIT Licence",

    url = "https://github.com/why2lyj/suning-sdk",
    author = "Snow Wang",
    author_email = "admin@farseer.vip",

    packages = find_packages(),
    include_package_data = False,
    platforms = "any",

)

# [MSSDK](https://pypi.org/project/mssdk/)

## [mssdk](https://pypi.org/project/mssdk/) 的介绍

[mssdk](https://pypi.org/project/mssdk/) 是**麦思多维科技**提供的基于 Python 的 SDK 库, 您可以通过[麦思多维科技机构VIP接口文档](https://mssdk.readthedocs.io/en/latest/)了解和查询详细数据接口！

## [mssdk](https://pypi.org/project/mssdk/) 服务于**麦思多维科技**

## [mssdk](https://pypi.org/project/mssdk/) 的特色

[mssdk](https://pypi.org/project/mssdk/) 主要改进如下:

1. [mssdk](https://pypi.org/project/mssdk/)支持 **Python 3.7** 及以上版本；
2. 目前提供已提供**麦思多维科技**部分数据接口；
3. 提供完善的接口文档支持, 提高 [mssdk](https://pypi.org/project/mssdk/) 的易用性；

# 安装方法

```
pip install mssdk
```

# 升级方法

```
pip install mssdk --upgrade
```

# 快速入门

目标：美股复权数据获取和绘图

代码：

```python
import mssdk as ak
import mplfinance as mpf

stock_us_daily_df = ak.stock_us_daily(symbol="AAPL", adjust="qfq")
stock_us_daily_df = stock_us_daily_df[["open", "high", "low", "close", "volume"]]
stock_us_daily_df.columns = ["Open", "High", "Low", "Close", "Volume"]
stock_us_daily_df.index.name = "Date"
stock_us_daily_df = stock_us_daily_df["2020-04-01": "2020-04-29"]
mpf.plot(stock_us_daily_df, type='candle', mav=(3, 6, 9), volume=True, show_nontrading=False)
```

绘图：

![](https://jfds-1252952517.cos.ap-chengdu.myqcloud.com/akshare/readme/home/AAPL_candle.png)

# 特别说明

## 声明

1. [mssdk](https://pypi.org/project/mssdk) 提供的数据仅供参考，不构成任何投资建议；
2. 任何基于 [mssdk](https://pypi.org/project/mssdk) 进行研究的用户请注意数据风险；
3. [mssdk](https://pypi.org/project/mssdk) 的使用请遵循**麦思多维科技**的用户协议；
4. [mssdk](https://pypi.org/project/mssdk) 使用产生的问题的最终解释权归**麦思多维科技**所有；

# 版本更新说明

```
0.0.1: 发布测试版本 v0.0.1
0.0.2: 发布测试版本 v0.0.2
0.0.3: 发布测试版本 v0.0.3
0.0.4: 发布测试版本 v0.0.4
0.0.5: 发布测试版本 v0.0.5
0.0.6: 发布测试版本 v0.0.6
```

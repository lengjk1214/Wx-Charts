import matplotlib.pyplot as plt                #导入绘图包
plt.rcParams['font.sans-serif'] = ['SimHei']   #解决中文显示问题
plt.rcParams['axes.unicode_minus'] = False    # 解决中文显示问题

'''
饼状图:
title:图名    label：标签名
values:数据

举例：如果要直接读取csv文件
import os
import pandas as pd
os.chdir(r'F:')   #设置成存放数据文件夹路径
date = pd.read_csv("*.csv", encoding = 'GBK')    #读取数据
'''
def Pie_chart(title, label, values):
    plt.figure(figsize=(6, 6))  # 将画布设定为正方形，则绘制的饼图是正圆
    explode = [0.01, 0.01, 0.01]  # 设定各项距离圆心n个半径
    plt.pie(values, explode=explode, labels=label, autopct='%1.1f%%')  # 绘制饼图
    plt.title(title)  # 绘制标题
    plt.savefig('picture.jpg')  # 保存图片
    plt.show()

'''
Pie_chart example
title = 'example'
label = ['第一', '第二', '第三']  # 定义饼图的标签，标签是列表
values = [4, 7, 9]
Pie_chart(title, label, values)
'''


'''
散点图:
title:图名        xlabel:x轴名称     ylabel:y轴名称     
xdata:x轴数据      ydata:y轴数据      type:散点类型
'''
def Scatter_chart(title,xlabel,ylabel,xdata,ydata,type):
    #plt.figure(figsize=(10, 10), dpi=100)
    # matplotlib用特殊字符表示散点类型
    markers = ['o', '.', ',', 'x', '+', 'v', '^', '<', '>', 's', 'd']
    plt.scatter(xdata, ydata, marker=markers[type], label=xlabel)

    plt.xlabel(xlabel)
    plt.ylabel(ylabel)
    plt.title(title)
    plt.savefig('picture.jpg')
    plt.show()


'''
Scatter_chart example
title = "example"
xlabel = "x数据"
ylabel = "y数据"
xdata = [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019]
ydata = [0.5, 9.36, 52, 191, 350, 571, 912, 1027, 1682, 2135, 2684]
type = 2
Scatter_chart(title,xlabel,ylabel,xdata,ydata,type)
'''

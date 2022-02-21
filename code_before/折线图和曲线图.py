import matplotlib.pyplot as plt
from scipy.interpolate import make_interp_spline
import numpy as np

plt.style.use('ggplot')
# 设置中文编码和负号的正常显示
plt.rcParams['font.sans-serif'] = [u'SimHei']
plt.rcParams['axes.unicode_minus'] = False

'''
折线图:
xlabel:x轴名称     ylabel:y轴名称     title:图名
xdata:x轴数据      ydata:y轴数据      color:颜色
'''
def Line_chart(xlabel,ylabel,title,xdata,ydata):
        plt.figure(figsize=(12, 6), dpi=100)
        plt.xlabel(xlabel, fontdict={'size': 16})
        plt.ylabel(ylabel, fontdict={'size': 16})
        plt.title(title, fontdict={'size': 20})

        plt.plot(xdata, ydata, c='red')
        plt.scatter(xdata, ydata, c='red')
        plt.grid(True, linestyle='--', alpha=0.5)
        plt.savefig('picture.jpg')
        plt.show()
'''
line_chart example
game = ['1-G1', '1-G2', '1-G3', '1-G4', '1-G5', '2-G1', '2-G2', '2-G3', '2-G4', '2-G5', '3-G1', '3-G2', '3-G3',
                '3-G4', '3-G5', '总决赛-G1', '总决赛-G2', '总决赛-G3', '总决赛-G4', '总决赛-G5', '总决赛-G6']
scores = [23, 10, 38, 30, 36, 20, 28, 36, 16, 29, 15, 26, 30, 26, 38, 34, 33, 25, 28, 40, 28]
Line_chart("a","b","title",game,scores)
'''


'''
曲线图:
xlabel:x轴名称     ylabel:y轴名称     title:图名
xdata:x轴数据      ydata:y轴数据      color:颜色
'''
def graph(title,xlabel,ylabel,xdata,ydata):
        plt.figure(figsize=(12, 6), dpi=100)
        plt.grid(True, linestyle='--', alpha=0.5)
        plt.xlabel(xlabel, fontdict={'size': 16})
        plt.ylabel(ylabel, fontdict={'size': 16})
        plt.title(title, fontdict={'size': 20})
        x_smooth = np.linspace(xdata.min(), xdata.max(), 300)  # list没有min()功能调用
        y_smooth = make_interp_spline(xdata, ydata)(x_smooth)
        plt.plot(x_smooth, y_smooth, c='red', label="$sin(x)$")

        plt.savefig('picture.jpg')
        plt.show()

'''
graph example
T = np.array([6, 7, 8, 9, 10, 11, 12])
power = np.array([1.53E+03, 5.92E+02, 2.04E+02, 7.24E+01, 2.72E+01, 1.10E+01, 4.70E+00])
graph("title","a","b",T,power)
'''




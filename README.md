# wx-charts-demo  第一个微信小程序?
#最初想做成一个用户输入代码或数据，然后生成对应的基础图形（饼状图、折线图之类的），代码对应的代码导图、类图
以及一些含文字的思维导图的项目。可以说理想很丰满，现实很残酷

#code_before是阶段二的朴素成果，其他的都是微信小程序，下载了记得把code_before拿出来。
#参考项目链接:
https://github.com/yezisuper/wx-charts-demo.git
#项目目前缺陷
##页面太丑了，有些功能直接用button来实现了。没有保存图片（做着做着就忘记了）。有些图没做完，关于代码的图一个没做。
##用了微信云数据库，但是node_module名字太长了，在项目里删去了，需要重新配置一下


#一些乱七八糟的话
#阶段一
##另一个伙伴试图在之前写的一个微信小程序（关于疫情新闻推送的）的基础上，魔改来适配这次项目。最终结果，
两个小程序差别太大了，改半天项目乱了不说一堆错误，方案一失败。
#阶段二
##搜索了一下发现上述的一些图可以用graphviz来实现，然后一些基础图可以用Python实现，python也支持graphviz。
后端决定用python了。最初项目结构为Django（又用了Flask对比）、数据库sqlite。项目环境都配好了，
但不会把graphviz嵌入后端框架，又磨了很久，方案二失败。
#阶段三
##想了想还是回归微信小程序吧，谢谢老师延长时间。github翻遍，参考了一个项目
在此基础上增加了3个主页面，同时连了微信云数据库，勉强有了一点模子，用了canvas。



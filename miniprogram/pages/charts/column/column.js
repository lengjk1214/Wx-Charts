var wxCharts = require('../../../utils/wxcharts.js');
var app = getApp();
var columnChart = null;
var chartData = {
    main: {
        title: '数据',
      data: [15, 20, 45, 37, 15, 20],
      categories: ['2021-1', '2021-2', '2021-3', '2021-4', '2021-5', '2021-6']
    }
};
Page({
    data: {
        chartTitle: '柱状图',
        isMainChartDisplay: true
    },
    backToMainChart: function () {
        this.setData({
            chartTitle: chartData.main.title,
            isMainChartDisplay: true
        });
        columnChart.updateData({
            categories: chartData.main.categories,
            series: [{
                name: 'x轴数据',
                data: chartData.main.data,
                format: function (val, name) {
                    return val.toFixed(2) ;
                }
            }]
        });
    },
    touchHandler: function (e) {
        var index = columnChart.getCurrentDataIndex(e)
    },
    onReady: function (e) {
        var windowWidth = 320;
        try {
          var res = wx.getSystemInfoSync();
          windowWidth = res.windowWidth;
        } catch (e) {
          console.error('getSystemInfoSync failed!');
        }

        columnChart = new wxCharts({
            canvasId: 'columnCanvas',
            type: 'column',
            animation: true,
            categories: chartData.main.categories,
            series: [{
                name: 'x轴数据',
                data: chartData.main.data,
                format: function (val, name) {
                    return val.toFixed(2);
                }
            }],
            yAxis: {
                format: function (val) {
                    return val;
                },
                title: 'y轴数据',
                min: 0
            },
            xAxis: {
                disableGrid: false,
                type: 'calibration'
            },
            extra: {
                column: {
                    width: 15
                }
            },
            width: windowWidth,
            height: 200,
        });
    },
  mover(e){
    console.log(e)
  }
});
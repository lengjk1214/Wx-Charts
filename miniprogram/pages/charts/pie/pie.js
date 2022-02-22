var wxCharts = require('../../../utils/wxcharts.js');
var app = getApp();
var pieChart = null;
Page({
    data: {
    },
    touchHandler: function (e) {
        console.log(pieChart.getCurrentDataIndex(e));
    },        
    onLoad: function (e) {
        var windowWidth = 320;
        try {
            var res = wx.getSystemInfoSync();
            windowWidth = res.windowWidth;
        } catch (e) {
            console.error('getSystemInfoSync failed!');
        }

        pieChart = new wxCharts({
            animation: true,
            canvasId: 'pieCanvas',
            type: 'pie',
            series: [{
                name: '数据1',
                data: 15,
            }, {
                name: '数据2',
                data: 35,
            }, {
                name: '数据3',
                data: 78,
            }, {
                name: '数据4',
                data: 63,
            }, {
                name: '数据5',
                data: 35,
            }, {
                name: '数据6',
                data: 78,
            }, {
                name: '数据7',
                data: 63,
            }, {
                name: '数据8',
                data: 35,
            }, {
                name: '数据9',
                data: 78,
            }, {
                name: '数据10',
                data: 78,
            }],
            width: windowWidth,
            height: 300,
            dataLabel: true,
        });
    }
});
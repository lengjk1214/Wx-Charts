var wxCharts = require('../../../utils/wxcharts.js');
var app = getApp();
var lineChart = null;
var startPos = null;
const db = wx.cloud.database().collection('data')
Page({
    data: {
        count : 0,
        cur_data1 : 0,
        cur_data2 : 0,
        cur_data3 : 0,
        cur_data4 : 0,
        cur_data5 : 0,
        cur_data6 : 0
    },
    touchHandler: function (e) {
        lineChart.scrollStart(e);
    },
    moveHandler: function (e) {
        lineChart.scroll(e);
    },
    touchEndHandler: function (e) {
        lineChart.scrollEnd(e);
        lineChart.showToolTip(e, {
            format: function (item, category) {
                return category + ' ' + item.name + ':' + item.data 
            }
        });        
    },
    createSimulationData: function () {
        var categories = [];
        var data = [];
        for (var i = 0; i < 6; i++) {
            categories.push('2021-' + (i + 1));
            //data.push(Math.random()*(20-10)+10);
        }
        data.push(this.data.cur_data1);
        data.push(this.data.cur_data2);
        data.push(this.data.cur_data3);
        data.push(this.data.cur_data4);
        data.push(this.data.cur_data5);
        data.push(this.data.cur_data6);
        return {
            categories: categories,
            data: data
        }
    },
    onLoad: function (e) {
        var windowWidth = 320;
        try {
            var res = wx.getSystemInfoSync();
            windowWidth = res.windowWidth;
        } catch (e) {
            console.error('getSystemInfoSync failed!');
        }
        
        db.count()
        .then(res=>{
            console.log(res)
            this.setData({
                count:res.total,
            })
        });
        db.where({
            id:"南巢"
        })
        .get({
            success:(res)=>{
                if(res.data.length !=0){
                    console.log('更新成功');
                    var aa = this.data.count-1;
                    var d1 = res.data[aa]._data1;
                    var d2 = res.data[aa]._data2;
                    var d3 = res.data[aa]._data3;
                    var d4 = res.data[aa]._data4;
                    var d5 = res.data[aa]._data5;
                    var d6 = res.data[aa]._data6;
                    this.setData ({
                        cur_data1:d1,
                        cur_data2:d2,
                        cur_data3:d3,
                        cur_data4:d4,
                        cur_data5:d5,
                        cur_data6:d6,
                    })
                } 
                var simulationData = this.createSimulationData();
                lineChart = new wxCharts({
                    canvasId: 'lineCanvas',
                    type: 'line',
                    categories: simulationData.categories,
                    animation: false,
                    series: [{
                        name: '数据1',
                        data: simulationData.data,
                        format: function (val, name) {
                            return val.toFixed(2);
                        }
                    }],
                    xAxis: {
                        disableGrid: false
                    },
                    yAxis: {
                        title: 'y轴数据',
                        format: function (val) {
                            return val.toFixed(2);
                        },
                        min: 0
                    },
                    width: windowWidth,
                    height: 200,
                    dataLabel: true,
                    dataPointShape: true,
                    enableScroll: true,
                    extra: {
                        lineStyle: 'curve'
                    }
                });
            }
        })
    }
});
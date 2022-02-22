// pages/home/home.js

const db = wx.cloud.database().collection('data')
Page({
  data: {
    data1: 0,
    data2: 0,
    data3: 0,
    data4: 0,
    data5: 0,
    data6: 0,

  },
  inputdata1: function (e) {
    this.setData({
      data1: e.detail.value
    })
  },
  inputdata2: function (e) {
    this.setData({
      data2: e.detail.value
    })
  },
  inputdata3: function (e) {
    this.setData({
      data3: e.detail.value
    })
  },
  inputdata4: function (e) {
    this.setData({
      data4: e.detail.value
    })
  },
  inputdata5: function (e) {
    this.setData({
      data5: e.detail.value
    })
  },
  inputdata6: function (e) {
    this.setData({
      data6: e.detail.value
    })
  },
  

  save: function (e) {
    db.add({       //db之前宏定义的user表
      data: {     // data 字段表示需新增的JSON数据  
        id: "南巢",
        _data1: Number(this.data.data1),
        _data2: Number(this.data.data2),
        _data3: Number(this.data.data3),
        _data4: Number(this.data.data4),
        _data5: Number(this.data.data5),
        _data6: Number(this.data.data6),
        
      },          
      // res对象，其中有 _id 字段标记刚创建的记录的id
      success: function (res) {
        console.log("上传成功", res)
      }         
    })  
   

  }
})
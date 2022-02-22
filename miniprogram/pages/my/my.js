// pages/mine/mine.js
const app = getApp()

const db = wx.cloud.database().collection('user')
//初始化数据库 宏定义一个db指代user表
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    //判断小程序的API，回调，参数，组件等是否在当前版本可用。
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    isHide: true,

    //创建变量存取数据库值
    cur_id:"",
    cur_is_vip:"no",
    cur_buy:0,
    cur_free:0,

    //弹窗显示
    hiddenModal: true,
    hiddenModal2: true,
    hiddenModal3: true,
    hiddenModal5: true

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../home/home'
    })
  },

  //会员信息
  listenerButton:function() {
    this.setData({
        hiddenModal: !this.data.hiddenModal
    })
},

listenerConfirm:function() {
    this.setData({
        hiddenModal: true
    })
},

listenerCancel:function() {
    this.setData({
        hiddenModal: true
    })
},
//购买次数
listenerButton2:function() {
  this.setData({
      hiddenModal2: !this.data.hiddenModal2
  })
},

listenerConfirm2:function() {
  this.setData({
      hiddenModal2: true
  })
},

listenerCancel2:function() {
  this.setData({
      hiddenModal2: true
  })
},
//还剩免费次数

listenerButton3:function() {
  this.setData({
      hiddenModal3: !this.data.hiddenModal3
  })
},

listenerConfirm3:function() {
  this.setData({
      hiddenModal3: true
  })
},

listenerCancel3:function() {
  this.setData({
      hiddenModal3: true
  })
},

//退出登录
listenerButton5:function() {
  this.setData({
    hiddenModal5: !this.data.hiddenModal5
  })
},
listenerConfirm5:function() {
  this.setData({
    isHide:true,
    hiddenModal5: true
    
  })
},

listenerCancel5:function() {
  this.setData({
      hiddenModal5: true
  })
},
  

  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    var that = this;
    // 查看是否授权
    wx.getSetting({
      success: function(res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function(res) {
              app.globalData.userInfo = res.userInfo
              that.setData({
                userInfo: res.userInfo,
              })
              // 用户已经授权过,不需要显示授权页面,所以不需要改变 isHide 的值
              // 在用户授权成功后，调用微信的 wx.login 接口，从而获取code
              wx.login({
                success: res => {
                  // 获取到用户的 code 之后：res.code
                  // console.log("用户的code:" + res.code);
                  // 可以传给后台，再经过解析获取用户的 openid
                  // 或者可以直接使用微信的提供的接口直接获取 openid ，方法如下：
                  // wx.request({
                  //     // 自行补上自己的 APPID 和 SECRET
                  //     url: 'https://api.weixin.qq.com/sns/jscode2session?appid=自己的APPID&secret=自己的SECRET&js_code=' + res.code + '&grant_type=authorization_code',
                  //     success: res => {
                  //         // 获取到用户的 openid
                  //         console.log("用户的openid:" + res.data.openid);
                  //     }
                  // });
                }
              });
            }
          });
        } else {
          // 用户没有授权
          // 改变 isHide 的值，显示授权页面
          that.setData({
            isHide: true
          });
        }
      }
    });
  },

  bindGetUserInfo: function(e) {
    if (e.detail.userInfo) {
      //用户按了允许授权按钮
      var that = this;
      // 获取到用户的信息了，打印到控制台上看下
      console.log("用户的信息如下：");
      console.log(e.detail.userInfo);
      //授权成功后,通过改变 isHide 的值，让实现页面显示出来，把授权页面隐藏起来
      that.setData({
        isHide: false,
        userInfo: e.detail.userInfo
      });
      db.where({
        id:e.detail.userInfo.nickName
      })//上传数据至云服务器
      .get({
        success: (res) => {
          if (res.data.length == 0){
              db.add({       //db之前宏定义的user表
                data: {     // data 字段表示需新增的 JSON数据   
                  id:e.detail.userInfo.nickName,     
                  buy:0,
                  is_vip:"no",
                  free:5,
                },          
                // res对象，其中有 _id 字段标记刚创建的记录的id
                success: function (res) {
                  console.log("上传成功", res)
                }         
              })     
          }else{
              console.log('不重复创建新用户')
          };
          //进入my界面，更新当前data数据内容
          db.where({
            id:"南巢"
          })//返回数据库值
          .get({
            success: (res) => {
              if (res.data.length != 0){
                console.log('查询成功');
                console.log(res.data)
                this.setData({
                  cur_id:res.data[0].id,
                  cur_is_vip:res.data[0].is_vip,
                  cur_buy:res.data[0].buy,
                  cur_free:res.data[0].free,
                })
              }
          }
          });
      }
      })
    } else {
      //用户按了拒绝按钮
      wx.showModal({
        title: '警告',
        content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
        showCancel: false,
        confirmText: '返回授权',
        success: function(res) {
          // 用户没有授权成功，不需要改变 isHide 的值
          if (res.confirm) {
            console.log('用户点击了“返回授权”');
          }
        }
      });
    }
  },
 

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
  }
})

//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '开始旅程吧！GO',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  goToPage(){
    //bind事件绑定不会阻止冒泡事件向上冒泡，catch事件绑定可以阻止冒泡事件向上冒泡
    wx.navigateTo({
      url:'../menu/menu'
    })
  },
	goToPage1(){
		wx.navigateTo({
			url:'../item/item'
		})
	},
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  onShareAppMessage:function(){
    return {
      title:"测试小程序",
      path: '/page/index?id=123'
    }
  }
})

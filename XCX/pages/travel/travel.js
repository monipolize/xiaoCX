// travel.js
Page({
  data: {
      active_nav:1,
			cityName:"大连",
      lists:[{
        name:"大连-东港",
        zan:20,
        introduce:"东港板块以建设中的东港商务区为核心，涵盖中山广场以东、以北的城市黄金区域！",
        heart:false,
        myword:"像我这样孤单的人，像我这样傻的人",
        src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503854441939&di=275d2cce053a7564001f32f4ac4761a2&imgtype=0&src=http%3A%2F%2Ffile25.mafengwo.net%2FM00%2FB8%2F3E%2FwKgB4lOZMRWAK6Q3AALH5EMG1s877.jpeg"
      },{
        name:"大连-跨海大桥",
        zan: 11,
        introduce: "大连南部滨海大道跨海大桥，即大连星海湾大桥，为中国首座海上地锚式悬索跨海大桥",
        heart: true,
        myword: "如果有一天我变得很有钱",
        src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503854501448&di=ab58f0056afdaf0df2be646b857675a6&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D6f7f39fbfa1f3a294ec5dd8df14cd644%2F2cf5e0fe9925bc31bf4b99bd54df8db1cb137085.jpg"
      }]
  },
  changeNav(e){
    this.setData({
      active_nav: e.target.dataset.id
    })
  },
  lowed(){
		if (this.data.active_nav == 1){
			var that = this
			this.setData({
				active_nav: parseInt(that.data.active_nav, 10)+1
			})
		}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 写个接收详情页的数据属性
    content:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // onLoad的options可以接收来自其他页面的数据（通过url传递过来的数据）
    console.log(options);
    var _this=this;
    // 在这里去获取详情页的数据
    wx.request({
      url: 'http://localhost/toutiao/getDetail.php?newsId='+options.newsid,
      success(res){
        console.log(res);
        _this.setData({
          content:res.data[0]
        });
      }
    })

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
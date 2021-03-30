Page({

  /**
   * 页面的初始数据
   */
  data: {
    typeList:[],
    // 表示当前导航ID是多少,默认显示热点文章
    id:'1001',
    // 列表数据
    newsList:[]
  },
  // 切换导航的函数
  // 事件函数调用时，不能带参数，
  // 定义时的参数即为event对象
  changeNav(event){
    console.log(event)
    var id=event.currentTarget.dataset.id;
    // 获取当前点击后的导航id
    this.setData({
      id
    });
    // 点击后，去加载当前列表文章
    // 加载列表页

    this.switchList(this.data.id,this)

  },
// 切换列表文章的函数
  switchList(id,_this){
    wx.request({
      url: 'http://localhost/toutiao/getList.php?typeId='+id,
      success(res){
        console.log(res);
        var tempList=[];
        // 可以循环
        res.data.forEach(item=>{
          // 如果当前文章图片类型不为空，即为字符串数组
          if(item.cover_img!=""){
            // 把字符串数组转为真数组，再替换原来的字符串数组
            item.cover_img=JSON.parse(item.cover_img);
          }
          // 将加工后的item，push到临时数组中
          tempList.push(item);
        });
        // 让数据可响应
        _this.setData({
          newsList:tempList
        });
      }
    })
  },
  showDetail(e){
    // 获取文章ID
    var id=e.currentTarget.dataset.newsid;
    console.log(id);
    // 
    wx.navigateTo({
      // 点击当前文章，跳转到详情页，并且把单篇文章的id传递到该详情页
      url: '/pages/detail/detail?newsid='+id
    })
    // wx.request({
    //   url: 'http://localhost/toutiao/getDetail.php?newsId='+id,
    //   success(res){
    //     console.log(res);
    //   }
    // })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this=this;
    // ajax加载数据源
    wx.request({
      url: 'http://localhost/toutiao/getType.php',
      success(res){
        // console.log(res);
        _this.setData({
          typeList:res.data
        });
      }
    })
    // 加载列表页
    this.switchList(this.data.id,this)
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
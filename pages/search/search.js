// pages/search/search.js
var baseurl = 'https://route.showapi.com/268-1?showapi_appid=86487&showapi_sign=881ca6acc8d04652a930b9bf5142aed7'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  loadData: function (url) {
    var that = this;
    wx.request({
      url: url,
      method: 'GET',
      success: function (res) {
        var loaddata = res.data.showapi_res_body.pagebean.contentlist;
        that.setData({
          tourdata: loaddata
        })
      },
      fail: function (error) {
        console.log(2)
      }
    })
  },
  searchData: function (e) {
    var text = e.detail.value;
    if (text != '')
      this.loadData(baseurl + '&keyword=' + text);
    else
      this.setData({
        tourdata: {}
      });
  },
  tapAnswer: function (event) {
    var what = event.currentTarget.dataset.what;
    // console.log(what.id);
    wx.navigateTo({
      url: '../city/city'
    })
    wx.setStorage({
      key: "city",
      data: what
    })
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
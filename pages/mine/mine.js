Page({

  /**
   * 页面的初始数据
   */
  data: {

    myinfo: null,
    trips: []

  },
  onShow: function () {
    this.onLoad();
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    var stu = wx.getStorageSync('student');
    this.setData({ trips: getApp().globalData.trips })
    this.setData({ myinfo: stu });
    // console.log()
    // var tem = this.data.trips.splice(e,1);
    // this.setData({trips:tem});
    // var trips = wx.getStorageSync(trip)

  },
  exit: function (e) {
    wx.showModal({
      title: '提示',
      content: '是否确认退出',
      success: function (res) {
        if (res.confirm) {
          // console.log('用户点击确定')
          wx.removeStorageSync('student');
          //页面跳转
          wx.redirectTo({
            // url: '../login/login',
            url: '',
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  resetpwd: function (e) {
    var no = this.data.myinfo.no;
    wx.navigateTo({
      url: '../password/password?no=' + no,
    })
  },
  setemail: function (e) {
    var no = this.data.myinfo.no;
    wx.navigateTo({
      url: '../email/email?no=' + no,
    })
  },

  cutout: function (e) {
    var index = e.target.dataset.index;
    console.log(index);
    var tem = this.data.trips;
    tem.splice(index, 1);
    getApp().globalData.trips = tem
    // this.data.trips.splice(index,1);
    this.setData({ trips : tem });
  },
})

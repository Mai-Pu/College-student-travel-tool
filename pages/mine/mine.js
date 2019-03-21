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
  onLoad: function () {
    var stu = wx.getStorageSync('student');
    this.setData({ trips: wx.getStorageSync('trip')})
    this.setData({ myinfo: stu });
    // var trips = wx.getStorageSync(trip)
    console.log(this.data.trips)
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

  cutout: function(){
    
  },
})

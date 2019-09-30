//app.js
App({
  onLaunch: function (options) {
    let that = this
    console.log(options)
    //中间省略其他代码
    if (options.scene == 1089) {
      wx.showToast({
        title: options.scene.toString(),
      })
      //这里写入相关业务代码
    }
  },
  globalData: {
    userInfo: null
  }
})
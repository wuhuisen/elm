//index.js
//获取应用实例
const app = getApp()
var http = require('./http.js');   //相对路径
Page({
  data: {
   
    list:[],
    "bnrUrl": [{
      "url": "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1569581506&di=e91fc0087565d7c356b01df61dcc2d70&src=http://hbimg.b0.upaiyun.com/c5e095aa4812638f75f229cb9b7b7f94580bf8503e3f9-CeAvwo_fw658"
    }, {
      "url": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569591592937&di=181c644ad17360fd1e5e3249cf4174a7&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fca21a60fbce4c3bba1955c3a1e617c1f92ede3ab375c6-twuNK3_fw658"
    }, {
      "url": "https://upload-images.jianshu.io/upload_images/11158618-86aeece9a909e846.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
    }, {
      "url": "https://upload-images.jianshu.io/upload_images/11158618-86aeece9a909e846.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
    }]
  },
  //事件处理函数
  bindViewTap: function(event) {
    console.log(event.currentTarget.dataset.hi)
  },
  faA: function () {
    wx.navigateTo({
      url: "../logs/logs",
    })
  },
  onLoad: function () {
    


  },
  getUserInfo: function(e) {
   
  },
  onShow:function(){
    console.log('完成')
   
  }
})

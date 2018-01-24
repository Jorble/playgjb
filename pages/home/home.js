//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,

    latitude:"",
    longitude:"",
    markers: [{
      "latitude":"",
      "longitude":"",
      "iconPath":""
    }]
  },

  onLoad:function(){
    var that = this; 
      wx.getLocation({
        type: 'wgs84',
        success: function (res) {
          // success  
          console.log("lat=" + res.latitude)
          console.log("longitude=" + res.longitude)

          that.setData({
            'id':1,
            'latitude': res.latitude,
            'longitude': res.longitude,
            'markers': [{
              'latitude': res.latitude,
              'longitude': res.longitude,
              'iconPath': '/image/location.png'
            }]
          })

        }
      })
  }

})
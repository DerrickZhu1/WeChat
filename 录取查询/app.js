// app.js
App({
   onLaunch: function() {
       if (!wx.cloud) {
           console.error("请使用云能力");
       } else {
           wx.cloud.init({
               env: "cloud1-3gg8ad9b492b1747",
               traceUser: true
           })
       }

       this.globalData = {}
   },

   getPhoneInfo(phoneNumber, callback) {
       wx.request({
         url: 'https://www.iteblog.com/api/mobile.php?mobile=' + phoneNum,
         header: {
             'content-type': 'application/json'
         },
         success: function (res) {
             callback(res.data);
         }
       })
   }





})

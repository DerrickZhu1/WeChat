// index.js
const app = getApp();
const db = wx.cloud.database();
Page({
     data: {
         disabled: true,
         students: [],
         isshow:false,
         fontsize1:'16px',
         fontsize2:'16px',
         school: null,
         adimissionInfo: null
     },

     onLoad: function (options) {
     },

     bindSchoolInput(event) {
         this.setData({
             school: event.detail.value
         });
         console.log(school);
         this.setDisabled();
     },

     setDisabled() {
         this.setData({
             disabled: (this.data.phoneNumber && this.data.phoneNumber.toString().length === 11) ? false : true
         })
     },

     queryAdimissionInfo() {
         db.collection("adimission").where({
             录取学校: { 
                $regex: '.*' + this.data.school + '.*',
                $options: 'i'
            } 
         })
         .get({
            success: res => {
                console.log(JSON.stringify(res.data, null, 2));
                this.setData({
                    students: res.data
                })
            },
            fail: err => {
                console.error(err);
                wx.showToast({
                  title: '查询记录失败',
                })
            }
        })
     }
})

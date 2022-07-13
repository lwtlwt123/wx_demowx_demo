// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    //用方法修改data里的数据
    testNum:1
  },
  onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return {
          date: util.formatTime(new Date(log)),
          timeStamp: log
        }
      })
    })
  },
  // 不用写methods
  changeFn(e) {
    console.log('这里是测试页面');
    //获取要传递的值
    console.log(e.target.dataset.num);
    //修改data中的数据的方法
    this.setData({
      testNum:++this.data.testNum
    })
    //测试页面跳转
    console.log(this.data.testNum);
    // 跳转的方法，保留当前页面，跳转到应用的某个页面，但是不允许跳转到tabbar页面
    wx.navigateTo({
      //跳转路径前要加上'/'
      url: '/pages/cla/cla?data=我要传递的数据'
    })
  },



})
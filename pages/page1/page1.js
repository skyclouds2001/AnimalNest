// pages/page1/page1.js
Page({
  data: {
      inputShowed: false,
      inputVal: "",
      isCollect: false,
      imageSrc: "../../image/icon/collection.png",
      background: [{number:1},{number:2}],
      backgroundEnd: 3,
      left: false ,
      right: false,
      activeIndex: 0
  },
  bindViewToShare: function() {
    wx.navigateTo({
      url: '../share/share'
    })
  },
  changeswiper: function(e) {
    var index = e.detail.current;//当前所在页面的 index
    if(index > this.data.activeIndex) {//左滑事件判断
      this.setData({
        left: true,//若为左滑，left值为true,触发图片动画效果
      })
      if (index >= this.data.background.length - 1) {
        let tempString=this.data.backgroundEnd;
        this.setData({
          background: this.data.background.concat([{number: tempString}]),
          backgroundEnd: this.data.backgroundEnd+1,
        })
      }
    } else if(index < this.data.activeIndex) {//右滑事件判断
      this.setData({
        right: true//若为右滑，right值为true,触发图片动画效果
      })
    }
    setTimeout(() => {//每滑动一次，数据发生变化
      this.setData({
        activeIndex: index,
        left:false,
        right:false
      })
    }, 1000);
  },
  onLoad() {
      this.setData({
          search: this.search.bind(this)
      })
  },
  // search: function (value) {
  //     return new Promise((resolve, reject) => {
  //         setTimeout(() => {
  //             resolve([{text: '搜索结果', value: 1}, {text: '搜索过程2', value: 2}])
  //         }, 200)
  //     })
  // },
  // selectResult: function (e) {
  //     console.log('select result', e.detail)
  // },
  onReady() {
    this.setData({
      container: () => wx.createSelectorQuery().select('#container')
    })
  },
});
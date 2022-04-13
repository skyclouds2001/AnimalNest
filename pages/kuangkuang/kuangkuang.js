// pages/kuangkuang/kuangkuang.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    animalList:[
      {idtoanimal:"橘白大猪",animalPosition:"竹园一号楼",animalPicture:"../R-C.jpg"},
      {idtoanimal:"奥姐",animalPosition:"竹园二号楼",animalPicture:"../R-C.jpg"}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: '#',
      data:{},
      success:res=>{
        this.setData({
          dataList:res.data
        })
      }
    })
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
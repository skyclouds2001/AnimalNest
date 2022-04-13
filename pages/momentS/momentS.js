// pages/momentS/momentS.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    catImageSrc: {
      type: String,
      value: '../../R-C.jpg',
    },
    imageSrc: {
      type: String,
      value: '../../image/icon/collection.png',
    },
    catName: {
      type: String,
      value: '猫咪1号',
    },
    color: {
      type: String,
      value: '半白色',
    },
    sex: {
      type: String,
      value: '母',
    },
    health: {
      type: String,
      value: '健康',
    },
    address: {
      type: String,
      value: '竹园1号楼',
    },
    habit: {
      type: String,
      value: '吃东西得时候可以摸一下她',
    },
    hobby: {
      type: String,
      value: '喜欢用头蹭你的脚',
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    collect: function() {
      var isCollect = this.data.isCollect;
      if(!isCollect) {
        this.setData({
          isCollect: true,
          imageSrc: "../../image/icon/compass.png"
        })
        wx.showToast({
          title: '收藏成功',
          icon: 'none',
        })
      }
      else if(isCollect) {
        this.setData({
          isCollect: false,
          imageSrc: "../../image/icon/collection.png"
        })
        wx.showToast({
          title: '取消收藏',
          icon: 'none',
        })
      }
    },
  }
})

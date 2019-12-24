const app = getApp()
Component({
  // 获取外部样式
  options: {
    addGlobalClass: true
  },
  properties: {
    navbarData: {   //navbarData   由父页面传递的数据，变量名字自命名
      type: Object,
      value: {},
      observer: function (newVal, oldVal) { }
    }
  },
  data: {
    height: app.globalData.navHeight,
    navTop: app.globalData.navTop,
    navLeft: app.globalData.navLeft,
  },
  attached: function () {
  },
  methods: {
    // 返回上一页面
    _navback() {
      wx.navigateBack({
        delta:1,
        // 返回上一页失败，则回到首页
        fail:()=>{
          wx.redirectTo({
            url: '/pages/index/index',
          })
        }
      });
    },
    //返回到首页
    _navhome() {
      // redirectTo 会关闭上一页
      wx.redirectTo({
        url: '/pages/index/index',
      })
    },
    _navsearch() {
      wx.navigateTo({
        url: '',
      })
    }
  }

}) 

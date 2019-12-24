const app = getApp()
Component({
  options: {
    addGlobalClass: true
  },
  properties: {
    navbarData: {   //navbarData   由父页面传递的数据，变量名字自命名
      type: Object,
      value: {},
      observer: function (newVal, oldVal) { }
    },
    backg: { type: String },

  },
  data: {
    height: app.globalData.navHeight,
    navTop: app.globalData.navTop,
    navLeft: app.globalData.navLeft,
    //默认值  默认显示左上角
    navbarData: {
      showCapsule: 1,
      routertime:'',
      pages:''
    }
  },
  attached: function () {
    // 定义导航栏的高度   方便对齐
    setTimeout(()=>{
      this.setData({
        height: app.globalData.navHeight,
        navTop: app.globalData.navTop,
        navLeft: app.globalData.navLeft
      })
    },800)  
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
      app.globalData.share = false;
      wx.navigateTo({
        url: '/pages/search/search',
      })
    }
  }

}) 

App({
  onLaunch: function () {
    wx.getSystemInfo({
      success: (res) => {
        console.log(res);
        let menuButton = wx.getMenuButtonBoundingClientRect();
        this.globalData.navTop = menuButton.top;
        console.log(menuButton);
        this.globalData.height = res.statusBarHeight;
        this.globalData.navHeight = res.statusBarHeight + menuButton.height + (menuButton.top - res.statusBarHeight) * 2;
        this.globalData.wHeight = res.windowHeight;
        this.globalData.sHeight = res.screenHeight;
        this.globalData.navLeft = res.windowWidth - menuButton.right;
      }
    })
  },
  globalData: {
    navHeight: 0,
    navTop: 0,
    navLeft: 0,
    height: 0,
  }
})

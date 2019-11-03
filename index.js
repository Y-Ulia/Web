export default class Tool {
  constructor (option) {
    this.options = {
      productName: this.getProductName(), // 产品名称
      renderMenu: undefined,
      ...option
    }
    this.menuList = []
  }

  getProductName() {
    // 解析URL
  }

  install(plugins) { // 插件注册功能
    if (!plugins) {
      return
    }
    if (Array.isArray(plugins) && plugins.length) {
      let len = plugins.length
      for (let i = 0; i < len; i++) {
        plugins[i](this.getOptions)
      }
      this.renderMenu()
    } else if (typeof plugins === 'function') {
      plugins(this.getOptions)
      this.renderMenu()
    } else {
      throw new TypeError('请使用Array插件集合或者Function类型插件')
    }
  }

  getOptions() {
    return Object.assign({}, this.options, { addMenuItem: this.addMenuItem })
  }

  addMenuItem(options) {
    if (options.title === undefined) {
      throw new Error('请配置菜单项title')
    }
    if (options.event === undefined) {
      throw new Error('请配置菜单项title')
    }
    if (typeof options.event === 'function') {
      throw new Error('请配置菜单项点击事件')
    }
    if (options.index === undefined) {
      this.menuList.push(options)
    }
    if (typeof options.index === 'number') {
      this.menuList.splice(options.index, 0, options)
    }
    // 去掉undefined项
    this.menuList = this.menuList.filter(m => m)
  }

  renderMenu() {
    const menuList = this.isDisable(this.menuList)
    if (typeof this.option.renderMenu === 'function') {
      return cb(menuList)
    }
    if (this.option.renderMenu) {
      throw new Error('菜单栏配置错误')
    }
    if (this.option.renderMenu === undefined) {
      // 内置UI
      var dom = document.createElement('div')
      var body = document.body
      // 样式挂载
      // 插入menuList
      body.appendChild(dom)
      return dom
    }
  }

  isDisable(menuList) {
    return menuList.filter(m => !m.disable)
  }
}



export default class Tool {
  constructor (option) {
    this.options = {
      productName: this.getProductName(), // 产品名称
      init: this.init,
      ...option
    }
    this.menuList = [] //
  }

  getProductName() {
    // 解析URL
  }

  init(cb) {
    if (typeof cb === 'function') {
      return cb(this.menuList)
    }
    if (cb) {
      throw new Error('菜单栏配置错误')
    }
    // 内置UI 或者 自定义UI
    var dom = document.createElement('div')
    var body = document.body
    // 样式挂载
    // 插入this.menuList
    body.appendChild(dom)
    return dom
  }

  install(plugins) { // 插件注册功能
    if (!plugins) {
      return
    }
    if (Array.isArray(plugins) && plugins.length) {
      plugins.forEach(plugin => plugin(Object.assign({}, this.options), this.render))
    } else if (typeof plugins === 'function') {
      plugin(Object.assign({}, this.options), this.render)
    } else {
      throw new TypeError('请使用Array插件集合或者Function类型插件')
    }
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
}

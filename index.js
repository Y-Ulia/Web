

export default class Tool {
  constructor (option) {
    this.options = {
      productName: this.getProductName(), // 产品名称
      init: this.init, // 需要挂载的dom节点 // 或者一个框架的实例上
      ...option
    }
    this.stack = [] // 插件集合
  }

  getProductName() {
    // 解析URL
  }

  init(cb) {
    if (typeof cb === 'function') {
      return cb()
    }
    // 内置UI 或者 自定义UI
    var dom = document.createElement('div')
    var body = document.body
    // 样式挂载
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

  render(options) { // 需要界面的插件可用
    // title/event
    this.stack.push(options)
  }
}

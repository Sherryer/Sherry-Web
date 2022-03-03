// 缓存对象的属性

export default class {
  constructor (originalObj = {}, {
    expires = 300000, // 默认缓存 300000 毫秒
    maxlength = 3     // 最多缓存 5 条记录
  } = {}) {
    this.originalObj = originalObj
    this.expires = expires
    this.proxyObj = {}
    this.proxyObjConfig = {}
    this.proxyQueue = []
    this.maxlength = +maxlength
    return this.initProxy()
  }

  initProxy () {
    let {
      proxyObj,
      originalObj
    } = this
    if (!Proxy) {
      return Object.freeze({})
    }
    let resProxy = new Proxy(originalObj, {
      set: (target, key, value) => {
        this.upDateProxy({key, value})
        target[key] = value
        return true
      },
      get: (target, key) => {
        if (proxyObj[key] && this.isTimeOut({key})) {
          this.deleteItem({key})
        }
        return proxyObj[key]
      }
    })
    Object.keys(originalObj).forEach(key => {
      resProxy[key] = originalObj[key]
    })
    return resProxy
  }

  upDateProxy ({key, value}) {
    let {
      proxyObj,
      proxyObjConfig,
      proxyQueue,
      maxlength
    } = this

    // update proxyObj&proxyObjConfig
    let writeInTime = (new Date()).getTime()
    proxyObj[key] = value
    proxyObjConfig[key] = {
      writeInTime
    }

    // update proxyQueue
    let index = proxyQueue.indexOf(key)
    if (index !== -1) {
      proxyQueue.splice(index, 1)
    }
    proxyQueue.push(key)
    if (Reflect.ownKeys(proxyObj).length > maxlength) {
      this.deleteItem()
    }
  }

  deleteItem ({key} = {}) {
    let {
      proxyQueue,
      proxyObj,
      proxyObjConfig,
      originalObj
    } = this
    let proxyKey = key || proxyQueue.shift()
    Reflect.deleteProperty(proxyObj, proxyKey)
    Reflect.deleteProperty(proxyObjConfig, proxyKey)
    Reflect.deleteProperty(originalObj, proxyKey)
  }

  isTimeOut ({key}) {
    let {
      proxyObjConfig,
      expires
    } = this
    if (!proxyObjConfig[key]) {
      return false
    }
    return (new Date()).getTime() > proxyObjConfig[key].writeInTime + expires
  }
}

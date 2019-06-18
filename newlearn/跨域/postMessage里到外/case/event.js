// 监听者
const event = {
  clientList: {},
  constant: [],
  listen: function (key, fn, config = {}) {
    if (this.clientList[key]) {
      this.clientList[key].push(fn)
    } else {
      this.clientList[key] = []
      this.clientList[key].push(fn)
    }

    const constant = config.constant

    if (constant && this.constant.indexOf(key) === -1) {
      this.constant.push(key)
    }
  },
  trigger: function () {
    var key = Array.prototype.shift.call(arguments)
    if (!this.clientList[key]) {
      return
    }
    for (var fn of this.clientList[key]) {
      fn.apply(this, arguments)
    }
  },
  remove: function (key, fn) {
    if (!this.clientList[key]) {
      return false
    }
    if (!fn) {
      return false
    }
    if (this.clientList[key].includes(fn)) {
      for (var i in this.clientList[key]) {
        if (this.clientList[key][i] === fn) {
          this.clientList[key].splice(i, 1)
        }
      }
    }
  },
  delete: function (key) {
    if (!this.clientList[key]) {
      return false
    }
    delete this.clientList[key]
  }
}

// 单例
const getSingleFn = fn => {
  var result
  return function () {
    return result || (result = fn.apply(this, arguments))
  }
}

// 获得不重复名字
let getSingleName = (() => {
  let i = 0
  return action => {
    return action + i++
  }
})()

export { event, getSingleFn, getSingleName }

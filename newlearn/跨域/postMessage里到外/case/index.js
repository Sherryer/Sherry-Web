import { event, getSingleFn, getSingleName } from './event'

const listenMessage = () => {
  window.addEventListener('message', e => {
    let { from, ...others } = e.data
    if (from === 'outer') {
      triggerEvent(others)
    }
  })
  return true
}

const triggerEvent = obj => {
  let { action, value } = obj
  event.trigger(action, value)
  // 消息类型分为主动调用等待callback和被动接收两种，需要分开处理
  if (event.constant.indexOf(action) === -1) {
    event.delete(action)
  }
}

const singleListenMessage = getSingleFn(listenMessage)

/**
 * 更改选中的时间字符串
 * @param {Object} obj 被改变的时间
 *        {String} type 类型
 *        {String} name 调用客户端方法的名称
 *        {Object, String} options 发送的信息
 *        {Bolean} callback 是否返回promise
 */
const sendMessage = obj => {
  let { callback, ...others } = obj
  let action = getSingleName('action')

  window.parent.postMessage(
    {
      from: 'inner',
      ...others,
      action
    },
    '*'
  )

  return new Promise((resolve, reject) => {
    if (callback) {
      event.listen(action, resolve)
    } else {
      resolve(false)
    }
  })
}

export default {
  init () {
    window.Device = window.Device || {}
    window.Device.bridge = this
    singleListenMessage()
  },
  hello: () => {
    sendMessage({
      type: 'device',
      name: 'hello',
      callback: true
    })
  }
}

class Learnvue {
    constructor(options) {
        this.$options = options
        const {
            data
        } = options
        this.$data = data
        this.observe(this.$data)
    }

    observe(data) {
        if (!data || typeof data !== 'object') {
            return
        }
        Object.keys(data).forEach(key => {
            this.defineReactive(data, key, data[key])
        })
    }

    defineReactive(data, key, value) {

        this.observe(value)

        var dep = new Dep()

        Object.defineProperty(data, key, {
            get() {
                if (Dep.target) {
                    dep.addDep(target)
                }
                return value
            },
            set(val) {
                if (val === value) {
                    return
                }
                value = val
                console.log('更新 ', key, val)
                dep.notify()
            }
        })
    }
}

// 管理观察者
class Dep {
    constructor() {
        this.deps = [] // 存放 watcher
    }

    addDep(watcher) {
        this.deps.push(watcher)
    }

    notify() {
        this.deps.forEach(item => item.update())
    }
}

class Watcher {
    constructor() {
        Dep.target = this
    }

    update() {

    }
}

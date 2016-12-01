(function(win) {
    var EAPI = win.EAPI = {};
    EAPI.devices = {};

    EAPI.isEnterplorer = function() {
        return top.navigator.userAgent.toLowerCase().indexOf('enterplorer') !== -1;
    };

    EAPI.isIOS = function() {
        return top.navigator.userAgent.toLowerCase().indexOf('safari') !== -1;
    };

    EAPI.isAndroid = function() {
        return !!window.yspUser;
    };

    EAPI.isWin = function() {
        return false;
    };

    EAPI.isAndroid = function() {
        var ua = top.navigator.userAgent.toLowerCase();
        return ua.indexOf('android') !== -1 || ua.indexOf('ubuntu') !== -1;
    };

    EAPI.isAdapter = function() {
      return !!window.ysp
    };

    EAPI.isStudio = function() {
        // 判断是否在 electron
        return top.navigator.userAgent.toLowerCase().indexOf('electron') !== -1;
    };

    var DEVICE_ANDROID = "android";
    var DEVICE_IOS = "ios";
    var DEVICE_WIN = "win";
    var DEVICE_STUDIO = "studio";
    var DEVICE_UNKNOWN = "unknown";

    var CURRENT_DEVICE = EAPI.isAndroid() ? DEVICE_ANDROID :
        EAPI.isIOS() ? DEVICE_IOS :
            EAPI.isWin() ? DEVICE_WIN :
                EAPI.isStudio() ? DEVICE_STUDIO : DEVICE_UNKNOWN;

    function callAPI(name, args) {

        var device = EAPI.devices[CURRENT_DEVICE];

        if(device && device[name]){
            return device[name].apply(device, args);
        }
    }

    function cloneArray(data) {
        return Array.prototype.slice.call(data);
    }

    //通知浏览器当前适配的PC页面地址，用于浏览器打开原始网页
    EAPI.setTargetURL = function(url) {
        var args = cloneArray(arguments);
        return callAPI('setTargetURL', args);
    };

    //通知浏览器执行回退操作
    EAPI.back = function() {
        var args = cloneArray(arguments);
        return callAPI('back', args);
    };

    //通知浏览器关闭当前的页面
    EAPI.closeWindow = function() {
        var args = cloneArray(arguments);
        return callAPI('closeWindow', args);
    };

    //通知浏览器预加载已经完成
    EAPI.loadFinished = function() {
        var args = cloneArray(arguments);
        return callAPI('loadFinished', args);
    };

    // 得到菜单数据
    EAPI.getMenus = function() {
        var args = cloneArray(arguments);
        return callAPI('getMenus', args);
    };

})(window);

(function(win) {

  EAPI.devices.android = {
    setTargetURL: function(url) {
      window.yspUser.setTargetURL(url);
    },
    back: function() {
      window.yspUser.back();
    },
    closeWindow: function() {
      window.yspUser.closeWindow();
    },
    loadFinished: function() {
      window.yspUser.loadFinished();
    },
    getMenus: function() {
      return JSON.parse(window.yspUser.getMenu());
    }
  };

})(window);

(function(win) {

  EAPI.devices.ios = {
    setTargetURL: function(url) {
      connectBridge('setTargetURL', {url: url}, emptyFn);
    },
    back: function() {
      connectBridge('back', {}, emptyFn);
    },
    closeWindow: function() {
      connectBridge('closeWindow', {}, emptyFn);
    },
    getMenus: function(cb) {
      connectBridge('getMenu', {}, cb || emptyFn);
    }
  };

  function emptyFn() {
  }

  function connectIOSWebViewJavascriptBridge(callback) {
    if (win.WebViewJavascriptBridge) {
      callback(win.WebViewJavascriptBridge);
    } else {
      win.document.addEventListener('WebViewJavascriptBridgeReady', function() {
        callback(win.WebViewJavascriptBridge);
      }, false);
    }
  }

  var inited = false;

  function connectBridge(name, options, fn) {
    connectIOSWebViewJavascriptBridge(function(enterplorer) {

      if (!inited) {

        if (!enterplorer.init) {
          return;
        }

        //确保初始化一遍
        enterplorer.init(function(message, responseCallback) {
          responseCallback('');
        });
        inited = true;
      }
      enterplorer.callHandler(name, options, fn);
    });

    // 新方法
    setupWebViewJavascriptBridge(function(bridge) {
      bridge.callHandler(name, fn);
    })
  }

  // 新方法
  function setupWebViewJavascriptBridge(callback) {
    if (window.WebViewJavascriptBridge) { return callback(WebViewJavascriptBridge); }
    if (window.WVJBCallbacks) { return window.WVJBCallbacks.push(callback); }
    window.WVJBCallbacks = [callback];
    var WVJBIframe = document.createElement('iframe');
    WVJBIframe.style.display = 'none';
    WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
    document.documentElement.appendChild(WVJBIframe);
    setTimeout(function() { document.documentElement.removeChild(WVJBIframe) }, 0)
  }

})(window);

(function(win) {

    EAPI.devices.studio = {
        setTargetURL: function(url) {
            return false;
        },
        back: function() {
            return false;
        },
        closeWindow: function() {
            return false;
        },
        loadFinished: function() {
            return false;
        }
    };

})(window);

(function(win) {

    EAPI.devices.unknown = {
        setTargetURL: function(url) {
            return false;
        },
        back: function() {
            top.history.back();
        },
        closeWindow: function() {
            return false;
        },
        loadFinished: function() {
            return false;
        }
    };

})(window);

(function(win) {

    EAPI.devices.win = {
        setTargetURL: function(url) {

        },
        back: function() {

        },
        closeWindow: function() {

        },
        loadFinished: function() {

        }
    };

})(window);

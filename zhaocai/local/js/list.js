var titleText = "OA";

/**

  示例数据

[{
    "appId": "572027c5260f953f5628fc34",
    "appImgUrl": "http://211.157.174.250:10000/files/icons/applicationLogo/182b21810c2211e6b335e1973d338a2b.png",
    "appName": "已办列表",
    "appType": "offlineApp",
    "appLink": "http://192.168.0.200:8080/ptsoa//theme/FixCS/FlowCenter/UniformTaskDone.html",
    "index": 130002,
    "useVpn": false,
    "vpnIds": [],
    "createdTime": "2016-04-27 10:45"
}, {
    "appId": "572027c5260f953f5628fc35",
    "appImgUrl": "http://211.157.174.250:10000/files/icons/applicationLogo/182b48900c2211e6b335e1973d338a2b.png",
    "appName": "流程追踪",
    "appType": "offlineApp",
    "appLink": "http://192.168.0.200:8080/ptsoa//theme/FixCS/FlowCenter/UniformMyInvolvedTask.html",
    "index": 130003,
    "useVpn": false,
    "vpnIds": [],
    "createdTime": "2016-04-27 10:45"
}, {
    "appId": "572027c5260f953f5628fc36",
    "appImgUrl": "http://211.157.174.250:10000/files/icons/applicationLogo/182b21800c2211e6b335e1973d338a2b.png",
    "appName": "待办列表",
    "appType": "offlineApp",
    "appLink": "http://192.168.0.200:8080/ptsoa//theme/FixCS/FlowCenter/UniformMyAllTask.html",
    "index": 130001,
    "useVpn": false,
    "vpnIds": [],
    "createdTime": "2016-04-27 10:45"
}]

***/

var jsonObj = [{
    "appName": "待办列表",
    "appImgUrl": "img/OA.png",
    "appLink": "http://192.168.0.200:8080/ptsoa//theme/FixCS/FlowCenter/UniformMyAllTask.html"
}, {
    "appName": "已办列表",
    "appImgUrl": "img/fagao.png",
    "appLink": "http://192.168.0.200:8080/ptsoa//theme/FixCS/FlowCenter/UniformTaskDone.html"
}, {
    "appName": "流程追踪",
    "appImgUrl": "img/neibu.png",
    "appLink": "http://192.168.0.200:8080/ptsoa//theme/FixCS/FlowCenter/UniformMyInvolvedTask.html"
}];

if (window.yspUser && window.yspUser.getMenu) {
    jsonObj = EAPI.devices.android.getMenus();
    next();
} else {
    EAPI.devices.ios.getMenus(function(data) {
        jsonObj = data;
        next();
    });
}

function next() {
    var title = document.getElementById('title');
    title.innerText = titleText;
    document.title = titleText;
    var menu = document.getElementById('menu');
    var menu_list = document.createElement('ul');
    menu_list.className = "list";
    jsonObj.forEach(function(elem) {
        var li = document.createElement('li');
        li.className = "item item-linked";
        var a = document.createElement('a');
        a.href = elem.appLink;
        var img = document.createElement('img');
        img.src = elem.appImgUrl;
        img.width = "32";
        var div_media = document.createElement('div');
        div_media.className = "item-media";
        var div_main = document.createElement('div');
        div_main.className = "item-main";
        var h3 = document.createElement('h3');
        h3.className = "item-title";
        h3.innerText = elem.appName;
        var span = document.createElement('span');
        span.className = "icon icon-right-nav item-icon";
        div_main.appendChild(h3);
        div_main.appendChild(span);
        div_media.appendChild(img);
        a.appendChild(div_media);
        a.appendChild(div_main);
        li.appendChild(a);
        menu_list.appendChild(li);
    });
    menu.appendChild(menu_list);
}

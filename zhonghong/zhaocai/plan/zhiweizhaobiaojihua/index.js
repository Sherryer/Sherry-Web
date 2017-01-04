(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control95: function (elem) {},
    doAction_uiControl162: function (data, elem) {},
    getTemplate_uiControl162: function () {
      var selfTemplate = "import { Backbtn } from 'ysp-custom-components';\n\nmodule.exports = React.createClass({\n  render: function(){\n\n\n    return (\n        <Backbtn title=\"\u76F4\u59D4\u62DB\u6807\u8BA1\u5212\u5BA1\u6279\" describe={{}} />\n\n    )\n  }\n});\n";
      return "\"use strict\";\n\nvar _yspCustomComponents = require(\"ysp-custom-components\");\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n\n    return React.createElement(_yspCustomComponents.Backbtn, { title: \"\\u76F4\\u59D4\\u62DB\\u6807\\u8BA1\\u5212\\u5BA1\\u6279\", describe: {} });\n  }\n});";
    },
    getData_control97: function (elem) {
      var data = [];
      $(elem).children().slice(2).each(function () {
        var dataItem = [];
        var temp = $(this).find("td").eq(0)[0].childNodes[0].textContent + ":";
        dataItem.push(temp);
        dataItem.push($(this).find("td").eq(2).text());
        dataItem.push($(this).find("td").eq(1).text());
        dataItem.push($(this).find("td").eq(3).text());
        dataItem.push($(this).find("td").eq(4).text());
        dataItem.push($(this).find("td").eq(5).text());
        data.push(dataItem);
      });
      return data;
    },
    doAction_uiControl165: function (data, elem) {},
    getTemplate_uiControl165: function () {
      var selfTemplate = "var React = require('react');\n\nmodule.exports = React.createClass({\n  click:function(){\n    let div = this.refs.div;\n    let icon = this.refs.icon;\n    if(div.style.display == \"none\"){\n    div.style.display = \"block\"\n    icon.style.transform=\"rotate(180deg)\"\n    }else{\n    \tdiv.style.display = \"none\";\n      icon.style.transform=\"\"\n    }\n  },\n  render: function(){\n    var data = this.props.data.customData;\n\n\n\n   var item = data.map(function(d,i){\n    \treturn (\n      \t<div className = \"lishi\">\n          <div className = 'lishiItem-1'>\n          \t<p>{d[0]}{d[2]}</p>\n            <p>{d[1]}</p>\n          </div>\n          <div className = 'lishiItem-2'>\n            <p>{d[3]}</p>\n          </div>\n          <div className = 'lishiItem-3'>\n            {\n            //<p>\u63A5\u6536\u65F6\u95F4:{d[4]}</p>\n            }\n            <p>\u64CD\u4F5C\u65F6\u95F4\uFF1A{d[5]}</p>\n          </div>\n        </div>\n      )\n    })\n    return (\n      <div>\n\n        <div className=\"partTitle\">\n          \u5BA1\u6279\u5386\u53F2\n        </div>\n        <div className = \"zhTextCon spls\">\n          {item}\n        </div>\n      </div>\n\n    )\n  }\n});\n";
      return "\"use strict\";\n\nvar React = require('react');\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  click: function click() {\n    var div = this.refs.div;\n    var icon = this.refs.icon;\n    if (div.style.display == \"none\") {\n      div.style.display = \"block\";\n      icon.style.transform = \"rotate(180deg)\";\n    } else {\n      div.style.display = \"none\";\n      icon.style.transform = \"\";\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n\n    var item = data.map(function (d, i) {\n      return React.createElement(\n        \"div\",\n        { className: \"lishi\" },\n        React.createElement(\n          \"div\",\n          { className: \"lishiItem-1\" },\n          React.createElement(\n            \"p\",\n            null,\n            d[0],\n            d[2]\n          ),\n          React.createElement(\n            \"p\",\n            null,\n            d[1]\n          )\n        ),\n        React.createElement(\n          \"div\",\n          { className: \"lishiItem-2\" },\n          React.createElement(\n            \"p\",\n            null,\n            d[3]\n          )\n        ),\n        React.createElement(\n          \"div\",\n          { className: \"lishiItem-3\" },\n          React.createElement(\n            \"p\",\n            null,\n            \"\\u64CD\\u4F5C\\u65F6\\u95F4\\uFF1A\",\n            d[5]\n          )\n        )\n      );\n    });\n    return React.createElement(\n      \"div\",\n      null,\n      React.createElement(\n        \"div\",\n        { className: \"partTitle\" },\n        \"\\u5BA1\\u6279\\u5386\\u53F2\"\n      ),\n      React.createElement(\n        \"div\",\n        { className: \"zhTextCon spls\" },\n        item\n      )\n    );\n  }\n});";
    },
    getData_control98: function (elem) {
      let lc = [].slice.call(elem.children).map((value, index) => ({
        cont: $.trim(value.textContent),
        class: value.className
      }));
      return lc;
    },
    doAction_uiControl168: function (data, elem) {},
    getTemplate_uiControl168: function () {
      var selfTemplate = "var React = require('react');\n\nmodule.exports = React.createClass({\n  click:function(){\n    let div = this.refs.div;\n    let icon = this.refs.icon;\n    if(div.style.display == \"none\"){\n    div.style.display = \"block\"\n    icon.style.transform=\"rotate(90deg)\"\n    }else{\n    \tdiv.style.display = \"none\";\n      icon.style.transform=\"\"\n    }\n  },\n  render: function(){\n    var data = this.props.data.customData;\n\n    const header = {\n    \tpadding:\"2px 0 2px 8px\",\n      borderLeft:\"7px solid #45bcff\",\n      borderBottom:\"1px solid #e6e6e6\",\n      color:\"#45bcff\",\n      fontWeight: \"bolder\",\n      fontSize:\"16px\",\n      textAlign:\"left\"\n    }\n\n    const body = {\n      padding:\"15px 8px\",\n      color:\"#3f3f3f\"\n                 }\n\n\n    return (\n      <div style={{textAlign:\"center\"}}>\n\n        <div className=\"partTitle\">\n          \u5BA1\u6279\u6D41\u7A0B\n        </div>\n\n        <div className=\"partBody\">\n\n        \t<div className = \"textleft\">\n            {data.map(function(value,index){\n\n            var z = value.cont.split(\"\\n\");\n            var length = z.length-1;\n            var x= z[0]+\" \u3010\"+z[length]+\"\u3011\";\n\n            var blue = {};\n\n            if(value.class==\"cblue\"){\n            \tblue = {color:\"#0b84f7\",fontWeight:\"bold\"}\n            }\n\n\n            if(index < data.length-1){\n            \treturn(\n            <span>\n                <span style = {blue}>{x}</span>\n                <span>-></span>\n            </span>\n            )\n            }else{\n            return(\n            <span style = {blue}>\n                {x}\n            </span>\n            )\n\n            }\n          })}\n          </div>\n\n\n        </div>\n\n\n\n\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nvar React = require('react');\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  click: function click() {\n    var div = this.refs.div;\n    var icon = this.refs.icon;\n    if (div.style.display == \"none\") {\n      div.style.display = \"block\";\n      icon.style.transform = \"rotate(90deg)\";\n    } else {\n      div.style.display = \"none\";\n      icon.style.transform = \"\";\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n\n    var header = {\n      padding: \"2px 0 2px 8px\",\n      borderLeft: \"7px solid #45bcff\",\n      borderBottom: \"1px solid #e6e6e6\",\n      color: \"#45bcff\",\n      fontWeight: \"bolder\",\n      fontSize: \"16px\",\n      textAlign: \"left\"\n    };\n\n    var body = {\n      padding: \"15px 8px\",\n      color: \"#3f3f3f\"\n    };\n\n    return React.createElement(\n      \"div\",\n      { style: { textAlign: \"center\" } },\n      React.createElement(\n        \"div\",\n        { className: \"partTitle\" },\n        \"\\u5BA1\\u6279\\u6D41\\u7A0B\"\n      ),\n      React.createElement(\n        \"div\",\n        { className: \"partBody\" },\n        React.createElement(\n          \"div\",\n          { className: \"textleft\" },\n          data.map(function (value, index) {\n\n            var z = value.cont.split(\"\\n\");\n            var length = z.length - 1;\n            var x = z[0] + \" \u3010\" + z[length] + \"\u3011\";\n\n            var blue = {};\n\n            if (value.class == \"cblue\") {\n              blue = { color: \"#0b84f7\", fontWeight: \"bold\" };\n            }\n\n            if (index < data.length - 1) {\n              return React.createElement(\n                \"span\",\n                null,\n                React.createElement(\n                  \"span\",\n                  { style: blue },\n                  x\n                ),\n                React.createElement(\n                  \"span\",\n                  null,\n                  \"->\"\n                )\n              );\n            } else {\n              return React.createElement(\n                \"span\",\n                { style: blue },\n                x\n              );\n            }\n          })\n        )\n      )\n    );\n  }\n});";
    },
    getData_control99: function (elem) {
      var trs = [];
      var add = 0;
      [].slice.call(elem.querySelectorAll("tr")).map((value, index) => {
        if (value.style.display !== "none") {
          trs.push(value);
        }
      });
      var zf = trs[1] && trs[1].querySelectorAll("input")[0];

      if (zf && zf.value == "转  发" && zf.display !== "none") {
        zf.click();
        add = 1;
      }

      if (trs[2] && trs[2].querySelectorAll("input")[2] && trs[2].querySelectorAll("input")[2].value == "选 择..") {
        add = 1;
      }

      var data = [];
      var selectOption = [];
      var select = elem.querySelector("select");
      var flag = true;

      if (select && select.parentNode.parentNode.style.display == "none") {
        flag = false;
      }

      $(elem).find("select").find("option").each(function () {
        selectOption.push($(this).text());
      });
      data.push(selectOption);
      data.push($(elem).find("textarea").val());

      if (data[1] == undefined || flag == false) {
        data[1] = "zihui";
      }

      var ipts = trs[2 + add] && trs[2 + add].querySelectorAll("input");
      var btn = [];
      var length = 0;

      if (ipts) {
        length = ipts.length;
      }

      for (let i = 0; i < length; i++) {
        if (ipts[i].type == "button" && ipts[i].style.display !== "none") {
          btn.push(ipts[i].value);
        }
      }

      return {
        data: data,
        btn: btn
      };
    },
    doAction_uiControl169: function (data, elem) {
      var data = data.dataCustom;

      if (data[1] == "select") {
        $(elem).find("select").find("option").eq(data[0])[0].selected = true;
        $(elem).find("select")[0].dispatchEvent(new Event("change"));
      } else if (data[1] == "text") {
        $(elem).find("textarea").val(data[0]);
      }

      function checkIpt() {
        var trs = [];
        var add = 0;
        [].slice.call(elem.querySelectorAll("tr")).map((value, index) => {
          if (value.style.display !== "none") {
            trs.push(value);
          }
        });
        var ipts;

        if (trs[2].querySelectorAll("input")[2] && trs[2].querySelectorAll("input")[2].value == "选 择..") {
          ipts = trs[3].querySelectorAll("input");
        } else {
          ipts = trs[2].querySelectorAll("input");
        }

        var iptnow = [];
        [].slice.call(ipts).map((value, index) => {
          if (value.style.display !== "none" && value.type == "button") {
            iptnow.push(value);
          }
        });
        return iptnow;
      }

      if (data[1] == "btn1") {
        var ipts = checkIpt();
        ipts[0].click();
      }

      if (data[1] == "btn2") {
        var ipts = checkIpt();
        ipts[1].click();
      }

      if (data[1] == "btn3") {
        var ipts = checkIpt();
        ipts[2].click();
      }

      if (data[1] == "btn4") {
        var ipts = checkIpt();
        ipts[3].click();
      }
    },
    getTemplate_uiControl169: function () {
      var selfTemplate = "var React = require('react');\n\nmodule.exports = React.createClass({\n  componentDidMount:function(){\n  \tvar data = this.props.customData.data;\n    if(data[1] == \"zihui\"){\n    \t this.refs.done.outerHTML=\"\"\n    }\n  },\n\n  onChange(e){\n  \tvar index = e.target.selectedIndex;\n    var handler = this.props.customHandler;\n    if(handler){\n    \thandler({\n      \tdata : [index,\"select\"]\n      })\n    }\n  },\n  onBlur(e){\n  \tvar content = e.target.value;\n    var handler = this.props.customHandler;\n    if(handler){\n    \thandler({\n      \tdata : [content,\"text\"]\n      })\n    }\n  },\n  onClick1(e){\n  \tvar handler = this.props.customHandler;\n    if(handler){\n    \thandler({\n      \tdata : [\"111\",\"btn1\"]\n      })\n    }\n  },\n  onClick2(e){\n  \tvar handler = this.props.customHandler;\n    if(handler){\n    \thandler({\n      \tdata : [\"111\",\"btn2\"]\n      })\n    }\n  },\n    onClick3(e){\n  \tvar handler = this.props.customHandler;\n    if(handler){\n    \thandler({\n      \tdata : [\"2\",\"btn3\"]\n      })\n    }\n  },\n    onClick4(e){\n  \tvar handler = this.props.customHandler;\n    if(handler){\n    \thandler({\n      \tdata : [\"3\",\"btn4\"]\n      })\n    }\n  },\n  render: function(){\n    var data = this.props.customData;\n    var _this = this;\n    var item = data.data[0].map(function(d,i){\n    \tif(i==0){\n        return (<option selected>{d}</option>)\n\n      }\n      else{\n      \treturn(<option>{d}</option>)\n      }\n    })\n    return (\n      <div ref = \"done\" className = 'custom1'>\n      \t<h2>\u5BA1\u6279\u610F\u89C1</h2>\n        <div className = \"zhShenpiCon\">\n\n          <select onChange = {_this.onChange}>\n            {item}\n          </select>\n          <textarea onBlur = {_this.onBlur} value = {data.data[1]}></textarea>\n\n          <div className = \"buttonCon\">\n          \t{data.btn[0]&& <button className = \"btn btn-success btn-block waves-effect\" onClick = {_this.onClick1}>{data.btn[0]}</button>}\n            {data.btn[1]&& <button className = \"btn btn-alert btn-block waves-effect\" onClick = {_this.onClick2}>{data.btn[1]}</button>}\n            {data.btn[2]&& <button style={{marginBottom:\"10px\"}} className = \"btn btn-warning btn-block waves-effect\" onClick = {_this.onClick3}>{data.btn[2]}</button>}\n            {data.btn[3]&& <button className = \"btn btn-secondary btn-block waves-effect\" onClick = {_this.onClick4}>{data.btn[3]}</button>}\n          </div>\n        </div>\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nvar React = require('react');\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  componentDidMount: function componentDidMount() {\n    var data = this.props.customData.data;\n    if (data[1] == \"zihui\") {\n      this.refs.done.outerHTML = \"\";\n    }\n  },\n\n  onChange: function onChange(e) {\n    var index = e.target.selectedIndex;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: [index, \"select\"]\n      });\n    }\n  },\n  onBlur: function onBlur(e) {\n    var content = e.target.value;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: [content, \"text\"]\n      });\n    }\n  },\n  onClick1: function onClick1(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: [\"111\", \"btn1\"]\n      });\n    }\n  },\n  onClick2: function onClick2(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: [\"111\", \"btn2\"]\n      });\n    }\n  },\n  onClick3: function onClick3(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: [\"2\", \"btn3\"]\n      });\n    }\n  },\n  onClick4: function onClick4(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: [\"3\", \"btn4\"]\n      });\n    }\n  },\n\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    var item = data.data[0].map(function (d, i) {\n      if (i == 0) {\n        return React.createElement(\n          \"option\",\n          { selected: true },\n          d\n        );\n      } else {\n        return React.createElement(\n          \"option\",\n          null,\n          d\n        );\n      }\n    });\n    return React.createElement(\n      \"div\",\n      { ref: \"done\", className: \"custom1\" },\n      React.createElement(\n        \"h2\",\n        null,\n        \"\\u5BA1\\u6279\\u610F\\u89C1\"\n      ),\n      React.createElement(\n        \"div\",\n        { className: \"zhShenpiCon\" },\n        React.createElement(\n          \"select\",\n          { onChange: _this.onChange },\n          item\n        ),\n        React.createElement(\"textarea\", { onBlur: _this.onBlur, value: data.data[1] }),\n        React.createElement(\n          \"div\",\n          { className: \"buttonCon\" },\n          data.btn[0] && React.createElement(\n            \"button\",\n            { className: \"btn btn-success btn-block waves-effect\", onClick: _this.onClick1 },\n            data.btn[0]\n          ),\n          data.btn[1] && React.createElement(\n            \"button\",\n            { className: \"btn btn-alert btn-block waves-effect\", onClick: _this.onClick2 },\n            data.btn[1]\n          ),\n          data.btn[2] && React.createElement(\n            \"button\",\n            { style: { marginBottom: \"10px\" }, className: \"btn btn-warning btn-block waves-effect\", onClick: _this.onClick3 },\n            data.btn[2]\n          ),\n          data.btn[3] && React.createElement(\n            \"button\",\n            { className: \"btn btn-secondary btn-block waves-effect\", onClick: _this.onClick4 },\n            data.btn[3]\n          )\n        )\n      )\n    );\n  }\n});";
    },
    getData_control100: function (elem) {
      var lis = elem.querySelectorAll("li");
      var content = [];
      let color = [];
      [].slice.call(lis).map((value, index) => {
        content.push(value.textContent);
        var hisColor = value.className.split("_")[1];
        var now = "";
        var now = "";

        if (hisColor == "green") {
          now = "checkGreen";
        } else if (hisColor == "red") {
          now = "checkRed";
        } else if (hisColor == "yellow") {
          now = "checkYellow";
        }

        color.push(now);
      });
      return {
        content: content,
        color: color
      };
    },
    doAction_uiControl171: function (data, elem) {},
    getTemplate_uiControl171: function () {
      var selfTemplate = "var React = require('react');\n\nmodule.exports = React.createClass({\n  click:function(){\n    let div = this.refs.div;\n    let div1 = this.refs.div1;\n    let icon = this.refs.icon;\n    if(div.style.display == \"none\"){\n    div.style.display = \"block\"\n    div1.style.display = \"none\";\n    icon.style.transform=\"rotate(180deg)\"\n    }else{\n    \tdiv.style.display = \"none\";\n      div1.style.display = \"block\"\n      icon.style.transform=\"\"\n    }\n  },\n\n  render: function(){\n    var data = this.props.data.customData;\n\n    return (\n      <div style={{position:\"relative\",textAlign:\"center\"}}>\n\n        <div ref = \"icon\" onClick={this.click} style={{padding:\"3px\",right:0,position:\"absolute\",color:\"white\"}}>\n          <span style={{transform:\"scale(0.7)\",color:\"#949494\"}} className=\"icon icon-down-nav navbar-icon\"></span>\n      \t</div>\n\n        <div  onClick={this.click} className=\"partTitle\">\n          \u7BA1\u63A7\u8981\u70B9\n        </div>\n\n\n        <div ref = \"div1\" className = \"zhTableCon\">\n        <table  className = \"zhTable3\">\n            <thead>\n                <tr>\n                    <td width=\"15%\">\u5E8F\u53F7</td>\n                    <td>\u5BA1\u6279\u7BA1\u63A7\u8981\u70B9</td>\n                    <td width=\"15%\">\u72B6\u6001</td>\n                </tr>\n            </thead>\n            <tbody>\n              {\n                data&&data.content.map((value,index)=>{\n              \tif(index<4){\n                return (\n                <tr>\n                    <td>{index+1}</td>\n                    <td>{value}</td>\n                    <td><div style ={{height:\"20px\"}} className = {data.color[index]}></div></td>\n                </tr>\n                )\n                }\n              })\n              }\n            </tbody>\n\t\t\t\t\t</table>\n      \t</div>\n\n\n        <div  style = {{display:\"none\"}} ref = \"div\">\n        \t<div className = \"zhTableCon\">\n          <table  className = \"zhTable3\">\n            <thead>\n                <tr>\n                    <td width=\"15%\">\u5E8F\u53F7</td>\n                    <td>\u5BA1\u6279\u7BA1\u63A7\u8981\u70B9</td>\n                    <td width=\"15%\">\u72B6\u6001</td>\n                </tr>\n            </thead>\n            <tbody>\n              {\n                data&&data.content.map((value,index)=>{\n              \treturn (\n                <tr>\n                    <td>{index+1}</td>\n                    <td>{value}</td>\n                    <td><div style ={{height:\"20px\"}} className = {data.color[index]}></div></td>\n                </tr>\n                )\n              })\n              }\n            </tbody>\n\t\t\t\t\t</table>\n      \t</div>\n        </div>\n\n\n    </div>\n    )\n  }\n});\n";
      return "\"use strict\";\n\nvar React = require('react');\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  click: function click() {\n    var div = this.refs.div;\n    var div1 = this.refs.div1;\n    var icon = this.refs.icon;\n    if (div.style.display == \"none\") {\n      div.style.display = \"block\";\n      div1.style.display = \"none\";\n      icon.style.transform = \"rotate(180deg)\";\n    } else {\n      div.style.display = \"none\";\n      div1.style.display = \"block\";\n      icon.style.transform = \"\";\n    }\n  },\n\n  render: function render() {\n    var data = this.props.data.customData;\n\n    return React.createElement(\n      \"div\",\n      { style: { position: \"relative\", textAlign: \"center\" } },\n      React.createElement(\n        \"div\",\n        { ref: \"icon\", onClick: this.click, style: { padding: \"3px\", right: 0, position: \"absolute\", color: \"white\" } },\n        React.createElement(\"span\", { style: { transform: \"scale(0.7)\", color: \"#949494\" }, className: \"icon icon-down-nav navbar-icon\" })\n      ),\n      React.createElement(\n        \"div\",\n        { onClick: this.click, className: \"partTitle\" },\n        \"\\u7BA1\\u63A7\\u8981\\u70B9\"\n      ),\n      React.createElement(\n        \"div\",\n        { ref: \"div1\", className: \"zhTableCon\" },\n        React.createElement(\n          \"table\",\n          { className: \"zhTable3\" },\n          React.createElement(\n            \"thead\",\n            null,\n            React.createElement(\n              \"tr\",\n              null,\n              React.createElement(\n                \"td\",\n                { width: \"15%\" },\n                \"\\u5E8F\\u53F7\"\n              ),\n              React.createElement(\n                \"td\",\n                null,\n                \"\\u5BA1\\u6279\\u7BA1\\u63A7\\u8981\\u70B9\"\n              ),\n              React.createElement(\n                \"td\",\n                { width: \"15%\" },\n                \"\\u72B6\\u6001\"\n              )\n            )\n          ),\n          React.createElement(\n            \"tbody\",\n            null,\n            data && data.content.map(function (value, index) {\n              if (index < 4) {\n                return React.createElement(\n                  \"tr\",\n                  null,\n                  React.createElement(\n                    \"td\",\n                    null,\n                    index + 1\n                  ),\n                  React.createElement(\n                    \"td\",\n                    null,\n                    value\n                  ),\n                  React.createElement(\n                    \"td\",\n                    null,\n                    React.createElement(\"div\", { style: { height: \"20px\" }, className: data.color[index] })\n                  )\n                );\n              }\n            })\n          )\n        )\n      ),\n      React.createElement(\n        \"div\",\n        { style: { display: \"none\" }, ref: \"div\" },\n        React.createElement(\n          \"div\",\n          { className: \"zhTableCon\" },\n          React.createElement(\n            \"table\",\n            { className: \"zhTable3\" },\n            React.createElement(\n              \"thead\",\n              null,\n              React.createElement(\n                \"tr\",\n                null,\n                React.createElement(\n                  \"td\",\n                  { width: \"15%\" },\n                  \"\\u5E8F\\u53F7\"\n                ),\n                React.createElement(\n                  \"td\",\n                  null,\n                  \"\\u5BA1\\u6279\\u7BA1\\u63A7\\u8981\\u70B9\"\n                ),\n                React.createElement(\n                  \"td\",\n                  { width: \"15%\" },\n                  \"\\u72B6\\u6001\"\n                )\n              )\n            ),\n            React.createElement(\n              \"tbody\",\n              null,\n              data && data.content.map(function (value, index) {\n                return React.createElement(\n                  \"tr\",\n                  null,\n                  React.createElement(\n                    \"td\",\n                    null,\n                    index + 1\n                  ),\n                  React.createElement(\n                    \"td\",\n                    null,\n                    value\n                  ),\n                  React.createElement(\n                    \"td\",\n                    null,\n                    React.createElement(\"div\", { style: { height: \"20px\" }, className: data.color[index] })\n                  )\n                );\n              })\n            )\n          )\n        )\n      )\n    );\n  }\n});";
    },
    getData_control101: function (elem) {
      var arr = [elem.querySelectorAll("a")];
      var array = [];

      for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
          array.push(arr[i][j]);
        }
      }

      var arr2 = [];

      for (var z = 0; z < array.length; z++) {
        if (z % 2 == 0) {
          arr2.push(array[z]);
        }
      }

      var a = arr2;
      var targeta = [].slice.call(a).map((value, index) => value.textContent);
      var conta = [].slice.call(a).map((value, index) => {
        return value.parentNode.nextElementSibling.textContent;
      });
      return {
        targeta: targeta,
        conta: conta
      };
    },
    doAction_uiControl175: function (data, elem) {
      if (data.eventType === 'click') {
        var arr = [elem.querySelectorAll("a")];
        var array = [];

        for (var i = 0; i < arr.length; i++) {
          for (var j = 0; j < arr[i].length; j++) {
            array.push(arr[i][j]);
          }
        }

        var arr2 = [];

        for (var z = 0; z < array.length; z++) {
          if (z % 2 == 0) {
            arr2.push(array[z]);
          }
        }

        var d = data.dataCustom;
        arr2[d].click();
      }
    },
    getTemplate_uiControl175: function () {
      var selfTemplate = "var React = require('react');\n\nmodule.exports = React.createClass({\n  click:function(){\n    let div = this.refs.div;\n    let div1 = this.refs.div1;\n    let icon = this.refs.icon;\n    if(div.style.display == \"none\"){\n    div.style.display = \"block\";\n    div1.style.display = \"none\"\n    icon.style.transform=\"rotate(180deg)\"\n    }else{\n    \tdiv.style.display = \"none\";\n      div1.style.display = \"block\"\n      icon.style.transform=\"\"\n    }\n  },\n\n  down:function(z){\n  \tvar callBack = this.props.customHandler;\n    if(callBack) {\n      callBack({\n        data:z,\n        eventType:'click'\n      })\n    }\n  },\n  render: function(){\n    var data = this.props.data.customData;\n\n\n\n\n    return (\n      <div style={{position:\"relative\",textAlign:\"center\"}}>\n\n\n\n\n        <div ref = \"icon\" onClick={this.click} style={{padding:\"3px\",right:0,position:\"absolute\",color:\"white\"}}>\n          <span style={{transform:\"scale(0.7)\",color:\"#949494\"}} className=\"icon icon-down-nav navbar-icon\"></span>\n      \t</div>\n\n        <div  onClick={this.click} className=\"partTitle\">\n          \u76F8\u5173\u9644\u4EF6\n        </div>\n\n\n\n        <div ref = \"div1\" className=\"partBody\" style={{textAlign:\"left\",padding:\"10px\"}}>\n\n          <table  className = \"zhTable\">\n            <thead>\n                <tr>\n                    <td>\u9644\u4EF6\u540D\u79F0</td>\n                    <td>\u5907\u6CE8</td>\n                </tr>\n            </thead>\n            <tbody>\n              {\n                data&&data.targeta.map((value,index)=>{\n              \tif(index<2){\n                return (\n                <tr>\n                    <td onClick={this.down.bind(null,index)} className=\"blue\">{value}</td>\n                    <td>{data.conta[index]||\"\u65E0\"}</td>\n                </tr>\n                )\n                }\n              })\n              }\n            </tbody>\n\t\t\t\t\t</table>\n\n        </div>\n\n\n\n\n        <div ref = \"div\"  className=\"partBody\" style={{display:\"none\",textAlign:\"left\",padding:\"10px\"}}>\n\n          <table  className = \"zhTable\">\n            <thead>\n                <tr>\n                    <td>\u9644\u4EF6\u540D\u79F0</td>\n                    <td>\u5907\u6CE8</td>\n                </tr>\n            </thead>\n            <tbody>\n              {\n                data&&data.targeta.map((value,index)=>{\n\n                return (\n                <tr>\n                    <td onClick={this.down.bind(null,index)} className=\"blue\">{value}</td>\n                    <td>{data.conta[index]||\"\u65E0\"}</td>\n                </tr>\n                )\n\n              })\n              }\n            </tbody>\n\t\t\t\t\t</table>\n\n        </div>\n\n\n\n\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nvar React = require('react');\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  click: function click() {\n    var div = this.refs.div;\n    var div1 = this.refs.div1;\n    var icon = this.refs.icon;\n    if (div.style.display == \"none\") {\n      div.style.display = \"block\";\n      div1.style.display = \"none\";\n      icon.style.transform = \"rotate(180deg)\";\n    } else {\n      div.style.display = \"none\";\n      div1.style.display = \"block\";\n      icon.style.transform = \"\";\n    }\n  },\n\n  down: function down(z) {\n    var callBack = this.props.customHandler;\n    if (callBack) {\n      callBack({\n        data: z,\n        eventType: 'click'\n      });\n    }\n  },\n  render: function render() {\n    var _this = this;\n\n    var data = this.props.data.customData;\n\n    return React.createElement(\n      \"div\",\n      { style: { position: \"relative\", textAlign: \"center\" } },\n      React.createElement(\n        \"div\",\n        { ref: \"icon\", onClick: this.click, style: { padding: \"3px\", right: 0, position: \"absolute\", color: \"white\" } },\n        React.createElement(\"span\", { style: { transform: \"scale(0.7)\", color: \"#949494\" }, className: \"icon icon-down-nav navbar-icon\" })\n      ),\n      React.createElement(\n        \"div\",\n        { onClick: this.click, className: \"partTitle\" },\n        \"\\u76F8\\u5173\\u9644\\u4EF6\"\n      ),\n      React.createElement(\n        \"div\",\n        { ref: \"div1\", className: \"partBody\", style: { textAlign: \"left\", padding: \"10px\" } },\n        React.createElement(\n          \"table\",\n          { className: \"zhTable\" },\n          React.createElement(\n            \"thead\",\n            null,\n            React.createElement(\n              \"tr\",\n              null,\n              React.createElement(\n                \"td\",\n                null,\n                \"\\u9644\\u4EF6\\u540D\\u79F0\"\n              ),\n              React.createElement(\n                \"td\",\n                null,\n                \"\\u5907\\u6CE8\"\n              )\n            )\n          ),\n          React.createElement(\n            \"tbody\",\n            null,\n            data && data.targeta.map(function (value, index) {\n              if (index < 2) {\n                return React.createElement(\n                  \"tr\",\n                  null,\n                  React.createElement(\n                    \"td\",\n                    { onClick: _this.down.bind(null, index), className: \"blue\" },\n                    value\n                  ),\n                  React.createElement(\n                    \"td\",\n                    null,\n                    data.conta[index] || \"\u65E0\"\n                  )\n                );\n              }\n            })\n          )\n        )\n      ),\n      React.createElement(\n        \"div\",\n        { ref: \"div\", className: \"partBody\", style: { display: \"none\", textAlign: \"left\", padding: \"10px\" } },\n        React.createElement(\n          \"table\",\n          { className: \"zhTable\" },\n          React.createElement(\n            \"thead\",\n            null,\n            React.createElement(\n              \"tr\",\n              null,\n              React.createElement(\n                \"td\",\n                null,\n                \"\\u9644\\u4EF6\\u540D\\u79F0\"\n              ),\n              React.createElement(\n                \"td\",\n                null,\n                \"\\u5907\\u6CE8\"\n              )\n            )\n          ),\n          React.createElement(\n            \"tbody\",\n            null,\n            data && data.targeta.map(function (value, index) {\n\n              return React.createElement(\n                \"tr\",\n                null,\n                React.createElement(\n                  \"td\",\n                  { onClick: _this.down.bind(null, index), className: \"blue\" },\n                  value\n                ),\n                React.createElement(\n                  \"td\",\n                  null,\n                  data.conta[index] || \"\u65E0\"\n                )\n              );\n            })\n          )\n        )\n      )\n    );\n  }\n});";
    },
    getData_control102: function (elem) {
      var z = "无";

      if (elem.textContent.trim() !== "") {
        z = elem.textContent;
      }

      return z;
    },
    doAction_uiControl176: function (data, elem) {},
    getTemplate_uiControl176: function () {
      var selfTemplate = "var React = require('react');\n\n   module.exports = React.createClass({\n     click:function(){\n       let div = this.refs.div;\n       let div1 = this.refs.div1;\n       let icon = this.refs.icon;\n       if(div.style.display == \"none\"){\n       div.style.display = \"block\"\n       div1.style.display = \"none\";\n       icon.style.transform=\"rotate(180deg)\"\n       }else{\n       \tdiv.style.display = \"none\";\n         div1.style.display = \"block\"\n         icon.style.transform=\"\"\n       }\n     },\n\n     render: function(){\n       var data = this.props.data.customData;\n       \n\n       return (\n         <div style={{position:\"relative\",textAlign:\"center\"}}>\n\n           <div ref = \"icon\" onClick={this.click} style={{padding:\"3px\",right:0,position:\"absolute\",color:\"white\"}}>\n             <span style={{transform:\"scale(0.7)\",color:\"#949494\"}} className=\"icon icon-down-nav navbar-icon\"></span>\n         \t</div>\n\n           <div  onClick={this.click} className=\"partTitle\">\n             \u8BC4\u6807\u610F\u89C1\n           </div>\n\n\n           <div ref = \"div1\" className = \"zhTableCon\">\n           \t<table  className = \"zhTable3\">\n               <tbody>\n                 <tr>\n                   <td>\n                     <div style={{maxHeight:\"68px\",overflow:\"hidden\"}} dangerouslySetInnerHTML={{__html:data}}>\n\n                     </div>\n                   </td>\n                 </tr>\n               </tbody>\n   \t\t\t\t\t</table>\n         \t</div>\n\n\n           <div  style = {{display:\"none\"}} ref = \"div\">\n           \t<div className = \"zhTableCon\">\n             <table  className = \"zhTable3\">\n               <tbody>\n                 <tr>\n                   <td dangerouslySetInnerHTML={{__html:data}}></td>\n                 </tr>\n               </tbody>\n   \t\t\t\t\t</table>\n         \t</div>\n           </div>\n\n\n       </div>\n       )\n     }\n   });";
      return "\"use strict\";\n\nvar React = require('react');\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  click: function click() {\n    var div = this.refs.div;\n    var div1 = this.refs.div1;\n    var icon = this.refs.icon;\n    if (div.style.display == \"none\") {\n      div.style.display = \"block\";\n      div1.style.display = \"none\";\n      icon.style.transform = \"rotate(180deg)\";\n    } else {\n      div.style.display = \"none\";\n      div1.style.display = \"block\";\n      icon.style.transform = \"\";\n    }\n  },\n\n  render: function render() {\n    var data = this.props.data.customData;\n\n    return React.createElement(\n      \"div\",\n      { style: { position: \"relative\", textAlign: \"center\" } },\n      React.createElement(\n        \"div\",\n        { ref: \"icon\", onClick: this.click, style: { padding: \"3px\", right: 0, position: \"absolute\", color: \"white\" } },\n        React.createElement(\"span\", { style: { transform: \"scale(0.7)\", color: \"#949494\" }, className: \"icon icon-down-nav navbar-icon\" })\n      ),\n      React.createElement(\n        \"div\",\n        { onClick: this.click, className: \"partTitle\" },\n        \"\\u8BC4\\u6807\\u610F\\u89C1\"\n      ),\n      React.createElement(\n        \"div\",\n        { ref: \"div1\", className: \"zhTableCon\" },\n        React.createElement(\n          \"table\",\n          { className: \"zhTable3\" },\n          React.createElement(\n            \"tbody\",\n            null,\n            React.createElement(\n              \"tr\",\n              null,\n              React.createElement(\n                \"td\",\n                null,\n                React.createElement(\"div\", { style: { maxHeight: \"68px\", overflow: \"hidden\" }, dangerouslySetInnerHTML: { __html: data } })\n              )\n            )\n          )\n        )\n      ),\n      React.createElement(\n        \"div\",\n        { style: { display: \"none\" }, ref: \"div\" },\n        React.createElement(\n          \"div\",\n          { className: \"zhTableCon\" },\n          React.createElement(\n            \"table\",\n            { className: \"zhTable3\" },\n            React.createElement(\n              \"tbody\",\n              null,\n              React.createElement(\n                \"tr\",\n                null,\n                React.createElement(\"td\", { dangerouslySetInnerHTML: { __html: data } })\n              )\n            )\n          )\n        )\n      )\n    );\n  }\n});";
    },
    getData_control104: function (elem) {
      var trs = elem.querySelectorAll("tr");
      trs = Array.from(trs);
      var xmmc = trs[0].children[0].children[1].textContent;
      var wtfw = trs[0].children[1].children[0].nextSibling;
      var wtnr = trs[0].children[2].children[0].nextSibling;
      var zbxmmc = trs[1].children[0].children[0].nextSibling;
      var zbfs = trs[2].children[0].children[0].nextSibling;
      var jbr = trs[2].children[1].children[0].nextSibling;
      var cgys = trs[2].children[2].children[0].nextSibling;
      var sfwdbd = trs[3].children[0].children[0].nextSibling;
      var sfjj = trs[4].children[0].children[1].textContent;
      var sfxykcrk = trs[5].children[0].children[1].textContent;
      var sfyxl = trs[6].children[0].children[1].textContent;
      var jhksrq = trs[7].children[0].children[1].textContent;
      var jhkcwcrq = trs[7].children[1].children[0].nextSibling;
      var jhrkwcrq = trs[7].children[2].children[0].nextSibling;
      var jhtpwcrq = trs[8].children[0].children[1].textContent;
      var jhdbwcrq = trs[8].children[1].children[0].nextSibling;
      var xgsm = trs[10].children[0].children[2].value;
      var json = {
        xmmc: xmmc,
        wtfw: wtfw,
        wtnr: wtnr,
        zbxmmc: zbxmmc,
        zbfs: zbfs,
        jbr: jbr,
        cgys: cgys,
        sfwdbd: sfwdbd,
        sfjj: sfjj,
        sfxykcrk: sfxykcrk,
        sfyxl: sfyxl,
        jhksrq: jhksrq,
        jhkcwcrq: jhkcwcrq,
        jhrkwcrq: jhrkwcrq,
        jhtpwcrq: jhtpwcrq,
        jhdbwcrq: jhdbwcrq,
        xgsm: xgsm
      };

      for (var i in json) {
        if (json[i] == null) {
          json[i] = "";
        }

        if (typeof json[i] == "object") {
          json[i] = json[i].textContent;
        }
      }

      return json;
    },
    doAction_uiControl179: function (data, elem) {},
    getTemplate_uiControl179: function () {
      var selfTemplate = "var React = require('react');\n\n   module.exports = React.createClass({\n     click:function(){\n       let div = this.refs.div;\n       let div1 = this.refs.div1;\n       let icon = this.refs.icon;\n       if(div.style.display == \"none\"){\n       div.style.display = \"block\"\n       div1.style.display = \"none\";\n       icon.style.transform=\"rotate(180deg)\"\n       }else{\n       \tdiv.style.display = \"none\";\n         div1.style.display = \"block\"\n         icon.style.transform=\"\"\n       }\n     },\n\n     render: function(){\n       var data = this.props.data.customData;\n       \n\n       return (\n         <div style={{position:\"relative\",textAlign:\"center\"}}>\n\n           <div ref = \"icon\" onClick={this.click} style={{padding:\"3px\",right:0,position:\"absolute\",color:\"white\"}}>\n             <span style={{transform:\"scale(0.7)\",color:\"#949494\"}} className=\"icon icon-down-nav navbar-icon\"></span>\n         \t</div>\n\n           <div  onClick={this.click} className=\"partTitle\">\n             \u76F4\u63A5\u59D4\u6258\u4FE1\u606F\n           </div>\n\n\n           <div ref = \"div1\" className = \"zhTableCon\">\n           \t<table  className = \"zhTable3\">\n               <tbody>\n                 <tr>\n                   <td>\u62DB\u6807\u9879\u76EE\u540D\u79F0</td>\n                   <td colSpan=\"3\">{data.xmmc}</td>\n                 </tr>\n                 <tr>\n                 \t\t <td>\u7ECF\u529E\u4EBA</td>\n                     <td>{data.jbr}</td>\n                     <td>\u662F\u5426\u4E3A\u591A\u6807\u6BB5</td>\n                     <td>{data.sfwdbd}</td>\n                 </tr>\n                 <tr>\n                 \t\t <td>\u662F\u5426\u7D27\u6025</td>\n                     <td>{data.sfjj}</td>\n                     <td>\u91C7\u8D2D\u9884\u7B97\uFF08\u5143\uFF09</td>\n                     <td>{data.cgys}</td>\n                 </tr>\n                 <tr>\n                 \t\t <td>\u4F9B\u5E94\u5546\u662F\u5426\u9700\u8981\u8003\u5BDF\u5165\u5E93</td>\n                     <td>{data.sfxykcrk}</td>\n                     <td>\u8BA1\u5212\u5B9A\u6807\u5B8C\u6210\u65E5\u671F</td>\n                     <td>{data.jhdbwcrq}</td>\n                 </tr>\n               </tbody>\n   \t\t\t\t\t</table>\n         \t</div>\n\n\n           <div  style = {{display:\"none\"}} ref = \"div\">\n           \t<div className = \"zhTableCon\">\n             <table  className = \"zhTable3\">\n               <tbody>\n                 <tr>\n                 \t\t <td>\u9879\u76EE\u540D\u79F0</td>\n                     <td>{data.xmmc}</td>\n                     <td>\u59D4\u6258\u8303\u56F4</td>\n                     <td>{data.wtfw}</td>\n                 </tr>\n                 <tr>\n                 \t\t <td>\u59D4\u6258\u5185\u5BB9</td>\n                     <td>{data.wtnr}</td>\n                     <td>\u62DB\u6807\u65B9\u5F0F</td>\n                     <td>{data.zbfs}</td>\n                 </tr>\n                 <tr>\n                 \t\t <td>\u62DB\u6807\u9879\u76EE\u540D\u79F0</td>\n                     <td colSpan=\"3\">{data.xmmc}</td>\n                 </tr>\n                 <tr>\n                 \t\t <td>\u7ECF\u529E\u4EBA</td>\n                     <td>{data.jbr}</td>\n                     <td>\u662F\u5426\u4E3A\u591A\u6807\u6BB5</td>\n                     <td>{data.sfwdbd}</td>\n                 </tr>\n                 <tr>\n                 \t\t <td>\u662F\u5426\u7D27\u6025</td>\n                     <td>{data.sfjj}</td>\n                     <td>\u91C7\u8D2D\u9884\u7B97\uFF08\u5143\uFF09</td>\n                     <td>{data.cgys}</td>\n                 </tr>\n                 <tr>\n                 \t\t <td>\u4F9B\u5E94\u5546\u662F\u5426\u9700\u8981\u8003\u5BDF\u5165\u5E93</td>\n                     <td>{data.sfxykcrk}</td>\n                     <td>\u662F\u5426\u8425\u9500\u7C7B</td>\n                     <td>{data.sfyxl}</td>\n                 </tr>\n                 <tr>\n                 \t\t <td>\u8BA1\u5212\u5F00\u59CB\u65E5\u671F</td>\n                     <td>{data.jhksrq}</td>\n                     <td>\u8BA1\u5212\u8003\u5BDF\u5B8C\u6210\u65E5\u671F</td>\n                     <td>{data.jhkcwcrq}</td>\n                 </tr>\n                 <tr>\n                 \t\t <td>\u8BA1\u5212\u8C08\u5224\u5B8C\u6210\u65E5\u671F</td>\n                     <td>{data.jhtpwcrq}</td>\n                     <td>\u8BA1\u5212\u5B9A\u6807\u5B8C\u6210\u65E5\u671F</td>\n                     <td>{data.jhdbwcrq}</td>\n                 </tr>\n               </tbody>\n   \t\t\t\t\t</table>\n         \t</div>\n           </div>\n\n\n       </div>\n       )\n     }\n   });";
      return "\"use strict\";\n\nvar React = require('react');\n\nmodule.exports = React.createClass({\n    displayName: \"exports\",\n\n    click: function click() {\n        var div = this.refs.div;\n        var div1 = this.refs.div1;\n        var icon = this.refs.icon;\n        if (div.style.display == \"none\") {\n            div.style.display = \"block\";\n            div1.style.display = \"none\";\n            icon.style.transform = \"rotate(180deg)\";\n        } else {\n            div.style.display = \"none\";\n            div1.style.display = \"block\";\n            icon.style.transform = \"\";\n        }\n    },\n\n    render: function render() {\n        var data = this.props.data.customData;\n\n        return React.createElement(\n            \"div\",\n            { style: { position: \"relative\", textAlign: \"center\" } },\n            React.createElement(\n                \"div\",\n                { ref: \"icon\", onClick: this.click, style: { padding: \"3px\", right: 0, position: \"absolute\", color: \"white\" } },\n                React.createElement(\"span\", { style: { transform: \"scale(0.7)\", color: \"#949494\" }, className: \"icon icon-down-nav navbar-icon\" })\n            ),\n            React.createElement(\n                \"div\",\n                { onClick: this.click, className: \"partTitle\" },\n                \"\\u76F4\\u63A5\\u59D4\\u6258\\u4FE1\\u606F\"\n            ),\n            React.createElement(\n                \"div\",\n                { ref: \"div1\", className: \"zhTableCon\" },\n                React.createElement(\n                    \"table\",\n                    { className: \"zhTable3\" },\n                    React.createElement(\n                        \"tbody\",\n                        null,\n                        React.createElement(\n                            \"tr\",\n                            null,\n                            React.createElement(\n                                \"td\",\n                                null,\n                                \"\\u62DB\\u6807\\u9879\\u76EE\\u540D\\u79F0\"\n                            ),\n                            React.createElement(\n                                \"td\",\n                                { colSpan: \"3\" },\n                                data.xmmc\n                            )\n                        ),\n                        React.createElement(\n                            \"tr\",\n                            null,\n                            React.createElement(\n                                \"td\",\n                                null,\n                                \"\\u7ECF\\u529E\\u4EBA\"\n                            ),\n                            React.createElement(\n                                \"td\",\n                                null,\n                                data.jbr\n                            ),\n                            React.createElement(\n                                \"td\",\n                                null,\n                                \"\\u662F\\u5426\\u4E3A\\u591A\\u6807\\u6BB5\"\n                            ),\n                            React.createElement(\n                                \"td\",\n                                null,\n                                data.sfwdbd\n                            )\n                        ),\n                        React.createElement(\n                            \"tr\",\n                            null,\n                            React.createElement(\n                                \"td\",\n                                null,\n                                \"\\u662F\\u5426\\u7D27\\u6025\"\n                            ),\n                            React.createElement(\n                                \"td\",\n                                null,\n                                data.sfjj\n                            ),\n                            React.createElement(\n                                \"td\",\n                                null,\n                                \"\\u91C7\\u8D2D\\u9884\\u7B97\\uFF08\\u5143\\uFF09\"\n                            ),\n                            React.createElement(\n                                \"td\",\n                                null,\n                                data.cgys\n                            )\n                        ),\n                        React.createElement(\n                            \"tr\",\n                            null,\n                            React.createElement(\n                                \"td\",\n                                null,\n                                \"\\u4F9B\\u5E94\\u5546\\u662F\\u5426\\u9700\\u8981\\u8003\\u5BDF\\u5165\\u5E93\"\n                            ),\n                            React.createElement(\n                                \"td\",\n                                null,\n                                data.sfxykcrk\n                            ),\n                            React.createElement(\n                                \"td\",\n                                null,\n                                \"\\u8BA1\\u5212\\u5B9A\\u6807\\u5B8C\\u6210\\u65E5\\u671F\"\n                            ),\n                            React.createElement(\n                                \"td\",\n                                null,\n                                data.jhdbwcrq\n                            )\n                        )\n                    )\n                )\n            ),\n            React.createElement(\n                \"div\",\n                { style: { display: \"none\" }, ref: \"div\" },\n                React.createElement(\n                    \"div\",\n                    { className: \"zhTableCon\" },\n                    React.createElement(\n                        \"table\",\n                        { className: \"zhTable3\" },\n                        React.createElement(\n                            \"tbody\",\n                            null,\n                            React.createElement(\n                                \"tr\",\n                                null,\n                                React.createElement(\n                                    \"td\",\n                                    null,\n                                    \"\\u9879\\u76EE\\u540D\\u79F0\"\n                                ),\n                                React.createElement(\n                                    \"td\",\n                                    null,\n                                    data.xmmc\n                                ),\n                                React.createElement(\n                                    \"td\",\n                                    null,\n                                    \"\\u59D4\\u6258\\u8303\\u56F4\"\n                                ),\n                                React.createElement(\n                                    \"td\",\n                                    null,\n                                    data.wtfw\n                                )\n                            ),\n                            React.createElement(\n                                \"tr\",\n                                null,\n                                React.createElement(\n                                    \"td\",\n                                    null,\n                                    \"\\u59D4\\u6258\\u5185\\u5BB9\"\n                                ),\n                                React.createElement(\n                                    \"td\",\n                                    null,\n                                    data.wtnr\n                                ),\n                                React.createElement(\n                                    \"td\",\n                                    null,\n                                    \"\\u62DB\\u6807\\u65B9\\u5F0F\"\n                                ),\n                                React.createElement(\n                                    \"td\",\n                                    null,\n                                    data.zbfs\n                                )\n                            ),\n                            React.createElement(\n                                \"tr\",\n                                null,\n                                React.createElement(\n                                    \"td\",\n                                    null,\n                                    \"\\u62DB\\u6807\\u9879\\u76EE\\u540D\\u79F0\"\n                                ),\n                                React.createElement(\n                                    \"td\",\n                                    { colSpan: \"3\" },\n                                    data.xmmc\n                                )\n                            ),\n                            React.createElement(\n                                \"tr\",\n                                null,\n                                React.createElement(\n                                    \"td\",\n                                    null,\n                                    \"\\u7ECF\\u529E\\u4EBA\"\n                                ),\n                                React.createElement(\n                                    \"td\",\n                                    null,\n                                    data.jbr\n                                ),\n                                React.createElement(\n                                    \"td\",\n                                    null,\n                                    \"\\u662F\\u5426\\u4E3A\\u591A\\u6807\\u6BB5\"\n                                ),\n                                React.createElement(\n                                    \"td\",\n                                    null,\n                                    data.sfwdbd\n                                )\n                            ),\n                            React.createElement(\n                                \"tr\",\n                                null,\n                                React.createElement(\n                                    \"td\",\n                                    null,\n                                    \"\\u662F\\u5426\\u7D27\\u6025\"\n                                ),\n                                React.createElement(\n                                    \"td\",\n                                    null,\n                                    data.sfjj\n                                ),\n                                React.createElement(\n                                    \"td\",\n                                    null,\n                                    \"\\u91C7\\u8D2D\\u9884\\u7B97\\uFF08\\u5143\\uFF09\"\n                                ),\n                                React.createElement(\n                                    \"td\",\n                                    null,\n                                    data.cgys\n                                )\n                            ),\n                            React.createElement(\n                                \"tr\",\n                                null,\n                                React.createElement(\n                                    \"td\",\n                                    null,\n                                    \"\\u4F9B\\u5E94\\u5546\\u662F\\u5426\\u9700\\u8981\\u8003\\u5BDF\\u5165\\u5E93\"\n                                ),\n                                React.createElement(\n                                    \"td\",\n                                    null,\n                                    data.sfxykcrk\n                                ),\n                                React.createElement(\n                                    \"td\",\n                                    null,\n                                    \"\\u662F\\u5426\\u8425\\u9500\\u7C7B\"\n                                ),\n                                React.createElement(\n                                    \"td\",\n                                    null,\n                                    data.sfyxl\n                                )\n                            ),\n                            React.createElement(\n                                \"tr\",\n                                null,\n                                React.createElement(\n                                    \"td\",\n                                    null,\n                                    \"\\u8BA1\\u5212\\u5F00\\u59CB\\u65E5\\u671F\"\n                                ),\n                                React.createElement(\n                                    \"td\",\n                                    null,\n                                    data.jhksrq\n                                ),\n                                React.createElement(\n                                    \"td\",\n                                    null,\n                                    \"\\u8BA1\\u5212\\u8003\\u5BDF\\u5B8C\\u6210\\u65E5\\u671F\"\n                                ),\n                                React.createElement(\n                                    \"td\",\n                                    null,\n                                    data.jhkcwcrq\n                                )\n                            ),\n                            React.createElement(\n                                \"tr\",\n                                null,\n                                React.createElement(\n                                    \"td\",\n                                    null,\n                                    \"\\u8BA1\\u5212\\u8C08\\u5224\\u5B8C\\u6210\\u65E5\\u671F\"\n                                ),\n                                React.createElement(\n                                    \"td\",\n                                    null,\n                                    data.jhtpwcrq\n                                ),\n                                React.createElement(\n                                    \"td\",\n                                    null,\n                                    \"\\u8BA1\\u5212\\u5B9A\\u6807\\u5B8C\\u6210\\u65E5\\u671F\"\n                                ),\n                                React.createElement(\n                                    \"td\",\n                                    null,\n                                    data.jhdbwcrq\n                                )\n                            )\n                        )\n                    )\n                )\n            )\n        );\n    }\n});";
    }
  });
})(window, ysp);
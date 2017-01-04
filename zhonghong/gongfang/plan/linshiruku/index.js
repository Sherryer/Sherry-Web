(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control16: function (elem) {},
    doAction_uiControl25: function (data, elem) {},
    getTemplate_uiControl25: function () {
      var selfTemplate = "import { Backbtn } from 'ysp-custom-components';\n\nmodule.exports = React.createClass({\n  render: function(){\n\n\n    return (\n        <Backbtn title=\"\u4E34\u65F6\u5165\u5E93\u5BA1\u6279\" describe={{}} />\n    )\n  }\n});";
      return "\"use strict\";\n\nvar _yspCustomComponents = require(\"ysp-custom-components\");\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n\n    return React.createElement(_yspCustomComponents.Backbtn, { title: \"\\u4E34\\u65F6\\u5165\\u5E93\\u5BA1\\u6279\", describe: {} });\n  }\n});";
    },
    getData_control18: function (elem) {
      var arr = [];
      $(elem).find('tr').slice(1).each(function () {
        var newarr = [];
        newarr.push($(this).find('td').eq(0).text());
        newarr.push($(this).find('td').eq(1).text());
        arr.push(newarr);
      });
      $(elem).find("a").each(function (a, b) {
        $(b).replaceWith($(b).text());
      });
      var all = elem.innerHTML;
      return {
        arr: arr,
        all: all
      };
    },
    doAction_uiControl28: function (data, elem) {},
    getTemplate_uiControl28: function () {
      var selfTemplate = "var React = require('react');\n\nmodule.exports = React.createClass({\n  click:function(){\n       let div = this.refs.div;\n       let div1 = this.refs.div1;\n       let icon = this.refs.icon;\n       if(div.style.display == \"none\"){\n       div.style.display = \"block\"\n       div1.style.display = \"none\";\n       icon.style.transform=\"rotate(180deg)\"\n       }else{\n       \tdiv.style.display = \"none\";\n         div1.style.display = \"block\"\n         icon.style.transform=\"\"\n       }\n     },\n  render: function(){\n    var data = this.props.customData;\n    var newarr = data.arr;\n    var item = newarr.map(function(d,i){\n    \treturn(\n        <tr>\n          <td>{d[0]}</td>\n          <td>{d[1]}</td>\n        </tr>\n      )\n    });\n    console.log(555,item);\n    return (\n      <div style={{position:\"relative\",textAlign:\"center\"}}>\n\n           <div ref = \"icon\" onClick={this.click} style={{padding:\"3px\",right:0,position:\"absolute\",color:\"white\"}}>\n             <span style={{transform:\"scale(0.7)\",color:\"#949494\"}} className=\"icon icon-down-nav navbar-icon\"></span>\n         \t</div>\n\n           <div  onClick={this.click} className=\"partTitle\">\n             \u672C\u6B21\u5165\u5E93\u7533\u8BF7\u4F9B\u5E94\u5546\u5217\u8868\n           </div>\n        \n        <div ref = \"div1\" className = \"zhTableCon\">\n           \t<table  className = \"zhTable3\">\n        <tr>\n          <th>\u4F9B\u65B9\u540D\u79F0</th>\n          <th>\u4F9B\u65B9\u5206\u7C7B</th>\n        </tr>\n        {item}\n      </table>\n              \n   \t\t\t\t\t\n         \t</div>\n\n\n           <div  style = {{display:\"none\"}} ref = \"div\">\n           \t<div className = \"zhTableCon\" style={{padding:'0 0 10px 0',margin:'10px 10px 0 10px',overflow:'hidden',overflowX:'scroll'}}>\n             <table  className = \"zhTable3\" dangerouslySetInnerHTML={{__html:data.all}} style = {{width:'400px'}}>\n   \t\t\t\t\t</table>\n         \t</div>\n           </div>\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nvar React = require('react');\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  click: function click() {\n    var div = this.refs.div;\n    var div1 = this.refs.div1;\n    var icon = this.refs.icon;\n    if (div.style.display == \"none\") {\n      div.style.display = \"block\";\n      div1.style.display = \"none\";\n      icon.style.transform = \"rotate(180deg)\";\n    } else {\n      div.style.display = \"none\";\n      div1.style.display = \"block\";\n      icon.style.transform = \"\";\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var newarr = data.arr;\n    var item = newarr.map(function (d, i) {\n      return React.createElement(\n        \"tr\",\n        null,\n        React.createElement(\n          \"td\",\n          null,\n          d[0]\n        ),\n        React.createElement(\n          \"td\",\n          null,\n          d[1]\n        )\n      );\n    });\n    console.log(555, item);\n    return React.createElement(\n      \"div\",\n      { style: { position: \"relative\", textAlign: \"center\" } },\n      React.createElement(\n        \"div\",\n        { ref: \"icon\", onClick: this.click, style: { padding: \"3px\", right: 0, position: \"absolute\", color: \"white\" } },\n        React.createElement(\"span\", { style: { transform: \"scale(0.7)\", color: \"#949494\" }, className: \"icon icon-down-nav navbar-icon\" })\n      ),\n      React.createElement(\n        \"div\",\n        { onClick: this.click, className: \"partTitle\" },\n        \"\\u672C\\u6B21\\u5165\\u5E93\\u7533\\u8BF7\\u4F9B\\u5E94\\u5546\\u5217\\u8868\"\n      ),\n      React.createElement(\n        \"div\",\n        { ref: \"div1\", className: \"zhTableCon\" },\n        React.createElement(\n          \"table\",\n          { className: \"zhTable3\" },\n          React.createElement(\n            \"tr\",\n            null,\n            React.createElement(\n              \"th\",\n              null,\n              \"\\u4F9B\\u65B9\\u540D\\u79F0\"\n            ),\n            React.createElement(\n              \"th\",\n              null,\n              \"\\u4F9B\\u65B9\\u5206\\u7C7B\"\n            )\n          ),\n          item\n        )\n      ),\n      React.createElement(\n        \"div\",\n        { style: { display: \"none\" }, ref: \"div\" },\n        React.createElement(\n          \"div\",\n          { className: \"zhTableCon\", style: { padding: '0 0 10px 0', margin: '10px 10px 0 10px', overflow: 'hidden', overflowX: 'scroll' } },\n          React.createElement(\"table\", { className: \"zhTable3\", dangerouslySetInnerHTML: { __html: data.all }, style: { width: '400px' } })\n        )\n      )\n    );\n  }\n});";
    },
    getData_control19: function (elem) {
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
    doAction_uiControl30: function (data, elem) {},
    getTemplate_uiControl30: function () {
      var selfTemplate = "var React = require('react');\n\nmodule.exports = React.createClass({\n  click:function(){\n    let div = this.refs.div;\n    let icon = this.refs.icon;\n    if(div.style.display == \"none\"){\n    div.style.display = \"block\"\n    icon.style.transform=\"rotate(180deg)\"\n    }else{\n    \tdiv.style.display = \"none\";\n      icon.style.transform=\"\"\n    }\n  },\n  render: function(){\n    var data = this.props.data.customData;\n\n\n\n   var item = data.map(function(d,i){\n    \treturn (\n      \t<div className = \"lishi\">\n          <div className = 'lishiItem-1'>\n          \t<p>{d[0]}{d[2]}</p>\n            <p>{d[1]}</p>\n          </div>\n          <div className = 'lishiItem-2'>\n            <p>{d[3]}</p>\n          </div>\n          <div className = 'lishiItem-3'>\n            {\n            //<p>\u63A5\u6536\u65F6\u95F4:{d[4]}</p>\n            }\n            <p>\u64CD\u4F5C\u65F6\u95F4\uFF1A{d[5]}</p>\n          </div>\n        </div>\n      )\n    })\n    return (\n      <div>\n\n        <div className=\"partTitle\">\n          \u5BA1\u6279\u5386\u53F2\n        </div>\n        <div className = \"zhTextCon spls\">\n          {item}\n        </div>\n      </div>\n\n    )\n  }\n});\n";
      return "\"use strict\";\n\nvar React = require('react');\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  click: function click() {\n    var div = this.refs.div;\n    var icon = this.refs.icon;\n    if (div.style.display == \"none\") {\n      div.style.display = \"block\";\n      icon.style.transform = \"rotate(180deg)\";\n    } else {\n      div.style.display = \"none\";\n      icon.style.transform = \"\";\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n\n    var item = data.map(function (d, i) {\n      return React.createElement(\n        \"div\",\n        { className: \"lishi\" },\n        React.createElement(\n          \"div\",\n          { className: \"lishiItem-1\" },\n          React.createElement(\n            \"p\",\n            null,\n            d[0],\n            d[2]\n          ),\n          React.createElement(\n            \"p\",\n            null,\n            d[1]\n          )\n        ),\n        React.createElement(\n          \"div\",\n          { className: \"lishiItem-2\" },\n          React.createElement(\n            \"p\",\n            null,\n            d[3]\n          )\n        ),\n        React.createElement(\n          \"div\",\n          { className: \"lishiItem-3\" },\n          React.createElement(\n            \"p\",\n            null,\n            \"\\u64CD\\u4F5C\\u65F6\\u95F4\\uFF1A\",\n            d[5]\n          )\n        )\n      );\n    });\n    return React.createElement(\n      \"div\",\n      null,\n      React.createElement(\n        \"div\",\n        { className: \"partTitle\" },\n        \"\\u5BA1\\u6279\\u5386\\u53F2\"\n      ),\n      React.createElement(\n        \"div\",\n        { className: \"zhTextCon spls\" },\n        item\n      )\n    );\n  }\n});";
    },
    getData_control20: function (elem) {
      var lcc = [];
      let lc = [].slice.call(elem.children).map((value, index) => {
        if (value.tagName == "IMG") {
          return;
        }

        var array = value.textContent.split("【");
        array[1] = "【" + array[1];
        var str = array[0] + "\n" + array[1];
        lcc.push({
          cont: str.trim(),
          class: value.className
        });
      });
      return lcc;
    },
    doAction_uiControl32: function (data, elem) {},
    getTemplate_uiControl32: function () {
      var selfTemplate = "var React = require('react');\n\nmodule.exports = React.createClass({\n  click:function(){\n    let div = this.refs.div;\n    let icon = this.refs.icon;\n    if(div.style.display == \"none\"){\n    div.style.display = \"block\"\n    icon.style.transform=\"rotate(90deg)\"\n    }else{\n    \tdiv.style.display = \"none\";\n      icon.style.transform=\"\"\n    }\n  },\n  render: function(){\n    var data = this.props.data.customData;\n\n    const header = {\n    \tpadding:\"2px 0 2px 8px\",\n      borderLeft:\"7px solid #45bcff\",\n      borderBottom:\"1px solid #e6e6e6\",\n      color:\"#45bcff\",\n      fontWeight: \"bolder\",\n      fontSize:\"16px\",\n      textAlign:\"left\"\n    }\n\n    const body = {\n      padding:\"15px 8px\",\n      color:\"#3f3f3f\"\n                 }\n\n\n    return (\n      <div style={{textAlign:\"center\"}}>\n\n        <div className=\"partTitle\">\n          \u5BA1\u6279\u6D41\u7A0B\n        </div>\n\n        <div className=\"partBody\">\n\n        \t<div className = \"textleft\">\n            {data.map(function(value,index){\n\n            var z = value.cont.split(\"\\n\");\n            var length = z.length-1;\n            var x= z[0]+z[length];\n\n            var blue = {};\n\n            if(value.class==\"cblue\"){\n            \tblue = {color:\"#0b84f7\",fontWeight:\"bold\"}\n            }\n\n\n            if(index < data.length-1){\n            \treturn(\n            <span>\n                <span style = {blue}>{x}</span>\n                <span>-></span>\n            </span>\n            )\n            }else{\n            return(\n            <span style = {blue}>\n                {x}\n            </span>\n            )\n\n            }\n          })}\n          </div>\n        </div>\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nvar React = require('react');\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  click: function click() {\n    var div = this.refs.div;\n    var icon = this.refs.icon;\n    if (div.style.display == \"none\") {\n      div.style.display = \"block\";\n      icon.style.transform = \"rotate(90deg)\";\n    } else {\n      div.style.display = \"none\";\n      icon.style.transform = \"\";\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n\n    var header = {\n      padding: \"2px 0 2px 8px\",\n      borderLeft: \"7px solid #45bcff\",\n      borderBottom: \"1px solid #e6e6e6\",\n      color: \"#45bcff\",\n      fontWeight: \"bolder\",\n      fontSize: \"16px\",\n      textAlign: \"left\"\n    };\n\n    var body = {\n      padding: \"15px 8px\",\n      color: \"#3f3f3f\"\n    };\n\n    return React.createElement(\n      \"div\",\n      { style: { textAlign: \"center\" } },\n      React.createElement(\n        \"div\",\n        { className: \"partTitle\" },\n        \"\\u5BA1\\u6279\\u6D41\\u7A0B\"\n      ),\n      React.createElement(\n        \"div\",\n        { className: \"partBody\" },\n        React.createElement(\n          \"div\",\n          { className: \"textleft\" },\n          data.map(function (value, index) {\n\n            var z = value.cont.split(\"\\n\");\n            var length = z.length - 1;\n            var x = z[0] + z[length];\n\n            var blue = {};\n\n            if (value.class == \"cblue\") {\n              blue = { color: \"#0b84f7\", fontWeight: \"bold\" };\n            }\n\n            if (index < data.length - 1) {\n              return React.createElement(\n                \"span\",\n                null,\n                React.createElement(\n                  \"span\",\n                  { style: blue },\n                  x\n                ),\n                React.createElement(\n                  \"span\",\n                  null,\n                  \"->\"\n                )\n              );\n            } else {\n              return React.createElement(\n                \"span\",\n                { style: blue },\n                x\n              );\n            }\n          })\n        )\n      )\n    );\n  }\n});";
    },
    getData_control31: function (elem) {
      var trs = elem.querySelectorAll("tr");
      var zihui = "no";

      if (trs.length == 1) {
        zihui = "zihui";
      }

      var data = [];
      var selectOption = [];
      var select = elem.querySelector("select");

      if (select && select.parentNode.parentNode.style.display == "none") {
        flag = false;
      }

      $(elem).find("select").find("option").each(function () {
        selectOption.push($(this).text());
      });
      data.push(selectOption);
      data.push($(elem).find("textarea").val());

      function checkIpt() {
        var btn = [];
        var length = 0;
        var ipts = elem.querySelectorAll("input");

        if (ipts) {
          length = ipts.length;
        }

        for (let i = 0; i < length; i++) {
          if (ipts[i].type == "button" && ipts[i].style.display !== "none") {
            btn.push(ipts[i].value);
          }
        }

        return btn;
      }

      var btn = checkIpt();
      return {
        data: data,
        btn: btn,
        zihui: zihui
      };
    },
    doAction_uiControl51: function (data, elem) {
      if (data.eventType === 'change') {
        var d = data.dataCustom;
        $(elem).find("select").find("option").eq(d)[0].selected = true;
        $(elem).find("select")[0].dispatchEvent(new Event("change"));
      }

      var data = data.dataCustom;

      if (data[1] == "text") {
        $(elem).find("textarea").val(data[0]);
      }

      function checkIpt() {
        var btn = [];
        var length = 0;
        var ipts = elem.querySelectorAll("input");

        if (ipts) {
          length = ipts.length;
        }

        for (let i = 0; i < length; i++) {
          if (ipts[i].type == "button" && ipts[i].style.display !== "none") {
            btn.push(ipts[i]);
          }
        }

        return btn;
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
    getTemplate_uiControl51: function () {
      var selfTemplate = "var React = require('react');\n\nmodule.exports = React.createClass({\n  componentDidMount:function(){\n  \tvar data = this.props.customData;\n    if(data.zihui == \"zihui\"){\n    \t this.refs.done.outerHTML=\"\"\n    }\n  },\n\n  onChange(e){\n\n    var callBack = this.props.customHandler;\n    var index = e.target.selectedIndex;\n    if(callBack) {\n      callBack({\n        data:index,\n        eventType:'change'\n      })\n    }\n  },\n  onBlur(e){\n  \tvar content = e.target.value;\n    var handler = this.props.customHandler;\n    if(handler){\n    \thandler({\n      \tdata : [content,\"text\"]\n      })\n    }\n  },\n  onClick1(e){\n  \tvar handler = this.props.customHandler;\n    if(handler){\n    \thandler({\n      \tdata : [\"111\",\"btn1\"]\n      })\n    }\n  },\n  onClick2(e){\n  \tvar handler = this.props.customHandler;\n    if(handler){\n    \thandler({\n      \tdata : [\"111\",\"btn2\"]\n      })\n    }\n  },\n    onClick3(e){\n  \tvar handler = this.props.customHandler;\n    if(handler){\n    \thandler({\n      \tdata : [\"2\",\"btn3\"]\n      })\n    }\n  },\n    onClick4(e){\n  \tvar handler = this.props.customHandler;\n    if(handler){\n    \thandler({\n      \tdata : [\"3\",\"btn4\"]\n      })\n    }\n  },\n  render: function(){\n    var data = this.props.customData;\n    var _this = this;\n    var item = data.data[0].map(function(d,i){\n    \tif(i==0){\n        return (<option selected>{d}</option>)\n\n      }\n      else{\n      \treturn(<option>{d}</option>)\n      }\n    })\n    return (\n      <div ref = \"done\" className = 'custom1'>\n      \t<h2>\u5BA1\u6279\u610F\u89C1</h2>\n        <div className = \"zhShenpiCon\">\n\n          <select onChange = {_this.onChange}>\n            {item}\n          </select>\n          <textarea onBlur = {_this.onBlur} value = {data.data[1]}></textarea>\n\n          <div className = \"buttonCon\">\n          \t{data.btn[0]&& <button className = \"btn btn-success btn-block waves-effect\" onClick = {_this.onClick1}>{data.btn[0]}</button>}\n            {data.btn[1]&& <button className = \"btn btn-alert btn-block waves-effect\" onClick = {_this.onClick2}>{data.btn[1]}</button>}\n            {data.btn[2]&& <button style={{marginBottom:\"10px\"}} className = \"btn btn-warning btn-block waves-effect\" onClick = {_this.onClick3}>{data.btn[2]}</button>}\n            {data.btn[3]&& <button className = \"btn btn-secondary btn-block waves-effect\" onClick = {_this.onClick4}>{data.btn[3]}</button>}\n          </div>\n        </div>\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nvar React = require('react');\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  componentDidMount: function componentDidMount() {\n    var data = this.props.customData;\n    if (data.zihui == \"zihui\") {\n      this.refs.done.outerHTML = \"\";\n    }\n  },\n\n  onChange: function onChange(e) {\n\n    var callBack = this.props.customHandler;\n    var index = e.target.selectedIndex;\n    if (callBack) {\n      callBack({\n        data: index,\n        eventType: 'change'\n      });\n    }\n  },\n  onBlur: function onBlur(e) {\n    var content = e.target.value;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: [content, \"text\"]\n      });\n    }\n  },\n  onClick1: function onClick1(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: [\"111\", \"btn1\"]\n      });\n    }\n  },\n  onClick2: function onClick2(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: [\"111\", \"btn2\"]\n      });\n    }\n  },\n  onClick3: function onClick3(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: [\"2\", \"btn3\"]\n      });\n    }\n  },\n  onClick4: function onClick4(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: [\"3\", \"btn4\"]\n      });\n    }\n  },\n\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    var item = data.data[0].map(function (d, i) {\n      if (i == 0) {\n        return React.createElement(\n          \"option\",\n          { selected: true },\n          d\n        );\n      } else {\n        return React.createElement(\n          \"option\",\n          null,\n          d\n        );\n      }\n    });\n    return React.createElement(\n      \"div\",\n      { ref: \"done\", className: \"custom1\" },\n      React.createElement(\n        \"h2\",\n        null,\n        \"\\u5BA1\\u6279\\u610F\\u89C1\"\n      ),\n      React.createElement(\n        \"div\",\n        { className: \"zhShenpiCon\" },\n        React.createElement(\n          \"select\",\n          { onChange: _this.onChange },\n          item\n        ),\n        React.createElement(\"textarea\", { onBlur: _this.onBlur, value: data.data[1] }),\n        React.createElement(\n          \"div\",\n          { className: \"buttonCon\" },\n          data.btn[0] && React.createElement(\n            \"button\",\n            { className: \"btn btn-success btn-block waves-effect\", onClick: _this.onClick1 },\n            data.btn[0]\n          ),\n          data.btn[1] && React.createElement(\n            \"button\",\n            { className: \"btn btn-alert btn-block waves-effect\", onClick: _this.onClick2 },\n            data.btn[1]\n          ),\n          data.btn[2] && React.createElement(\n            \"button\",\n            { style: { marginBottom: \"10px\" }, className: \"btn btn-warning btn-block waves-effect\", onClick: _this.onClick3 },\n            data.btn[2]\n          ),\n          data.btn[3] && React.createElement(\n            \"button\",\n            { className: \"btn btn-secondary btn-block waves-effect\", onClick: _this.onClick4 },\n            data.btn[3]\n          )\n        )\n      )\n    );\n  }\n});";
    }
  });
})(window, ysp);
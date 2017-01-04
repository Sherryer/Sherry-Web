(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control62: function (elem) {},
    doAction_uiControl101: function (data, elem) {},
    getTemplate_uiControl101: function () {
      var selfTemplate = "import { Backbtn } from 'ysp-custom-components';\n\nmodule.exports = React.createClass({\n  render: function(){\n\n\n    return (\n        <Backbtn title=\"\u4E2D\u6807\u901A\u77E5\u4E66/\u611F\u8C22\u4FE1\" describe={{}} />\n\n    )\n  }\n});";
      return "\"use strict\";\n\nvar _yspCustomComponents = require(\"ysp-custom-components\");\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n\n    return React.createElement(_yspCustomComponents.Backbtn, { title: \"\\u4E2D\\u6807\\u901A\\u77E5\\u4E66/\\u611F\\u8C22\\u4FE1\", describe: {} });\n  }\n});";
    },
    getData_control73: function (elem) {
      var a = [];
      $(elem).children("tr").slice(1).each(function () {
        var as = [];
        as.push($(this).find("td").eq(0).text());
        a.push(as);
      });
      return a;
    },
    doAction_uiControl116: function (data, elem) {
      if (data.eventType === 'click') {
        var d = data.dataCustom;
        var as = elem.querySelectorAll("a");
        var a = [].slice.call(as).map((value, index) => value);
        a[d].click();
      }
    },
    getTemplate_uiControl116: function () {
      var selfTemplate = "var React = require('react');\n\nmodule.exports = React.createClass({\n  click:function(){\n    let div = this.refs.div;\n    let div1 = this.refs.div1;\n    let icon = this.refs.icon;\n    if(div.style.display == \"none\"){\n    div.style.display = \"block\"\n    div1.style.display = \"none\";\n    icon.style.transform=\"rotate(180deg)\"\n    }else{\n    \tdiv.style.display = \"none\";\n      div1.style.display = \"block\"\n      icon.style.transform=\"\"\n    }\n  },\n  \n  click2:function(z){\n  \tvar callBack = this.props.customHandler;          \n    if(callBack) {                                    \n      callBack({\n        data:z,\n        eventType:'click'                         \n      })\n    }\n  },\n  \n  \n  render: function(){\n    var data = this.props.data.customData;  \n\n    return (\n      <div style={{position:\"relative\",textAlign:\"center\"}}>\n        \n        <div ref = \"icon\" onClick={this.click} style={{padding:\"3px\",right:0,position:\"absolute\",color:\"white\"}}>\n          <span style={{transform:\"scale(0.7)\",color:\"#949494\"}} className=\"icon icon-down-nav navbar-icon\"></span>\n      \t</div>\n        \n        <div  onClick={this.click} className=\"partTitle\">\n          \u76F8\u5173\u9644\u4EF6\n        </div>\n        \n        \n        <div ref = \"div1\" className = \"zhTableCon\">\n        \t<table  className = \"zhTable\">\n            <thead>\n              <tr>\n                <td>\u9644\u4EF6\u540D\u79F0</td><td>\u5907\u6CE8</td>\n              </tr>\n            </thead>\n            <tbody>\n              {\n              \tdata.map((value,index)=>{\n                \tif(index<2){\n                  \treturn(\n                  \t <tr>\n                      <td onClick = {this.click2.bind(null,index)} className = \"blue\"  dangerouslySetInnerHTML={{__html:value}}></td><td>\u65E0</td>\n                    </tr>\n                  )\n                  }\n                })\n              }\n            </tbody>\n\t\t\t\t\t</table>\n      \t</div>\n        \n        \n        <div  style = {{display:\"none\"}} ref = \"div\">\n        \t<div className = \"zhTableCon\">\n          <table  className = \"zhTable\">\n            <thead>\n              <tr>\n                <td>\u9644\u4EF6\u540D\u79F0</td><td>\u5907\u6CE8</td>\n              </tr>\n            </thead>\n            <tbody>\n              {\n              \tdata.map((value,index)=>{\n                \treturn(\n                  \t <tr>\n                      <td onClick = {this.click2.bind(null,index)} className = \"blue\" >{data[0]}</td><td>\u65E0</td>\n                    </tr>\n                  )\n                })\n              }\n            </tbody>\n\t\t\t\t\t</table>\n      \t</div>\n        </div>\n    </div>\n    )\n  }\n});\n";
      return "\"use strict\";\n\nvar React = require('react');\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  click: function click() {\n    var div = this.refs.div;\n    var div1 = this.refs.div1;\n    var icon = this.refs.icon;\n    if (div.style.display == \"none\") {\n      div.style.display = \"block\";\n      div1.style.display = \"none\";\n      icon.style.transform = \"rotate(180deg)\";\n    } else {\n      div.style.display = \"none\";\n      div1.style.display = \"block\";\n      icon.style.transform = \"\";\n    }\n  },\n\n  click2: function click2(z) {\n    var callBack = this.props.customHandler;\n    if (callBack) {\n      callBack({\n        data: z,\n        eventType: 'click'\n      });\n    }\n  },\n\n  render: function render() {\n    var _this = this;\n\n    var data = this.props.data.customData;\n\n    return React.createElement(\n      \"div\",\n      { style: { position: \"relative\", textAlign: \"center\" } },\n      React.createElement(\n        \"div\",\n        { ref: \"icon\", onClick: this.click, style: { padding: \"3px\", right: 0, position: \"absolute\", color: \"white\" } },\n        React.createElement(\"span\", { style: { transform: \"scale(0.7)\", color: \"#949494\" }, className: \"icon icon-down-nav navbar-icon\" })\n      ),\n      React.createElement(\n        \"div\",\n        { onClick: this.click, className: \"partTitle\" },\n        \"\\u76F8\\u5173\\u9644\\u4EF6\"\n      ),\n      React.createElement(\n        \"div\",\n        { ref: \"div1\", className: \"zhTableCon\" },\n        React.createElement(\n          \"table\",\n          { className: \"zhTable\" },\n          React.createElement(\n            \"thead\",\n            null,\n            React.createElement(\n              \"tr\",\n              null,\n              React.createElement(\n                \"td\",\n                null,\n                \"\\u9644\\u4EF6\\u540D\\u79F0\"\n              ),\n              React.createElement(\n                \"td\",\n                null,\n                \"\\u5907\\u6CE8\"\n              )\n            )\n          ),\n          React.createElement(\n            \"tbody\",\n            null,\n            data.map(function (value, index) {\n              if (index < 2) {\n                return React.createElement(\n                  \"tr\",\n                  null,\n                  React.createElement(\"td\", { onClick: _this.click2.bind(null, index), className: \"blue\", dangerouslySetInnerHTML: { __html: value } }),\n                  React.createElement(\n                    \"td\",\n                    null,\n                    \"\\u65E0\"\n                  )\n                );\n              }\n            })\n          )\n        )\n      ),\n      React.createElement(\n        \"div\",\n        { style: { display: \"none\" }, ref: \"div\" },\n        React.createElement(\n          \"div\",\n          { className: \"zhTableCon\" },\n          React.createElement(\n            \"table\",\n            { className: \"zhTable\" },\n            React.createElement(\n              \"thead\",\n              null,\n              React.createElement(\n                \"tr\",\n                null,\n                React.createElement(\n                  \"td\",\n                  null,\n                  \"\\u9644\\u4EF6\\u540D\\u79F0\"\n                ),\n                React.createElement(\n                  \"td\",\n                  null,\n                  \"\\u5907\\u6CE8\"\n                )\n              )\n            ),\n            React.createElement(\n              \"tbody\",\n              null,\n              data.map(function (value, index) {\n                return React.createElement(\n                  \"tr\",\n                  null,\n                  React.createElement(\n                    \"td\",\n                    { onClick: _this.click2.bind(null, index), className: \"blue\" },\n                    data[0]\n                  ),\n                  React.createElement(\n                    \"td\",\n                    null,\n                    \"\\u65E0\"\n                  )\n                );\n              })\n            )\n          )\n        )\n      )\n    );\n  }\n});";
    },
    getData_control74: function (elem) {
      let lc = [].slice.call(elem.children).map((value, index) => ({
        cont: $.trim(value.textContent),
        class: value.className
      }));
      return lc;
    },
    doAction_uiControl118: function (data, elem) {},
    getTemplate_uiControl118: function () {
      var selfTemplate = "var React = require('react');\n\nmodule.exports = React.createClass({\n  click:function(){\n    let div = this.refs.div;\n    let icon = this.refs.icon;\n    if(div.style.display == \"none\"){\n    div.style.display = \"block\"\n    icon.style.transform=\"rotate(90deg)\"\n    }else{\n    \tdiv.style.display = \"none\";\n      icon.style.transform=\"\"\n    }\n  },\n  render: function(){\n    var data = this.props.data.customData; \n    \n    const header = {\n    \tpadding:\"2px 0 2px 8px\",\n      borderLeft:\"7px solid #45bcff\",\n      borderBottom:\"1px solid #e6e6e6\",\n      color:\"#45bcff\",\n      fontWeight: \"bolder\",\n      fontSize:\"16px\",\n      textAlign:\"left\"\n    }\n    \n    const body = {\n      padding:\"15px 8px\",\n      color:\"#3f3f3f\"\n                 }\n    \n      \n    return (\n      <div style={{textAlign:\"center\"}}>\n      \n        <div className=\"partTitle\">\n          \u5BA1\u6279\u6D41\u7A0B\n        </div>\n        \n        <div className=\"partBody\">\n         \n        \t<div className = \"textleft\">\n            {data.map(function(value,index){\n          \n            var z = value.cont.split(\"\\n\");\n            var length = z.length-1;\n            var x= z[0]+\" \u3010\"+z[length]+\"\u3011\";\n            \n            var blue = {};\n\n            if(value.class==\"cblue\"){\n            \tblue = {color:\"#0b84f7\",fontWeight:\"bold\"}\n            }\n            \n            \n            if(index < data.length-1){\n            \treturn(\n            <span>\n                <span style = {blue}>{x}</span>\n                <span>-></span>\n            </span>\n            )\n            }else{\n            return(\n            <span style = {blue}>\n                {x}\n            </span>\n            )\n            \n            }\n          })}\n          </div>\n        </div>\n              </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nvar React = require('react');\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  click: function click() {\n    var div = this.refs.div;\n    var icon = this.refs.icon;\n    if (div.style.display == \"none\") {\n      div.style.display = \"block\";\n      icon.style.transform = \"rotate(90deg)\";\n    } else {\n      div.style.display = \"none\";\n      icon.style.transform = \"\";\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n\n    var header = {\n      padding: \"2px 0 2px 8px\",\n      borderLeft: \"7px solid #45bcff\",\n      borderBottom: \"1px solid #e6e6e6\",\n      color: \"#45bcff\",\n      fontWeight: \"bolder\",\n      fontSize: \"16px\",\n      textAlign: \"left\"\n    };\n\n    var body = {\n      padding: \"15px 8px\",\n      color: \"#3f3f3f\"\n    };\n\n    return React.createElement(\n      \"div\",\n      { style: { textAlign: \"center\" } },\n      React.createElement(\n        \"div\",\n        { className: \"partTitle\" },\n        \"\\u5BA1\\u6279\\u6D41\\u7A0B\"\n      ),\n      React.createElement(\n        \"div\",\n        { className: \"partBody\" },\n        React.createElement(\n          \"div\",\n          { className: \"textleft\" },\n          data.map(function (value, index) {\n\n            var z = value.cont.split(\"\\n\");\n            var length = z.length - 1;\n            var x = z[0] + \" \u3010\" + z[length] + \"\u3011\";\n\n            var blue = {};\n\n            if (value.class == \"cblue\") {\n              blue = { color: \"#0b84f7\", fontWeight: \"bold\" };\n            }\n\n            if (index < data.length - 1) {\n              return React.createElement(\n                \"span\",\n                null,\n                React.createElement(\n                  \"span\",\n                  { style: blue },\n                  x\n                ),\n                React.createElement(\n                  \"span\",\n                  null,\n                  \"->\"\n                )\n              );\n            } else {\n              return React.createElement(\n                \"span\",\n                { style: blue },\n                x\n              );\n            }\n          })\n        )\n      )\n    );\n  }\n});";
    },
    getData_control75: function (elem) {
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
    doAction_uiControl127: function (data, elem) {
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
    getTemplate_uiControl127: function () {
      var selfTemplate = "var React = require('react');\n\nmodule.exports = React.createClass({\n  componentDidMount:function(){\n  \tvar data = this.props.customData.data;\n    if(data[1] == \"zihui\"){\n    \t this.refs.done.outerHTML=\"\"\n    }\n  },\n\n  onChange(e){\n  \tvar index = e.target.selectedIndex;\n    var handler = this.props.customHandler;\n    if(handler){\n    \thandler({\n      \tdata : [index,\"select\"]\n      })\n    }\n  },\n  onBlur(e){\n  \tvar content = e.target.value;\n    var handler = this.props.customHandler;\n    if(handler){\n    \thandler({\n      \tdata : [content,\"text\"]\n      })\n    }\n  },\n  onClick1(e){\n  \tvar handler = this.props.customHandler;\n    if(handler){\n    \thandler({\n      \tdata : [\"111\",\"btn1\"]\n      })\n    }\n  },\n  onClick2(e){\n  \tvar handler = this.props.customHandler;\n    if(handler){\n    \thandler({\n      \tdata : [\"111\",\"btn2\"]\n      })\n    }\n  },\n    onClick3(e){\n  \tvar handler = this.props.customHandler;\n    if(handler){\n    \thandler({\n      \tdata : [\"2\",\"btn3\"]\n      })\n    }\n  },\n    onClick4(e){\n  \tvar handler = this.props.customHandler;\n    if(handler){\n    \thandler({\n      \tdata : [\"3\",\"btn4\"]\n      })\n    }\n  },\n  render: function(){\n    var data = this.props.customData;\n    var _this = this;\n    var item = data.data[0].map(function(d,i){\n    \tif(i==0){\n        return (<option selected>{d}</option>)\n\n      }\n      else{\n      \treturn(<option>{d}</option>)\n      }\n    })\n    return (\n      <div ref = \"done\" className = 'custom1'>\n      \t<h2>\u5BA1\u6279\u610F\u89C1</h2>\n        <div className = \"zhShenpiCon\">\n\n          <select onChange = {_this.onChange}>\n            {item}\n          </select>\n          <textarea onBlur = {_this.onBlur} value = {data.data[1]}></textarea>\n\n          <div className = \"buttonCon\">\n          \t{data.btn[0]&& <button className = \"btn btn-success btn-block waves-effect\" onClick = {_this.onClick1}>{data.btn[0]}</button>}\n            {data.btn[1]&& <button className = \"btn btn-alert btn-block waves-effect\" onClick = {_this.onClick2}>{data.btn[1]}</button>}\n            {data.btn[2]&& <button style={{marginBottom:\"10px\"}} className = \"btn btn-warning btn-block waves-effect\" onClick = {_this.onClick3}>{data.btn[2]}</button>}\n            {data.btn[3]&& <button className = \"btn btn-secondary btn-block waves-effect\" onClick = {_this.onClick4}>{data.btn[3]}</button>}\n          </div>\n        </div>\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nvar React = require('react');\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  componentDidMount: function componentDidMount() {\n    var data = this.props.customData.data;\n    if (data[1] == \"zihui\") {\n      this.refs.done.outerHTML = \"\";\n    }\n  },\n\n  onChange: function onChange(e) {\n    var index = e.target.selectedIndex;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: [index, \"select\"]\n      });\n    }\n  },\n  onBlur: function onBlur(e) {\n    var content = e.target.value;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: [content, \"text\"]\n      });\n    }\n  },\n  onClick1: function onClick1(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: [\"111\", \"btn1\"]\n      });\n    }\n  },\n  onClick2: function onClick2(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: [\"111\", \"btn2\"]\n      });\n    }\n  },\n  onClick3: function onClick3(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: [\"2\", \"btn3\"]\n      });\n    }\n  },\n  onClick4: function onClick4(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: [\"3\", \"btn4\"]\n      });\n    }\n  },\n\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    var item = data.data[0].map(function (d, i) {\n      if (i == 0) {\n        return React.createElement(\n          \"option\",\n          { selected: true },\n          d\n        );\n      } else {\n        return React.createElement(\n          \"option\",\n          null,\n          d\n        );\n      }\n    });\n    return React.createElement(\n      \"div\",\n      { ref: \"done\", className: \"custom1\" },\n      React.createElement(\n        \"h2\",\n        null,\n        \"\\u5BA1\\u6279\\u610F\\u89C1\"\n      ),\n      React.createElement(\n        \"div\",\n        { className: \"zhShenpiCon\" },\n        React.createElement(\n          \"select\",\n          { onChange: _this.onChange },\n          item\n        ),\n        React.createElement(\"textarea\", { onBlur: _this.onBlur, value: data.data[1] }),\n        React.createElement(\n          \"div\",\n          { className: \"buttonCon\" },\n          data.btn[0] && React.createElement(\n            \"button\",\n            { className: \"btn btn-success btn-block waves-effect\", onClick: _this.onClick1 },\n            data.btn[0]\n          ),\n          data.btn[1] && React.createElement(\n            \"button\",\n            { className: \"btn btn-alert btn-block waves-effect\", onClick: _this.onClick2 },\n            data.btn[1]\n          ),\n          data.btn[2] && React.createElement(\n            \"button\",\n            { style: { marginBottom: \"10px\" }, className: \"btn btn-warning btn-block waves-effect\", onClick: _this.onClick3 },\n            data.btn[2]\n          ),\n          data.btn[3] && React.createElement(\n            \"button\",\n            { className: \"btn btn-secondary btn-block waves-effect\", onClick: _this.onClick4 },\n            data.btn[3]\n          )\n        )\n      )\n    );\n  }\n});";
    },
    getData_control76: function (elem) {
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
    doAction_uiControl129: function (data, elem) {},
    getTemplate_uiControl129: function () {
      var selfTemplate = "var React = require('react');\n\nmodule.exports = React.createClass({\n  click:function(){\n    let div = this.refs.div;\n    let icon = this.refs.icon;\n    if(div.style.display == \"none\"){\n    div.style.display = \"block\"\n    icon.style.transform=\"rotate(180deg)\"\n    }else{\n    \tdiv.style.display = \"none\";\n      icon.style.transform=\"\"\n    }\n  },\n  render: function(){\n    var data = this.props.data.customData; \n    \n\n      \n   var item = data.map(function(d,i){\n    \treturn (\n      \t<div className = \"lishi\">\n          <div className = 'lishiItem-1'>\n          \t<p>{d[0]}{d[2]}</p>\n            <p>{d[1]}</p>\n          </div>\n          <div className = 'lishiItem-2'>\n            <p>{d[3]}</p>\n          </div>\n          <div className = 'lishiItem-3'>\n            {\n            //<p>\u63A5\u6536\u65F6\u95F4:{d[4]}</p>\n            }\n            <p>\u64CD\u4F5C\u65F6\u95F4\uFF1A{d[5]}</p>\n          </div>\n        </div>\n      )\n    })\n    return (\n      <div>\n        \n        <div className=\"partTitle\">\n          \u5BA1\u6279\u5386\u53F2\n        </div>\n        <div className = \"zhTextCon spls\">\n          {item}\n        </div>\n      </div>\n      \n    )\n  }\n});";
      return "\"use strict\";\n\nvar React = require('react');\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  click: function click() {\n    var div = this.refs.div;\n    var icon = this.refs.icon;\n    if (div.style.display == \"none\") {\n      div.style.display = \"block\";\n      icon.style.transform = \"rotate(180deg)\";\n    } else {\n      div.style.display = \"none\";\n      icon.style.transform = \"\";\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n\n    var item = data.map(function (d, i) {\n      return React.createElement(\n        \"div\",\n        { className: \"lishi\" },\n        React.createElement(\n          \"div\",\n          { className: \"lishiItem-1\" },\n          React.createElement(\n            \"p\",\n            null,\n            d[0],\n            d[2]\n          ),\n          React.createElement(\n            \"p\",\n            null,\n            d[1]\n          )\n        ),\n        React.createElement(\n          \"div\",\n          { className: \"lishiItem-2\" },\n          React.createElement(\n            \"p\",\n            null,\n            d[3]\n          )\n        ),\n        React.createElement(\n          \"div\",\n          { className: \"lishiItem-3\" },\n          React.createElement(\n            \"p\",\n            null,\n            \"\\u64CD\\u4F5C\\u65F6\\u95F4\\uFF1A\",\n            d[5]\n          )\n        )\n      );\n    });\n    return React.createElement(\n      \"div\",\n      null,\n      React.createElement(\n        \"div\",\n        { className: \"partTitle\" },\n        \"\\u5BA1\\u6279\\u5386\\u53F2\"\n      ),\n      React.createElement(\n        \"div\",\n        { className: \"zhTextCon spls\" },\n        item\n      )\n    );\n  }\n});";
    },

    getData_control77: function (elem) {
      var data1 = [],
          data2 = [],
          data3 = [];
      var exg = /\n/g;
      $(elem).find(".divh3:contains('书')").each(function () {
        var zbtm = [];
        zbtm.push($(this).find('a').text());
        data1.push(zbtm);
      });
      $(elem).find(".divh3:contains('书')").next().each(function () {
        var zbnr = [];
        zbnr.push($(this).find('u').eq(0).text());
        data2.push(zbnr);
      });
      $(elem).find(".divh3:contains('书')").next("table").each(function () {
        var content = $.trim($(this).find(".MsoNormalTable").text());
        var str = content.split(exg);
        var arr = check(str);
        data3.push(arr);
      });

      function check(z) {
        var arr = [];
        z.map((value, index) => {
          if (value && value.trim() == "" && z[index - 1] && z[index - 1].trim() == "") {} else {
            arr.push(value.trim());
          }
        });
        return arr;
      }

      return {
        data1: data1,
        data2: data2,
        data3: data3
      };
    },
    doAction_uiControl133: function (data, elem) {},
    getTemplate_uiControl133: function () {
      var selfTemplate = "var React = require('react');\nmodule.exports = React.createClass({\n  getInitialState () {\n  \treturn {\n    \tdom:0\n    }\n  },\n  click: function(z){\n  \tlet div1 = this.refs.div1;\n  \tlet div2 = this.refs.div2;\n    if(div2.style.display == \"none\") {\n    \tdiv2.style.display = \"block\"\n    \tdiv1.style.display = \"none\"\n      this.setDom(z);\n    }else{\n    \tdiv2.style.display = \"none\"\n    \tdiv1.style.display = \"block\"\n    }\n    \n  },\n  setDom (z){\n  \tvar data = this.props.customData;\n    var title = data.data1[z]\n    var org = data.data2[z]\n    var content = data.data3[z]\n    var dom = (\n    \t\t\t<tbody>\n            <tr>\n              <td>{title}</td>\n              <td>{org}</td>\n              <td onClick={this.click.bind(null)} className=\"blue\">\u6536\u7F29</td>\n            </tr>\n            <tr>\n              <td colSpan=\"3\">{\n                content.map((value,index)=>{\n                return(\n                \t<div>{value}</div>\n                )})\n                }</td>\n            </tr>\n          </tbody>\n    )\n    \n  this.setState({dom:dom})\n  },\n  \n  render: function(){\n    var _this = this;\n  \tvar data = this.props.customData;\n    var dataNow = data.data1;\n    var that = this;\n  \tvar item = dataNow.map(function(d,i){\n\t\t\t\treturn(\n          <tbody>\n            <tr>\n              <td>{data.data1[i]}</td>\n              <td>{data.data2[i]}</td>\n              <td onClick={that.click.bind(null,i)} className=\"blue\">\u5C55\u5F00</td>\n            </tr>\n          </tbody>\n        )\n    });\n    return (\n      <div className=\"custom1\">\n        <h2>\u4E2D\u6807\u901A\u77E5\u4E66</h2>\n      \t<div className=\"zhTableCon\"  ref = \"div1\">\n          <table className=\"zhTable3\">\n          {item}\n          </table>\n      \t</div>\n        \n        <div className=\"zhTableCon\" style={{display:\"none\"}}  ref = \"div2\">\n          <table className=\"zhTable3\">\n            {this.state.dom}\n          </table>\n      \t</div>\n      </div>\n    )\n  }\n});\n";
      return "\"use strict\";\n\nvar React = require('react');\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n  getInitialState: function getInitialState() {\n    return {\n      dom: 0\n    };\n  },\n\n  click: function click(z) {\n    var div1 = this.refs.div1;\n    var div2 = this.refs.div2;\n    if (div2.style.display == \"none\") {\n      div2.style.display = \"block\";\n      div1.style.display = \"none\";\n      this.setDom(z);\n    } else {\n      div2.style.display = \"none\";\n      div1.style.display = \"block\";\n    }\n  },\n  setDom: function setDom(z) {\n    var data = this.props.customData;\n    var title = data.data1[z];\n    var org = data.data2[z];\n    var content = data.data3[z];\n    var dom = React.createElement(\n      \"tbody\",\n      null,\n      React.createElement(\n        \"tr\",\n        null,\n        React.createElement(\n          \"td\",\n          null,\n          title\n        ),\n        React.createElement(\n          \"td\",\n          null,\n          org\n        ),\n        React.createElement(\n          \"td\",\n          { onClick: this.click.bind(null), className: \"blue\" },\n          \"\\u6536\\u7F29\"\n        )\n      ),\n      React.createElement(\n        \"tr\",\n        null,\n        React.createElement(\n          \"td\",\n          { colSpan: \"3\" },\n          content.map(function (value, index) {\n            return React.createElement(\n              \"div\",\n              null,\n              value\n            );\n          })\n        )\n      )\n    );\n\n    this.setState({ dom: dom });\n  },\n\n\n  render: function render() {\n    var _this = this;\n    var data = this.props.customData;\n    var dataNow = data.data1;\n    var that = this;\n    var item = dataNow.map(function (d, i) {\n      return React.createElement(\n        \"tbody\",\n        null,\n        React.createElement(\n          \"tr\",\n          null,\n          React.createElement(\n            \"td\",\n            null,\n            data.data1[i]\n          ),\n          React.createElement(\n            \"td\",\n            null,\n            data.data2[i]\n          ),\n          React.createElement(\n            \"td\",\n            { onClick: that.click.bind(null, i), className: \"blue\" },\n            \"\\u5C55\\u5F00\"\n          )\n        )\n      );\n    });\n    return React.createElement(\n      \"div\",\n      { className: \"custom1\" },\n      React.createElement(\n        \"h2\",\n        null,\n        \"\\u4E2D\\u6807\\u901A\\u77E5\\u4E66\"\n      ),\n      React.createElement(\n        \"div\",\n        { className: \"zhTableCon\", ref: \"div1\" },\n        React.createElement(\n          \"table\",\n          { className: \"zhTable3\" },\n          item\n        )\n      ),\n      React.createElement(\n        \"div\",\n        { className: \"zhTableCon\", style: { display: \"none\" }, ref: \"div2\" },\n        React.createElement(\n          \"table\",\n          { className: \"zhTable3\" },\n          this.state.dom\n        )\n      )\n    );\n  }\n});";
    },
    getData_control78: function (elem) {
      var data1 = [],
          data3 = [];
      var exg = /\n/g;
      $(elem).find(".divh3:contains('信')").each(function () {
        var zbtm = [];
        zbtm.push($(this).find('a').text());
        data1.push(zbtm);
      });
      var table = elem.querySelectorAll(".divh3");
      var tables = [];
      [].slice.call(table).map((value, index) => {
        if (value.textContent.indexOf("信") != "-1") {
          tables.push(value.nextElementSibling);
        }
      });
      var cont = tables.map((val, ind) => {
        var parts = val.querySelectorAll(".MsoNormalTable");
        var partsContent = [].slice.call(parts).map((value, index) => {
          var content = value && value.textContent && value.textContent.trim();
          var str = content.split(exg);
          var arr = check(str);
          return arr;
        });
        return partsContent;
      });

      function check(z) {
        var arr = [];
        z.map((value, index) => {
          if (value && value.trim() == "" && z[index - 1] && z[index - 1].trim() == "") {} else {
            arr.push(value.trim());
          }
        });
        return arr;
      }

      return {
        data1: data1,
        data3: cont
      };
    },
    doAction_uiControl131: function (data, elem) {},
    getTemplate_uiControl131: function () {
      var selfTemplate = "var React = require('react');\nmodule.exports = React.createClass({\n  getInitialState () {\n  \treturn {\n    \tdom:0\n    }\n  },\n  click: function(z){\n  \tlet div1 = this.refs.div1;\n  \tlet div2 = this.refs.div2;\n    if(div2.style.display == \"none\") {\n    \tdiv2.style.display = \"block\"\n    \tdiv1.style.display = \"none\"\n      this.setDom(z);\n    }else{\n    \tdiv2.style.display = \"none\"\n    \tdiv1.style.display = \"block\"\n    }\n    \n  },\n  setDom (z){\n  \tvar data = this.props.customData;\n    var title = data.data1[z]\n    var content = data.data3[z]\n    var dom = (\n    \t\t\t<tbody>\n            <tr>\n              <td>{title}</td>\n              <td onClick={this.click.bind(null)} className=\"blue\">\u6536\u7F29</td>\n            </tr>\n        \t\t{content.map((value,index)=>{\n        \t\t\treturn(\n              \t<tr>\n                  <td colSpan=\"2\">\n                    {value.map((val,ind)=>{\n                    \treturn(\n                      \t<div>{val}</div>\n                      )\n                    })}\n                  </td>\n                </tr>\n              )\n        \t\t})}\n            \n          </tbody>\n    )\n    \n  this.setState({dom:dom})\n  },\n  \n  render: function(){\n    var _this = this;\n  \tvar data = this.props.customData;\n    var dataNow = data.data1;\n    var that = this;\n  \tvar item = dataNow.map(function(d,i){\n\t\t\t\treturn(\n          <tbody>\n            <tr>\n              <td>{data.data1[i]}</td>\n              <td onClick={that.click.bind(null,i)} className=\"blue\">\u5C55\u5F00</td>\n            </tr>\n          </tbody>\n        )\n    });\n    return (\n      <div className=\"custom1\">\n        <h2>\u611F\u8C22\u4FE1</h2>\n      \t<div className=\"zhTableCon\"  ref = \"div1\">\n          <table className=\"zhTable\">\n          {item}\n          </table>\n      \t</div>\n        \n        <div className=\"zhTableCon\" style={{display:\"none\"}}  ref = \"div2\">\n          <table className=\"zhTable\">\n            {this.state.dom}\n          </table>\n      \t</div>\n      </div>\n    )\n  }\n});\n";
      return "\"use strict\";\n\nvar React = require('react');\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n  getInitialState: function getInitialState() {\n    return {\n      dom: 0\n    };\n  },\n\n  click: function click(z) {\n    var div1 = this.refs.div1;\n    var div2 = this.refs.div2;\n    if (div2.style.display == \"none\") {\n      div2.style.display = \"block\";\n      div1.style.display = \"none\";\n      this.setDom(z);\n    } else {\n      div2.style.display = \"none\";\n      div1.style.display = \"block\";\n    }\n  },\n  setDom: function setDom(z) {\n    var data = this.props.customData;\n    var title = data.data1[z];\n    var content = data.data3[z];\n    var dom = React.createElement(\n      \"tbody\",\n      null,\n      React.createElement(\n        \"tr\",\n        null,\n        React.createElement(\n          \"td\",\n          null,\n          title\n        ),\n        React.createElement(\n          \"td\",\n          { onClick: this.click.bind(null), className: \"blue\" },\n          \"\\u6536\\u7F29\"\n        )\n      ),\n      content.map(function (value, index) {\n        return React.createElement(\n          \"tr\",\n          null,\n          React.createElement(\n            \"td\",\n            { colSpan: \"2\" },\n            value.map(function (val, ind) {\n              return React.createElement(\n                \"div\",\n                null,\n                val\n              );\n            })\n          )\n        );\n      })\n    );\n\n    this.setState({ dom: dom });\n  },\n\n\n  render: function render() {\n    var _this = this;\n    var data = this.props.customData;\n    var dataNow = data.data1;\n    var that = this;\n    var item = dataNow.map(function (d, i) {\n      return React.createElement(\n        \"tbody\",\n        null,\n        React.createElement(\n          \"tr\",\n          null,\n          React.createElement(\n            \"td\",\n            null,\n            data.data1[i]\n          ),\n          React.createElement(\n            \"td\",\n            { onClick: that.click.bind(null, i), className: \"blue\" },\n            \"\\u5C55\\u5F00\"\n          )\n        )\n      );\n    });\n    return React.createElement(\n      \"div\",\n      { className: \"custom1\" },\n      React.createElement(\n        \"h2\",\n        null,\n        \"\\u611F\\u8C22\\u4FE1\"\n      ),\n      React.createElement(\n        \"div\",\n        { className: \"zhTableCon\", ref: \"div1\" },\n        React.createElement(\n          \"table\",\n          { className: \"zhTable\" },\n          item\n        )\n      ),\n      React.createElement(\n        \"div\",\n        { className: \"zhTableCon\", style: { display: \"none\" }, ref: \"div2\" },\n        React.createElement(\n          \"table\",\n          { className: \"zhTable\" },\n          this.state.dom\n        )\n      )\n    );\n  }\n});";
    }
  });
})(window, ysp);
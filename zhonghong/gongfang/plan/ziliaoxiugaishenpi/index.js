(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control10: function (elem) {},
    doAction_uiControl17: function (data, elem) {},
    getTemplate_uiControl17: function () {
      var selfTemplate = "import { Backbtn } from 'ysp-custom-components';\n\nmodule.exports = React.createClass({\n  render: function(){\n\n\n    return (\n        <Backbtn title=\"\u4FE1\u606F\u4FEE\u6539\u5BA1\u6279\" describe={{}} />\n    )\n  }\n});\n";
      return "\"use strict\";\n\nvar _yspCustomComponents = require(\"ysp-custom-components\");\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n\n    return React.createElement(_yspCustomComponents.Backbtn, { title: \"\\u4FE1\\u606F\\u4FEE\\u6539\\u5BA1\\u6279\", describe: {} });\n  }\n});";
    },
    getData_control14: function (elem) {
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
    doAction_uiControl23: function (data, elem) {},
    getTemplate_uiControl23: function () {
      var selfTemplate = "var React = require('react');\n\nmodule.exports = React.createClass({\n  click:function(){\n    let div = this.refs.div;\n    let icon = this.refs.icon;\n    if(div.style.display == \"none\"){\n    div.style.display = \"block\"\n    icon.style.transform=\"rotate(180deg)\"\n    }else{\n    \tdiv.style.display = \"none\";\n      icon.style.transform=\"\"\n    }\n  },\n  render: function(){\n    var data = this.props.data.customData;\n\n\n\n   var item = data.map(function(d,i){\n    \treturn (\n      \t<div className = \"lishi\">\n          <div className = 'lishiItem-1'>\n          \t<p>{d[0]}{d[2]}</p>\n            <p>{d[1]}</p>\n          </div>\n          <div className = 'lishiItem-2'>\n            <p>{d[3]}</p>\n          </div>\n          <div className = 'lishiItem-3'>\n            {\n            //<p>\u63A5\u6536\u65F6\u95F4:{d[4]}</p>\n            }\n            <p>\u64CD\u4F5C\u65F6\u95F4\uFF1A{d[5]}</p>\n          </div>\n        </div>\n      )\n    })\n    return (\n      <div>\n\n        <div className=\"partTitle\">\n          \u5BA1\u6279\u5386\u53F2\n        </div>\n        <div className = \"zhTextCon spls\">\n          {item}\n        </div>\n      </div>\n\n    )\n  }\n});";
      return "\"use strict\";\n\nvar React = require('react');\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  click: function click() {\n    var div = this.refs.div;\n    var icon = this.refs.icon;\n    if (div.style.display == \"none\") {\n      div.style.display = \"block\";\n      icon.style.transform = \"rotate(180deg)\";\n    } else {\n      div.style.display = \"none\";\n      icon.style.transform = \"\";\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n\n    var item = data.map(function (d, i) {\n      return React.createElement(\n        \"div\",\n        { className: \"lishi\" },\n        React.createElement(\n          \"div\",\n          { className: \"lishiItem-1\" },\n          React.createElement(\n            \"p\",\n            null,\n            d[0],\n            d[2]\n          ),\n          React.createElement(\n            \"p\",\n            null,\n            d[1]\n          )\n        ),\n        React.createElement(\n          \"div\",\n          { className: \"lishiItem-2\" },\n          React.createElement(\n            \"p\",\n            null,\n            d[3]\n          )\n        ),\n        React.createElement(\n          \"div\",\n          { className: \"lishiItem-3\" },\n          React.createElement(\n            \"p\",\n            null,\n            \"\\u64CD\\u4F5C\\u65F6\\u95F4\\uFF1A\",\n            d[5]\n          )\n        )\n      );\n    });\n    return React.createElement(\n      \"div\",\n      null,\n      React.createElement(\n        \"div\",\n        { className: \"partTitle\" },\n        \"\\u5BA1\\u6279\\u5386\\u53F2\"\n      ),\n      React.createElement(\n        \"div\",\n        { className: \"zhTextCon spls\" },\n        item\n      )\n    );\n  }\n});";
    },

    getData_control16: function (elem) {
      var arr = elem.querySelectorAll("a");
      var targeta = [].slice.call(arr).map((value, index) => {
        return value.textContent;
      });
      return {
        targeta: targeta
      };
    },
    doAction_uiControl28: function (data, elem) {
      if (data.eventType === 'click') {
        var arr = elem.querySelectorAll("a");
        var d = data.dataCustom;
        arr[d].click();
      }
    },
    getTemplate_uiControl28: function () {
      var selfTemplate = "var React = require('react');\n\nmodule.exports = React.createClass({\n  click:function(){\n    let div = this.refs.div;\n    let div1 = this.refs.div1;\n    let icon = this.refs.icon;\n    if(div.style.display == \"none\"){\n    div.style.display = \"block\";\n    div1.style.display = \"none\"\n    icon.style.transform=\"rotate(180deg)\"\n    }else{\n    \tdiv.style.display = \"none\";\n      div1.style.display = \"block\"\n      icon.style.transform=\"\"\n    }\n  },\n\n  down:function(z){\n  \tvar callBack = this.props.customHandler;\n    if(callBack) {\n      callBack({\n        data:z,\n        eventType:'click'\n      })\n    }\n  },\n  render: function(){\n    var data = this.props.data.customData;\n\n\n\n\n    return (\n      <div style={{position:\"relative\",textAlign:\"center\"}}>\n\n\n\n\n        <div ref = \"icon\" onClick={this.click} style={{padding:\"3px\",right:0,position:\"absolute\",color:\"white\"}}>\n          <span style={{transform:\"scale(0.7)\",color:\"#949494\"}} className=\"icon icon-down-nav navbar-icon\"></span>\n      \t</div>\n\n        <div  onClick={this.click} className=\"partTitle\">\n          \u76F8\u5173\u9644\u4EF6\n        </div>\n\n\n\n        <div ref = \"div1\" className=\"partBody\" style={{textAlign:\"left\",padding:\"10px\"}}>\n\n          <table  className = \"zhTable\">\n            <thead>\n                <tr>\n                    <td>\u9644\u4EF6\u540D\u79F0</td>\n                    <td>\u4FEE\u6539\u8BF4\u660E</td>\n                </tr>\n            </thead>\n            <tbody>\n              {\n                data&&data.targeta.map((value,index)=>{\n              \tif(index<2){\n                return (\n                <tr>\n                    <td onClick={this.down.bind(null,index)} className=\"blue\">{value}</td>\n                    <td>\u65E0</td>\n                </tr>\n                )\n                }\n              })\n              }\n            </tbody>\n\t\t\t\t\t</table>\n\n        </div>\n\n\n\n\n        <div ref = \"div\"  className=\"partBody\" style={{display:\"none\",textAlign:\"left\",padding:\"10px\"}}>\n\n          <table  className = \"zhTable\">\n            <thead>\n                <tr>\n                    <td>\u9644\u4EF6\u540D\u79F0</td>\n                    <td>\u4FEE\u6539\u8BF4\u660E</td>\n                </tr>\n            </thead>\n            <tbody>\n              {\n                data&&data.targeta.map((value,index)=>{\n\n                return (\n                <tr>\n                    <td onClick={this.down.bind(null,index)} className=\"blue\">{value}</td>\n                    <td>\u65E0</td>\n                </tr>\n                )\n\n              })\n              }\n            </tbody>\n\t\t\t\t\t</table>\n\n        </div>\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nvar React = require('react');\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  click: function click() {\n    var div = this.refs.div;\n    var div1 = this.refs.div1;\n    var icon = this.refs.icon;\n    if (div.style.display == \"none\") {\n      div.style.display = \"block\";\n      div1.style.display = \"none\";\n      icon.style.transform = \"rotate(180deg)\";\n    } else {\n      div.style.display = \"none\";\n      div1.style.display = \"block\";\n      icon.style.transform = \"\";\n    }\n  },\n\n  down: function down(z) {\n    var callBack = this.props.customHandler;\n    if (callBack) {\n      callBack({\n        data: z,\n        eventType: 'click'\n      });\n    }\n  },\n  render: function render() {\n    var _this = this;\n\n    var data = this.props.data.customData;\n\n    return React.createElement(\n      \"div\",\n      { style: { position: \"relative\", textAlign: \"center\" } },\n      React.createElement(\n        \"div\",\n        { ref: \"icon\", onClick: this.click, style: { padding: \"3px\", right: 0, position: \"absolute\", color: \"white\" } },\n        React.createElement(\"span\", { style: { transform: \"scale(0.7)\", color: \"#949494\" }, className: \"icon icon-down-nav navbar-icon\" })\n      ),\n      React.createElement(\n        \"div\",\n        { onClick: this.click, className: \"partTitle\" },\n        \"\\u76F8\\u5173\\u9644\\u4EF6\"\n      ),\n      React.createElement(\n        \"div\",\n        { ref: \"div1\", className: \"partBody\", style: { textAlign: \"left\", padding: \"10px\" } },\n        React.createElement(\n          \"table\",\n          { className: \"zhTable\" },\n          React.createElement(\n            \"thead\",\n            null,\n            React.createElement(\n              \"tr\",\n              null,\n              React.createElement(\n                \"td\",\n                null,\n                \"\\u9644\\u4EF6\\u540D\\u79F0\"\n              ),\n              React.createElement(\n                \"td\",\n                null,\n                \"\\u4FEE\\u6539\\u8BF4\\u660E\"\n              )\n            )\n          ),\n          React.createElement(\n            \"tbody\",\n            null,\n            data && data.targeta.map(function (value, index) {\n              if (index < 2) {\n                return React.createElement(\n                  \"tr\",\n                  null,\n                  React.createElement(\n                    \"td\",\n                    { onClick: _this.down.bind(null, index), className: \"blue\" },\n                    value\n                  ),\n                  React.createElement(\n                    \"td\",\n                    null,\n                    \"\\u65E0\"\n                  )\n                );\n              }\n            })\n          )\n        )\n      ),\n      React.createElement(\n        \"div\",\n        { ref: \"div\", className: \"partBody\", style: { display: \"none\", textAlign: \"left\", padding: \"10px\" } },\n        React.createElement(\n          \"table\",\n          { className: \"zhTable\" },\n          React.createElement(\n            \"thead\",\n            null,\n            React.createElement(\n              \"tr\",\n              null,\n              React.createElement(\n                \"td\",\n                null,\n                \"\\u9644\\u4EF6\\u540D\\u79F0\"\n              ),\n              React.createElement(\n                \"td\",\n                null,\n                \"\\u4FEE\\u6539\\u8BF4\\u660E\"\n              )\n            )\n          ),\n          React.createElement(\n            \"tbody\",\n            null,\n            data && data.targeta.map(function (value, index) {\n\n              return React.createElement(\n                \"tr\",\n                null,\n                React.createElement(\n                  \"td\",\n                  { onClick: _this.down.bind(null, index), className: \"blue\" },\n                  value\n                ),\n                React.createElement(\n                  \"td\",\n                  null,\n                  \"\\u65E0\"\n                )\n              );\n            })\n          )\n        )\n      )\n    );\n  }\n});";
    },
    getData_control17: function (elem) {
      var dom = elem.querySelectorAll("#versionDetail")[0];

      if (dom) {
        var alertBox = dom.contentDocument.querySelectorAll(".alert_content");

        if (alertBox[0] != undefined) {
          return false;
        }

        var table = dom.contentDocument && dom.contentDocument.querySelector(".regtable");
        var page = dom.contentDocument && dom.contentDocument.querySelector(".page");
        var box = dom.contentDocument && dom.contentDocument.querySelector(".alert_content");

        if (table && page) {
          var trs = table.querySelectorAll("tr");
          var select = page.querySelector("select");

          if (select && select.children[4].selected == false) {
            select.children[4].selected = true;
            select.onchange();
          }

          var data = [];
          Array.from(trs) && Array.from(trs).map((value, index) => {
            if (index > 0) {
              var class1 = "";
              var class2 = "";

              if (value && value.children[3].querySelector("a") !== null) {
                class1 = "blue";
              }

              if (value && value.children[4].querySelector("a") !== null) {
                value.children[4].querySelector("a");
                class2 = "blue";
              }

              var json = {
                person: value.children[1].textContent.trim(),
                data: value.children[2].textContent.trim(),
                befor: [value.children[3].textContent.trim(), class1],
                after: [value.children[4].textContent.trim(), class2]
              };
              data.push(json);
            }
          });
          return data;
        }
      }
    },
    doAction_uiControl30: function (data, elem) {
      if (data.eventType === 'click') {
        var d = data.dataCustom;
        var dom = elem.querySelectorAll("#versionDetail")[0];
        var table = dom.contentDocument.querySelector(".regtable");
        var a = table.querySelectorAll("a");
        a[d].click();
      }

      if (data.eventType === 'click2') {
        var dom = elem.querySelectorAll("#versionDetail")[0];
        var alertBox = dom.contentDocument.querySelectorAll(".alert_content");
        var a = alertBox[0].querySelector("a");
        a.click();
        var input = alertBox[0].querySelectorAll("input");
        input[0] && input[0].click();
        input[1] && input[1].click();
      }
    },
    getTemplate_uiControl30: function () {
      var selfTemplate = "var React = require('react');\n\nmodule.exports = React.createClass({\n\tcomponentDidUpdate:function(){\n  \tlet div = this.refs.div;\n    let div1 = this.refs.div1;\n    if(div&&div1){\n        var style = div.style.display;\n        var style1 = div1.style.display;\n      \tif(style==\"none\"&&style1==\"none\"){\n        div1.style.display = \"block\";\n        let icon = this.refs.icon;\n        icon.style.transform=\"rotate(0deg)\"\n        }\n      }\n  },\n  onClick:function(){\n    var callBack = this.props.customHandler;\n    if(callBack) {\n      callBack({\n        data:'1',\n        eventType:'click2'\n      })\n    }\n\t\t\n  },\n  click:function(){\n    let div = this.refs.div;\n    let div1 = this.refs.div1;\n    let icon = this.refs.icon;\n    if(div.style.display == \"none\"){\n    div.style.display = \"block\";\n    div1.style.display = \"none\"\n    icon.style.transform=\"rotate(180deg)\"\n    }else{\n    \tdiv.style.display = \"none\";\n      div1.style.display = \"block\"\n      icon.style.transform=\"\"\n    }\n  },\n  click2:function(z){\n    var callBack = this.props.customHandler;       \n    if(callBack) {                                 \n      callBack({\n        data:z,\n        eventType:'click'                         \n      })\n    }\n  },\n\n  down:function(z){\n  \tvar callBack = this.props.customHandler;\n    if(callBack) {\n      callBack({\n        data:z,\n        eventType:'click'\n      })\n    }\n  },\n  render: function(){\n    var data = this.props.data.customData;\n\t\tvar m = 0;\n    var n = 0;\n    var that = this;\n\n\t\tif(data == false){\n    \treturn (\n      <div style={{position:\"relative\",textAlign:\"center\"}}>\n\n\n        <div className=\"partTitle transform\">\n          \u53CB\u60C5\u63D0\u793A\n        </div>\n\n\n        <div  className = \"zhTableCon\">\n        \t<table  className = \"zhTable\">\n          \u5BF9\u4E0D\u8D77\uFF0C\u7CFB\u7EDF\u65E0\u6CD5\u6B63\u786E\u5904\u7406\u60A8\u7684\u8BF7\u6C42\uFF0C\u70B9\u51FB \u8FD4\u56DE \u6216\u8054\u7CFB\u7BA1\u7406\u5458!\n\u63D0\u793A\uFF1A\u5BF9\u4E0D\u8D77,\u672A\u627E\u5230\u6253\u5F00\u6587\u4EF6\uFF01\n\t\t\t\t\t</table>\n      \t</div>\n\n        <div className=\"block\" style={{padding:\"10px\"}} >\n        \t<button className = \"btn btn-warning btn-block waves-effec\" onClick = {this.onClick}>\u8FD4\u56DE</button>\n        </div>\n    </div>\n    )\n    }else{\n    \n    \treturn (\n      <div style={{position:\"relative\",textAlign:\"center\"}}>\n\n\n        <div ref = \"icon\" onClick={this.click} style={{padding:\"3px\",right:0,position:\"absolute\",color:\"white\"}}>\n          <span style={{transform:\"scale(0.7)\",color:\"#949494\"}} className=\"icon icon-down-nav navbar-icon\"></span>\n      \t</div>\n\n        <div  onClick={this.click} className=\"partTitle\">\n          \u4FEE\u6539\u660E\u7EC6\n        </div>\n\n\n\n        <div ref = \"div1\" className=\"partBody\" style={{textAlign:\"left\",padding:\"10px\"}}>\n\n          <table style={{wordBreak:\"break-all\"}}  className = \"zhTable\">\n            <thead>\n                <tr>\n                    <td>\u6570\u636E\u9879</td>\n                    <td>\u53D8\u66F4\u524D</td>\n                    <td>\u53D8\u66F4\u540E</td>\n                </tr>\n            </thead>\n            <tbody>\n              {data&&data.map((value,index)=>{\n              \tif(index<3){\n                  var befor;\n                  var after;\n                  if(value.befor[1]==\"blue\"){\n                          befor = (\n                            <td className={value.befor[1]} >\n                              <span onClick={that.click2.bind(null,m++)} >{value.befor[0]}</span>\n                            </td>\n                          )\n                        }else{\n                          befor = (\n                            <td>{value.befor[0]}</td>\n                          )\n                      }\n                   if(value.after[1]==\"blue\"){\n                          after = (\n                            <td className={value.after[1]} onClick={that.click2.bind(null,m++)}  >\n                              <span onClick={that.click2.bind(null,m++)} >{value.after[0]}</span>\n                            </td>\n                          )\n                        }else{\n                          after = (\n                            <td>{value.after[0]}</td>\n                          )\n                      }\n                \treturn(\n                    <tr>\n                      <td>{value.data}</td>\n                        {befor}\n                        {after}\n                    \t</tr>\n                \t)\n                }\n              })}\n            </tbody>\n\t\t\t\t\t</table>\n\n        </div>\n\n\n\n\n        <div ref = \"div\"  className=\"partBody\" style={{display:\"none\",textAlign:\"left\",padding:\"10px\"}}>\n\n          <table style={{wordBreak:\"break-all\"}} className = \"zhTable\">\n            <thead>\n                <tr>\n                    <td>\u4FEE\u6539\u4EBA</td>\n                    <td>\u6570\u636E\u9879</td>\n                    <td>\u53D8\u66F4\u524D</td>\n                    <td>\u53D8\u66F4\u540E</td>\n                </tr>\n            </thead>\n            <tbody>\n              {data&&data.map((value,index)=>{\n              \tif(index<100){\n                  var befor;\n                  var after;\n                  if(value.befor[1]==\"blue\"){\n                          befor = (\n                            <td className={value.befor[1]} >\n                            \t<span onClick={that.click2.bind(null,n++)} >{value.befor[0]}</span>\n                            </td>\n                          )\n                        }else{\n                          befor = (\n                            <td>{value.befor[0]}</td>\n                          )\n                      }\n                   if(value.after[1]==\"blue\"){\n                          after = (\n                            <td className={value.after[1]} >\n                             \n                              <span onClick={that.click2.bind(null,n++)} >{value.after[0]}</span>\n                            </td>\n                          )\n                        }else{\n                          after = (\n                            <td>{value.after[0]}</td>\n                          )\n                      }\n                \treturn(\n                    <tr>\n                      <td>{value.person}</td>\n                      <td>{value.data}</td>\n                        {befor}\n                        {after}\n                    </tr>\n                \t)\n                }\n              })}\n            </tbody>\n\t\t\t\t\t</table>\n\n        </div>\n      </div>\n    )\n    \t\n    }\n\n    \n  }\n});";
      return "\"use strict\";\n\nvar React = require('react');\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  componentDidUpdate: function componentDidUpdate() {\n    var div = this.refs.div;\n    var div1 = this.refs.div1;\n    if (div && div1) {\n      var style = div.style.display;\n      var style1 = div1.style.display;\n      if (style == \"none\" && style1 == \"none\") {\n        div1.style.display = \"block\";\n        var icon = this.refs.icon;\n        icon.style.transform = \"rotate(0deg)\";\n      }\n    }\n  },\n  onClick: function onClick() {\n    var callBack = this.props.customHandler;\n    if (callBack) {\n      callBack({\n        data: '1',\n        eventType: 'click2'\n      });\n    }\n  },\n  click: function click() {\n    var div = this.refs.div;\n    var div1 = this.refs.div1;\n    var icon = this.refs.icon;\n    if (div.style.display == \"none\") {\n      div.style.display = \"block\";\n      div1.style.display = \"none\";\n      icon.style.transform = \"rotate(180deg)\";\n    } else {\n      div.style.display = \"none\";\n      div1.style.display = \"block\";\n      icon.style.transform = \"\";\n    }\n  },\n  click2: function click2(z) {\n    var callBack = this.props.customHandler;\n    if (callBack) {\n      callBack({\n        data: z,\n        eventType: 'click'\n      });\n    }\n  },\n\n  down: function down(z) {\n    var callBack = this.props.customHandler;\n    if (callBack) {\n      callBack({\n        data: z,\n        eventType: 'click'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n    var m = 0;\n    var n = 0;\n    var that = this;\n\n    if (data == false) {\n      return React.createElement(\n        \"div\",\n        { style: { position: \"relative\", textAlign: \"center\" } },\n        React.createElement(\n          \"div\",\n          { className: \"partTitle transform\" },\n          \"\\u53CB\\u60C5\\u63D0\\u793A\"\n        ),\n        React.createElement(\n          \"div\",\n          { className: \"zhTableCon\" },\n          React.createElement(\n            \"table\",\n            { className: \"zhTable\" },\n            \"\\u5BF9\\u4E0D\\u8D77\\uFF0C\\u7CFB\\u7EDF\\u65E0\\u6CD5\\u6B63\\u786E\\u5904\\u7406\\u60A8\\u7684\\u8BF7\\u6C42\\uFF0C\\u70B9\\u51FB \\u8FD4\\u56DE \\u6216\\u8054\\u7CFB\\u7BA1\\u7406\\u5458! \\u63D0\\u793A\\uFF1A\\u5BF9\\u4E0D\\u8D77,\\u672A\\u627E\\u5230\\u6253\\u5F00\\u6587\\u4EF6\\uFF01\"\n          )\n        ),\n        React.createElement(\n          \"div\",\n          { className: \"block\", style: { padding: \"10px\" } },\n          React.createElement(\n            \"button\",\n            { className: \"btn btn-warning btn-block waves-effec\", onClick: this.onClick },\n            \"\\u8FD4\\u56DE\"\n          )\n        )\n      );\n    } else {\n\n      return React.createElement(\n        \"div\",\n        { style: { position: \"relative\", textAlign: \"center\" } },\n        React.createElement(\n          \"div\",\n          { ref: \"icon\", onClick: this.click, style: { padding: \"3px\", right: 0, position: \"absolute\", color: \"white\" } },\n          React.createElement(\"span\", { style: { transform: \"scale(0.7)\", color: \"#949494\" }, className: \"icon icon-down-nav navbar-icon\" })\n        ),\n        React.createElement(\n          \"div\",\n          { onClick: this.click, className: \"partTitle\" },\n          \"\\u4FEE\\u6539\\u660E\\u7EC6\"\n        ),\n        React.createElement(\n          \"div\",\n          { ref: \"div1\", className: \"partBody\", style: { textAlign: \"left\", padding: \"10px\" } },\n          React.createElement(\n            \"table\",\n            { style: { wordBreak: \"break-all\" }, className: \"zhTable\" },\n            React.createElement(\n              \"thead\",\n              null,\n              React.createElement(\n                \"tr\",\n                null,\n                React.createElement(\n                  \"td\",\n                  null,\n                  \"\\u6570\\u636E\\u9879\"\n                ),\n                React.createElement(\n                  \"td\",\n                  null,\n                  \"\\u53D8\\u66F4\\u524D\"\n                ),\n                React.createElement(\n                  \"td\",\n                  null,\n                  \"\\u53D8\\u66F4\\u540E\"\n                )\n              )\n            ),\n            React.createElement(\n              \"tbody\",\n              null,\n              data && data.map(function (value, index) {\n                if (index < 3) {\n                  var befor;\n                  var after;\n                  if (value.befor[1] == \"blue\") {\n                    befor = React.createElement(\n                      \"td\",\n                      { className: value.befor[1] },\n                      React.createElement(\n                        \"span\",\n                        { onClick: that.click2.bind(null, m++) },\n                        value.befor[0]\n                      )\n                    );\n                  } else {\n                    befor = React.createElement(\n                      \"td\",\n                      null,\n                      value.befor[0]\n                    );\n                  }\n                  if (value.after[1] == \"blue\") {\n                    after = React.createElement(\n                      \"td\",\n                      { className: value.after[1], onClick: that.click2.bind(null, m++) },\n                      React.createElement(\n                        \"span\",\n                        { onClick: that.click2.bind(null, m++) },\n                        value.after[0]\n                      )\n                    );\n                  } else {\n                    after = React.createElement(\n                      \"td\",\n                      null,\n                      value.after[0]\n                    );\n                  }\n                  return React.createElement(\n                    \"tr\",\n                    null,\n                    React.createElement(\n                      \"td\",\n                      null,\n                      value.data\n                    ),\n                    befor,\n                    after\n                  );\n                }\n              })\n            )\n          )\n        ),\n        React.createElement(\n          \"div\",\n          { ref: \"div\", className: \"partBody\", style: { display: \"none\", textAlign: \"left\", padding: \"10px\" } },\n          React.createElement(\n            \"table\",\n            { style: { wordBreak: \"break-all\" }, className: \"zhTable\" },\n            React.createElement(\n              \"thead\",\n              null,\n              React.createElement(\n                \"tr\",\n                null,\n                React.createElement(\n                  \"td\",\n                  null,\n                  \"\\u4FEE\\u6539\\u4EBA\"\n                ),\n                React.createElement(\n                  \"td\",\n                  null,\n                  \"\\u6570\\u636E\\u9879\"\n                ),\n                React.createElement(\n                  \"td\",\n                  null,\n                  \"\\u53D8\\u66F4\\u524D\"\n                ),\n                React.createElement(\n                  \"td\",\n                  null,\n                  \"\\u53D8\\u66F4\\u540E\"\n                )\n              )\n            ),\n            React.createElement(\n              \"tbody\",\n              null,\n              data && data.map(function (value, index) {\n                if (index < 100) {\n                  var befor;\n                  var after;\n                  if (value.befor[1] == \"blue\") {\n                    befor = React.createElement(\n                      \"td\",\n                      { className: value.befor[1] },\n                      React.createElement(\n                        \"span\",\n                        { onClick: that.click2.bind(null, n++) },\n                        value.befor[0]\n                      )\n                    );\n                  } else {\n                    befor = React.createElement(\n                      \"td\",\n                      null,\n                      value.befor[0]\n                    );\n                  }\n                  if (value.after[1] == \"blue\") {\n                    after = React.createElement(\n                      \"td\",\n                      { className: value.after[1] },\n                      React.createElement(\n                        \"span\",\n                        { onClick: that.click2.bind(null, n++) },\n                        value.after[0]\n                      )\n                    );\n                  } else {\n                    after = React.createElement(\n                      \"td\",\n                      null,\n                      value.after[0]\n                    );\n                  }\n                  return React.createElement(\n                    \"tr\",\n                    null,\n                    React.createElement(\n                      \"td\",\n                      null,\n                      value.person\n                    ),\n                    React.createElement(\n                      \"td\",\n                      null,\n                      value.data\n                    ),\n                    befor,\n                    after\n                  );\n                }\n              })\n            )\n          )\n        )\n      );\n    }\n  }\n});";
    },
    getData_control32: function (elem) {
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
    doAction_uiControl52: function (data, elem) {},
    getTemplate_uiControl52: function () {
      var selfTemplate = "var React = require('react');\n\nmodule.exports = React.createClass({\n  click:function(){\n    let div = this.refs.div;\n    let icon = this.refs.icon;\n    if(div.style.display == \"none\"){\n    div.style.display = \"block\"\n    icon.style.transform=\"rotate(90deg)\"\n    }else{\n    \tdiv.style.display = \"none\";\n      icon.style.transform=\"\"\n    }\n  },\n  render: function(){\n    var data = this.props.data.customData;\n\n    const header = {\n    \tpadding:\"2px 0 2px 8px\",\n      borderLeft:\"7px solid #45bcff\",\n      borderBottom:\"1px solid #e6e6e6\",\n      color:\"#45bcff\",\n      fontWeight: \"bolder\",\n      fontSize:\"16px\",\n      textAlign:\"left\"\n    }\n\n    const body = {\n      padding:\"15px 8px\",\n      color:\"#3f3f3f\"\n                 }\n\n\n    return (\n      <div style={{textAlign:\"center\"}}>\n\n        <div className=\"partTitle\">\n          \u5BA1\u6279\u6D41\u7A0B\n        </div>\n\n        <div className=\"partBody\">\n\n        \t<div className = \"textleft\">\n            {data.map(function(value,index){\n\n            var z = value.cont.split(\"\\n\");\n            var length = z.length-1;\n            var x= z[0]+z[length];\n\n            var blue = {};\n\n            if(value.class==\"cblue\"){\n            \tblue = {color:\"#0b84f7\",fontWeight:\"bold\"}\n            }\n\n\n            if(index < data.length-1){\n            \treturn(\n            <span>\n                <span style = {blue}>{x}</span>\n                <span>-></span>\n            </span>\n            )\n            }else{\n            return(\n            <span style = {blue}>\n                {x}\n            </span>\n            )\n\n            }\n          })}\n          </div>\n        </div>\n      </div>\n    )\n  }\n});\n";
      return "\"use strict\";\n\nvar React = require('react');\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  click: function click() {\n    var div = this.refs.div;\n    var icon = this.refs.icon;\n    if (div.style.display == \"none\") {\n      div.style.display = \"block\";\n      icon.style.transform = \"rotate(90deg)\";\n    } else {\n      div.style.display = \"none\";\n      icon.style.transform = \"\";\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n\n    var header = {\n      padding: \"2px 0 2px 8px\",\n      borderLeft: \"7px solid #45bcff\",\n      borderBottom: \"1px solid #e6e6e6\",\n      color: \"#45bcff\",\n      fontWeight: \"bolder\",\n      fontSize: \"16px\",\n      textAlign: \"left\"\n    };\n\n    var body = {\n      padding: \"15px 8px\",\n      color: \"#3f3f3f\"\n    };\n\n    return React.createElement(\n      \"div\",\n      { style: { textAlign: \"center\" } },\n      React.createElement(\n        \"div\",\n        { className: \"partTitle\" },\n        \"\\u5BA1\\u6279\\u6D41\\u7A0B\"\n      ),\n      React.createElement(\n        \"div\",\n        { className: \"partBody\" },\n        React.createElement(\n          \"div\",\n          { className: \"textleft\" },\n          data.map(function (value, index) {\n\n            var z = value.cont.split(\"\\n\");\n            var length = z.length - 1;\n            var x = z[0] + z[length];\n\n            var blue = {};\n\n            if (value.class == \"cblue\") {\n              blue = { color: \"#0b84f7\", fontWeight: \"bold\" };\n            }\n\n            if (index < data.length - 1) {\n              return React.createElement(\n                \"span\",\n                null,\n                React.createElement(\n                  \"span\",\n                  { style: blue },\n                  x\n                ),\n                React.createElement(\n                  \"span\",\n                  null,\n                  \"->\"\n                )\n              );\n            } else {\n              return React.createElement(\n                \"span\",\n                { style: blue },\n                x\n              );\n            }\n          })\n        )\n      )\n    );\n  }\n});";
    },
    getData_control33: function (elem) {
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
    doAction_uiControl53: function (data, elem) {
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
    getTemplate_uiControl53: function () {
      var selfTemplate = "var React = require('react');\n\nmodule.exports = React.createClass({\n  componentDidMount:function(){\n  \tvar data = this.props.customData;\n    if(data.zihui == \"zihui\"){\n    \t this.refs.done.outerHTML=\"\"\n    }\n  },\n\n  onChange(e){\n\n    var callBack = this.props.customHandler;\n    var index = e.target.selectedIndex;\n    if(callBack) {\n      callBack({\n        data:index,\n        eventType:'change'\n      })\n    }\n  },\n  onBlur(e){\n  \tvar content = e.target.value;\n    var handler = this.props.customHandler;\n    if(handler){\n    \thandler({\n      \tdata : [content,\"text\"]\n      })\n    }\n  },\n  onClick1(e){\n  \tvar handler = this.props.customHandler;\n    if(handler){\n    \thandler({\n      \tdata : [\"111\",\"btn1\"]\n      })\n    }\n  },\n  onClick2(e){\n  \tvar handler = this.props.customHandler;\n    if(handler){\n    \thandler({\n      \tdata : [\"111\",\"btn2\"]\n      })\n    }\n  },\n    onClick3(e){\n  \tvar handler = this.props.customHandler;\n    if(handler){\n    \thandler({\n      \tdata : [\"2\",\"btn3\"]\n      })\n    }\n  },\n    onClick4(e){\n  \tvar handler = this.props.customHandler;\n    if(handler){\n    \thandler({\n      \tdata : [\"3\",\"btn4\"]\n      })\n    }\n  },\n  render: function(){\n    var data = this.props.customData;\n    var _this = this;\n    var item = data.data[0].map(function(d,i){\n    \tif(i==0){\n        return (<option selected>{d}</option>)\n\n      }\n      else{\n      \treturn(<option>{d}</option>)\n      }\n    })\n    return (\n      <div ref = \"done\" className = 'custom1'>\n      \t<h2>\u5BA1\u6279\u610F\u89C1</h2>\n        <div className = \"zhShenpiCon\">\n\n          <select onChange = {_this.onChange}>\n            {item}\n          </select>\n          <textarea onBlur = {_this.onBlur} value = {data.data[1]}></textarea>\n\n          <div className = \"buttonCon\">\n          \t{data.btn[0]&& <button className = \"btn btn-success btn-block waves-effect\" onClick = {_this.onClick1}>{data.btn[0]}</button>}\n            {data.btn[1]&& <button className = \"btn btn-alert btn-block waves-effect\" onClick = {_this.onClick2}>{data.btn[1]}</button>}\n            {data.btn[2]&& <button style={{marginBottom:\"10px\"}} className = \"btn btn-warning btn-block waves-effect\" onClick = {_this.onClick3}>{data.btn[2]}</button>}\n            {data.btn[3]&& <button className = \"btn btn-secondary btn-block waves-effect\" onClick = {_this.onClick4}>{data.btn[3]}</button>}\n          </div>\n        </div>\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nvar React = require('react');\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  componentDidMount: function componentDidMount() {\n    var data = this.props.customData;\n    if (data.zihui == \"zihui\") {\n      this.refs.done.outerHTML = \"\";\n    }\n  },\n\n  onChange: function onChange(e) {\n\n    var callBack = this.props.customHandler;\n    var index = e.target.selectedIndex;\n    if (callBack) {\n      callBack({\n        data: index,\n        eventType: 'change'\n      });\n    }\n  },\n  onBlur: function onBlur(e) {\n    var content = e.target.value;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: [content, \"text\"]\n      });\n    }\n  },\n  onClick1: function onClick1(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: [\"111\", \"btn1\"]\n      });\n    }\n  },\n  onClick2: function onClick2(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: [\"111\", \"btn2\"]\n      });\n    }\n  },\n  onClick3: function onClick3(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: [\"2\", \"btn3\"]\n      });\n    }\n  },\n  onClick4: function onClick4(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: [\"3\", \"btn4\"]\n      });\n    }\n  },\n\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    var item = data.data[0].map(function (d, i) {\n      if (i == 0) {\n        return React.createElement(\n          \"option\",\n          { selected: true },\n          d\n        );\n      } else {\n        return React.createElement(\n          \"option\",\n          null,\n          d\n        );\n      }\n    });\n    return React.createElement(\n      \"div\",\n      { ref: \"done\", className: \"custom1\" },\n      React.createElement(\n        \"h2\",\n        null,\n        \"\\u5BA1\\u6279\\u610F\\u89C1\"\n      ),\n      React.createElement(\n        \"div\",\n        { className: \"zhShenpiCon\" },\n        React.createElement(\n          \"select\",\n          { onChange: _this.onChange },\n          item\n        ),\n        React.createElement(\"textarea\", { onBlur: _this.onBlur, value: data.data[1] }),\n        React.createElement(\n          \"div\",\n          { className: \"buttonCon\" },\n          data.btn[0] && React.createElement(\n            \"button\",\n            { className: \"btn btn-success btn-block waves-effect\", onClick: _this.onClick1 },\n            data.btn[0]\n          ),\n          data.btn[1] && React.createElement(\n            \"button\",\n            { className: \"btn btn-alert btn-block waves-effect\", onClick: _this.onClick2 },\n            data.btn[1]\n          ),\n          data.btn[2] && React.createElement(\n            \"button\",\n            { style: { marginBottom: \"10px\" }, className: \"btn btn-warning btn-block waves-effect\", onClick: _this.onClick3 },\n            data.btn[2]\n          ),\n          data.btn[3] && React.createElement(\n            \"button\",\n            { className: \"btn btn-secondary btn-block waves-effect\", onClick: _this.onClick4 },\n            data.btn[3]\n          )\n        )\n      )\n    );\n  }\n});";
    }
  });
})(window, ysp);
(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control49: function (elem) {},
    doAction_uiControl75: function (data, elem) {},
    getTemplate_uiControl75: function () {
      var selfTemplate = "import { Backbtn } from 'ysp-custom-components';\n\nmodule.exports = React.createClass({\n  render: function(){\n\n\n    return (\n        <Backbtn title=\"\u6E05\u6807\u5BA1\u6279\" describe={{}} />\n\n    )\n  }\n});";
      return "\"use strict\";\n\nvar _yspCustomComponents = require(\"ysp-custom-components\");\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n\n    return React.createElement(_yspCustomComponents.Backbtn, { title: \"\\u6E05\\u6807\\u5BA1\\u6279\", describe: {} });\n  }\n});";
    },

    getData_control52: function (elem) {
      var lis = elem.querySelectorAll("li");
      var content = [];
      let color = [];
      [].slice.call(lis).map((value, index) => {
        content.push(value.textContent);
        var hisColor = value.className.split("_")[1];
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
    doAction_uiControl88: function (data, elem) {},
    getTemplate_uiControl88: function () {
      var selfTemplate = "var React = require('react');\n\nmodule.exports = React.createClass({\n  click:function(){\n    let div = this.refs.div;\n    let div1 = this.refs.div1;\n    let icon = this.refs.icon;\n    if(div.style.display == \"none\"){\n    div.style.display = \"block\"\n    div1.style.display = \"none\";\n    icon.style.transform=\"rotate(180deg)\"\n    }else{\n    \tdiv.style.display = \"none\";\n      div1.style.display = \"block\"\n      icon.style.transform=\"\"\n    }\n  },\n  \n  render: function(){\n    var data = this.props.data.customData;  \n\n    return (\n      <div style={{position:\"relative\",textAlign:\"center\"}}>\n        \n        <div ref = \"icon\" onClick={this.click} style={{padding:\"3px\",right:0,position:\"absolute\",color:\"white\"}}>\n          <span style={{transform:\"scale(0.7)\",color:\"#949494\"}} className=\"icon icon-down-nav navbar-icon\"></span>\n      \t</div>\n        \n        <div  onClick={this.click} className=\"partTitle\">\n          \u7BA1\u63A7\u8981\u70B9\n        </div>\n        \n        \n        <div ref = \"div1\" className = \"zhTableCon\">\n        <table  className = \"zhTable3\">\n            <thead>\n                <tr>\n                    <td width=\"15%\">\u5E8F\u53F7</td>\n                    <td>\u5BA1\u6279\u7BA1\u63A7\u8981\u70B9</td>\n                    <td width=\"15%\">\u72B6\u6001</td>\n                </tr>\n            </thead>\n            <tbody>\n              {\n                data&&data.content.map((value,index)=>{\n              \tif(index<4){\n                return (\n                <tr>\n                    <td>{index+1}</td>\n                    <td>{value}</td>\n                    <td><div style ={{height:\"20px\"}} className = {data.color[index]}></div></td>\n                </tr>\n                )\n                }\n              })\n              }\n            </tbody>\n\t\t\t\t\t</table>\n      \t</div>\n        \n        \n        <div  style = {{display:\"none\"}} ref = \"div\">\n        \t<div className = \"zhTableCon\">\n          <table  className = \"zhTable3\">\n            <thead>\n                <tr>\n                    <td width=\"15%\">\u5E8F\u53F7</td>\n                    <td>\u5BA1\u6279\u7BA1\u63A7\u8981\u70B9</td>\n                    <td width=\"15%\">\u72B6\u6001</td>\n                </tr>\n            </thead>\n            <tbody>\n              {\n                data&&data.content.map((value,index)=>{\n              \treturn (\n                <tr>\n                    <td>{index+1}</td>\n                    <td>{value}</td>\n                    <td><div style ={{height:\"20px\"}} className = {data.color[index]}></div></td>\n                </tr>\n                )\n              })\n              }\n            </tbody>\n\t\t\t\t\t</table>\n      \t</div>\n        </div>\n        \n        \n    </div>\n    )\n  }\n});\n";
      return "\"use strict\";\n\nvar React = require('react');\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  click: function click() {\n    var div = this.refs.div;\n    var div1 = this.refs.div1;\n    var icon = this.refs.icon;\n    if (div.style.display == \"none\") {\n      div.style.display = \"block\";\n      div1.style.display = \"none\";\n      icon.style.transform = \"rotate(180deg)\";\n    } else {\n      div.style.display = \"none\";\n      div1.style.display = \"block\";\n      icon.style.transform = \"\";\n    }\n  },\n\n  render: function render() {\n    var data = this.props.data.customData;\n\n    return React.createElement(\n      \"div\",\n      { style: { position: \"relative\", textAlign: \"center\" } },\n      React.createElement(\n        \"div\",\n        { ref: \"icon\", onClick: this.click, style: { padding: \"3px\", right: 0, position: \"absolute\", color: \"white\" } },\n        React.createElement(\"span\", { style: { transform: \"scale(0.7)\", color: \"#949494\" }, className: \"icon icon-down-nav navbar-icon\" })\n      ),\n      React.createElement(\n        \"div\",\n        { onClick: this.click, className: \"partTitle\" },\n        \"\\u7BA1\\u63A7\\u8981\\u70B9\"\n      ),\n      React.createElement(\n        \"div\",\n        { ref: \"div1\", className: \"zhTableCon\" },\n        React.createElement(\n          \"table\",\n          { className: \"zhTable3\" },\n          React.createElement(\n            \"thead\",\n            null,\n            React.createElement(\n              \"tr\",\n              null,\n              React.createElement(\n                \"td\",\n                { width: \"15%\" },\n                \"\\u5E8F\\u53F7\"\n              ),\n              React.createElement(\n                \"td\",\n                null,\n                \"\\u5BA1\\u6279\\u7BA1\\u63A7\\u8981\\u70B9\"\n              ),\n              React.createElement(\n                \"td\",\n                { width: \"15%\" },\n                \"\\u72B6\\u6001\"\n              )\n            )\n          ),\n          React.createElement(\n            \"tbody\",\n            null,\n            data && data.content.map(function (value, index) {\n              if (index < 4) {\n                return React.createElement(\n                  \"tr\",\n                  null,\n                  React.createElement(\n                    \"td\",\n                    null,\n                    index + 1\n                  ),\n                  React.createElement(\n                    \"td\",\n                    null,\n                    value\n                  ),\n                  React.createElement(\n                    \"td\",\n                    null,\n                    React.createElement(\"div\", { style: { height: \"20px\" }, className: data.color[index] })\n                  )\n                );\n              }\n            })\n          )\n        )\n      ),\n      React.createElement(\n        \"div\",\n        { style: { display: \"none\" }, ref: \"div\" },\n        React.createElement(\n          \"div\",\n          { className: \"zhTableCon\" },\n          React.createElement(\n            \"table\",\n            { className: \"zhTable3\" },\n            React.createElement(\n              \"thead\",\n              null,\n              React.createElement(\n                \"tr\",\n                null,\n                React.createElement(\n                  \"td\",\n                  { width: \"15%\" },\n                  \"\\u5E8F\\u53F7\"\n                ),\n                React.createElement(\n                  \"td\",\n                  null,\n                  \"\\u5BA1\\u6279\\u7BA1\\u63A7\\u8981\\u70B9\"\n                ),\n                React.createElement(\n                  \"td\",\n                  { width: \"15%\" },\n                  \"\\u72B6\\u6001\"\n                )\n              )\n            ),\n            React.createElement(\n              \"tbody\",\n              null,\n              data && data.content.map(function (value, index) {\n                return React.createElement(\n                  \"tr\",\n                  null,\n                  React.createElement(\n                    \"td\",\n                    null,\n                    index + 1\n                  ),\n                  React.createElement(\n                    \"td\",\n                    null,\n                    value\n                  ),\n                  React.createElement(\n                    \"td\",\n                    null,\n                    React.createElement(\"div\", { style: { height: \"20px\" }, className: data.color[index] })\n                  )\n                );\n              })\n            )\n          )\n        )\n      )\n    );\n  }\n});";
    },

    getData_control54: function (elem) {
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
    doAction_uiControl92: function (data, elem) {},
    getTemplate_uiControl92: function () {
      var selfTemplate = "var React = require('react');\n\nmodule.exports = React.createClass({\n  click:function(){\n    let div = this.refs.div;\n    let icon = this.refs.icon;\n    if(div.style.display == \"none\"){\n    div.style.display = \"block\"\n    icon.style.transform=\"rotate(180deg)\"\n    }else{\n    \tdiv.style.display = \"none\";\n      icon.style.transform=\"\"\n    }\n  },\n  render: function(){\n    var data = this.props.data.customData; \n    \n\n      \n   var item = data.map(function(d,i){\n    \treturn (\n      \t<div className = \"lishi\">\n          <div className = 'lishiItem-1'>\n          \t<p>{d[0]}{d[2]}</p>\n            <p>{d[1]}</p>\n          </div>\n          <div className = 'lishiItem-2'>\n            <p>{d[3]}</p>\n          </div>\n          <div className = 'lishiItem-3'>\n            {\n            //<p>\u63A5\u6536\u65F6\u95F4:{d[4]}</p>\n            }\n            <p>{d[5]}</p>\n          </div>\n        </div>\n      )\n    })\n    return (\n      <div>\n        \n        <div className=\"partTitle\">\n          \u5BA1\u6279\u5386\u53F2\n        </div>\n        <div className = \"zhTextCon spls\">\n          {item}\n        </div>\n      </div>\n      \n    )\n  }\n});";
      return "\"use strict\";\n\nvar React = require('react');\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  click: function click() {\n    var div = this.refs.div;\n    var icon = this.refs.icon;\n    if (div.style.display == \"none\") {\n      div.style.display = \"block\";\n      icon.style.transform = \"rotate(180deg)\";\n    } else {\n      div.style.display = \"none\";\n      icon.style.transform = \"\";\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n\n    var item = data.map(function (d, i) {\n      return React.createElement(\n        \"div\",\n        { className: \"lishi\" },\n        React.createElement(\n          \"div\",\n          { className: \"lishiItem-1\" },\n          React.createElement(\n            \"p\",\n            null,\n            d[0],\n            d[2]\n          ),\n          React.createElement(\n            \"p\",\n            null,\n            d[1]\n          )\n        ),\n        React.createElement(\n          \"div\",\n          { className: \"lishiItem-2\" },\n          React.createElement(\n            \"p\",\n            null,\n            d[3]\n          )\n        ),\n        React.createElement(\n          \"div\",\n          { className: \"lishiItem-3\" },\n          React.createElement(\n            \"p\",\n            null,\n            d[5]\n          )\n        )\n      );\n    });\n    return React.createElement(\n      \"div\",\n      null,\n      React.createElement(\n        \"div\",\n        { className: \"partTitle\" },\n        \"\\u5BA1\\u6279\\u5386\\u53F2\"\n      ),\n      React.createElement(\n        \"div\",\n        { className: \"zhTextCon spls\" },\n        item\n      )\n    );\n  }\n});";
    },
    getData_control64: function (elem) {
      let lc = [].slice.call(elem.children).map((value, index) => {
        return {
          cont: $.trim(value.textContent),
          class: value.className,
          select: value.querySelector("select") && value.querySelector("select").innerHTML
        };
      });
      return lc;
    },
    doAction_uiControl108: function (data, elem) {
      if (data.eventType === 'change') {
        var selects = elem.querySelector("select");
        var d = data.dataCustom;
        var number = d.number;
        var index = d.index;
        var select = selects[number];
        select.children[index].selected = true;
        select.onchange();
      }
    },
    getTemplate_uiControl108: function () {
      var selfTemplate = "var React = require('react');\n\nmodule.exports = React.createClass({\n  click:function(){\n    let div = this.refs.div;\n    let icon = this.refs.icon;\n    if(div.style.display == \"none\"){\n    div.style.display = \"block\"\n    icon.style.transform=\"rotate(90deg)\"\n    }else{\n    \tdiv.style.display = \"none\";\n      icon.style.transform=\"\"\n    }\n  },\n  \n  change(number,e){\n    \n    var callBack = this.props.customHandler; \n    \n    if(callBack) {                                    \n      callBack({\n        data:{number:number,\n             \tindex:e.target.selectedIndex\n             },\n        eventType:'change'                         \n      })\n    }\n  },\n  \n  render: function(){\n    var data = this.props.data.customData;\n    var number = 0;\n\n    const header = {\n    \tpadding:\"2px 0 2px 8px\",\n      borderLeft:\"7px solid #45bcff\",\n      borderBottom:\"1px solid #e6e6e6\",\n      color:\"#45bcff\",\n      fontWeight: \"bolder\",\n      fontSize:\"16px\",\n      textAlign:\"left\"\n    }\n\n    const body = {\n      padding:\"15px 8px\",\n      color:\"#3f3f3f\"\n                 }\n\t\t\n\n    return (\n      <div style={{textAlign:\"center\"}}>\n\n        <div className=\"partTitle\">\n          \u5BA1\u6279\u6D41\u7A0B\n        </div>\n\n        <div className=\"partBody\">\n\n        \t<div className = \"textleft\">\n            {data.map((value,index)=>{\n\n            if(value.select == null){\n            \tvar z = value.cont.split(\"\\n\");\n              var length = z.length-1;\n              var x= z[0]+\" \u3010\"+z[length]+\"\u3011\";\n\n              var blue = {};\n\n              if(value.class==\"cblue\"){\n                blue = {color:\"#0b84f7\",fontWeight:\"bold\"}\n              }\n\n\n              if(index < data.length-1){\n                return(\n                <span>\n                    <span style = {blue}>{x}</span>\n                    <span>-></span>\n                </span>\n                )\n                }else{\n                return(\n                <span style = {blue}>\n                    {x}\n                </span>\n                )\n              }\n            }else{            \n            \n              var z = value.cont.split(\"\\n\");\n              var x= z[0];\n\n              var blue = {};\n\n              if(value.class==\"cblue\"){\n                blue = {color:\"#0b84f7\",fontWeight:\"bold\"}\n              }\n              \n              \n            \tif(index < data.length-1){\n                return(\n                <span>\n                    <span style = {blue}>{x}</span>\n                    <select onChange={this.change.bind(null,number++)} className = \"lcSelect\" dangerouslySetInnerHTML={{__html:value.select}}></select>\n                    <span>-></span>\n                </span>\n                )\n                }else{\n                return(\n                <span style = {blue}>\n                    {x}\n                </span>\n                )\n              }\n            }\n              \n          })}\n          </div>\n\n\n        </div>\n\n\n\n\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nvar React = require('react');\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  click: function click() {\n    var div = this.refs.div;\n    var icon = this.refs.icon;\n    if (div.style.display == \"none\") {\n      div.style.display = \"block\";\n      icon.style.transform = \"rotate(90deg)\";\n    } else {\n      div.style.display = \"none\";\n      icon.style.transform = \"\";\n    }\n  },\n\n  change: function change(number, e) {\n\n    var callBack = this.props.customHandler;\n\n    if (callBack) {\n      callBack({\n        data: { number: number,\n          index: e.target.selectedIndex\n        },\n        eventType: 'change'\n      });\n    }\n  },\n\n\n  render: function render() {\n    var _this = this;\n\n    var data = this.props.data.customData;\n    var number = 0;\n\n    var header = {\n      padding: \"2px 0 2px 8px\",\n      borderLeft: \"7px solid #45bcff\",\n      borderBottom: \"1px solid #e6e6e6\",\n      color: \"#45bcff\",\n      fontWeight: \"bolder\",\n      fontSize: \"16px\",\n      textAlign: \"left\"\n    };\n\n    var body = {\n      padding: \"15px 8px\",\n      color: \"#3f3f3f\"\n    };\n\n    return React.createElement(\n      \"div\",\n      { style: { textAlign: \"center\" } },\n      React.createElement(\n        \"div\",\n        { className: \"partTitle\" },\n        \"\\u5BA1\\u6279\\u6D41\\u7A0B\"\n      ),\n      React.createElement(\n        \"div\",\n        { className: \"partBody\" },\n        React.createElement(\n          \"div\",\n          { className: \"textleft\" },\n          data.map(function (value, index) {\n\n            if (value.select == null) {\n              var z = value.cont.split(\"\\n\");\n              var length = z.length - 1;\n              var x = z[0] + \" \u3010\" + z[length] + \"\u3011\";\n\n              var blue = {};\n\n              if (value.class == \"cblue\") {\n                blue = { color: \"#0b84f7\", fontWeight: \"bold\" };\n              }\n\n              if (index < data.length - 1) {\n                return React.createElement(\n                  \"span\",\n                  null,\n                  React.createElement(\n                    \"span\",\n                    { style: blue },\n                    x\n                  ),\n                  React.createElement(\n                    \"span\",\n                    null,\n                    \"->\"\n                  )\n                );\n              } else {\n                return React.createElement(\n                  \"span\",\n                  { style: blue },\n                  x\n                );\n              }\n            } else {\n\n              var z = value.cont.split(\"\\n\");\n              var x = z[0];\n\n              var blue = {};\n\n              if (value.class == \"cblue\") {\n                blue = { color: \"#0b84f7\", fontWeight: \"bold\" };\n              }\n\n              if (index < data.length - 1) {\n                return React.createElement(\n                  \"span\",\n                  null,\n                  React.createElement(\n                    \"span\",\n                    { style: blue },\n                    x\n                  ),\n                  React.createElement(\"select\", { onChange: _this.change.bind(null, number++), className: \"lcSelect\", dangerouslySetInnerHTML: { __html: value.select } }),\n                  React.createElement(\n                    \"span\",\n                    null,\n                    \"->\"\n                  )\n                );\n              } else {\n                return React.createElement(\n                  \"span\",\n                  { style: blue },\n                  x\n                );\n              }\n            }\n          })\n        )\n      )\n    );\n  }\n});";
    },
    getData_control65: function (elem) {
      var tables = elem.querySelectorAll(".wd_tablelist04");
      var as = [].slice.call(tables).map((val, ind) => val.querySelectorAll("a"));
      var a = [];
      as.map((value, index) => {
        [].slice.call(value).map((val, ind) => {
          a.push(val.innerHTML);
        });
      });
      return a;
    },
    doAction_uiControl109: function (data, elem) {
      if (data.eventType === 'click') {
        var d = data.dataCustom;
        var tables = elem.querySelectorAll(".wd_tablelist04");
        var as = [].slice.call(tables).map((val, ind) => val.querySelectorAll("a"));
        var a = [];
        as.map((value, index) => {
          [].slice.call(value).map((val, ind) => {
            a.push(val);
          });
        });
        a[d].click();
      }
    },
    getTemplate_uiControl109: function () {
      var selfTemplate = "var React = require('react');\n\nmodule.exports = React.createClass({\n  click:function(){\n    let div = this.refs.div;\n    let div1 = this.refs.div1;\n    let icon = this.refs.icon;\n    if(div.style.display == \"none\"){\n    div.style.display = \"block\"\n    div1.style.display = \"none\";\n    icon.style.transform=\"rotate(180deg)\"\n    }else{\n    \tdiv.style.display = \"none\";\n      div1.style.display = \"block\"\n      icon.style.transform=\"\"\n    }\n  },\n  \n  click2:function(z){\n  \tvar callBack = this.props.customHandler;          \n    if(callBack) {                                    \n      callBack({\n        data:z,\n        eventType:'click'                         \n      })\n    }\n  },\n  \n  \n  render: function(){\n    var data = this.props.data.customData;  \n\n    return (\n      <div style={{position:\"relative\",textAlign:\"center\"}}>\n        \n        <div ref = \"icon\" onClick={this.click} style={{padding:\"3px\",right:0,position:\"absolute\",color:\"white\"}}>\n          <span style={{transform:\"scale(0.7)\",color:\"#949494\"}} className=\"icon icon-down-nav navbar-icon\"></span>\n      \t</div>\n        \n        <div  onClick={this.click} className=\"partTitle\">\n          \u76F8\u5173\u9644\u4EF6\n        </div>\n        \n        \n        <div ref = \"div1\" className = \"zhTableCon\">\n        \t<table  className = \"zhTable\">\n            <thead>\n              <tr>\n                <td>\u9644\u4EF6\u540D\u79F0</td><td>\u5907\u6CE8</td>\n              </tr>\n            </thead>\n            <tbody>\n              {\n              \tdata.map((value,index)=>{\n                \tif(index<2){\n                  \treturn(\n                  \t <tr>\n                      <td onClick = {this.click2.bind(null,index)} className = \"blue\"  dangerouslySetInnerHTML={{__html:value}}></td><td>\u65E0</td>\n                    </tr>\n                  )\n                  }\n                })\n              }\n            </tbody>\n\t\t\t\t\t</table>\n      \t</div>\n        \n        \n        <div  style = {{display:\"none\"}} ref = \"div\">\n        \t<div className = \"zhTableCon\">\n          <table  className = \"zhTable\">\n            <thead>\n              <tr>\n                <td>\u9644\u4EF6\u540D\u79F0</td><td>\u5907\u6CE8</td>\n              </tr>\n            </thead>\n            <tbody>\n              {\n              \tdata.map((value,index)=>{\n                \treturn(\n                  \t <tr>\n                      <td onClick = {this.click2.bind(null,index)} className = \"blue\" dangerouslySetInnerHTML={{__html:value}}></td><td>\u65E0</td>\n                    </tr>\n                  )\n                })\n              }\n            </tbody>\n\t\t\t\t\t</table>\n      \t</div>\n        </div>\n        \n        \n    </div>\n    )\n  }\n});\n";
      return "\"use strict\";\n\nvar React = require('react');\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  click: function click() {\n    var div = this.refs.div;\n    var div1 = this.refs.div1;\n    var icon = this.refs.icon;\n    if (div.style.display == \"none\") {\n      div.style.display = \"block\";\n      div1.style.display = \"none\";\n      icon.style.transform = \"rotate(180deg)\";\n    } else {\n      div.style.display = \"none\";\n      div1.style.display = \"block\";\n      icon.style.transform = \"\";\n    }\n  },\n\n  click2: function click2(z) {\n    var callBack = this.props.customHandler;\n    if (callBack) {\n      callBack({\n        data: z,\n        eventType: 'click'\n      });\n    }\n  },\n\n  render: function render() {\n    var _this = this;\n\n    var data = this.props.data.customData;\n\n    return React.createElement(\n      \"div\",\n      { style: { position: \"relative\", textAlign: \"center\" } },\n      React.createElement(\n        \"div\",\n        { ref: \"icon\", onClick: this.click, style: { padding: \"3px\", right: 0, position: \"absolute\", color: \"white\" } },\n        React.createElement(\"span\", { style: { transform: \"scale(0.7)\", color: \"#949494\" }, className: \"icon icon-down-nav navbar-icon\" })\n      ),\n      React.createElement(\n        \"div\",\n        { onClick: this.click, className: \"partTitle\" },\n        \"\\u76F8\\u5173\\u9644\\u4EF6\"\n      ),\n      React.createElement(\n        \"div\",\n        { ref: \"div1\", className: \"zhTableCon\" },\n        React.createElement(\n          \"table\",\n          { className: \"zhTable\" },\n          React.createElement(\n            \"thead\",\n            null,\n            React.createElement(\n              \"tr\",\n              null,\n              React.createElement(\n                \"td\",\n                null,\n                \"\\u9644\\u4EF6\\u540D\\u79F0\"\n              ),\n              React.createElement(\n                \"td\",\n                null,\n                \"\\u5907\\u6CE8\"\n              )\n            )\n          ),\n          React.createElement(\n            \"tbody\",\n            null,\n            data.map(function (value, index) {\n              if (index < 2) {\n                return React.createElement(\n                  \"tr\",\n                  null,\n                  React.createElement(\"td\", { onClick: _this.click2.bind(null, index), className: \"blue\", dangerouslySetInnerHTML: { __html: value } }),\n                  React.createElement(\n                    \"td\",\n                    null,\n                    \"\\u65E0\"\n                  )\n                );\n              }\n            })\n          )\n        )\n      ),\n      React.createElement(\n        \"div\",\n        { style: { display: \"none\" }, ref: \"div\" },\n        React.createElement(\n          \"div\",\n          { className: \"zhTableCon\" },\n          React.createElement(\n            \"table\",\n            { className: \"zhTable\" },\n            React.createElement(\n              \"thead\",\n              null,\n              React.createElement(\n                \"tr\",\n                null,\n                React.createElement(\n                  \"td\",\n                  null,\n                  \"\\u9644\\u4EF6\\u540D\\u79F0\"\n                ),\n                React.createElement(\n                  \"td\",\n                  null,\n                  \"\\u5907\\u6CE8\"\n                )\n              )\n            ),\n            React.createElement(\n              \"tbody\",\n              null,\n              data.map(function (value, index) {\n                return React.createElement(\n                  \"tr\",\n                  null,\n                  React.createElement(\"td\", { onClick: _this.click2.bind(null, index), className: \"blue\", dangerouslySetInnerHTML: { __html: value } }),\n                  React.createElement(\n                    \"td\",\n                    null,\n                    \"\\u65E0\"\n                  )\n                );\n              })\n            )\n          )\n        )\n      )\n    );\n  }\n});";
    },
    getData_control71: function (elem) {
      var trs = [];
      var add = 0;
      var chose = false;
      [].slice.call(elem.querySelectorAll("tr")).map((value, index) => {
        if (value.style.display !== "none") {
          trs.push(value);
        }
      });
      var zf = trs[1].querySelectorAll("input")[0];

      if (zf && zf.value == "转  发" && zf.display !== "none") {
        zf.click();
        add = 1;
      }

      if (trs[2] && trs[2].querySelectorAll("input")[2] && trs[2].querySelectorAll("input")[2].value == "选 择..") {
        add = 1;
        chose = true;
      }

      var data = [];
      var selectOption = [];
      $(elem).find("select").find("option").each(function () {
        selectOption.push($(this).text());
      });
      data.push(selectOption);
      data.push($(elem).find("textarea").val());

      if (data[1] == undefined) {
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
        btn: btn,
        chose: chose
      };
    },
    doAction_uiControl116: function (data, elem) {
      if (data.eventType === 'choose') {
        var ipts = elem.querySelectorAll("input");
        var key = [];
        Array.from(ipts).map(function (value, index) {
          if (value.type == "button" && value.style.display !== "none") {
            key.push(value);
          }
        });
        key[0].click();
      }

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
    getTemplate_uiControl116: function () {
      var selfTemplate = "var React = require('react');\n\nmodule.exports = React.createClass({\n  componentDidMount:function(){\n  \tvar data = this.props.customData;\n    if(data[1] == \"zihui\"){\n    \t this.refs.done.outerHTML=\"\"\n    }\n  },\n\n  onChange(e){\n  \tvar index = e.target.selectedIndex;\n    var handler = this.props.customHandler;\n    if(handler){\n    \thandler({\n      \tdata : [index,\"select\"]\n      })\n    }\n  },\n  onBlur(e){\n  \tvar content = e.target.value;\n    var handler = this.props.customHandler;\n    if(handler){\n    \thandler({\n      \tdata : [content,\"text\"]\n      })\n    }\n  },\n  onClick1(e){\n  \tvar handler = this.props.customHandler;\n    if(handler){\n    \thandler({\n      \tdata : [\"111\",\"btn1\"]\n      })\n    }\n  },\n  onClick2(e){\n  \tvar handler = this.props.customHandler;\n    if(handler){\n    \thandler({\n      \tdata : [\"111\",\"btn2\"]\n      })\n    }\n  },\n    onClick3(e){\n  \tvar handler = this.props.customHandler;\n    if(handler){\n    \thandler({\n      \tdata : [\"2\",\"btn3\"]\n      })\n    }\n  },\n    onClick4(e){\n  \tvar handler = this.props.customHandler;\n    if(handler){\n    \thandler({\n      \tdata : [\"3\",\"btn4\"]\n      })\n    }\n  },\n  chose(){\n  \tvar callBack = this.props.customHandler;          \n    if(callBack) {                                    \n      callBack({\n        data:'1',\n        eventType:'choose'                         \n      })\n    }\n  },\n  render: function(){\n    var data = this.props.customData;\n    var _this = this;\n    var item = data.data[0].map(function(d,i){\n    \tif(i==0){\n        return (<option selected>{d}</option>)\n\n      }\n      else{\n      \treturn(<option>{d}</option>)\n      }\n    })\n    return (\n      <div ref = \"done\" className = 'custom1'>\n      \t<h2>\u5BA1\u6279\u610F\u89C1</h2>\n        <div className = \"zhShenpiCon\">\n          <select onChange = {_this.onChange}>\n            {item}\n          </select>\n          <textarea onBlur = {_this.onBlur} value = {data.data[1]}></textarea>\n          {data.chose&&<div  className = \"buttonCon\">\n          \t<button className = \"btn btn-success btn-block waves-effect\" onClick = {_this.chose}>\u9009 \u62E9</button>\n          </div>}\n          <div className = \"buttonCon\">\n          \t{data.btn[0]&& <button className = \"btn btn-success btn-block waves-effect\" onClick = {_this.onClick1}>{data.btn[0]}</button>}\n            {data.btn[1]&& <button className = \"btn btn-alert btn-block waves-effect\" onClick = {_this.onClick2}>{data.btn[1]}</button>}\n            {data.btn[2]&& <button style={{marginBottom:\"10px\"}} className = \"btn btn-warning btn-block waves-effect\" onClick = {_this.onClick3}>{data.btn[2]}</button>}\n            {data.btn[3]&& <button className = \"btn btn-secondary btn-block waves-effect\" onClick = {_this.onClick4}>{data.btn[3]}</button>}\n          </div>\n        </div>\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nvar React = require('react');\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  componentDidMount: function componentDidMount() {\n    var data = this.props.customData;\n    if (data[1] == \"zihui\") {\n      this.refs.done.outerHTML = \"\";\n    }\n  },\n\n  onChange: function onChange(e) {\n    var index = e.target.selectedIndex;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: [index, \"select\"]\n      });\n    }\n  },\n  onBlur: function onBlur(e) {\n    var content = e.target.value;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: [content, \"text\"]\n      });\n    }\n  },\n  onClick1: function onClick1(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: [\"111\", \"btn1\"]\n      });\n    }\n  },\n  onClick2: function onClick2(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: [\"111\", \"btn2\"]\n      });\n    }\n  },\n  onClick3: function onClick3(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: [\"2\", \"btn3\"]\n      });\n    }\n  },\n  onClick4: function onClick4(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: [\"3\", \"btn4\"]\n      });\n    }\n  },\n  chose: function chose() {\n    var callBack = this.props.customHandler;\n    if (callBack) {\n      callBack({\n        data: '1',\n        eventType: 'choose'\n      });\n    }\n  },\n\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    var item = data.data[0].map(function (d, i) {\n      if (i == 0) {\n        return React.createElement(\n          \"option\",\n          { selected: true },\n          d\n        );\n      } else {\n        return React.createElement(\n          \"option\",\n          null,\n          d\n        );\n      }\n    });\n    return React.createElement(\n      \"div\",\n      { ref: \"done\", className: \"custom1\" },\n      React.createElement(\n        \"h2\",\n        null,\n        \"\\u5BA1\\u6279\\u610F\\u89C1\"\n      ),\n      React.createElement(\n        \"div\",\n        { className: \"zhShenpiCon\" },\n        React.createElement(\n          \"select\",\n          { onChange: _this.onChange },\n          item\n        ),\n        React.createElement(\"textarea\", { onBlur: _this.onBlur, value: data.data[1] }),\n        data.chose && React.createElement(\n          \"div\",\n          { className: \"buttonCon\" },\n          React.createElement(\n            \"button\",\n            { className: \"btn btn-success btn-block waves-effect\", onClick: _this.chose },\n            \"\\u9009 \\u62E9\"\n          )\n        ),\n        React.createElement(\n          \"div\",\n          { className: \"buttonCon\" },\n          data.btn[0] && React.createElement(\n            \"button\",\n            { className: \"btn btn-success btn-block waves-effect\", onClick: _this.onClick1 },\n            data.btn[0]\n          ),\n          data.btn[1] && React.createElement(\n            \"button\",\n            { className: \"btn btn-alert btn-block waves-effect\", onClick: _this.onClick2 },\n            data.btn[1]\n          ),\n          data.btn[2] && React.createElement(\n            \"button\",\n            { style: { marginBottom: \"10px\" }, className: \"btn btn-warning btn-block waves-effect\", onClick: _this.onClick3 },\n            data.btn[2]\n          ),\n          data.btn[3] && React.createElement(\n            \"button\",\n            { className: \"btn btn-secondary btn-block waves-effect\", onClick: _this.onClick4 },\n            data.btn[3]\n          )\n        )\n      )\n    );\n  }\n});";
    },
    getData_control73: function (elem) {
      var tables = elem.querySelectorAll(".wd_tablelist04");
      var page1 = [];
      var tdContents = [];
      [].slice.call(tables).map((value, index) => {
        var nowth = {};
        var ths = value.querySelectorAll("th");
        nowth.title = ths[0] && ths[0].nextElementSibling.textContent;
        nowth.content = ths[1] && ths[1].nextElementSibling.textContent;
        page1.push(nowth);
        var tbodys = value.children[0];
        var tbody = tbodys.cloneNode(true);
        tbody && tbody.removeChild(tbody.children[0]);
        var tds = [].slice.call(tbody.querySelectorAll("td"));
        var tdContent = tds.map(function (val, ind) {
          var inputs = val.querySelectorAll("input");

          if (inputs.length == 0) {
            return val.textContent.trim();
          } else {
            if (inputs[0].checked == true) {
              return "是";
            } else {
              return "否";
            }
          }
        });
        tdContents.push(tdContent);
      });
      var data = [];

      function checkTitle(z) {
        if (data[0] == undefined) {
          var obj2 = {};
          obj2.title = z.title;
          obj2.content = [];
          obj2.content.push(z.content);
          data.push(obj2);
        } else {
          var flag = false;
          data.map(function (value, index) {
            if (z.title == value.title) {
              flag = true;
              value.content.push(z.content);
            }
          });

          if (flag == false) {
            var obj3 = {};
            obj3.title = z.title;
            obj3.content = [];
            obj3.content.push(z.content);
            data.push(obj3);
          }
        }
      }

      page1.map(function (value, index) {
        checkTitle(value);
      });
      return {
        before: data,
        tdContents: tdContents
      };
    },
    doAction_uiControl117: function (data, elem) {
      if (data.eventType === 'click') {
        var d = data.dataCustom;
        var tables = elem.querySelectorAll(".wd_tablelist04");
        var as = [].slice.call(tables).map((val, ind) => val.querySelectorAll("a"));
        var a = [];
        as.map((value, index) => {
          [].slice.call(value).map((val, ind) => {
            a.push(val);
          });
        });
        a[d].click();
      }
    },
    getTemplate_uiControl117: function () {
      var selfTemplate = "var React = require('react');\n\nmodule.exports = React.createClass({\n  getInitialState:function(){\n  \treturn {dom:0}\n  },\n  click:function(z){\n    let div = this.refs.div;\n    let div1 = this.refs.div1;\n    div1.style.display = \"none\";\n    div.style.display = \"block\"\n    this.makeDom(z);\n  },\n    click2:function(z){\n  \tvar callBack = this.props.customHandler;\n    if(callBack) {\n      callBack({\n        data:z,\n        eventType:'click'\n      })\n    }\n  },\n  \n  close:function(){\n    let div = this.refs.div;\n    let div1 = this.refs.div1;\n  \tdiv.style.display = \"none\";\n    div1.style.display = \"block\"\n  },\n  makeDom:function(z){\n    var data = this.props.data.customData.tdContents[z]\n\t\tvar dom = (\n            <tbody>\n              <tr>\n                <td>\u6295\u6807\u4EBA</td>\n                <td colSpan=\"2\">{data[0]}</td>\n                <td className=\"blue\" onClick = {this.close}>(\u6536\u7F29)</td>\n              </tr>\n              <tr>\n                <td>\u6E05\u6807\u622A\u6807\u65F6\u95F4</td>\n                <td>{data[1]}</td>\n                <td>\u6E05\u6807\u5F00\u6807\u65F6\u95F4</td>\n                <td>{data[2]}</td>\n              </tr>\n              <tr>\n                <td>\u6E05\u6807\u6587\u4EF6\u5185\u5BB9</td>\n                <td  colSpan=\"3\">{data[3]}</td>\n              </tr>\n              <tr>\n                <td>\u6E05\u6807\u6587\u4EF6\u9644\u4EF6</td>\n                <td onClick = {this.click2.bind(null,z)} colSpan=\"3\" className=\"blue\">{data[4]}</td>\n              </tr>\n              <tr>\n                <td>\u662F\u5426\u5141\u8BB8\u4FEE\u6539\u62A5\u4EF7</td>\n                <td  colSpan=\"3\">{data[5]}</td>\n              </tr>\n            </tbody>\n      )\n  \tthis.setState({dom:dom})\n  },\n  \n  render: function(){\n    var data = this.props.data.customData;  \n    var counter = 0;\n\n    return (\n      <div style={{position:\"relative\",textAlign:\"center\"}}>\n        \n        <div ref = \"icon\" style={{padding:\"3px\",right:0,position:\"absolute\",color:\"white\"}}>\n          \n      \t</div>\n        \n        <div className=\"partTitle\">\n          \u7BA1\u63A7\u8981\u70B9\n        </div>\n        \n        \n        <div ref = \"div1\" className = \"zhTableCon\">\n        <table  className = \"zhTable3\">\n            {\n                  data.before.map((value,index)=>{\n                    var content = value.content.map((val,ind)=>{\n                    \treturn(\n                      \t<tr>\n                          <td>\u6295\u6807\u4EBA</td>\n                          <td>{val}</td>\n                          <td style={{minWidth:\"50px\"}}  onClick={this.click.bind(null, counter++)}  className=\"blue\">(\u5C55\u5F00)</td>\n                        </tr>\n                      )\n                    })\n                  \treturn (\n                      <tbody>\n                        <tr style={{fontWeight:\"bold\"}}>\n                          <td style={{minWidth:\"80px\"}}>\u6807\u6BB5\u540D\u79F0</td>\n                          <td colSpan=\"2\">{value.title}</td>\n                        </tr>\n                        {content}\n                      </tbody>\n                    )\n                  })\n             }\n             \n\t\t\t\t\t</table>\n      \t</div>\n        \n        \n        <div  style = {{display:\"none\"}} ref = \"div\">\n        \t<div className = \"zhTableCon\">\n          <table  className = \"zhTable3\">\n              {this.state.dom}\n\t\t\t\t\t</table>\n      \t</div>\n        </div>\n        \n        \n    </div>\n    )\n  }\n});\n";
      return "\"use strict\";\n\nvar React = require('react');\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  getInitialState: function getInitialState() {\n    return { dom: 0 };\n  },\n  click: function click(z) {\n    var div = this.refs.div;\n    var div1 = this.refs.div1;\n    div1.style.display = \"none\";\n    div.style.display = \"block\";\n    this.makeDom(z);\n  },\n  click2: function click2(z) {\n    var callBack = this.props.customHandler;\n    if (callBack) {\n      callBack({\n        data: z,\n        eventType: 'click'\n      });\n    }\n  },\n\n  close: function close() {\n    var div = this.refs.div;\n    var div1 = this.refs.div1;\n    div.style.display = \"none\";\n    div1.style.display = \"block\";\n  },\n  makeDom: function makeDom(z) {\n    var data = this.props.data.customData.tdContents[z];\n    var dom = React.createElement(\n      \"tbody\",\n      null,\n      React.createElement(\n        \"tr\",\n        null,\n        React.createElement(\n          \"td\",\n          null,\n          \"\\u6295\\u6807\\u4EBA\"\n        ),\n        React.createElement(\n          \"td\",\n          { colSpan: \"2\" },\n          data[0]\n        ),\n        React.createElement(\n          \"td\",\n          { className: \"blue\", onClick: this.close },\n          \"(\\u6536\\u7F29)\"\n        )\n      ),\n      React.createElement(\n        \"tr\",\n        null,\n        React.createElement(\n          \"td\",\n          null,\n          \"\\u6E05\\u6807\\u622A\\u6807\\u65F6\\u95F4\"\n        ),\n        React.createElement(\n          \"td\",\n          null,\n          data[1]\n        ),\n        React.createElement(\n          \"td\",\n          null,\n          \"\\u6E05\\u6807\\u5F00\\u6807\\u65F6\\u95F4\"\n        ),\n        React.createElement(\n          \"td\",\n          null,\n          data[2]\n        )\n      ),\n      React.createElement(\n        \"tr\",\n        null,\n        React.createElement(\n          \"td\",\n          null,\n          \"\\u6E05\\u6807\\u6587\\u4EF6\\u5185\\u5BB9\"\n        ),\n        React.createElement(\n          \"td\",\n          { colSpan: \"3\" },\n          data[3]\n        )\n      ),\n      React.createElement(\n        \"tr\",\n        null,\n        React.createElement(\n          \"td\",\n          null,\n          \"\\u6E05\\u6807\\u6587\\u4EF6\\u9644\\u4EF6\"\n        ),\n        React.createElement(\n          \"td\",\n          { onClick: this.click2.bind(null, z), colSpan: \"3\", className: \"blue\" },\n          data[4]\n        )\n      ),\n      React.createElement(\n        \"tr\",\n        null,\n        React.createElement(\n          \"td\",\n          null,\n          \"\\u662F\\u5426\\u5141\\u8BB8\\u4FEE\\u6539\\u62A5\\u4EF7\"\n        ),\n        React.createElement(\n          \"td\",\n          { colSpan: \"3\" },\n          data[5]\n        )\n      )\n    );\n    this.setState({ dom: dom });\n  },\n\n  render: function render() {\n    var _this = this;\n\n    var data = this.props.data.customData;\n    var counter = 0;\n\n    return React.createElement(\n      \"div\",\n      { style: { position: \"relative\", textAlign: \"center\" } },\n      React.createElement(\"div\", { ref: \"icon\", style: { padding: \"3px\", right: 0, position: \"absolute\", color: \"white\" } }),\n      React.createElement(\n        \"div\",\n        { className: \"partTitle\" },\n        \"\\u7BA1\\u63A7\\u8981\\u70B9\"\n      ),\n      React.createElement(\n        \"div\",\n        { ref: \"div1\", className: \"zhTableCon\" },\n        React.createElement(\n          \"table\",\n          { className: \"zhTable3\" },\n          data.before.map(function (value, index) {\n            var content = value.content.map(function (val, ind) {\n              return React.createElement(\n                \"tr\",\n                null,\n                React.createElement(\n                  \"td\",\n                  null,\n                  \"\\u6295\\u6807\\u4EBA\"\n                ),\n                React.createElement(\n                  \"td\",\n                  null,\n                  val\n                ),\n                React.createElement(\n                  \"td\",\n                  { style: { minWidth: \"50px\" }, onClick: _this.click.bind(null, counter++), className: \"blue\" },\n                  \"(\\u5C55\\u5F00)\"\n                )\n              );\n            });\n            return React.createElement(\n              \"tbody\",\n              null,\n              React.createElement(\n                \"tr\",\n                { style: { fontWeight: \"bold\" } },\n                React.createElement(\n                  \"td\",\n                  { style: { minWidth: \"80px\" } },\n                  \"\\u6807\\u6BB5\\u540D\\u79F0\"\n                ),\n                React.createElement(\n                  \"td\",\n                  { colSpan: \"2\" },\n                  value.title\n                )\n              ),\n              content\n            );\n          })\n        )\n      ),\n      React.createElement(\n        \"div\",\n        { style: { display: \"none\" }, ref: \"div\" },\n        React.createElement(\n          \"div\",\n          { className: \"zhTableCon\" },\n          React.createElement(\n            \"table\",\n            { className: \"zhTable3\" },\n            this.state.dom\n          )\n        )\n      )\n    );\n  }\n});";
    },
    getData_control109: function (elem) {},
    doAction_uiControl188: function (data, elem) {
      if (data.eventType === 'click') {
        var d = data.dataCustom;
        var a = elem.querySelector("a");
        a.click();
      }
    },
    getTemplate_uiControl188: function () {
      var selfTemplate = "var React = require('react');\n\nmodule.exports = React.createClass({\n\tonClick:function(){\n    var callBack = this.props.customHandler;          \n    if(callBack) {                                    \n      callBack({\n        data:'1',\n        eventType:'click'                         \n      })\n    }\n  },\n  \n  render: function(){\n    var data = this.props.data.customData;  \n\n    return (\n      <div style={{position:\"relative\",textAlign:\"center\"}}>\n        \n        \n        <div  onClick={this.click} className=\"partTitle\">\n          \u53CB\u60C5\u63D0\u793A\n        </div>\n        \n        \n        <div ref = \"div1\" className = \"zhTableCon\">\n        \t<table  className = \"zhTable\">\n          \u5BF9\u4E0D\u8D77\uFF0C\u7CFB\u7EDF\u65E0\u6CD5\u6B63\u786E\u5904\u7406\u60A8\u7684\u8BF7\u6C42\uFF0C\u70B9\u51FB \u8FD4\u56DE \u6216\u8054\u7CFB\u7BA1\u7406\u5458!\n\u63D0\u793A\uFF1A\u5BF9\u4E0D\u8D77,\u672A\u627E\u5230\u6253\u5F00\u6587\u4EF6\uFF01\n\t\t\t\t\t</table>\n      \t</div>\n        \n        <div style={{padding:\"10px\"}} >\n        \t<button className = \"btn btn-warning btn-block waves-effect\" onClick = {this.onClick}>\u8FD4\u56DE</button>\n        </div>  \n    </div>\n    )\n  }\n});\n";
      return "'use strict';\n\nvar React = require('react');\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  onClick: function onClick() {\n    var callBack = this.props.customHandler;\n    if (callBack) {\n      callBack({\n        data: '1',\n        eventType: 'click'\n      });\n    }\n  },\n\n  render: function render() {\n    var data = this.props.data.customData;\n\n    return React.createElement(\n      'div',\n      { style: { position: \"relative\", textAlign: \"center\" } },\n      React.createElement(\n        'div',\n        { onClick: this.click, className: 'partTitle' },\n        '\\u53CB\\u60C5\\u63D0\\u793A'\n      ),\n      React.createElement(\n        'div',\n        { ref: 'div1', className: 'zhTableCon' },\n        React.createElement(\n          'table',\n          { className: 'zhTable' },\n          '\\u5BF9\\u4E0D\\u8D77\\uFF0C\\u7CFB\\u7EDF\\u65E0\\u6CD5\\u6B63\\u786E\\u5904\\u7406\\u60A8\\u7684\\u8BF7\\u6C42\\uFF0C\\u70B9\\u51FB \\u8FD4\\u56DE \\u6216\\u8054\\u7CFB\\u7BA1\\u7406\\u5458! \\u63D0\\u793A\\uFF1A\\u5BF9\\u4E0D\\u8D77,\\u672A\\u627E\\u5230\\u6253\\u5F00\\u6587\\u4EF6\\uFF01'\n        )\n      ),\n      React.createElement(\n        'div',\n        { style: { padding: \"10px\" } },\n        React.createElement(\n          'button',\n          { className: 'btn btn-warning btn-block waves-effect', onClick: this.onClick },\n          '\\u8FD4\\u56DE'\n        )\n      )\n    );\n  }\n});";
    }
  });
})(window, ysp);
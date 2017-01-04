(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control16: function (elem) {},
    doAction_uiControl27: function (data, elem) {},
    getTemplate_uiControl27: function () {
      var selfTemplate = "import { Backbtn } from 'ysp-custom-components';\n\nmodule.exports = React.createClass({\n  render: function(){\n\n\n    return (\n        <Backbtn title=\"\u5546\u52A1\u6807\u5E9F\u6807\u5BA1\u6279\" describe={{}} />\n\n    )\n  }\n});";
      return "\"use strict\";\n\nvar _yspCustomComponents = require(\"ysp-custom-components\");\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n\n    return React.createElement(_yspCustomComponents.Backbtn, { title: \"\\u5546\\u52A1\\u6807\\u5E9F\\u6807\\u5BA1\\u6279\", describe: {} });\n  }\n});";
    },

    getData_control45: function (elem) {
      var data = [];
      var child = $(elem).children();
      data.push(child.eq(0).find('td').eq(1).text());
      data.push(child.eq(1).find('td').eq(1).text());
      return data;
    },
    doAction_uiControl78: function (data, elem) {},
    getTemplate_uiControl78: function () {
      var selfTemplate = "var React = require('react');\n\nmodule.exports = React.createClass({\n  onClick(){\n    let short = this.refs.short;\n    let long = this.refs.long;\n    let h2 = this.refs.h2;\n    if (h2.className == \"you\"){\n        short.style.display = \"none\";\n        long.style.display = \"block\";\n      \th2.className = \"xia\";\n    }else if(h2.className == \"xia\"){\n        short.style.display = \"block\";\n        long.style.display = \"none\";   \n        h2.className = \"you\";\n    }\n    console.log(111111111);\n  },\n  render: function(){\n    var data = this.props.customData;\n    var str = data[1].substring(10,30);\n    console.log(str);\n    return (\n      <div className=\"custom1\">\n        <h2 ref = \"h2\" className = \"you\" onClick = {this.onClick}>\u5546\u52A1\u6807\u5E9F\u6807\u4FE1\u606F</h2>\n        <div className=\"zhTableCon\">\n          <table className=\"zhTable\">\n            <tr>\n              <td style={{width:\"30%\"}}>\u5E9F\u6807\u4F9B\u5E94\u5546</td>\n              <td style={{width:\"70%\",textAlign:\"left\"}}>{data[0]}</td>\n            </tr>            \n            <tr>\n              <td style={{width:\"30%\"}}>\u5E9F\u6807\u539F\u56E0</td>\n              <td style={{width:\"70%\",textAlign:\"left\",display:\"block\"}} ref = \"short\">{str}...</td>              \n              <td style={{width:\"75%\",textAlign:\"left\",display:\"none\"}} ref = \"long\">{data[1]}</td>\n            </tr>\n          </table>\n        </div>\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nvar React = require('react');\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n  onClick: function onClick() {\n    var short = this.refs.short;\n    var long = this.refs.long;\n    var h2 = this.refs.h2;\n    if (h2.className == \"you\") {\n      short.style.display = \"none\";\n      long.style.display = \"block\";\n      h2.className = \"xia\";\n    } else if (h2.className == \"xia\") {\n      short.style.display = \"block\";\n      long.style.display = \"none\";\n      h2.className = \"you\";\n    }\n    console.log(111111111);\n  },\n\n  render: function render() {\n    var data = this.props.customData;\n    var str = data[1].substring(10, 30);\n    console.log(str);\n    return React.createElement(\n      \"div\",\n      { className: \"custom1\" },\n      React.createElement(\n        \"h2\",\n        { ref: \"h2\", className: \"you\", onClick: this.onClick },\n        \"\\u5546\\u52A1\\u6807\\u5E9F\\u6807\\u4FE1\\u606F\"\n      ),\n      React.createElement(\n        \"div\",\n        { className: \"zhTableCon\" },\n        React.createElement(\n          \"table\",\n          { className: \"zhTable\" },\n          React.createElement(\n            \"tr\",\n            null,\n            React.createElement(\n              \"td\",\n              { style: { width: \"30%\" } },\n              \"\\u5E9F\\u6807\\u4F9B\\u5E94\\u5546\"\n            ),\n            React.createElement(\n              \"td\",\n              { style: { width: \"70%\", textAlign: \"left\" } },\n              data[0]\n            )\n          ),\n          React.createElement(\n            \"tr\",\n            null,\n            React.createElement(\n              \"td\",\n              { style: { width: \"30%\" } },\n              \"\\u5E9F\\u6807\\u539F\\u56E0\"\n            ),\n            React.createElement(\n              \"td\",\n              { style: { width: \"70%\", textAlign: \"left\", display: \"block\" }, ref: \"short\" },\n              str,\n              \"...\"\n            ),\n            React.createElement(\n              \"td\",\n              { style: { width: \"75%\", textAlign: \"left\", display: \"none\" }, ref: \"long\" },\n              data[1]\n            )\n          )\n        )\n      )\n    );\n  }\n});";
    },
    getData_control44: function (elem) {
      let lc = [].slice.call(elem.children).map((value, index) => ({
        cont: $.trim(value.textContent),
        class: value.className
      }));
      return lc;
    },
    doAction_uiControl76: function (data, elem) {},
    getTemplate_uiControl76: function () {
      var selfTemplate = "var React = require('react');\n\nmodule.exports = React.createClass({\n  componentDidMount:function(){\n  \tvar dom = this.refs.bool;\n    var data = this.props.data.customData;\n    if(data.bool == true){\n      console.log(11)\n       dom.style.padding=0;\n       }\n  },\n  click:function(){\n    let div = this.refs.div;\n    let icon = this.refs.icon;\n    if(div.style.display == \"none\"){\n    div.style.display = \"block\"\n    icon.style.transform=\"rotate(180deg)\"\n    }else{\n    \tdiv.style.display = \"none\";\n      icon.style.transform=\"\"\n    }\n  },\n\n  down:function(z){\n  \tvar callBack = this.props.customHandler;\n    if(callBack) {\n      callBack({\n        data:z,\n        eventType:'click'\n      })\n    }\n  },\n  render: function(){\n    var data = this.props.data.customData;\n\n\n\n\n    return (\n      <div style={{position:\"relative\",textAlign:\"center\"}}>\n\n        <div ref = \"icon\"  style={{padding:\"3px\",right:0,position:\"absolute\",color:\"white\"}}>\n      \t</div>\n\n        <div className=\"partTitle\">\n          \u76F8\u5173\u9644\u4EF6\n        </div>\n\n        <div ref = \"bool\" className = \"zhTableCon\">\n          <table dangerouslySetInnerHTML={{__html:data.html}} className = \"zhTable lastNone\">\n            \t\n\t\t\t\t\t</table>\n        </div>\n\n\n\n\n      </div>\n    )\n  }\n});\n";
      return "\"use strict\";\n\nvar React = require('react');\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  componentDidMount: function componentDidMount() {\n    var dom = this.refs.bool;\n    var data = this.props.data.customData;\n    if (data.bool == true) {\n      console.log(11);\n      dom.style.padding = 0;\n    }\n  },\n  click: function click() {\n    var div = this.refs.div;\n    var icon = this.refs.icon;\n    if (div.style.display == \"none\") {\n      div.style.display = \"block\";\n      icon.style.transform = \"rotate(180deg)\";\n    } else {\n      div.style.display = \"none\";\n      icon.style.transform = \"\";\n    }\n  },\n\n  down: function down(z) {\n    var callBack = this.props.customHandler;\n    if (callBack) {\n      callBack({\n        data: z,\n        eventType: 'click'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n\n    return React.createElement(\n      \"div\",\n      { style: { position: \"relative\", textAlign: \"center\" } },\n      React.createElement(\"div\", { ref: \"icon\", style: { padding: \"3px\", right: 0, position: \"absolute\", color: \"white\" } }),\n      React.createElement(\n        \"div\",\n        { className: \"partTitle\" },\n        \"\\u76F8\\u5173\\u9644\\u4EF6\"\n      ),\n      React.createElement(\n        \"div\",\n        { ref: \"bool\", className: \"zhTableCon\" },\n        React.createElement(\"table\", { dangerouslySetInnerHTML: { __html: data.html }, className: \"zhTable lastNone\" })\n      )\n    );\n  }\n});";
    },
    getData_control33: function (elem) {
      var bool = $.trim(elem.innerHTML.textContent) == "";
      return {
        html: elem.innerHTML,
        bool: bool
      };
    },
    doAction_uiControl36: function (data, elem) {},
    getTemplate_uiControl36: function () {
      var selfTemplate = "var React = require('react');\n\nmodule.exports = React.createClass({\n  componentDidMount:function(){\n  \tvar dom = this.refs.bool;\n    var data = this.props.data.customData;\n    if(data.bool == true){\n      console.log(11)\n       dom.style.padding=0;\n       }\n  },\n  click:function(){\n    let div = this.refs.div;\n    let icon = this.refs.icon;\n    if(div.style.display == \"none\"){\n    div.style.display = \"block\"\n    icon.style.transform=\"rotate(180deg)\"\n    }else{\n    \tdiv.style.display = \"none\";\n      icon.style.transform=\"\"\n    }\n  },\n\n  down:function(z){\n  \tvar callBack = this.props.customHandler;\n    if(callBack) {\n      callBack({\n        data:z,\n        eventType:'click'\n      })\n    }\n  },\n  render: function(){\n    var data = this.props.data.customData;\n\n\n\n\n    return (\n      <div style={{position:\"relative\",textAlign:\"center\"}}>\n\n        <div ref = \"icon\"  style={{padding:\"3px\",right:0,position:\"absolute\",color:\"white\"}}>\n      \t</div>\n\n        <div className=\"partTitle\">\n          \u76F8\u5173\u9644\u4EF6\n        </div>\n\n        <div ref = \"bool\" className = \"zhTableCon\">\n          <table dangerouslySetInnerHTML={{__html:data.html}} className = \"zhTable lastNone\">\n            \t\n\t\t\t\t\t</table>\n        </div>\n\n\n\n\n      </div>\n    )\n  }\n});\n";
      return "\"use strict\";\n\nvar React = require('react');\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  componentDidMount: function componentDidMount() {\n    var dom = this.refs.bool;\n    var data = this.props.data.customData;\n    if (data.bool == true) {\n      console.log(11);\n      dom.style.padding = 0;\n    }\n  },\n  click: function click() {\n    var div = this.refs.div;\n    var icon = this.refs.icon;\n    if (div.style.display == \"none\") {\n      div.style.display = \"block\";\n      icon.style.transform = \"rotate(180deg)\";\n    } else {\n      div.style.display = \"none\";\n      icon.style.transform = \"\";\n    }\n  },\n\n  down: function down(z) {\n    var callBack = this.props.customHandler;\n    if (callBack) {\n      callBack({\n        data: z,\n        eventType: 'click'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n\n    return React.createElement(\n      \"div\",\n      { style: { position: \"relative\", textAlign: \"center\" } },\n      React.createElement(\"div\", { ref: \"icon\", style: { padding: \"3px\", right: 0, position: \"absolute\", color: \"white\" } }),\n      React.createElement(\n        \"div\",\n        { className: \"partTitle\" },\n        \"\\u76F8\\u5173\\u9644\\u4EF6\"\n      ),\n      React.createElement(\n        \"div\",\n        { ref: \"bool\", className: \"zhTableCon\" },\n        React.createElement(\"table\", { dangerouslySetInnerHTML: { __html: data.html }, className: \"zhTable lastNone\" })\n      )\n    );\n  }\n});";
    },
    getData_control44: function (elem) {
      let lc = [].slice.call(elem.children).map((value, index) => ({
        cont: $.trim(value.textContent),
        class: value.className
      }));
      return lc;
    },
    doAction_uiControl80: function (data, elem) {},
    getTemplate_uiControl80: function () {
      var selfTemplate = "var React = require('react');\n\nmodule.exports = React.createClass({\n  click:function(){\n    let div = this.refs.div;\n    let icon = this.refs.icon;\n    if(div.style.display == \"none\"){\n    div.style.display = \"block\"\n    icon.style.transform=\"rotate(90deg)\"\n    }else{\n    \tdiv.style.display = \"none\";\n      icon.style.transform=\"\"\n    }\n  },\n  render: function(){\n    var data = this.props.data.customData;\n\n    const header = {\n    \tpadding:\"2px 0 2px 8px\",\n      borderLeft:\"7px solid #45bcff\",\n      borderBottom:\"1px solid #e6e6e6\",\n      color:\"#45bcff\",\n      fontWeight: \"bolder\",\n      fontSize:\"16px\",\n      textAlign:\"left\"\n    }\n\n    const body = {\n      padding:\"15px 8px\",\n      color:\"#3f3f3f\"\n                 }\n\n\n    return (\n      <div style={{textAlign:\"center\"}}>\n\n        <div className=\"partTitle\">\n          \u5BA1\u6279\u6D41\u7A0B\n        </div>\n\n        <div className=\"partBody\">\n         <div className = \"textleft\">\n          {data.map(function(value,index){\n\n            var z = value.cont.split(\"\\n\");\n            var length = z.length-1;\n            var x= z[0]+\" \u3010\"+z[length]+\"\u3011\";\n\n            var blue = {};\n\n            if(value.class==\"cblue\"){\n            \tblue = {color:\"#0b84f7\",fontWeight:\"bold\"}\n            }\n\n\n            if(index < data.length-1){\n            \treturn(\n            <span>\n                <span style = {blue}>{x}</span>\n                <span>-></span>\n            </span>\n            )\n            }else{\n            return(\n            <span style = {blue}>\n                {x}\n            </span>\n            )\n\n            }\n          })}\n\n\n        </div>\n\n        </div>\n\n\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nvar React = require('react');\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  click: function click() {\n    var div = this.refs.div;\n    var icon = this.refs.icon;\n    if (div.style.display == \"none\") {\n      div.style.display = \"block\";\n      icon.style.transform = \"rotate(90deg)\";\n    } else {\n      div.style.display = \"none\";\n      icon.style.transform = \"\";\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n\n    var header = {\n      padding: \"2px 0 2px 8px\",\n      borderLeft: \"7px solid #45bcff\",\n      borderBottom: \"1px solid #e6e6e6\",\n      color: \"#45bcff\",\n      fontWeight: \"bolder\",\n      fontSize: \"16px\",\n      textAlign: \"left\"\n    };\n\n    var body = {\n      padding: \"15px 8px\",\n      color: \"#3f3f3f\"\n    };\n\n    return React.createElement(\n      \"div\",\n      { style: { textAlign: \"center\" } },\n      React.createElement(\n        \"div\",\n        { className: \"partTitle\" },\n        \"\\u5BA1\\u6279\\u6D41\\u7A0B\"\n      ),\n      React.createElement(\n        \"div\",\n        { className: \"partBody\" },\n        React.createElement(\n          \"div\",\n          { className: \"textleft\" },\n          data.map(function (value, index) {\n\n            var z = value.cont.split(\"\\n\");\n            var length = z.length - 1;\n            var x = z[0] + \" \u3010\" + z[length] + \"\u3011\";\n\n            var blue = {};\n\n            if (value.class == \"cblue\") {\n              blue = { color: \"#0b84f7\", fontWeight: \"bold\" };\n            }\n\n            if (index < data.length - 1) {\n              return React.createElement(\n                \"span\",\n                null,\n                React.createElement(\n                  \"span\",\n                  { style: blue },\n                  x\n                ),\n                React.createElement(\n                  \"span\",\n                  null,\n                  \"->\"\n                )\n              );\n            } else {\n              return React.createElement(\n                \"span\",\n                { style: blue },\n                x\n              );\n            }\n          })\n        )\n      )\n    );\n  }\n});";
    },
    getData_control47: function (elem) {
      console.log(elem);
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
    doAction_uiControl82: function (data, elem) {},
    getTemplate_uiControl82: function () {
      var selfTemplate = "var React = require('react');\n\nmodule.exports = React.createClass({\n  click:function(){\n    let div = this.refs.div;\n    let icon = this.refs.icon;\n    if(div.style.display == \"none\"){\n    div.style.display = \"block\"\n    icon.style.transform=\"rotate(180deg)\"\n    }else{\n    \tdiv.style.display = \"none\";\n      icon.style.transform=\"\"\n    }\n  },\n  render: function(){\n    var data = this.props.data.customData; \n    \n\n      \n   var item = data.map(function(d,i){\n    \treturn (\n      \t<div className = \"lishi\">\n          <div className = 'lishiItem-1'>\n          \t<p>{d[0]}{d[2]}</p>\n            <p>{d[1]}</p>\n          </div>\n          <div className = 'lishiItem-2'>\n            <p>{d[3]}</p>\n          </div>\n          <div className = 'lishiItem-3'>\n            {\n            //<p>\u63A5\u6536\u65F6\u95F4:{d[4]}</p>\n            }\n            <p>{d[5]}</p>\n          </div>\n        </div>\n      )\n    })\n    return (\n      <div>\n        \n        <div className=\"partTitle\">\n          \u5BA1\u6279\u5386\u53F2\n        </div>\n        <div className = \"zhTextCon spls\">\n          {item}\n        </div>\n      </div>\n      \n    )\n  }\n});";
      return "\"use strict\";\n\nvar React = require('react');\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  click: function click() {\n    var div = this.refs.div;\n    var icon = this.refs.icon;\n    if (div.style.display == \"none\") {\n      div.style.display = \"block\";\n      icon.style.transform = \"rotate(180deg)\";\n    } else {\n      div.style.display = \"none\";\n      icon.style.transform = \"\";\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n\n    var item = data.map(function (d, i) {\n      return React.createElement(\n        \"div\",\n        { className: \"lishi\" },\n        React.createElement(\n          \"div\",\n          { className: \"lishiItem-1\" },\n          React.createElement(\n            \"p\",\n            null,\n            d[0],\n            d[2]\n          ),\n          React.createElement(\n            \"p\",\n            null,\n            d[1]\n          )\n        ),\n        React.createElement(\n          \"div\",\n          { className: \"lishiItem-2\" },\n          React.createElement(\n            \"p\",\n            null,\n            d[3]\n          )\n        ),\n        React.createElement(\n          \"div\",\n          { className: \"lishiItem-3\" },\n          React.createElement(\n            \"p\",\n            null,\n            d[5]\n          )\n        )\n      );\n    });\n    return React.createElement(\n      \"div\",\n      null,\n      React.createElement(\n        \"div\",\n        { className: \"partTitle\" },\n        \"\\u5BA1\\u6279\\u5386\\u53F2\"\n      ),\n      React.createElement(\n        \"div\",\n        { className: \"zhTextCon spls\" },\n        item\n      )\n    );\n  }\n});";
    },
    getData_control48: function (elem) {
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
    doAction_uiControl83: function (data, elem) {},
    getTemplate_uiControl83: function () {
      var selfTemplate = "var React = require('react');\n\nmodule.exports = React.createClass({\n  click:function(){\n    let div = this.refs.div;\n    let div1 = this.refs.div1;\n    let icon = this.refs.icon;\n    if(div.style.display == \"none\"){\n    div.style.display = \"block\"\n    div1.style.display = \"none\";\n    icon.style.transform=\"rotate(180deg)\"\n    }else{\n    \tdiv.style.display = \"none\";\n      div1.style.display = \"block\"\n      icon.style.transform=\"\"\n    }\n  },\n  \n  render: function(){\n    var data = this.props.data.customData;  \n\n    return (\n      <div style={{position:\"relative\",textAlign:\"center\"}}>\n        \n        {data&&data.content.length>4&&<div ref = \"icon\" onClick={this.click} style={{padding:\"3px\",right:0,position:\"absolute\",color:\"white\"}}>\n          <span style={{transform:\"scale(0.7)\",color:\"#949494\"}} className=\"icon icon-down-nav navbar-icon\"></span>\n      \t</div>}\n        \n        <div  onClick={data&&data.content.length>4&&this.click} className=\"partTitle\">\n          \u7BA1\u63A7\u8981\u70B9\n        </div>\n        \n        \n        <div ref = \"div1\" className = \"zhTableCon\">\n        <table  className = \"zhTable3\">\n            <thead>\n                <tr>\n                    <td width=\"15%\">\u5E8F\u53F7</td>\n                    <td>\u5BA1\u6279\u7BA1\u63A7\u8981\u70B9</td>\n                    <td width=\"15%\">\u72B6\u6001</td>\n                </tr>\n            </thead>\n            <tbody>\n              {\n                data&&data.content.map((value,index)=>{\n              \tif(index<4){\n                return (\n                <tr>\n                    <td>{index+1}</td>\n                    <td>{value}</td>\n                    <td><div style ={{height:\"20px\"}} className = {data.color[index]}></div></td>\n                </tr>\n                )\n                }\n              })\n              }\n            </tbody>\n\t\t\t\t\t</table>\n      \t</div>\n        \n        \n        <div  style = {{display:\"none\"}} ref = \"div\">\n        \t<div className = \"zhTableCon\">\n          <table  className = \"zhTable3\">\n            <thead>\n                <tr>\n                    <td width=\"15%\">\u5E8F\u53F7</td>\n                    <td>\u5BA1\u6279\u7BA1\u63A7\u8981\u70B9</td>\n                    <td width=\"15%\">\u72B6\u6001</td>\n                </tr>\n            </thead>\n            <tbody>\n              {\n                data&&data.content.map((value,index)=>{\n              \treturn (\n                <tr>\n                    <td>{index+1}</td>\n                    <td>{value}</td>\n                    <td><div style ={{height:\"20px\"}} className = {data.color[index]}></div></td>\n                </tr>\n                )\n              })\n              }\n            </tbody>\n\t\t\t\t\t</table>\n      \t</div>\n        </div>\n        \n        \n    </div>\n    )\n  }\n});\n";
      return "\"use strict\";\n\nvar React = require('react');\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  click: function click() {\n    var div = this.refs.div;\n    var div1 = this.refs.div1;\n    var icon = this.refs.icon;\n    if (div.style.display == \"none\") {\n      div.style.display = \"block\";\n      div1.style.display = \"none\";\n      icon.style.transform = \"rotate(180deg)\";\n    } else {\n      div.style.display = \"none\";\n      div1.style.display = \"block\";\n      icon.style.transform = \"\";\n    }\n  },\n\n  render: function render() {\n    var data = this.props.data.customData;\n\n    return React.createElement(\n      \"div\",\n      { style: { position: \"relative\", textAlign: \"center\" } },\n      data && data.content.length > 4 && React.createElement(\n        \"div\",\n        { ref: \"icon\", onClick: this.click, style: { padding: \"3px\", right: 0, position: \"absolute\", color: \"white\" } },\n        React.createElement(\"span\", { style: { transform: \"scale(0.7)\", color: \"#949494\" }, className: \"icon icon-down-nav navbar-icon\" })\n      ),\n      React.createElement(\n        \"div\",\n        { onClick: data && data.content.length > 4 && this.click, className: \"partTitle\" },\n        \"\\u7BA1\\u63A7\\u8981\\u70B9\"\n      ),\n      React.createElement(\n        \"div\",\n        { ref: \"div1\", className: \"zhTableCon\" },\n        React.createElement(\n          \"table\",\n          { className: \"zhTable3\" },\n          React.createElement(\n            \"thead\",\n            null,\n            React.createElement(\n              \"tr\",\n              null,\n              React.createElement(\n                \"td\",\n                { width: \"15%\" },\n                \"\\u5E8F\\u53F7\"\n              ),\n              React.createElement(\n                \"td\",\n                null,\n                \"\\u5BA1\\u6279\\u7BA1\\u63A7\\u8981\\u70B9\"\n              ),\n              React.createElement(\n                \"td\",\n                { width: \"15%\" },\n                \"\\u72B6\\u6001\"\n              )\n            )\n          ),\n          React.createElement(\n            \"tbody\",\n            null,\n            data && data.content.map(function (value, index) {\n              if (index < 4) {\n                return React.createElement(\n                  \"tr\",\n                  null,\n                  React.createElement(\n                    \"td\",\n                    null,\n                    index + 1\n                  ),\n                  React.createElement(\n                    \"td\",\n                    null,\n                    value\n                  ),\n                  React.createElement(\n                    \"td\",\n                    null,\n                    React.createElement(\"div\", { style: { height: \"20px\" }, className: data.color[index] })\n                  )\n                );\n              }\n            })\n          )\n        )\n      ),\n      React.createElement(\n        \"div\",\n        { style: { display: \"none\" }, ref: \"div\" },\n        React.createElement(\n          \"div\",\n          { className: \"zhTableCon\" },\n          React.createElement(\n            \"table\",\n            { className: \"zhTable3\" },\n            React.createElement(\n              \"thead\",\n              null,\n              React.createElement(\n                \"tr\",\n                null,\n                React.createElement(\n                  \"td\",\n                  { width: \"15%\" },\n                  \"\\u5E8F\\u53F7\"\n                ),\n                React.createElement(\n                  \"td\",\n                  null,\n                  \"\\u5BA1\\u6279\\u7BA1\\u63A7\\u8981\\u70B9\"\n                ),\n                React.createElement(\n                  \"td\",\n                  { width: \"15%\" },\n                  \"\\u72B6\\u6001\"\n                )\n              )\n            ),\n            React.createElement(\n              \"tbody\",\n              null,\n              data && data.content.map(function (value, index) {\n                return React.createElement(\n                  \"tr\",\n                  null,\n                  React.createElement(\n                    \"td\",\n                    null,\n                    index + 1\n                  ),\n                  React.createElement(\n                    \"td\",\n                    null,\n                    value\n                  ),\n                  React.createElement(\n                    \"td\",\n                    null,\n                    React.createElement(\"div\", { style: { height: \"20px\" }, className: data.color[index] })\n                  )\n                );\n              })\n            )\n          )\n        )\n      )\n    );\n  }\n});";
    },
    getData_control106: function (elem) {
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
    doAction_uiControl183: function (data, elem) {
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
    getTemplate_uiControl183: function () {
      var selfTemplate = "var React = require('react');\n\nmodule.exports = React.createClass({\n  componentDidMount:function(){\n  \tvar data = this.props.customData.data;\n    if(data[1] == \"zihui\"){\n    \t this.refs.done.outerHTML=\"\"\n    }\n  },\n\n  onChange(e){\n  \tvar index = e.target.selectedIndex;\n    var handler = this.props.customHandler;\n    if(handler){\n    \thandler({\n      \tdata : [index,\"select\"]\n      })\n    }\n  },\n  onBlur(e){\n  \tvar content = e.target.value;\n    var handler = this.props.customHandler;\n    if(handler){\n    \thandler({\n      \tdata : [content,\"text\"]\n      })\n    }\n  },\n  onClick1(e){\n  \tvar handler = this.props.customHandler;\n    if(handler){\n    \thandler({\n      \tdata : [\"111\",\"btn1\"]\n      })\n    }\n  },\n  onClick2(e){\n  \tvar handler = this.props.customHandler;\n    if(handler){\n    \thandler({\n      \tdata : [\"111\",\"btn2\"]\n      })\n    }\n  },\n    onClick3(e){\n  \tvar handler = this.props.customHandler;\n    if(handler){\n    \thandler({\n      \tdata : [\"2\",\"btn3\"]\n      })\n    }\n  },\n    onClick4(e){\n  \tvar handler = this.props.customHandler;\n    if(handler){\n    \thandler({\n      \tdata : [\"3\",\"btn4\"]\n      })\n    }\n  },\n  render: function(){\n    var data = this.props.customData;\n    var _this = this;\n    var item = data.data[0].map(function(d,i){\n    \tif(i==0){\n        return (<option selected>{d}</option>)\n\n      }\n      else{\n      \treturn(<option>{d}</option>)\n      }\n    })\n    return (\n      <div ref = \"done\" className = 'custom1'>\n      \t<h2>\u5BA1\u6279\u610F\u89C1</h2>\n        <div className = \"zhShenpiCon\">\n\n          <select onChange = {_this.onChange}>\n            {item}\n          </select>\n          <textarea onBlur = {_this.onBlur} value = {data.data[1]}></textarea>\n\n          <div className = \"buttonCon\">\n          \t{data.btn[0]&& <button className = \"btn btn-success btn-block waves-effect\" onClick = {_this.onClick1}>{data.btn[0]}</button>}\n            {data.btn[1]&& <button className = \"btn btn-alert btn-block waves-effect\" onClick = {_this.onClick2}>{data.btn[1]}</button>}\n            {data.btn[2]&& <button style={{marginBottom:\"10px\"}} className = \"btn btn-warning btn-block waves-effect\" onClick = {_this.onClick3}>{data.btn[2]}</button>}\n            {data.btn[3]&& <button className = \"btn btn-secondary btn-block waves-effect\" onClick = {_this.onClick4}>{data.btn[3]}</button>}\n          </div>\n        </div>\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nvar React = require('react');\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  componentDidMount: function componentDidMount() {\n    var data = this.props.customData.data;\n    if (data[1] == \"zihui\") {\n      this.refs.done.outerHTML = \"\";\n    }\n  },\n\n  onChange: function onChange(e) {\n    var index = e.target.selectedIndex;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: [index, \"select\"]\n      });\n    }\n  },\n  onBlur: function onBlur(e) {\n    var content = e.target.value;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: [content, \"text\"]\n      });\n    }\n  },\n  onClick1: function onClick1(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: [\"111\", \"btn1\"]\n      });\n    }\n  },\n  onClick2: function onClick2(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: [\"111\", \"btn2\"]\n      });\n    }\n  },\n  onClick3: function onClick3(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: [\"2\", \"btn3\"]\n      });\n    }\n  },\n  onClick4: function onClick4(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: [\"3\", \"btn4\"]\n      });\n    }\n  },\n\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    var item = data.data[0].map(function (d, i) {\n      if (i == 0) {\n        return React.createElement(\n          \"option\",\n          { selected: true },\n          d\n        );\n      } else {\n        return React.createElement(\n          \"option\",\n          null,\n          d\n        );\n      }\n    });\n    return React.createElement(\n      \"div\",\n      { ref: \"done\", className: \"custom1\" },\n      React.createElement(\n        \"h2\",\n        null,\n        \"\\u5BA1\\u6279\\u610F\\u89C1\"\n      ),\n      React.createElement(\n        \"div\",\n        { className: \"zhShenpiCon\" },\n        React.createElement(\n          \"select\",\n          { onChange: _this.onChange },\n          item\n        ),\n        React.createElement(\"textarea\", { onBlur: _this.onBlur, value: data.data[1] }),\n        React.createElement(\n          \"div\",\n          { className: \"buttonCon\" },\n          data.btn[0] && React.createElement(\n            \"button\",\n            { className: \"btn btn-success btn-block waves-effect\", onClick: _this.onClick1 },\n            data.btn[0]\n          ),\n          data.btn[1] && React.createElement(\n            \"button\",\n            { className: \"btn btn-alert btn-block waves-effect\", onClick: _this.onClick2 },\n            data.btn[1]\n          ),\n          data.btn[2] && React.createElement(\n            \"button\",\n            { style: { marginBottom: \"10px\" }, className: \"btn btn-warning btn-block waves-effect\", onClick: _this.onClick3 },\n            data.btn[2]\n          ),\n          data.btn[3] && React.createElement(\n            \"button\",\n            { className: \"btn btn-secondary btn-block waves-effect\", onClick: _this.onClick4 },\n            data.btn[3]\n          )\n        )\n      )\n    );\n  }\n});";
    }
  });
})(window, ysp);
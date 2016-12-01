(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control14: function (elem) {},
    doAction_uiControl22: function (data, elem) {},
    getTemplate_uiControl22: function () {
      var selfTemplate = "import { Backbtn } from 'ysp-custom-components';\n\nmodule.exports = React.createClass({\n  render: function(){\n    return (\n      <Backbtn title=\"\u6D41\u6807\u5BA1\u6279\" describe={{}}/>\n    )\n  }\n});";
      return "\"use strict\";\n\nvar _yspCustomComponents = require(\"ysp-custom-components\");\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    return React.createElement(_yspCustomComponents.Backbtn, { title: \"\\u6D41\\u6807\\u5BA1\\u6279\", describe: {} });\n  }\n});";
    },
    getData_control15: function (elem) {
      return $(elem).children().find('td').eq(1).text();
      ;
    },
    doAction_uiControl25: function (data, elem) {},
    getTemplate_uiControl25: function () {
      var selfTemplate = "var React = require('react');\n\nmodule.exports = React.createClass({\n  render: function(){\n    var data = this.props.customData;\n    var words = data || \"\u65E0\";\n    return (\n      <div className = 'custom1'>\n      \t<h2>\u6D41\u6807\u4FE1\u606F</h2>\n        <div className = \"zhTableCon\">\n          <table className = \"zhTable jsxx\">\n          <tr><td style={{width:\"25%\"}}>\u6D41\u6807\u4FE1\u606F</td><td style={{width:\"75%\"}}>{words}</td></tr>\n          </table>\n        </div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nvar React = require('react');\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    var words = data || \"\u65E0\";\n    return React.createElement(\n      'div',\n      { className: 'custom1' },\n      React.createElement(\n        'h2',\n        null,\n        '\\u6D41\\u6807\\u4FE1\\u606F'\n      ),\n      React.createElement(\n        'div',\n        { className: 'zhTableCon' },\n        React.createElement(\n          'table',\n          { className: 'zhTable jsxx' },\n          React.createElement(\n            'tr',\n            null,\n            React.createElement(\n              'td',\n              { style: { width: \"25%\" } },\n              '\\u6D41\\u6807\\u4FE1\\u606F'\n            ),\n            React.createElement(\n              'td',\n              { style: { width: \"75%\" } },\n              words\n            )\n          )\n        )\n      )\n    );\n  }\n});";
    },

    getData_control18: function (elem) {
      let lc = [].slice.call(elem.children).map((value, index) => ({
        cont: $.trim(value.textContent),
        class: value.className
      }));
      return lc;
    },
    doAction_uiControl29: function (data, elem) {},
    getTemplate_uiControl29: function () {
      var selfTemplate = "var React = require('react');\n\nmodule.exports = React.createClass({\n  click:function(){\n    let div = this.refs.div;\n    let icon = this.refs.icon;\n    if(div.style.display == \"none\"){\n    div.style.display = \"block\"\n    icon.style.transform=\"rotate(90deg)\"\n    }else{\n    \tdiv.style.display = \"none\";\n      icon.style.transform=\"\"\n    }\n  },\n  render: function(){\n    var data = this.props.data.customData; \n    \n    const header = {\n    \tpadding:\"2px 0 2px 8px\",\n      borderLeft:\"7px solid #45bcff\",\n      borderBottom:\"1px solid #e6e6e6\",\n      color:\"#45bcff\",\n      fontWeight: \"bolder\",\n      fontSize:\"16px\",\n      textAlign:\"left\"\n    }\n    \n    const body = {\n      padding:\"15px 8px\",\n      color:\"#3f3f3f\"\n                 }\n    \n      \n    return (\n      <div style={{textAlign:\"center\"}}>\n      \n        <div className=\"partTitle\">\n          \u5BA1\u6279\u6D41\u7A0B\n        </div>\n        \n        <div className=\"partBody\">\n         <div className = \"textleft\">\n          {data.map(function(value,index){\n          \n            var z = value.cont.split(\"\\n\");\n            var length = z.length-1;\n            var x= z[0]+\" \u3010\"+z[length]+\"\u3011\";\n            \n            var blue = {};\n            \n            if(value.class==\"cblue\"){\n            \tblue = {color:\"#0b84f7\",fontWeight:\"bold\"}\n            }\n            \n            \n            if(index < data.length-1){\n            \treturn(\n            <span>\n                <span style = {blue}>{x}</span>\n                <span>-></span>\n            </span>\n            )\n            }else{\n            return(\n            <span style = {blue}>\n                {x}\n            </span>\n            )\n            \n            }\n          })}\n          \n          \n        </div>\n        \n        </div>\n        \n\t\t\t\t\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nvar React = require('react');\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  click: function click() {\n    var div = this.refs.div;\n    var icon = this.refs.icon;\n    if (div.style.display == \"none\") {\n      div.style.display = \"block\";\n      icon.style.transform = \"rotate(90deg)\";\n    } else {\n      div.style.display = \"none\";\n      icon.style.transform = \"\";\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n\n    var header = {\n      padding: \"2px 0 2px 8px\",\n      borderLeft: \"7px solid #45bcff\",\n      borderBottom: \"1px solid #e6e6e6\",\n      color: \"#45bcff\",\n      fontWeight: \"bolder\",\n      fontSize: \"16px\",\n      textAlign: \"left\"\n    };\n\n    var body = {\n      padding: \"15px 8px\",\n      color: \"#3f3f3f\"\n    };\n\n    return React.createElement(\n      \"div\",\n      { style: { textAlign: \"center\" } },\n      React.createElement(\n        \"div\",\n        { className: \"partTitle\" },\n        \"\\u5BA1\\u6279\\u6D41\\u7A0B\"\n      ),\n      React.createElement(\n        \"div\",\n        { className: \"partBody\" },\n        React.createElement(\n          \"div\",\n          { className: \"textleft\" },\n          data.map(function (value, index) {\n\n            var z = value.cont.split(\"\\n\");\n            var length = z.length - 1;\n            var x = z[0] + \" \u3010\" + z[length] + \"\u3011\";\n\n            var blue = {};\n\n            if (value.class == \"cblue\") {\n              blue = { color: \"#0b84f7\", fontWeight: \"bold\" };\n            }\n\n            if (index < data.length - 1) {\n              return React.createElement(\n                \"span\",\n                null,\n                React.createElement(\n                  \"span\",\n                  { style: blue },\n                  x\n                ),\n                React.createElement(\n                  \"span\",\n                  null,\n                  \"->\"\n                )\n              );\n            } else {\n              return React.createElement(\n                \"span\",\n                { style: blue },\n                x\n              );\n            }\n          })\n        )\n      )\n    );\n  }\n});";
    },

    getData_control32: function (elem) {
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
    doAction_uiControl35: function (data, elem) {},
    getTemplate_uiControl35: function () {
      var selfTemplate = "var React = require('react');\n\nmodule.exports = React.createClass({\n  click:function(){\n    let div = this.refs.div;\n    let icon = this.refs.icon;\n    if(div.style.display == \"none\"){\n    div.style.display = \"block\"\n    icon.style.transform=\"rotate(180deg)\"\n    }else{\n    \tdiv.style.display = \"none\";\n      icon.style.transform=\"\"\n    }\n  },\n  render: function(){\n    var data = this.props.data.customData;\n\n\n\n   var item = data.map(function(d,i){\n    \treturn (\n      \t<div className = \"lishi\">\n          <div className = 'lishiItem-1'>\n          \t<p>{d[0]}{d[1]}</p>\n            <p>{d[2]}</p>\n          </div>\n          <div className = 'lishiItem-2'>\n            <p>{d[3]}</p>\n          </div>\n          <div className = 'lishiItem-3'>\n            {\n            //<p>\u63A5\u6536\u65F6\u95F4:{d[4]}</p>\n            }\n            <p>{d[5]}</p>\n          </div>\n        </div>\n      )\n    })\n    return (\n      <div>\n\n        <div className=\"partTitle\">\n          \u5BA1\u6279\u5386\u53F2\n        </div>\n        <div className = \"zhTextCon spls\">\n          {item}\n        </div>\n      </div>\n\n    )\n  }\n});";
      return "\"use strict\";\n\nvar React = require('react');\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  click: function click() {\n    var div = this.refs.div;\n    var icon = this.refs.icon;\n    if (div.style.display == \"none\") {\n      div.style.display = \"block\";\n      icon.style.transform = \"rotate(180deg)\";\n    } else {\n      div.style.display = \"none\";\n      icon.style.transform = \"\";\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n\n    var item = data.map(function (d, i) {\n      return React.createElement(\n        \"div\",\n        { className: \"lishi\" },\n        React.createElement(\n          \"div\",\n          { className: \"lishiItem-1\" },\n          React.createElement(\n            \"p\",\n            null,\n            d[0],\n            d[1]\n          ),\n          React.createElement(\n            \"p\",\n            null,\n            d[2]\n          )\n        ),\n        React.createElement(\n          \"div\",\n          { className: \"lishiItem-2\" },\n          React.createElement(\n            \"p\",\n            null,\n            d[3]\n          )\n        ),\n        React.createElement(\n          \"div\",\n          { className: \"lishiItem-3\" },\n          React.createElement(\n            \"p\",\n            null,\n            d[5]\n          )\n        )\n      );\n    });\n    return React.createElement(\n      \"div\",\n      null,\n      React.createElement(\n        \"div\",\n        { className: \"partTitle\" },\n        \"\\u5BA1\\u6279\\u5386\\u53F2\"\n      ),\n      React.createElement(\n        \"div\",\n        { className: \"zhTextCon spls\" },\n        item\n      )\n    );\n  }\n});";
    },

    getData_control45: function (elem) {
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

      return data;
    },
    doAction_uiControl76: function (data, elem) {
      var data = data.dataCustom;

      if (data[1] == "select") {
        $(elem).find("select").find("option").eq(data[0])[0].selected = true;
        $(elem).find("select")[0].dispatchEvent(new Event("change"));
      } else if (data[1] == "text") {
        $(elem).find("textarea").val(data[0]);
      } else if (data[1] == "btn1") {
        $(elem).children().eq(3).find("input").eq(0)[0].click();
      } else if (data[1] == "btn2") {
        $(elem).children().eq(3).find("input").eq(1)[0].click();
      }
    },
    getTemplate_uiControl76: function () {
      var selfTemplate = "var React = require('react');\n\nmodule.exports = React.createClass({\n  componentDidMount:function(){\n  \tvar data = this.props.customData;\n    if(data[1] == \"zihui\"){\n    \t this.refs.done.outerHTML=\"\"\n    }\n  },\n\n  onChange(e){\n  \tvar index = e.target.selectedIndex;\n    var handler = this.props.customHandler;\n    if(handler){\n    \thandler({\n      \tdata : [index,\"select\"]\n      })\n    }\n  },\n  onBlur(e){\n  \tvar content = e.target.value;\n    var handler = this.props.customHandler;\n    if(handler){\n    \thandler({\n      \tdata : [content,\"text\"]\n      })\n    }\n  },\n  onClick1(e){\n  \tvar handler = this.props.customHandler;\n    if(handler){\n    \thandler({\n      \tdata : [\"111\",\"btn1\"]\n      })\n    }\n  },\n  onClick2(e){\n  \tvar handler = this.props.customHandler;\n    if(handler){\n    \thandler({\n      \tdata : [\"111\",\"btn2\"]\n      })\n    }\n  },\n  render: function(){\n    var data = this.props.customData;\n    var _this = this;\n    var item = data[0].map(function(d,i){\n    \tif(i==0){\n        return (<option selected>{d}</option>)\n\n      }\n      else{\n      \treturn(<option>{d}</option>)\n      }\n    })\n    return (\n      <div ref = \"done\" className = 'custom1'>\n      \t<h2>\u5BA1\u6279\u610F\u89C1</h2>\n        <div className = \"zhShenpiCon\">\n          <select onChange = {_this.onChange}>\n            {item}\n          </select>\n          <textarea onBlur = {_this.onBlur} value = {data[1]}></textarea>\n          <div className = \"buttonCon\">\n          \t<button className = \"btn btn-success btn-block waves-effect\" onClick = {_this.onClick1}>\u6279\u51C6</button>\n            <button className = \"btn btn-alert btn-block waves-effect\" onClick = {_this.onClick2}>\u9A73\u56DE</button>\n          </div>\n        </div>\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nvar React = require('react');\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  componentDidMount: function componentDidMount() {\n    var data = this.props.customData;\n    if (data[1] == \"zihui\") {\n      this.refs.done.outerHTML = \"\";\n    }\n  },\n\n  onChange: function onChange(e) {\n    var index = e.target.selectedIndex;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: [index, \"select\"]\n      });\n    }\n  },\n  onBlur: function onBlur(e) {\n    var content = e.target.value;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: [content, \"text\"]\n      });\n    }\n  },\n  onClick1: function onClick1(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: [\"111\", \"btn1\"]\n      });\n    }\n  },\n  onClick2: function onClick2(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: [\"111\", \"btn2\"]\n      });\n    }\n  },\n\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    var item = data[0].map(function (d, i) {\n      if (i == 0) {\n        return React.createElement(\n          \"option\",\n          { selected: true },\n          d\n        );\n      } else {\n        return React.createElement(\n          \"option\",\n          null,\n          d\n        );\n      }\n    });\n    return React.createElement(\n      \"div\",\n      { ref: \"done\", className: \"custom1\" },\n      React.createElement(\n        \"h2\",\n        null,\n        \"\\u5BA1\\u6279\\u610F\\u89C1\"\n      ),\n      React.createElement(\n        \"div\",\n        { className: \"zhShenpiCon\" },\n        React.createElement(\n          \"select\",\n          { onChange: _this.onChange },\n          item\n        ),\n        React.createElement(\"textarea\", { onBlur: _this.onBlur, value: data[1] }),\n        React.createElement(\n          \"div\",\n          { className: \"buttonCon\" },\n          React.createElement(\n            \"button\",\n            { className: \"btn btn-success btn-block waves-effect\", onClick: _this.onClick1 },\n            \"\\u6279\\u51C6\"\n          ),\n          React.createElement(\n            \"button\",\n            { className: \"btn btn-alert btn-block waves-effect\", onClick: _this.onClick2 },\n            \"\\u9A73\\u56DE\"\n          )\n        )\n      )\n    );\n  }\n});";
    },
    getData_control46: function (elem) {
      var bool = $.trim(elem.innerHTML.textContent) == "";
      return {
        html: elem.innerHTML,
        bool: bool
      };
    },
    doAction_uiControl78: function (data, elem) {},
    getTemplate_uiControl78: function () {
      var selfTemplate = "var React = require('react');\n\nmodule.exports = React.createClass({\n  componentDidMount:function(){\n  \tvar dom = this.refs.bool;\n    var data = this.props.data.customData;\n    if(data.bool == true){\n      console.log(11)\n       dom.style.padding=0;\n       }\n  },\n  click:function(){\n    let div = this.refs.div;\n    let icon = this.refs.icon;\n    if(div.style.display == \"none\"){\n    div.style.display = \"block\"\n    icon.style.transform=\"rotate(180deg)\"\n    }else{\n    \tdiv.style.display = \"none\";\n      icon.style.transform=\"\"\n    }\n  },\n\n  down:function(z){\n  \tvar callBack = this.props.customHandler;\n    if(callBack) {\n      callBack({\n        data:z,\n        eventType:'click'\n      })\n    }\n  },\n  render: function(){\n    var data = this.props.data.customData;\n\n\n\n\n    return (\n      <div style={{position:\"relative\",textAlign:\"center\"}}>\n\n        <div ref = \"icon\"  style={{padding:\"3px\",right:0,position:\"absolute\",color:\"white\"}}>\n      \t</div>\n\n        <div className=\"partTitle\">\n          \u76F8\u5173\u9644\u4EF6\n        </div>\n\n        <div ref = \"bool\" className = \"zhTableCon\">\n          <table dangerouslySetInnerHTML={{__html:data.html}} className = \"zhTable lastNone\">\n            \t\n\t\t\t\t\t</table>\n        </div>\n\n\n\n\n      </div>\n    )\n  }\n});\n";
      return "\"use strict\";\n\nvar React = require('react');\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  componentDidMount: function componentDidMount() {\n    var dom = this.refs.bool;\n    var data = this.props.data.customData;\n    if (data.bool == true) {\n      console.log(11);\n      dom.style.padding = 0;\n    }\n  },\n  click: function click() {\n    var div = this.refs.div;\n    var icon = this.refs.icon;\n    if (div.style.display == \"none\") {\n      div.style.display = \"block\";\n      icon.style.transform = \"rotate(180deg)\";\n    } else {\n      div.style.display = \"none\";\n      icon.style.transform = \"\";\n    }\n  },\n\n  down: function down(z) {\n    var callBack = this.props.customHandler;\n    if (callBack) {\n      callBack({\n        data: z,\n        eventType: 'click'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n\n    return React.createElement(\n      \"div\",\n      { style: { position: \"relative\", textAlign: \"center\" } },\n      React.createElement(\"div\", { ref: \"icon\", style: { padding: \"3px\", right: 0, position: \"absolute\", color: \"white\" } }),\n      React.createElement(\n        \"div\",\n        { className: \"partTitle\" },\n        \"\\u76F8\\u5173\\u9644\\u4EF6\"\n      ),\n      React.createElement(\n        \"div\",\n        { ref: \"bool\", className: \"zhTableCon\" },\n        React.createElement(\"table\", { dangerouslySetInnerHTML: { __html: data.html }, className: \"zhTable lastNone\" })\n      )\n    );\n  }\n});";
    }
  });
})(window, ysp);
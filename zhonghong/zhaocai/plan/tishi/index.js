(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control108: function (elem) {},
    doAction_uiControl191: function (data, elem) {},
    getTemplate_uiControl191: function () {
      var selfTemplate = "import { Backbtn } from 'ysp-custom-components';\n\nmodule.exports = React.createClass({\n  render: function(){\n\n\n    return (\n        <Backbtn title=\"\u53CB\u60C5\u63D0\u793A\" describe={{}} />\n    )\n  }\n});\n";
      return "\"use strict\";\n\nvar _yspCustomComponents = require(\"ysp-custom-components\");\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n\n    return React.createElement(_yspCustomComponents.Backbtn, { title: \"\\u53CB\\u60C5\\u63D0\\u793A\", describe: {} });\n  }\n});";
    },
    getData_control110: function (elem) {},
    doAction_uiControl189: function (data, elem) {
      if (data.eventType === 'click') {
        var d = data.dataCustom;
        var a = elem.querySelector("a");
        a.click();
        var input = elem.querySelectorAll("input");
        input[0].click();
        input[1].click();
      }
    },
    getTemplate_uiControl189: function () {
      var selfTemplate = "var React = require('react');\n\nmodule.exports = React.createClass({\n\tonClick:function(){\n    var callBack = this.props.customHandler;\n    if(callBack) {\n      callBack({\n        data:'1',\n        eventType:'click'\n      })\n    }\n  },\n\n  render: function(){\n    var data = this.props.data.customData;\n\n    return (\n      <div style={{position:\"relative\",textAlign:\"center\"}}>\n\n\n        <div  onClick={this.click} className=\"partTitle\">\n          \u53CB\u60C5\u63D0\u793A\n        </div>\n\n\n        <div ref = \"div1\" className = \"zhTableCon\">\n        \t<table  className = \"zhTable\">\n          \u5BF9\u4E0D\u8D77\uFF0C\u7CFB\u7EDF\u65E0\u6CD5\u6B63\u786E\u5904\u7406\u60A8\u7684\u8BF7\u6C42\uFF0C\u70B9\u51FB \u8FD4\u56DE \u6216\u8054\u7CFB\u7BA1\u7406\u5458!\n\u63D0\u793A\uFF1A\u5BF9\u4E0D\u8D77,\u672A\u627E\u5230\u6253\u5F00\u6587\u4EF6\uFF01\n\t\t\t\t\t</table>\n      \t</div>\n\n        <div style={{padding:\"10px\"}} >\n        \t<button className = \"btn btn-warning btn-block waves-effect\" onClick = {this.onClick}>\u8FD4\u56DE</button>\n        </div>\n    </div>\n    )\n  }\n});";
      return "'use strict';\n\nvar React = require('react');\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  onClick: function onClick() {\n    var callBack = this.props.customHandler;\n    if (callBack) {\n      callBack({\n        data: '1',\n        eventType: 'click'\n      });\n    }\n  },\n\n  render: function render() {\n    var data = this.props.data.customData;\n\n    return React.createElement(\n      'div',\n      { style: { position: \"relative\", textAlign: \"center\" } },\n      React.createElement(\n        'div',\n        { onClick: this.click, className: 'partTitle' },\n        '\\u53CB\\u60C5\\u63D0\\u793A'\n      ),\n      React.createElement(\n        'div',\n        { ref: 'div1', className: 'zhTableCon' },\n        React.createElement(\n          'table',\n          { className: 'zhTable' },\n          '\\u5BF9\\u4E0D\\u8D77\\uFF0C\\u7CFB\\u7EDF\\u65E0\\u6CD5\\u6B63\\u786E\\u5904\\u7406\\u60A8\\u7684\\u8BF7\\u6C42\\uFF0C\\u70B9\\u51FB \\u8FD4\\u56DE \\u6216\\u8054\\u7CFB\\u7BA1\\u7406\\u5458! \\u63D0\\u793A\\uFF1A\\u5BF9\\u4E0D\\u8D77,\\u672A\\u627E\\u5230\\u6253\\u5F00\\u6587\\u4EF6\\uFF01'\n        )\n      ),\n      React.createElement(\n        'div',\n        { style: { padding: \"10px\" } },\n        React.createElement(\n          'button',\n          { className: 'btn btn-warning btn-block waves-effect', onClick: this.onClick },\n          '\\u8FD4\\u56DE'\n        )\n      )\n    );\n  }\n});";
    }
  });
})(window, ysp);
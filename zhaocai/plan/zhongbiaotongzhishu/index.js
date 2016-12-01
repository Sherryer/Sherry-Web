(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control62: function (elem) {},
    doAction_uiControl101: function (data, elem) {},
    getTemplate_uiControl101: function () {
      var selfTemplate = "import { Backbtn } from 'ysp-custom-components';\n\nmodule.exports = React.createClass({\n  render: function(){\n\n\n    return (\n        <Backbtn title=\"\u4E2D\u6807\u901A\u77E5\u4E66/\u611F\u8C22\u4FE1\" describe={{}} />\n\n    )\n  }\n});";
      return "\"use strict\";\n\nvar _yspCustomComponents = require(\"ysp-custom-components\");\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n\n    return React.createElement(_yspCustomComponents.Backbtn, { title: \"\\u4E2D\\u6807\\u901A\\u77E5\\u4E66/\\u611F\\u8C22\\u4FE1\", describe: {} });\n  }\n});";
    }
  });
})(window, ysp);
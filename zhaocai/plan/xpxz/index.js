(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control25: function (elem) {},
    doAction_uiControl43: function (data, elem) {},
    getTemplate_uiControl43: function () {
      var selfTemplate = "import { Backbtn } from 'ysp-custom-components';\n\nmodule.exports = React.createClass({\n  render: function(){\n\n    \n    return (  \n        <Backbtn title=\"\u5BA1\u6279\u7EC6\u5219\"  />\n\n    )\n  }\n});";
      return "\"use strict\";\n\nvar _yspCustomComponents = require(\"ysp-custom-components\");\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n\n    return React.createElement(_yspCustomComponents.Backbtn, { title: \"\\u5BA1\\u6279\\u7EC6\\u5219\" });\n  }\n});";
    }
  });
})(window, ysp);
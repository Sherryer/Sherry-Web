(function (win, ysp) {

  var utils = ysp.utils;
  ysp.customTemplateHelper = {};
  utils.extend(ysp.customTemplateHelper, {
    Backbtn: function () {
      var selfTemplate = "import { back } from 'appRenderer';\nexport default ({ title }) =>\n  <header className=\"navbar navbar-primary header\">\n    <h2 className=\"navbar-title navbar-center\">{title}</h2>\n    <div className=\"navbar-nav navbar-left\">\n      <a onClick={back} className=\"navbar-nav-item\">\n        <span className=\"navbar-nav-title\">\u8FD4\u56DE</span>\n        <span className=\"icon icon-left-nav navbar-icon\"></span>\n      </a>\n    </div>\n  </header>;\n";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _appRenderer = require(\"appRenderer\");\n\nexports.default = function (_ref) {\n  var title = _ref.title;\n  return React.createElement(\n    \"header\",\n    { className: \"navbar navbar-primary header\" },\n    React.createElement(\n      \"h2\",\n      { className: \"navbar-title navbar-center\" },\n      title\n    ),\n    React.createElement(\n      \"div\",\n      { className: \"navbar-nav navbar-left\" },\n      React.createElement(\n        \"a\",\n        { onClick: _appRenderer.back, className: \"navbar-nav-item\" },\n        React.createElement(\n          \"span\",\n          { className: \"navbar-nav-title\" },\n          \"\\u8FD4\\u56DE\"\n        ),\n        React.createElement(\"span\", { className: \"icon icon-left-nav navbar-icon\" })\n      )\n    )\n  );\n};";
    }
  });
})(window, ysp);
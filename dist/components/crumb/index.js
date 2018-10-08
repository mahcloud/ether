"use strict";

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line no-unused-vars

var Crumb = function Crumb(_ref) {
  var children = _ref.children,
      className = _ref.className;

  var classes = ("crumb " + className).trim();

  return _react2.default.createElement(
    "li",
    { className: classes },
    children
  );
};

Crumb.propTypes = {
  className: _propTypes2.default.string
};

Crumb.defaultProps = {
  className: ""
};

module.exports = Crumb;
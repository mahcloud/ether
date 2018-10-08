"use strict";

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line no-unused-vars

var Breadcrumbs = function Breadcrumbs(_ref) {
  var children = _ref.children,
      className = _ref.className;

  return _react2.default.createElement(
    "nav",
    { className: ("breadcrumbs " + className).trim() },
    _react2.default.createElement(
      "ol",
      null,
      children
    )
  );
};

Breadcrumbs.propTypes = {
  className: _propTypes2.default.string
};

Breadcrumbs.defaultProps = {
  className: ""
};

module.exports = Breadcrumbs;
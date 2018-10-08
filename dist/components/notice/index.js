"use strict";

var _basicFunctions = require("@alchemyalcove/basic-functions");

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line no-unused-vars

var Notice = function Notice(props) {
  var classes = (0, _basicFunctions.cx)({
    "notice": true,
    "color-primary": ["secondary", "success", "danger", "warning"].indexOf(props.color) === -1,
    "color-secondary": props.color === "secondary",
    "color-success": props.color === "success",
    "color-danger": props.color === "danger",
    "color-warning": props.color === "warning"
  });

  if (!(0, _basicFunctions.isNil)(props.className)) {
    classes = classes + " " + props.className;
  }

  return _react2.default.createElement(
    "div",
    { className: classes },
    props.children
  );
};

Notice.propTypes = {
  className: _propTypes2.default.string,
  color: _propTypes2.default.string
};

Notice.defaultProps = {
  color: "primary"
};

module.exports = Notice;
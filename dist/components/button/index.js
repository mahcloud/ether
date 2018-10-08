"use strict";

var _basicFunctions = require("@alchemyalcove/basic-functions");

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line no-unused-vars

var Button = function Button(props) {
  var handleClick = function handleClick(e) {
    if (typeof e !== "undefined") {
      e.preventDefault();
      e.stopPropagation();
    }

    if (!props.disabled) {
      props.onClick();
    }
  };

  var classes = (0, _basicFunctions.cx)({
    "block": props.block,
    "color-primary": ["secondary", "success", "danger", "warning"].indexOf(props.color) === -1,
    "color-secondary": props.color === "secondary",
    "color-success": props.color === "success",
    "color-danger": props.color === "danger",
    "color-warning": props.color === "warning",
    "size-lg": props.size === "lg",
    "size-md": ["lg", "sm"].indexOf(props.size) === -1,
    "size-sm": props.size === "sm",
    "type-solid": ["outline", "link"].indexOf(props.type) === -1,
    "type-outline": props.type === "outline",
    "type-link": props.type === "link"
  });

  if (!(0, _basicFunctions.isNil)(props.className)) {
    classes = classes + " " + props.className;
  }

  return _react2.default.createElement(
    "button",
    { className: classes, type: "button", disabled: props.disabled, onClick: function onClick(e) {
        return handleClick(e);
      } },
    props.children
  );
};

Button.propTypes = {
  block: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  color: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  onClick: _propTypes2.default.func,
  size: _propTypes2.default.string,
  type: _propTypes2.default.string
};

Button.defaultProps = {
  block: false,
  color: "primary",
  disabled: false,
  onClick: function onClick() {},
  size: "md",
  type: "solid"
};

module.exports = Button;
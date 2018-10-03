"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line no-unused-vars

var Container = function Container(props) {
  var classes = "grid-container";
  classes += " columns-" + (props.columns || props.children.length);

  return _react2.default.createElement(
    "div",
    { className: classes },
    props.children
  );
};

Container.propTypes = {
  columns: _propTypes2.default.number
};

exports.default = Container;
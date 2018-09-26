"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cx = require("../../utils/cx");

var _cx2 = _interopRequireDefault(_cx);

var _isNil = require("../../utils/isNil");

var _isNil2 = _interopRequireDefault(_isNil);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: "handleClick",
    value: function handleClick(e) {
      if (typeof e !== "undefined") {
        e.preventDefault();
        e.stopPropagation();
      }

      if (!this.props.disabled) {
        this.props.onClick();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = (0, _cx2.default)({
        "block": this.props.block,
        "button": true,
        "danger": this.props.danger,
        "primary": this.props.type === "primary",
        "secondary": this.props.type === "secondary",
        "size-lg": this.props.size === "lg",
        "size-md": this.props.size === "md",
        "size-sm": this.props.size === "sm",
        "tertiary": this.props.type === "tertiary"
      });

      if (!(0, _isNil2.default)(this.props.className)) {
        classes = classes + " " + this.props.className;
      }

      return _react2.default.createElement(
        "button",
        { className: classes, type: "button", disabled: this.props.disabled, onClick: function onClick(e) {
            return _this2.handleClick(e);
          } },
        this.props.children
      );
    }
  }]);

  return Button;
}(_react2.default.Component);

Button.propTypes = {
  block: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  danger: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  onClick: _propTypes2.default.func,
  size: _propTypes2.default.string,
  type: _propTypes2.default.string
};

Button.defaultProps = {
  block: false,
  className: "",
  danger: false,
  disabled: false,
  onClick: function onClick() {},
  size: "md",
  type: "primary"
};

module.exports = Button;
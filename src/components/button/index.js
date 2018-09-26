import cx from "../../utils/cx";
import isNil from "../../utils/isNil";
import PropTypes from "prop-types";
import React from "react";

class Button extends React.Component {
  handleClick(e) {
    if(typeof(e) !== "undefined") {
      e.preventDefault();
      e.stopPropagation();
    }

    if(!this.props.disabled) {
      this.props.onClick();
    }
  }

  render() {
    let classes = cx({
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

    if(!isNil(this.props.className)) {
      classes = classes + " " + this.props.className;
    }

    return(
      <button className={classes} type="button" disabled={this.props.disabled} onClick={(e) => this.handleClick(e)}>
        {this.props.children}
      </button>
    );
  }
}

Button.propTypes = {
  block: PropTypes.bool,
  className: PropTypes.string,
  danger: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.string,
  type: PropTypes.string
};

Button.defaultProps = {
  block: false,
  className: "",
  danger: false,
  disabled: false,
  onClick: () => {},
  size: "md",
  type: "primary"
};

module.exports = Button;

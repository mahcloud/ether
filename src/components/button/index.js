import { cx, isNil } from "@alchemyalcove/basic-functions";
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
      "color-primary": ["secondary", "success", "danger", "warning"].indexOf(this.props.color) === -1,
      "color-secondary": this.props.color === "secondary",
      "color-success": this.props.color === "success",
      "color-danger": this.props.color === "danger",
      "color-warning": this.props.color === "warning",
      "size-lg": this.props.size === "lg",
      "size-md": ["lg", "sm"].indexOf(this.props.size) === -1,
      "size-sm": this.props.size === "sm",
      "type-solid": ["outline", "link"].indexOf(this.props.type) === -1,
      "type-outline": this.props.type === "outline",
      "type-link": this.props.type === "link"
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
  color: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.string,
  type: PropTypes.string
};

Button.defaultProps = {
  block: false,
  className: "",
  color: "primary",
  danger: false,
  disabled: false,
  onClick: () => {},
  size: "md",
  type: "solid"
};

module.exports = Button;

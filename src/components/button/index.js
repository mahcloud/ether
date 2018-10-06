import { cx, isNil } from "@alchemyalcove/basic-functions";
import PropTypes from "prop-types";
import React from "react";

const Button = (props) => {
  const handleClick = (e) => {
    if(typeof(e) !== "undefined") {
      e.preventDefault();
      e.stopPropagation();
    }

    if(!props.disabled) {
      props.onClick();
    }
  }

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

  if(!isNil(props.className)) {
    classes = classes + " " + props.className;
  }

  return(
    <button className={classes} type="button" disabled={props.disabled} onClick={(e) => handleClick(e)}>
      {props.children}
    </button>
  );
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

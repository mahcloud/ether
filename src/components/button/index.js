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
    "block": props.block,
    "button": true,
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

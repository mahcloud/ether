import { cx, isNil } from "@alchemyalcove/basic-functions";
import PropTypes from "prop-types";
import React from "react"; // eslint-disable-line no-unused-vars

const Notice = (props) => {
  let classes = cx({
    "notice": true,
    "color-primary": ["secondary", "success", "danger", "warning"].indexOf(props.color) === -1,
    "color-secondary": props.color === "secondary",
    "color-success": props.color === "success",
    "color-danger": props.color === "danger",
    "color-warning": props.color === "warning"
  });

  if(!isNil(props.className)) {
    classes = classes + " " + props.className;
  }

  return(
    <div className={classes}>{props.children}</div>
  );
};

Notice.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string
};

Notice.defaultProps = {
  color: "primary"
};

module.exports = Notice;

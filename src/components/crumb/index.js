import PropTypes from "prop-types";
import React from "react"; // eslint-disable-line no-unused-vars

const Crumb = ({children, className}) => {
  const classes = ("crumb " + className).trim();

  return(<li className={classes}>{children}</li>);
};

Crumb.propTypes = {
  className: PropTypes.string
};

Crumb.defaultProps = {
  className: ""
};

module.exports = Crumb;

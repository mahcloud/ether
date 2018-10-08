import PropTypes from "prop-types";
import React from "react"; // eslint-disable-line no-unused-vars

const Breadcrumbs = ({children, className}) => {
  return(
    <nav className={("breadcrumbs " + className).trim()}>
      <ol>
        {children}
      </ol>
    </nav>
  );
};

Breadcrumbs.propTypes = {
  className: PropTypes.string
};

Breadcrumbs.defaultProps = {
  className: ""
};

module.exports = Breadcrumbs;
import PropTypes from "prop-types";
import React from "react"; // eslint-disable-line no-unused-vars

const Container = (props) => {
  let classes = "grid-container";
  classes += " columns-" + (props.columns || props.children.length);

  return(
    <div className={classes}>
      {props.children}
    </div>
  );
};

Container.propTypes = {
  columns: PropTypes.number
};

export default Container;
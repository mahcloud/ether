import React from "react";
import { render } from "react-dom";

export default function(elements, component, props) {
  if(!elements.isArray) {
    elements = [].push(elements);
  }

  elements.forEach((elem) => {
    render(React.createElement(component, props), elem);
  });
}

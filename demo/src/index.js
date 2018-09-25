import { render } from "react-dom";
import { setVariables } from "@alchemyalcove/ether";
import App from "./app";
import React from "react"; // eslint-disable-line no-unused-vars

document.addEventListener("DOMContentLoaded", () => {
  setVariables({
    colors: {
      grayedOut: "#7f8C8D",
      background: "#ECF0F1",
      text: "#333333"
    },
    font: {
      family: "'Open-Sans', sans-serif",
      size: "14px",
      weight: {
        thin: "300",
        regular: "400",
        thick: "700"
      }
    }
  });

  render(
    <App/>,
    document.getElementById("demo")
  );
});

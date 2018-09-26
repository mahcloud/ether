import { render } from "react-dom";
import { setVariables } from "@alchemyalcove/ether";
import App from "./app";
import "../node_modules/@alchemyalcove/ether/dist/ether.css";
import React from "react"; // eslint-disable-line no-unused-vars

document.addEventListener("DOMContentLoaded", () => {
  setVariables({
    colors: {
      background: "#ECF0F1",
      danger: "#E74C3C",
      grayedOut: "#7f8C8D",
      primary: "#2C3E50",
      secondary: "#95A5A6",
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

import "../node_modules/@alchemyalcove/ether/dist/ether.css";
import { render } from "react-dom";
import { setVariables } from "@alchemyalcove/ether";
import { injectGlobal } from "emotion";
import App from "./app";
import React from "react"; // eslint-disable-line no-unused-vars
import Schema from "@alchemyalcove/color-schema";

injectGlobal`
  iframe {
    width: 100%;
    height: 100%;
    border: 0;
    overflow: hidden;
  }
`;

document.addEventListener("DOMContentLoaded", () => {
  setVariables({
    border: {
      radius: "3px"
    },
    colors: Schema(),
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

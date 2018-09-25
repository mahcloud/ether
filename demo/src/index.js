/* global Ether */
import { render } from "react-dom";
import App from "./app";

document.addEventListener("DOMContentLoaded", () => {
  Ether.setVariables({
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

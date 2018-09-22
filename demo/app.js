import { render } from "react-dom";
import { Ellipsis } from "../src";
import React from "react"; // eslint-disable-line no-unused-vars
import "../ether.css";

document.addEventListener("DOMContentLoaded", () => {
  render(
    <Ellipsis/>,
    document.getElementById("demo")
  );
});

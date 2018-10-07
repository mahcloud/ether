import { Notice } from "../../src";
import { fireEvent, render } from "react-testing-library";
import React from "react"; // eslint-disable-line no-unused-vars
import sinon from "sinon";

test("generic notice", () => {
  const{container} = render(<Notice/>);

  expect(container.firstChild).toMatchSnapshot();
});

test("secondary notice", () => {
  const{container} = render(<Notice color="secondary"/>);

  expect(container.firstChild).toMatchSnapshot();
});

test("success small outline button", () => {
  const{container} = render(<Notice color="success"/>);

  expect(container.firstChild).toMatchSnapshot();
});

test("danger small link button", () => {
  const{container} = render(<Notice color="danger"/>);

  expect(container.firstChild).toMatchSnapshot();
});

test("warning small button", () => {
  const{container} = render(<Notice color="warning"/>);

  expect(container.firstChild).toMatchSnapshot();
});

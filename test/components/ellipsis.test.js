import { Ellipsis } from "../../src";
import { render } from "react-testing-library";
import React from "react"; // eslint-disable-line no-unused-vars
import sinon from "sinon";

let clock;

beforeEach(() => {
  clock = sinon.useFakeTimers();
});

afterEach(() => {
  clock.restore();
});

test("default text", () => {
  const{queryByText} = render(<Ellipsis/>);

  expect(queryByText("Loading")).toBeInTheDocument();
});

test("show text", () => {
  const{queryByText} = render(<Ellipsis>Loading Test</Ellipsis>);

  expect(queryByText("Loading Test")).toBeInTheDocument();
  expect(queryByText("Loading Test.")).not.toBeInTheDocument();
  expect(queryByText("Loading Test..")).not.toBeInTheDocument();
  expect(queryByText("Loading Test...")).not.toBeInTheDocument();
});

test("dots", () => {
  const{queryByText} = render(<Ellipsis/>);
  clock.tick(500);

  expect(queryByText("Loading.")).toBeInTheDocument();
  expect(queryByText("Loading..")).not.toBeInTheDocument();
});

test("two dots", () => {
  const{queryByText} = render(<Ellipsis/>);
  clock.tick(1000);

  expect(queryByText("Loading..")).toBeInTheDocument();
  expect(queryByText("Loading...")).not.toBeInTheDocument();
});

test("three dots", () => {
  const{queryByText} = render(<Ellipsis/>);
  clock.tick(1500);

  expect(queryByText("Loading...")).toBeInTheDocument();
});

import { Button } from "../../src";
import { fireEvent, render } from "react-testing-library";
import React from "react"; // eslint-disable-line no-unused-vars
import sinon from "sinon";

test("disabled generic button", () => {
  const{container} = render(<Button disabled={true}/>);

  expect(container.firstChild).toMatchSnapshot();
});

test("secondary large button", () => {
  const{container} = render(<Button size="lg" color="secondary"/>);

  expect(container.firstChild).toMatchSnapshot();
});

test("success small outline button", () => {
  const{container} = render(<Button size="sm" color="success" type="outline"/>);

  expect(container.firstChild).toMatchSnapshot();
});

test("danger small link button", () => {
  const{container} = render(<Button size="sm" color="danger" type="link"/>);

  expect(container.firstChild).toMatchSnapshot();
});

test("warning small button", () => {
  const{container} = render(<Button size="sm" color="warning"/>);

  expect(container.firstChild).toMatchSnapshot();
});

test("click", () => {
  const onClickSpy = sinon.spy();
  const{container} = render(<Button onClick={onClickSpy}/>);

  fireEvent.click(container.firstChild);
  sinon.assert.calledOnce(onClickSpy);
});

test("disabled click", () => {
  const onClickSpy = sinon.spy();
  const{container} = render(<Button disabled={true} onClick={onClickSpy}/>);

  fireEvent.click(container.firstChild);
  sinon.assert.notCalled(onClickSpy);
});
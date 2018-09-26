import { cx } from "../../src";

test("true values should be added", () => {
  const obj = {
    "foo": true,
    "bar": true,
    "test": false,
    "wrong": false,
    "bugs": true
  }
  expect(cx(obj)).toBe("foo bar bugs");
});
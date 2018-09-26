import { isNil } from "../../src";

test("null is nil", () => {
  expect(isNil(null)).toBe(true);
});

test("void 0 is nil", () => {
  expect(isNil(void 0)).toBe(true);
});

test("NaN is not null", () => {
  expect(isNil(NaN)).toBe(false);
});

test("undefined is null", () => {
  expect(isNil(undefined)).toBe(true);
});

test("false is not null", () => {
  expect(isNil(false)).toBe(false);
});
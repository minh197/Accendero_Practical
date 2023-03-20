import { formatPrice } from "./helper";

describe("format Money function", () => {
  test("works with fractional dollars", () => {
    expect(formatPrice(1)).toEqual("$0.01");
    expect(formatPrice(9)).toEqual("$0.09");
    expect(formatPrice(40)).toEqual("$0.40");
  });
});

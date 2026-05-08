const { processOrder } = require("./order");

test("applies discount when total is greater than 100", () => {
  expect(processOrder(25, 5)).toBe("105.00");
});

test("no discount applied when total is under 100", () => {
  expect(processOrder(10, 5)).toBe("50.00");
});

test("edge case exactly 100", () => {
  expect(processOrder(20, 5)).toBe("100.00");
});

test("throws error for negative input", () => {
  expect(() => processOrder(-5, 2)).toThrow();
});
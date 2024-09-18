import { step } from "allure-js-commons";

it("should pass", () => {
  step("foo", () => {
    expect(1).to.eq(1);
  });
});

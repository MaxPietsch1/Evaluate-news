import { pattern } from "../js/validURL";

describe("RegExp: URL", () => {
  it("should match the expected URL", () => {
    const url = "http://google.com:4443/";
    expect(pattern.test(url)).toBe(true);
  });
});

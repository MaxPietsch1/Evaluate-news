import { updateUI } from "../js/formHandler";

describe("Testing the updateUI() functionality", () => {
  test("Testing if updateUI exist", () => {
    expect(updateUI).toBeDefined();
  });
});

describe("Testing the updateUI() functionality", () => {
  test("Testing if updateUI is a value of true", () => {
    expect(updateUI).toBeTruthy();
  });
});

describe("Testing the updateUI() functionality", () => {
  test("Testing if updateUI is a value of true", () => {
    expect(typeof updateUI).toBe("function");
  });
});

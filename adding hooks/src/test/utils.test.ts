import { stringUtils } from "../app/utils";

describe("utils test suite", () => {
  describe("stringUtils class testing", () => {
    let stringClass: stringUtils;
    beforeEach(() => {
      stringClass = new stringUtils();
    });
    it("should return the correct uppercase output", () => {
      const actual = stringClass.toUpperCase("Hari");
      expect(actual).toBe("HARI");
    });
    it("should return the correct uppercase output", () => {
      const actual = stringClass.toUpperCase("abc");
      expect(actual).toBe("ABC");
    });
  });
});

import { additionalStringInfo, toUpperCase } from "../app/utils";

describe("Utils test suite", () => {
  describe.only("testing parameterized inputs", () => {
    it.each([
      { input: "Hari", output: "HARI" },
      { input: "abc", output: "ABC" },
      { input: "def", output: "DEF" },
    ])("$input upper case should be $output", ({ input, output }) => {
      const actual = toUpperCase(input);
      expect(actual).toBe(output);
    });
  });

  it("should return uppercase", () => {
    //arrange
    const sut = toUpperCase;
    const expected = "ABC";

    //act
    const result = sut("abc");

    //assert
    expect(result).toBe(expected);
  });

  describe("testing for additionl string information.", () => {
    it("should return the correct length og characters", () => {
      const result = additionalStringInfo("Hari");
      expect(result.characters).toHaveLength(4);
    });
    it("should return the correct uppercase srting", () => {
      const result = additionalStringInfo("Hari");
      expect(result.upperCase).toBe("HARI");
    });
    it("should return the correct lowercase srting", () => {
      const result = additionalStringInfo("Hari");
      expect(result.lowerCase).toBe("hari");
    });
    it("should return the correct characters present in the srting", () => {
      const result = additionalStringInfo("Hari");
      expect(result.characters).toEqual(["H", "a", "r", "i"]);
    });
    it("should return the correct extra Information of the srting", () => {
      const result = additionalStringInfo("Hari");
      expect(result.extraInfo).toBeDefined();
    });
  });
});

import {
  calculateComplexity,
  toUpperCaseWithCf,
} from "../../app/doubles/otherUtils";

describe("OtherUtils test suite", () => {
  it("should return the correct output if there is no valid string", () => {
    const actual = toUpperCaseWithCf("", () => {});
    expect(actual).toBeUndefined;
  });

  it("should retur the correct uppercase strig", () => {
    const actual = toUpperCaseWithCf("hari", () => {});
    expect(actual).toBe("HARI");
  });

  it("Calculates Complexity", () => {
    const someInfo = {
      length: 5,
      extraInfo: {
        field1: "someInfo",
        field2: "someOtherInfo",
      },
    };
    const actual = calculateComplexity(someInfo as any);
    expect(actual).toBe(10);
  });
});

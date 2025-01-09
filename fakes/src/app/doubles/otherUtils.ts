export type stringInfo = {
  lowerCase: string;
  upperCase: string;
  characters: string[];
  length: number;
  extraInfo: object | undefined;
};

export function calculateComplexity(stringInfo: stringInfo) {
  return Object.keys(stringInfo).length * stringInfo.length;
}

type callackFn = (str: string) => void;

export function toUpperCaseWithCf(str: string, cf: callackFn) {
  if (!str) {
    cf("ivalid argumets");
    return;
  }
  cf(`passed to callack with arg value ${str}`);
  return str.toUpperCase();
}

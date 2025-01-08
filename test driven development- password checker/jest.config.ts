import type { Config } from "@jest/types";

const baseDir = "<rootDir>/src/app/passchecker";
const baseTestDir = "<rootDir>/src/test/passchecker";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [`${baseDir}/**/*.ts`],
  testMatch: [`${baseTestDir}/**/*.ts`],
};

export default config;

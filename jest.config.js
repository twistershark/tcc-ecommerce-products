module.exports = {
  roots: ["<rootDir>/src"],
  collectCoverageFrom: ["<rootDir>/src/**/*.{ts,tsx}"],
  testPathIgnorePatterns: [
    "<rootDir>/src/__tests__/__mocks__/",
    "<rootDir>/src/__tests__/setupTests.ts",
    "<rootDir>/src/types/*.d.ts",
  ],
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "ts-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/src/__tests__/setupTests.ts"],
};

module.exports = {
  roots: ["<rootDir>/src"],
  collectCoverageFrom: ["<rootDir>/src/**/*.{ts,tsx}"],
  testPathIgnorePatterns: ["<rootDir>/src/__tests__/__mocks__/"],
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  transform: {
    ".+\\.ts$": "ts-jest",
  },
};

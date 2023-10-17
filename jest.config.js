module.exports = {
  roots: ["<rootDir>/src"],
  collectCoverageFrom: ["<rootDir>/src/**/*.{ts,tsx}"],
  testPathIgnorePatterns: [
    "<rootDir>/src/__tests__/__mocks__/",
    "<rootDir>/src/__tests__/setupTests.ts",
    "<rootDir>/src/__tests__/fileTransformer.ts",
    "<rootDir>/src/types/*.d.ts",
  ],
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "ts-jest",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/__tests__/fileTransformer.ts",
  },
  setupFilesAfterEnv: ["./src/__tests__/setupTests.ts"],
  moduleFileExtensions: ["js", "mjs", "cjs", "jsx", "ts", "tsx", "d.ts"],
};

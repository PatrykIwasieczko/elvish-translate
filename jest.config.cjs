module.exports = {
  clearMocks: true,
  testMatch: ["<rootDir>/src/**/*.test.{ts,tsx}"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "ts-jest",
  },
  roots: ["<rootDir>"],
  modulePaths: ["./src"],
  moduleDirectories: ["node_modules", "src"],
};

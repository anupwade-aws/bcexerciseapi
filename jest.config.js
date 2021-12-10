module.exports = {
  "verbose": true,
  "rootDir": "src",
  "testRegex": ".spec.ts$",
  "testEnvironment": "node",
  "moduleFileExtensions": [
    "js",
    "ts",
  ],
  "transform": {
    "^.+\\.(t|j)s$": "ts-jest"
  },
  "collectCoverageFrom": [
    "**/*.ts",
    "!**/migrations/*.ts",
    "!**/seeds/*.ts",
    "!**/utils/migration.ts",
    "!**/utils/test/*.ts",
  ],
  "coverageDirectory": "coverage",
  "coverageThreshold": {
    "global": {
      "branches": 8,
      "functions": 8,
      "lines": 8,
      "statements": 8
    }
  }
};
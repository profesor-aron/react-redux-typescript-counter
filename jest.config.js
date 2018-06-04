module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  "setupTestFrameworkScriptFile": "<rootDir>/src/config/test/setupEnzyme.ts",
  "collectCoverage": true,
  "collectCoverageFrom": [
    "src/**/*.{ts,tsx}",
    "!src/config/test/setupEnzyme.ts",
    "!src/index.tsx"
  ],
  "coverageDirectory": "coverage",
  "coverageReporters": [
    "html"
  ]
}

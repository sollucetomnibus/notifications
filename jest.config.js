// For a detailed explanation regarding each configuration property, visit: https://jestjs.io/docs/configuration

/** @type {import('@jest/types').Config.InitialOptions} */
const jestConfig = {
  rootDir: '.',
  bail: true,
  clearMocks: true,
  collectCoverage: false,
  coverageDirectory: '<rootDir>/coverage',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleNameMapper: {
    '^@src/(.*)$': '<rootDir>/src/$1',
  },
  modulePathIgnorePatterns: [
    '<rootDir>/.github/',
    '<rootDir>/.storybook/',
    '<rootDir>/.storybook-build/',
    '<rootDir>/coverage/',
    '<rootDir>/dist/',
    '<rootDir>/node_modules/',
    '<rootDir>/public/',
  ],
  testEnvironment: 'node',
  detectOpenHandles: true,
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
  },
};

module.exports = jestConfig;

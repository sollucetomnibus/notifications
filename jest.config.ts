import type { Config } from '@jest/types';

const jestConfig: Config.InitialOptions = {
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
    '<rootDir>/dev/',
    '<rootDir>/dist/',
    '<rootDir>/node_modules/',
    '<rootDir>/public/',
  ],
  testEnvironment: 'jsdom',
  detectOpenHandles: true,
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
  },
};

export default jestConfig;

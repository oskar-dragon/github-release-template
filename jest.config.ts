// @ts-nocheck
/* eslint-disable */
// @ts-ignore
/// <reference lib="esnext" />

import type { Config } from 'jest';

const config: Config.InitialOptions = {
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,
  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,
  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  coveragePathIgnorePatterns: ['/node_modules/'],

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',

  // A list of reporter names that Jest uses when writing coverage reports
  // coverageReporters: [
  //   "json",
  //   "text",
  //   "lcov",
  //   "clover"
  // ],

  coverageThreshold: undefined,

  fakeTimers: {
    enableGlobally: false,
  },

  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'mjs', 'cjs', 'ts', 'json'],

  // A preset that is used as a base for Jest's configuration
  preset: 'ts-jest',

  resetMocks: false,

  restoreMocks: false,

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ['<rootDir>/test/setupTests.ts'],

  // The glob patterns Jest uses to detect test files
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
};

export default config;

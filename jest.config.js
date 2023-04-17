// jest.config.js
// Sync object
module.exports = {
  setupFilesAfterEnv: ['<rootDir>/.test/jest.setup.js'],
  preset: 'jest-expo',
  testMatch: ['**/?(*.)+(spec|test).tsx?(x)'],
  collectCoverageFrom: ['**/*.{ts,tsx}', '!**/coverage/**', '!**/node_modules/**'],
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|@sentry/react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@react-native-picker/picker)',
  ],
  coverageReporters: ['json-summary', 'text', 'lcov'],
  moduleDirectories: ['node_modules', 'jest-utils,js', '<rootDir>'],
  reporters: [
    'default',
    [
      'jest-sonar',
      {
        outputDirectory: 'coverage',
        outputName: 'test-report.xml',
        reportedFilePath: 'absolute',
      },
    ],
  ],
  snapshotSerializers: ['enzyme-to-json/serializer'],
};

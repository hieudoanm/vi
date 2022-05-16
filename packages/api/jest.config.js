module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**',
    '!<rootDir>/src/routes.ts',
    '!<rootDir>/src/swagger.json',
    '!<rootDir>/src/**/*.d.ts',
    '!<rootDir>/src/**/*.ts.snap',
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
  testMatch: ['**/?(*.)+(spec|test).[t]s?(x)'],
  verbose: true,
};

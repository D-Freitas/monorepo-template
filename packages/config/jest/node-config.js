export const nodeConfig = {
  testEnvironment: 'node',
  testMatch: ['**/*.test.js', '**/*.spec.js'],
  moduleFileExtensions: ['js', 'json'],
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@monorepo-template/shared/(.*)$': '<rootDir>/../../packages/shared/$1'
  },
  testTimeout: 100_000
}

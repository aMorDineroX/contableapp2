const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^next-auth(.*)$': '<rootDir>/node_modules/next-auth$1',
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  transform: {
    '^.+\\.(ts|tsx)$': [
      'babel-jest',
      {
        presets: [
          'next/babel',
          '@babel/preset-typescript',
          ['@babel/preset-react', { runtime: 'automatic' }],
        ],
      },
    ],
  },
  transformIgnorePatterns: ['/node_modules/(?!(@tremor|recharts|next-auth)/)'],
  maxWorkers: '50%', // Run tests sequentially
  maxConcurrency: 1,
  workerIdleMemoryLimit: '512MB',
  testTimeout: 10000,
  collectCoverage: false, // Disable coverage for better performance
  watchPathIgnorePatterns: ['node_modules'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json',
    },
  },
  bail: true,
  verbose: true,
  testSequencer: './jest.sequencer.js',
  logHeapUsage: true,
  cacheDirectory: '.jest-cache',
  testRunner: 'jest-circus/runner',
  isolateModules: true,
  forceExit: true,
  detectOpenHandles: true,
  testEnvironmentOptions: {
    url: 'http://localhost:3001',
  },
  detectLeaks: true,
  teardown: true,
};

module.exports = createJestConfig(customJestConfig);

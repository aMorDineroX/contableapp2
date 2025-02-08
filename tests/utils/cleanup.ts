import { cleanup } from '@testing-library/react';

export const cleanupTest = () => {
  cleanup();
  if (global.gc) global.gc();
  jest.clearAllMocks();
};

export const setupTest = () => {
  jest.resetModules();
  jest.clearAllMocks();
};

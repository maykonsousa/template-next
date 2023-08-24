import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

const config = {
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/?(*.)+(spec).ts?(x)'],
};

export default createJestConfig(config);

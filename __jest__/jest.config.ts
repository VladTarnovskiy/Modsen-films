import type { Config } from 'jest';

const config: Config = {
  roots: ['../src'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  injectGlobals: true,
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/mocks/filesMock.ts',
    '^src(.*)$': '<rootDir>/../src/$1',
    '^assets(.*)$': '<rootDir>/../src/assets/$1',
    // '^jest(.*)$': '<rootDir>/$1',
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
    '.+\\.(css|less|sass|scss)$': 'jest-css-modules-transform',
  },
  testMatch: ['**/?(*.)(spec|test).[jt]s?(x)'],
  testEnvironment: 'jsdom',
};

export default config;

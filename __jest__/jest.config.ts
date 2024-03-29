import type { Config } from 'jest';

const config: Config = {
  roots: ['../src'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
  setupFiles: ['./jest.polyfills.ts'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/mocks/filesMock.ts',
    '^@src(.*)$': '<rootDir>/../src/$1',
    '^@assets(.*)$': '<rootDir>/../src/assets/$1',
    '^@jest-dir(.*)$': '<rootDir>/$1',
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/../tsconfig.json',
        isolatedModules: true,
        diagnostics: { ignoreCodes: [151001] },
      },
    ],
    '.+\\.(css|less|sass|scss)$': 'jest-css-modules-transform',
  },
  testMatch: ['**/?(*.)(spec|test).[jt]s?(x)'],
  testEnvironment: './fixJSDOMEnvironment.ts',
  testEnvironmentOptions: {
    customExportConditions: [''],
  },
};

export default config;

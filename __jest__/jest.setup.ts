import '@testing-library/jest-dom';
import 'jest-styled-components';
import { server } from './mockServer/mockServer';
import { cleanup } from '@testing-library/react';

afterEach(() => {
  cleanup();
});

beforeAll(() => server.listen());
afterEach(() => server.close());
afterAll(() => server.close());

import '@testing-library/jest-dom';
import 'jest-styled-components';

import { cleanup } from '@testing-library/react';

import { server } from './mockServer/mockServer';

afterEach(() => {
  cleanup();
});

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

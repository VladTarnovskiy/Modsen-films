import { Wrapper } from '@jest-dir/utils/testUtils';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { NotFoundPage } from '.';

describe('Not found page', () => {
  test('Not found', () => {
    render(
      <Wrapper>
        <NotFoundPage />
      </Wrapper>,
      {
        wrapper: BrowserRouter,
      }
    );
    const homeElement = screen.getByText(
      'The page you are looking for not found!'
    );
    expect(homeElement).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import { NotFoundPage } from './NotFound';
import { BrowserRouter } from 'react-router-dom';
import { Wrapper } from '../../../__jest__/utils/testUtils';

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

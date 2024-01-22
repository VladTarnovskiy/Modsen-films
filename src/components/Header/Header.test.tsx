import { Wrapper } from '@jest-dir/utils/testUtils';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { Header } from '.';

describe('Header', () => {
  test('element renders', async () => {
    render(
      <Wrapper>
        <Header />
      </Wrapper>,
      {
        wrapper: BrowserRouter,
      }
    );

    const logo = screen.getByText(/ModsenFilms/i);

    expect(logo).toBeInTheDocument();
  });
});

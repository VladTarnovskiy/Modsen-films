import { render, screen } from '@testing-library/react';
import { Wrapper } from '../../../__jest__/utils/testUtils';
import { Header } from '.';
import { BrowserRouter } from 'react-router-dom';

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

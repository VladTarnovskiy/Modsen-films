import { Wrapper } from '@jest-dir/utils/testUtils';
import { routes } from '@src/router';
import { render, screen, waitFor } from '@testing-library/react';
import {
  BrowserRouter,
  createMemoryRouter,
  RouterProvider,
} from 'react-router-dom';

import { MainPage } from '.';

describe('Main page', () => {
  test('Main found', async () => {
    render(
      <Wrapper>
        <MainPage />
      </Wrapper>,
      {
        wrapper: BrowserRouter,
      }
    );

    await waitFor(() => {
      const page = screen.getByTestId('main-page');
      expect(page).toBeInTheDocument();
    });
  });

  const router = createMemoryRouter(routes, {
    initialEntries: ['/'],
  });

  test('render search data', async () => {
    render(
      <Wrapper>
        <RouterProvider router={router} />
      </Wrapper>
    );

    await waitFor(() => {
      const cardTitle = screen.getAllByText(/catvid-19/i);
      const buttons = screen.getAllByTestId('card');
      expect(cardTitle[0]).toBeInTheDocument();
      expect(buttons).toHaveLength(5);
    });
  });
});

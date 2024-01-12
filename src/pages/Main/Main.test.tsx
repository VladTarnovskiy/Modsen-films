import { render, screen, waitFor } from '@testing-library/react';
import {
  BrowserRouter,
  RouterProvider,
  createMemoryRouter,
} from 'react-router-dom';
import { Wrapper } from '../../../__jest__/utils/testUtils';
import { MainPage } from '.';
import { routes } from 'src/router';

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
      const button = screen.getByText(/Show More/i);
      expect(button).toBeInTheDocument();
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
      // jest.useFakeTimers();
      //   const showMoreButton = screen.getByText(/Show More/i);
      // fireEvent.click(showMoreButton);
      const cardTitle = screen.getByText(/catvid-19/i);
      expect(cardTitle).toBeInTheDocument();
    });
  });
});

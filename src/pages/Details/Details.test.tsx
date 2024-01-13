import { render, screen, waitFor } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { Wrapper } from '@jest-dir/utils/testUtils';
import { DetailsPage } from '.';

describe('Details page', () => {
  const routes = [
    {
      path: 'details/:detailsId',
      element: (
        <Wrapper>
          <DetailsPage />
        </Wrapper>
      ),
    },
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: ['/details/3bhkYoMWTFE'],
  });

  test('data displays correctly', async () => {
    render(<RouterProvider router={router} />);
    await waitFor(() => {
      const videoTitle = screen.getByText(/Cats Doing Cat Things/i);
      const chanelTitle = screen.getByText(/catvid-19/i);
      const viewsCount = screen.getByText(/174988618/i);
      const likesCount = screen.getByText(/5497058/i);

      expect(videoTitle).toBeInTheDocument();
      expect(chanelTitle).toBeInTheDocument();
      expect(viewsCount).toBeInTheDocument();
      expect(likesCount).toBeInTheDocument();
    });
  });
});

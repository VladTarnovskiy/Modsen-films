import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Wrapper } from '../../../__jest__/utils/testUtils';
import { MainPage } from '.';
import { Layout } from '../Layout';

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

  test('render search data', async () => {
    render(
      <Wrapper>
        <>
          <Layout />
          <MainPage />
        </>
      </Wrapper>,
      {
        wrapper: BrowserRouter,
      }
    );

    await waitFor(() => {
      //   const card = screen.getAllByTestId('card');
      const showMoreButton = screen.getByText(/Show More/i);
      fireEvent.click(showMoreButton);
      const cardTitle = screen.getByText(/catvid-19/i);
      expect(cardTitle).toBeInTheDocument();
      //   expect(status).toBeInTheDocument();
      //   expect(card.length).toBe(2);
    });
  });
});

// test('verify that the component renders the specified number of cards', async () => {
//     render(<RouterProvider router={router} />);

//     await waitFor(() => {
//       const card = screen.getAllByTestId('card');
//       const name = screen.getByText(/Rick Sanchez/i);
//       const status = screen.getByText(/Alive/i);
//       expect(name).toBeInTheDocument();
//       expect(status).toBeInTheDocument();
//       expect(card.length).toBe(2);
//     });
//   })

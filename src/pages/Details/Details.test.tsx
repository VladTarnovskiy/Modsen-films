import { render, screen, waitFor } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { Wrapper } from '../../../__jest__/utils/testUtils';
import { DetailsPage } from '.';

describe('Details page', () => {
  // test('Main found', async () => {
  //   render(
  //     <Wrapper>
  //       <MainPage />
  //     </Wrapper>,
  //     {
  //       wrapper: BrowserRouter,
  //     }
  //   );

  //   await waitFor(() => {
  //     const button = screen.getByText(/Show More/i);
  //     expect(button).toBeInTheDocument();
  //   });
  // });
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

  test('render details data', async () => {
    render(<RouterProvider router={router} />);
    // global.structuredClone = (val) => JSON.parse(JSON.stringify(val));

    await waitFor(() => {
      //   const card = screen.getAllByTestId('card');
      const cardTitle = screen.getByText(/Cat/i);
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

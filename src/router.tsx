import { DetailsPage } from './pages/Details';
import { Layout } from './pages/Layout';
import { MainPage } from './pages/Main';
import { NotFoundPage } from './pages/NotFound/NotFound';

export const router = [
  {
    element: <Layout />,
    // errorElement: <RouterError />,
    path: '/',
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'details/:detailsId',
        element: <DetailsPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

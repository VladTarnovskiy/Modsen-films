import { RouterErrorBoundary } from './components/RouterErrorBoundary';
import { DetailsPage } from './pages/Details';
import { Layout } from './pages/Layout';
import { MainPage } from './pages/Main';
import { NotFoundPage } from './pages/NotFound';

export const routes = [
  {
    element: <Layout />,
    errorElement: <RouterErrorBoundary />,
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

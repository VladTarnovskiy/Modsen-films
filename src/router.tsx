import { RouterErrorBoundary } from './components/RouterErrorBoundary';
import { DetailsPage } from './pages/Details';
import { Layout } from './pages/Layout';
import { MainPage } from './pages/Main';
import { NotFoundPage } from './pages/NotFound';

enum Router {
  mainPage = '/',
  detailsPage = 'details/:detailsId',
  notFoundPage = '*',
}

export const routes = [
  {
    element: <Layout />,
    errorElement: <RouterErrorBoundary />,
    path: Router.mainPage,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: Router.detailsPage,
        element: <DetailsPage />,
      },
    ],
  },
  {
    path: Router.notFoundPage,
    element: <NotFoundPage />,
  },
];

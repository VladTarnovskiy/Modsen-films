import { Layout } from './pages/Layout';
import { MainPage } from './pages/Main';

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
    ],
  },
  // {
  //   path: '*',
  //   element: <NotFoundPage />,
  // },
];

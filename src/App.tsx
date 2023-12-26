import { FC } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { router } from './router';
import { ThemeProvider } from 'styled-components';
import { baseTheme } from './styles/theme';

export const App: FC = () => {
  return (
    <ThemeProvider theme={baseTheme}>
      <RouterProvider router={createBrowserRouter(router)} />{' '}
    </ThemeProvider>
  );
};

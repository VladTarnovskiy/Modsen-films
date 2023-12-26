import { FC } from 'react';
import './styles/fonts.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { router } from './router';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styles/theme';
import GlobalStyles from './styles/global';

export const App: FC = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <RouterProvider router={createBrowserRouter(router)} />
      <GlobalStyles />
    </ThemeProvider>
  );
};

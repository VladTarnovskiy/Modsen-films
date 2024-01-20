import './styles/fonts.scss';

import { FC } from 'react';
import { useSelector } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { routes } from './router';
import { selectIsLightTheme } from './store/slices/MainPageSlice';
import GlobalStyles from './styles/global';
import { darkTheme, lightTheme } from './styles/theme';

export const App: FC = () => {
  const isLightTheme = useSelector(selectIsLightTheme);

  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      <RouterProvider router={createBrowserRouter(routes)} />
      <GlobalStyles />
    </ThemeProvider>
  );
};

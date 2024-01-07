import { FC } from 'react';
import './styles/fonts.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { router } from './router';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/theme';
import GlobalStyles from './styles/global';
import { selectIsLightTheme } from './store/slices/MainPageSlice';
import { useSelector } from 'react-redux';

export const App: FC = () => {
  const isLight = useSelector(selectIsLightTheme);

  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
      <RouterProvider router={createBrowserRouter(router)} />
      <GlobalStyles />
    </ThemeProvider>
  );
};

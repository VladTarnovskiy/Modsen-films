import { FC } from 'react';
import './styles/fonts.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { router } from './router';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styles/theme';
import GlobalStyles from './styles/global';
import { Provider } from 'react-redux';
import { store } from './store/store';

export const App: FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <RouterProvider router={createBrowserRouter(router)} />
        <GlobalStyles />
      </ThemeProvider>
    </Provider>
  );
};

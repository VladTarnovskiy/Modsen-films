import { store } from '@src/store/store';
import GlobalStyles from '@src/styles/global';
import { lightTheme } from '@src/styles/theme';
import { FC } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

interface IProps {
  children: JSX.Element;
}

export const Wrapper: FC<IProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        {children}
        <GlobalStyles />
      </ThemeProvider>
    </Provider>
  );
};

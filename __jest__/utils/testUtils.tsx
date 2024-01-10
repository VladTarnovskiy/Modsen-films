import { Provider } from 'react-redux';
import { store } from 'src/store/store';
import { lightTheme } from 'src/styles/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'src/styles/global';
import { FC } from 'react';

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

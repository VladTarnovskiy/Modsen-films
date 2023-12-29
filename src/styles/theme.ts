import { ThemeEnum } from 'src/interfaces/styled';
import { DefaultTheme } from 'styled-components';

export const baseTheme = {
  colors: {
    base: 'rgba(0, 0, 0, 1)',
    primary: 'rgba(0, 0, 0, 0.19)',
    secondary: 'rgba(255, 138, 0, 1)',
    tertiary: ' rgb(255, 255, 255)',
    quaternary: 'rgba(0, 0, 0, 0.4)',

    bgBase: 'rgb(255, 255, 255)',
    bgPrimary: 'rgba(0, 0, 0, 0.06)',
    bgSecondary: 'rgba(0, 0, 0, 1)',

    font: 'rgba(0, 0, 0, 1)',
  },

  fontFamily: {
    bold: "'Roboto Bold', sans-serif",
    medium: "'Roboto Medium', sans-serif",
    base: "'Roboto Regular', sans-serif",
  },

  fontSize: {
    base: '16px',
    lg: '18px',
    small: '14px',
  },

  media: {
    xl: '(max-width: 1140px)',
    l: '(max-width: 960px)',
    m: '(max-width: 720px)',
    s: '(max-width: 540px)',
    xs: '(max-width: 240px)',
  },
};

export const lightTheme: DefaultTheme = {
  ...baseTheme,
  type: ThemeEnum.light,

  colors: {
    ...baseTheme.colors,
    // bg: '#E5E4E8',
    // font: '#19191B',
  },
};

export const darkTheme: DefaultTheme = {
  ...baseTheme,
  type: ThemeEnum.dark,

  colors: {
    ...baseTheme.colors,
    // background-color: teal;

    // bg: '#19191B',
    // font: '#E5E4E8',
  },
};

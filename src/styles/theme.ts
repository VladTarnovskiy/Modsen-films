import { ThemeEnum } from '@src/interfaces/styled';
import { DefaultTheme } from 'styled-components';

export const baseTheme = {
  colors: {
    base: 'rgb(0, 0, 0)',
    primary: 'rgba(0, 0, 0, 0.19)',
    secondary: 'rgb(255, 138, 0)',
    tertiary: 'rgb(255, 255, 255)',
    quaternary: 'rgba(0, 0, 0, 0.4)',

    bgBase: 'rgb(255, 255, 255)',
    bgPrimary: 'rgba(0, 0, 0, 0.06)',
    bgSecondary: 'rgb(255, 138, 0)',
    bgTertiary: 'rgb(255, 255, 255)',
  },

  fontFamily: {
    bold: "'Roboto Bold', sans-serif",
    medium: "'Roboto Medium', sans-serif",
    base: "'Roboto Regular', sans-serif",
    light: "'Roboto Light', sans-serif",
  },

  fontSize: {
    small: '14px',
    base: '16px',
    lg: '18px',
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
};

export const darkTheme: DefaultTheme = {
  ...baseTheme,
  type: ThemeEnum.dark,

  colors: {
    ...baseTheme.colors,
    base: 'rgb(255, 255, 255)',
    primary: 'rgba(255, 255, 255, 0.19)',
    tertiary: 'rgb(0, 0, 0)',
    quaternary: 'rgba(255, 255, 255, 0.4)',

    bgBase: 'rgb(0, 128, 128)',
    bgTertiary: 'rgb(0, 0, 0)',
  },
};

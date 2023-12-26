export enum ThemeEnum {
  light = 'light',
  dark = 'dark',
}

export interface ITheme {
  colors: {
    base: string;
    primary: string;
    secondary: string;
    tertiary: string;

    bgBase: string;
    bgPrimary: string;

    font: string;
  };

  fontFamily: {
    base: string;
    bold: string;
  };

  fontSize: {
    base: string;
    lg: string;
    small: string;
  };

  media: {
    xl: string;
    l: string;
    m: string;
    s: string;
    xs: string;
  };
}
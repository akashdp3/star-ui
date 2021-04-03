import 'styled-components';

type COLOR = {
  lighter: string;
  light: string;
  base: string;
  dark: string;
  darker: string;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    tokens: {
      colors: {
        primary: COLOR;
        secondary: COLOR;
        success: COLOR;
        danger: COLOR;
        warning: COLOR;
        white: { base: string };
        black: { base: string };
      };
      fontSizes: {
        [key: number]: string;
      };
      spaces: {
        [key: number]: string;
      };
    };
    components: {
      [key: string]: {
        [key: string]: any;
      };
    };
  }
}

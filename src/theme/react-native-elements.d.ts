export type RecursivePartial<T> = { [P in keyof T]?: RecursivePartial<T[P]> };

declare module 'react-native-elements' {
  export interface Palette {
    common: {
      white: string;
      black: string;
      transparent: string;
    };
  };

  export interface FullTheme {
    palette: RecursivePartial<Palette>;
  };
};
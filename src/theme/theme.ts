import { Palette, FullTheme } from 'react-native-elements';
import tokens from './tokens';

type Theme<T = {}> = Partial<FullTheme> & T;

export const palette: Palette = {
  common: {
    black: tokens.color.common.black,
    white: tokens.color.common.white,
    transparent: tokens.color.common.transparent,
  },
};

const theme: Theme = {
  palette,
};

export default theme;
import { Palette } from 'react-native-elements';
import tokens from './tokens';

export const palette: Palette = {
  common: {
    black: tokens.color.common.black,
    white: tokens.color.common.white,
    transparent: tokens.color.common.transparent,
  },
};

const theme = {
  palette,
};

export default theme;
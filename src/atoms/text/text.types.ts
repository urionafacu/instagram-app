import { TextProps } from 'react-native-elements';

export interface IText extends TextProps {
  variant?: Variants;
};

export type Variants =
  | 'light'
  | 'regular'
  | 'semiBold'
  | 'bold'
  | 'extraBold';
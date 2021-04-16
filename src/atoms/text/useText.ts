import { StyleProp, TextStyle } from 'react-native';
import { Variants } from './text.types';
import stylesTheme from './text.jss';
import { useTheme } from 'react-native-elements';

interface Params {
  variant?: Variants;
  style: StyleProp<TextStyle>;
};

const useText = ({ variant = 'regular', style }: Params) => {
  const { theme } = useTheme();
  const styles = stylesTheme(theme)

  const merged = [
    styles['regular'],
    variant !== 'regular' ? styles[variant] : {},
    style,
  ];

  return merged;
};

export default useText;
import { StyleSheet } from 'react-native';
import { FullTheme } from 'react-native-elements';

export default (theme: FullTheme) => {
  return StyleSheet.create({
    light: {
      fontFamily: 'open-sans-light',
      fontSize: 16,
    },
    regular: {
      fontFamily: 'open-sans-regular',
      fontSize: 16,
    },
    semiBold: {
      fontFamily: 'open-sans-semi-bold',
      fontSize: 16,
    },
    bold: {
      fontFamily: 'open-sans-bold',
      fontSize: 16,
    },
    extraBold: {
      fontFamily: 'open-sans-extra-bold',
      fontSize: 16,
    }
  });
};
import { StyleSheet } from 'react-native';
import { FullTheme } from 'react-native-elements';

export default (theme: FullTheme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    containerWhite: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.palette?.common?.white,
    },
  });
};
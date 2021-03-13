import { useContext } from 'react';
import { ThemeContext } from 'react-native-elements';

const useTheme = () => {
  return useContext(ThemeContext);
};

export default useTheme;
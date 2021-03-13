import React, { FC } from 'react';
import { ThemeProvider as RNThemeProvider } from 'react-native-elements';
import theme from './theme';

const ThemeProvider: FC = ({ children }) => {
  return <RNThemeProvider theme={theme}>{children}</RNThemeProvider>;
};

export default ThemeProvider;
import React, { FC } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import stylesTheme from './center.jss';
import { useTheme } from 'hooks';

interface ICenter {
  white?: boolean;
  style?: StyleProp<ViewStyle>;
};

const Center: FC<ICenter> = ({ children, style, white = false }) => {
  const { theme } = useTheme();
  const styles = stylesTheme(theme);
  return (
    <View style={[white
      ? styles.containerWhite
      : styles.container, style]}>
      {children}
    </View>
  );
};

export default Center;
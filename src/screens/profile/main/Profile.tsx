import React from 'react';
import { Center } from 'layouts';
import { Text } from 'atoms';
import stylesTheme from './profile.jss';
import { useTheme } from 'hooks';

export default function Main() {
  const { theme } = useTheme();
  const styles = stylesTheme(theme);
  return (
    <Center white>
      <Text style={styles.text}>Profile</Text>
    </Center>
  );
};
import React from 'react';
import { Text } from 'atoms';
import { useTheme } from 'hooks';
import stylesTheme from './search.jss';
import { Center } from 'layouts';

export default function Main() {
  const { theme } = useTheme();
  const styles = stylesTheme(theme);
  return (
    <Center white>
      <Text style={styles.text}>Search</Text>
    </Center>
  );
};
import React, { FC } from 'react';
import { Text } from 'atoms';
import { Center } from 'layouts';
import { useTheme } from 'hooks';
import stylesTheme from './like.jss';

const Like: FC = () => {
  const { theme } = useTheme();
  const styles = stylesTheme(theme);
  return (
    <Center white>
      <Text style={styles.text}>Like</Text>
    </Center>
  );
};

export default Like;
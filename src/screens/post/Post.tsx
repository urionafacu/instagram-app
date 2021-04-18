import React, { FC } from 'react';
import { Center } from 'layouts';
import { Text } from 'atoms';
import stylesTheme from './post.jss';
import { useTheme } from 'hooks';

const Post: FC = () => {
  const { theme } = useTheme();
  const styles = stylesTheme(theme);
  return (
    <Center white>
      <Text style={styles.text}>Post</Text>
    </Center>
  );
};

export default Post;
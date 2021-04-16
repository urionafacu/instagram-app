import React, { FC } from 'react';
import { Text as ElementText } from 'react-native-elements';
import { IText } from './text.types';
import useText from './useText';

const Text: FC<IText> = (props) => {
  const { children, style, variant, ...rest } = props;

  const textStyles = useText({ style, variant });

  return (
    <ElementText style={textStyles} {...rest}>
      {children}
    </ElementText>
  );
};

export default Text;
import 'react-native-gesture-handler';
import React from 'react';
import Main from './src/Main';
import useFont from 'hooks/useFont';

export default function App() {
  const [loaded] = useFont();

  if (!loaded) {
    return null;
  }

  return <Main />;
};
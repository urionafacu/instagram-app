import React from 'react';
import Providers from 'particles/providers/Providers';
import RootNavigator from 'navigation/RootNavigator';
import { StatusBar } from 'expo-status-bar';

export default function Main() {
  return (
    <Providers>
      <StatusBar style='auto' />
      <RootNavigator />
    </Providers>
  );
};
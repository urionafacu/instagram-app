import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Main from 'screens/search/main/Search';

const Stack = createStackNavigator();

export default function SearchStack() {
  const { Navigator, Screen } = Stack;
  return (
    <Navigator>
      <Screen
        name='Main'
        component={Main}
      />
    </Navigator>
  );
};
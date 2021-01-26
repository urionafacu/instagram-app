import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Main from 'screens/home/main/Home';

const Stack = createStackNavigator();

export default function HomeStack() {
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
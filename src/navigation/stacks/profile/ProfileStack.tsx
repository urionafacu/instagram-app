import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Main from 'screens/profile/main/Profile';

const Stack = createStackNavigator();

export default function ProfileStack() {
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
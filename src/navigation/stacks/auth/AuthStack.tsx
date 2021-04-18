import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, SignUp } from 'screens/auth';

const { Screen, Navigator } = createStackNavigator();

export default function AuthStack() {
  return (
    <Navigator>
      <Screen
        name='Login'
        component={Login}
      />
      <Screen
        name='SignUp'
        component={SignUp}
      />
    </Navigator>
  );
};
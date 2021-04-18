import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { BottomTab } from 'navigation/stacks';
import { AuthStack } from 'navigation/stacks';

const { Navigator, Screen } = createStackNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName='Home'
        headerMode='none'
      >
        <Screen
          name='Main'
          component={BottomTab}
        />

        <Screen
          name='Auth'
          component={AuthStack}
        />
      </Navigator>
    </NavigationContainer>
  );
};
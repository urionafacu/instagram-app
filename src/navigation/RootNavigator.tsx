import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStack, ProfileStack, SearchStack } from './stacks';
import { FontAwesome, Ionicons, FontAwesome5 } from '@expo/vector-icons';

const BottomTab = createBottomTabNavigator();

export default function RootNavigator() {
  const { Navigator, Screen } = BottomTab;
  return (
    <NavigationContainer theme={DefaultTheme}>
      <Navigator
        initialRouteName='Home'
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'transparent',
        }}
      >
        <Screen
          name='Home'
          component={HomeStack}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name='home' color={color} />
            )
          }}
        />
        <Screen
          name='Profile'
          component={ProfileStack}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name='ios-person-sharp' color={color} />
            )
          }}
        />
        <Screen
          name='Search'
          component={SearchStack}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name='search' color={color} />
            )
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStack, SearchStack, ProfileStack, AuthStack } from 'navigation/stacks';
import { FontAwesome, Ionicons, FontAwesome5, Feather, AntDesign } from '@expo/vector-icons';
import Post from 'screens/post/Post';
import Like from 'screens/like/Like';

const { Navigator, Screen } = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Navigator
      initialRouteName='Home'
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'blue',
      }}
    >

      <Screen
        name='Home'
        component={HomeStack}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name='home' size={24} color={color} />
          )
        }}
      />

      <Screen
        name='Search'
        component={SearchStack}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name='search' size={18} color={color} />
          )
        }}
      />

      <Screen
        name='Post'
        component={Post}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name='plus-square' size={24} color={color} />
          )
        }}
      />

      <Screen
        name='Like'
        component={Like}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name='heart' size={18} color={color} />
          )
        }}
      />

      <Screen
        name='Profile'
        component={ProfileStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name='ios-person-sharp' size={22} color={color} />
          )
        }}
      />

    </Navigator>
  );
};
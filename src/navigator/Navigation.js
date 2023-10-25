import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Message from '../screens/Message';
import ShoppingCard from '../screens/ShoppingCard';

import Home_Active from '../assets/icons/Home_Active.png';
import Home_Inactive from '../assets/icons/Home_Inactive.png';
import Profile_Active from '../assets/icons/Profile_Active.png';
import Profile_Inactive from '../assets/icons/Profile_Inactive.png';
import ShoppingCart_Active from '../assets/icons/ShoppingCart_Active.png';
import ShoppingCart_Inactive from '../assets/icons/ShoppingCart_Inactive.png';
import Message_Active from '../assets/icons/Message_Active.png';
import Message_Inactive from '../assets/icons/Message_Inactive.png';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? Home_Active : Home_Inactive;
          } else if (route.name === 'Profile') {
            iconName = focused ? Profile_Active : Profile_Inactive;
          } else if (route.name === 'ShoppingCard') {
            iconName = focused ? ShoppingCart_Active : ShoppingCart_Inactive;
          } else if (route.name === 'Message') {
            iconName = focused ? Message_Active : Message_Inactive;
          }

          return (
            <Image
              source={iconName}
              style={{ width: 22, height: 22 }}
            />
          );
        },
      })}
      tabBarOptions={{
        tabBarShowLabel: true,
        keyboardHidesTabBar: true,
        activeBackgroundColor: '#DDD9F3',
      }}
    >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      <Tab.Screen name="ShoppingCard" component={ShoppingCard} options={{ headerShown: false }} />
      <Tab.Screen name="Message" component={Message} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

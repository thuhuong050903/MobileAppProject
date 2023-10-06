import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Message from '../screens/Message';
import ShoppingCard from '../screens/ShoppingCard';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
        <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} 
        options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({color, size}) => (
                <Image source={require('../assets/Home.png')} style={{ width: 22, height: 22 }} />
            )
        }} />
        <Tab.Screen name="Profile" component={Profile} 
        options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({color, size}) => (
                <Image source={require('../assets/Profile.png')} style={{ width: 19, height: 25 }} />
            ),
        }} />
        <Tab.Screen name="ShoppingCard" component={ShoppingCard}
        options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({color, size}) => (
                <Image source={require('../assets/Buy.png')} style={{ width: 27, height: 25 }} />
            )
        }} />
        <Tab.Screen name="Message" component={Message} 
        options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({color, size}) => (
                <Image source={require('../assets/Chat.png')} style={{ width: 25, height: 25 }} />
            )
        }} />
        </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})
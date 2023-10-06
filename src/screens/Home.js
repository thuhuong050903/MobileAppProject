import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import NearestRestaurant from '../components/NearestRestaurant';
import PopularMenu from '../components/PopularMenu';
export default function Home() {
  return (
    <ImageBackground source={require('../assets/Pattern.png')} style={{flex: 1}}>
      <Header/>
      <SearchBar/>
      <NearestRestaurant/>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({})
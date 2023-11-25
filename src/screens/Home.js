import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/Search/SearchBar';
import NearestRestaurant from '../components/NearestRestaurant';
// import SwipeableBottomPanel from '../components/test/swipeable'

export default function Home() {
  
  return (
    <ScrollView>
    <ImageBackground source={require('../assets/Pattern.png')} style={{flex: 1}}>
      <Header/>
      <SearchBar/>
      <NearestRestaurant/>
    </ImageBackground>
    </ScrollView>
    // <SwipeableBottomPanel/>
  )
}

const styles = StyleSheet.create({})
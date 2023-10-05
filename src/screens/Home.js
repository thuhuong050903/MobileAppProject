import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import PopularMenu from '../components/PopularMenu'
import Header from '../components/Header'
import NearestRestaurant from '../components/NearestRestaurant'
import SearchBar from '../components/SearchBar'
import Data from '../data/db'
import Advertisement from '../components/Advertisement'

export default function Home() {
  const [showNearest, setShowNearest] = useState(true);
  const [showPopular, setShowPopular] = useState(true);

  const nearestRes = Data[0];
  const popMenu = Data [1];
  return (
    <View>
        <Header/>
        <SearchBar/>
        <Advertisement/>
    </View>
  )
}

const styles = StyleSheet.create({})
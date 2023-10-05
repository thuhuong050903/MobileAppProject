import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Advertisement() {
  return (
    <View>
      <Text style={styles.AdvertisementText}>Special Deal For October</Text>
      <Image style= {styles.AdvertisementImage} source={require('../assets/Promo-Advertising.png')}></Image>
    </View>
  )
}

const styles = StyleSheet.create({
    AdvertisementText: {
        position: 'absolute',
        zIndex: 99,
        top: 20
    },
    AdvertisementImage: {
        
    }
})
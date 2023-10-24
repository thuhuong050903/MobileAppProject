import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import BtnSmall from '../components/BtnSmall'

export default function Profile() {
  return (
    <View>
      <View style={styles.imgContainer}>
        <Image style={styles.image} source={require('../assets/PhotoProfile.png')} />
      </View>

      <View>
        <BtnSmall style={styles.btn} title={"Member Gold"}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',},

  imgContainer: {
    padding: 30,
    backgroundColor: 'black'
  
  },
  btn: {
    marginRight: '50%'
  }
})
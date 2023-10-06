import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'

export default function Message() {
  return (
    <View>
      <Text>Message</Text>
      <Image style={styles.icon} source={require('../assets/IconNotification.png')} />

    </View>
  )
}

const styles = StyleSheet.create({
  icon: {
    top: 300
  }
})
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function BtnLarge({onPress, title}) {
  return (
    <View >
      <TouchableOpacity style={styles.btnLarge} onPress={onPress}>
        <Text style={styles.btnTitle}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    btnLarge: {
        backgroundColor: '#6B50F6',
        width: '80%',
        alignSelf: 'center',
        borderRadius: 15,
        marginTop: '30%'
    },
    btnTitle: {
        color: 'white',
        paddingVertical: 20,
        textAlign: 'center',
        fontWeight: '400',


    }
})
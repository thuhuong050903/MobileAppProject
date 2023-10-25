import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function BtnSmall({title}) {
  return (
    <View style={styles.BtnSmall}>
        <Text style= {styles.btnText}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    BtnSmall: {
        backgroundColor: '#00FF661A',
        width: 'auto',
        paddingHorizontal: 20,
        borderRadius: 15
    },
    btnText: {
        color: '#6B50F6',
        fontWeight: '400',
        paddingTop: 14,
        paddingBottom: 14 
}})
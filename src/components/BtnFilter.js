import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function BtnFilter({title}) {
  return (
    <View style={styles.btnFilter}>
      <Text style= {styles.btnText}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    btnFilter: {
        backgroundColor: '#00FF661A',
        width: 'auto',
        paddingHorizontal: 20,
        borderRadius: 15
    },
    btnText: {
        color: '#6B50F6',
        fontWeight: '400',
        paddingTop: 14,
        paddingBottom: 14   }
})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function TotalCard() {
  return (
    <View style={styles.container}>
        <View style={styles.textContainer}>
        <Text style={styles.label}>Sub-total</Text>
        <Text style={styles.price}>120 $</Text>
        </View>
    </View>
  
  )
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      padding: 10, 
    },
    textContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      flex: 1,
    },
    label: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    price: {
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
  
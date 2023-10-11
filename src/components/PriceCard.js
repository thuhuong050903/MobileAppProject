import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const rows = [
  { label: 'Sub-total', price: '120 $' },
  { label: 'Discount', price: '10 $' },
  { label: 'Total', price: '110 $' },
];

export default function PriceCard() {
  return (
    <View style={styles.detailContainer}>
        <ImageBackground source={require('../assets/PriceInfo.png')} style={styles.img}>
            <View >
            {rows.map((row, index) => (
                <View key={index} style={styles.row}>
                <Text style={styles.label}>{row.label}</Text>
                <Text style={styles.price}>{row.price}</Text>
                </View>
            ))}
            </View>
            <View style={styles.rowTotal}>
            <Text style={styles.labelTotal}>Total</Text>
            <Text style={styles.priceTotal}>150 $</Text>
            </View>
    </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  detailContainer: {
    padding: 10,
    backgroundColor: '##6B50F6',
  },
  img: {
    backgroundColor: '#6B50F6',
    
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'

  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'

  },
  rowTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white'

  },
  labelTotal: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'white'

  },
  priceTotal: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'white'
  }
});

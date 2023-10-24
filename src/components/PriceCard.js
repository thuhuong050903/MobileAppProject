import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import BtnOrder from './BtnOrder';

export default function PriceCard({ subtotal, discount, delivery }) {
  const total = subtotal - discount + delivery;
  
  return (
    <View style={styles.detailContainer}>
      <ImageBackground source={require('../assets/PriceInfo.png')} style={styles.img}>
        <View>
          <View style={styles.row}>
            <Text style={styles.label}>Sub-total</Text>
            <Text style={styles.price}>{subtotal}$</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Discount</Text>
            <Text style={styles.price}>{discount}$</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Delivery</Text>
            <Text style={styles.price}>{delivery}$</Text>
          </View>
        </View>
        <View style={styles.rowTotal}>
          <Text style={styles.labelTotal}>Total</Text>
          <Text style={styles.priceTotal}>{total}$</Text>
        </View>
        <BtnOrder />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  detailContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '15%',
    flex: 6
  },
  img: {
    flex: 1,
    padding: '10%'
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

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OrderCard from '../components/OrderCard'
import { Image } from 'react-native'
import PriceCard from '../components/PriceCard'
import BtnOrder from '../components/BtnOrder'
export default function ShoppingCard() {

  return (
    <View style={styles.orderCantainer}>
      <Image source={require('../assets/Group.png')} style={styles.imgBack}></Image>
      <Text style={styles.title}>Order details</Text>
    <OrderCard>
    </OrderCard>
    <PriceCard/>
    
    </View>
    
  )
}

const styles = StyleSheet.create({
    orderCantainer: {
      marginTop: '10%',
    },
    imgBack: {
      marginLeft:'5%'
    },
    title: {
      fontSize: 25,
      fontWeight: '500',
      marginVertical: 10,
      marginLeft: '5%'
    }
})
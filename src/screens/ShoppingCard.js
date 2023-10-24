import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OrderCard from '../components/OrderCard'
import { Image } from 'react-native'
import PriceCard from '../components/PriceCard'
import { useState  } from 'react'
export default function ShoppingCard() {
  const [total, setTotal] = useState(0);

  const handleTotalChange = (newTotal) => {
    setTotal(newTotal);
  };
  return (
    <View style={styles.orderCantainer}>
      <Image source={require('../assets/Group.png')} style={styles.imgBack}></Image>
      <Text style={styles.title}>Order details</Text>
      <OrderCard onTotalChange={handleTotalChange} total={total} />
      <PriceCard subtotal={total} delivery={15} discount={20}/>
    
    </View>
    
  )
}

const styles = StyleSheet.create({
    orderCantainer: {
      marginTop: '10%',
      display: 'flex',
      flexDirection: 'column',
      flex: 1
    },
    imgBack: {
      marginLeft:'5%',
      flex: 1
    },
    title: {
      fontSize: 25,
      fontWeight: '500',
      marginVertical: 10,
      marginLeft: '5%',
      flex: 1

    }
})
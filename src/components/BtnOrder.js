import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function BtnOrder() {
    const navigation = useNavigation();
    
    const handleOrder = () => (
        navigation.navigate('Payment')
    )
  return (
    <TouchableOpacity onPress={handleOrder} style={styles.orderBtn}>
        <Text>Place My Order</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    orderBtn: {
        backgroundColor:'white',
        
    }
})
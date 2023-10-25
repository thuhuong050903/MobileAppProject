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
        <Text style={styles.titleBtn}>Place My Order</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    orderBtn: {
        backgroundColor:'white',
        borderRadius: 15,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems:'center',
        paddingVertical: 20,
        marginTop: 20
    },
    titleBtn : {
        color: '#6B50F6',
        fontSize: 14,
        fontWeight: '500',
        

    }
})
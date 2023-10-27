import { FlatList, StyleSheet, Text, TouchableOpacity, View ,Image} from 'react-native'
import React from 'react'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
export default function PaymentCard() {
    const navigation = useNavigation();

    const handleBackBtn = () => (
        navigation.navigate('Payment')
    )
    const payment  = [
        {
            id: 1,
            image: "https://i.pcmag.com/imagery/reviews/068BjcjwBw0snwHIq0KNo5m-15..v1602794215.png",
            stk: "2121 6352 8465 ****",
        },
        {
            id: 2,
            image: 'https://i.pcmag.com/imagery/reviews/068BjcjwBw0snwHIq0KNo5m-15..v1602794215.png',
            stk: "2121 6352 8465 ****",
        },
        {
            id: 3,
            image: "https://i.pcmag.com/imagery/reviews/068BjcjwBw0snwHIq0KNo5m-15..v1602794215.png",
            stk: "2121 6352 8465 ****",
        },
    ]

    const renderItem = ({ item }) => ( 
        <TouchableOpacity style={styles.PaymentCardContainer}>
            <View style={{flex:1}}></View>
            <Image source={{uri: item.image}} style={styles.Image}/>
            <View style={{flex:2}}></View>
            <Text style={{flex: 9}}>{item.stk}</Text>
        </TouchableOpacity>
    )
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={handleBackBtn}>
        <Image source={require('../assets/Group.png')}></Image>
        </TouchableOpacity>
        <Text style={styles.title}>Payment</Text>
        <FlatList 
        data={payment} 
        renderItem={renderItem}
        keyExtractor={item => item.id}
        />
    </View>
    
  )
}

const styles = StyleSheet.create({
    Image: {
        flex: 6 },

    PaymentCardContainer: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        margin:10,
        paddingVertical:30,
        borderRadius: 20
    },
    title: {
        fontSize: 25,
        fontWeight: '700',
        marginVertical: 10
      }
      , 
    container: {    
        marginHorizontal: '5%',
        marginTop: '10%'
    }
})
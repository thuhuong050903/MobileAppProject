import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DataCart from '../../data/dataCart';

export default FavouriteFood = () => {
    const navigation = useNavigation();

    const Item = ({data}) => (
        <TouchableOpacity style={styles.ItemContainer} onPress={ () => navigation.navigate('detail', {data})}>
            <Image style={styles.image} source={{uri: data.image}}></Image>
            <View style={styles.content}> 
                <Text style={styles.name}>{data.name}</Text>
                <Text style={styles.type}>{data.type}</Text>
                <Text style={styles.price}>${data.price}</Text>
            </View>
            <View style={styles.buyAgain}>
                <Text style= {styles.nameBuy}>Buy again</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <ScrollView style={styles.container}>
            {DataCart().map((itemFavourite) => (
                <Item data={itemFavourite} key={itemFavourite.id} />
            ))}
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    ItemContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 15,
        backgroundColor: '#fff',
        padding: 10,
        display: 'flex',
        borderRadius: 10,
        minHeight: 100
      },
      content: {
        alignItems: 'left',
        justifyContent: 'center',
        marginLeft: 15,
        width: '60%',
        flex: 4
      },
      name: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      type: {
        fontSize: 12,
      },
      price: {
        fontSize: 24,
        color: 'blue',
        fontWeight: 'bold',
      },
      image: {
        flex: 2,
        borderRadius: 14
      },
      buyAgain: {
        justifyContent: 'center', 
        alignItems: 'center',
        flex: 2,
        backgroundColor: 'blue',
        width: 50,
        height: 40,
        borderRadius: 15,
      },
      nameBuy: {
        color: "#fff",
        fontWeight: 'bold',
        textAlign: 'center',
      }
})

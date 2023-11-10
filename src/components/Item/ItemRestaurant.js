import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default ItemRestaurant = (props) => {
    const navigation = useNavigation();
    const {data} = props;
    return (
        <TouchableOpacity style={styles.itemShow} onPress={ () => navigation.navigate('bottomSheet', {data})}>
            <Image style={styles.imageItem} source={{uri: data.image}} />
            <Text style={styles.name}>{data.name}</Text>
            <Text style={styles.minutes}>{data.minutes} minutes</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    itemShow: {
        margin: 10,
        backgroundColor: '#fff',
        height: 'auto',
        alignSelf: 'center',
        alignItems: 'center',
        padding: 15,
        width: '45%',
        borderRadius: 15,
        marginBottom: 10,
    },
    name: {
        textAlign: "center",
        minWidth: 130,
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 5,
    },
    imageItem: {
        width: 96,
        height: 73,
        marginBottom: 10
    },
})

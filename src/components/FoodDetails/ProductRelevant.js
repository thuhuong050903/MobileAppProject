import React from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import DataProduct from '../../data/dataProduct';
import { useNavigation } from '@react-navigation/core';

export default function ProductRelevant() {
    const navigation = useNavigation();
    const dataProduct = DataProduct();

    const ProductRelevant = ({ data }) => (
        <TouchableOpacity style={styles.itemShow} onPress={() => navigation.navigate('detail', { data })}>
            <Image style={styles.imageItem} source={{ uri: data.image }} />
            <Text style={styles.name}>{data.name}</Text>
            <Text style={styles.minutes}>{data.price} $</Text>
        </TouchableOpacity>
    );

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
            {dataProduct.map((data) => (
                <ProductRelevant data={data} key={data.id} />
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 10,
    },
    itemShow: {
        backgroundColor: '#fff',
        alignSelf: 'center',
        alignItems: 'center',
        padding: 10,
        margin: 10,
        minHeight: 100,
        borderRadius: 15,
        borderColor: '#F4F4F4',
        shadowColor: '#5A6CEA',
        shadowOffset: {
            width: 12,
            height: 26,
        },
        shadowRadius: 50,
        shadowOpacity: 0.07,
        elevation: 3,
    },
    name: {
        textAlign: 'center',
        minWidth: 130,
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 5,
    },
    imageItem: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
});

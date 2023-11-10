import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from "react-native";

const BtnAddCart = (props) => {
    const {data} = props ;
    const onPressHandle = async () => {
        const jsonData = {
            name: data.name,
            subname: data.subname,
            quantity: data.quantity,
            price: data.price,
            image: data.image,
            type: data.type
        };
        try {
            const response = await fetch('https://6410c403da042ca131fb737e.mockapi.io/Cart', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(jsonData),
            });
            if (response.status === 201) {
                Alert.alert('Success','Add to cart successfully!');
            }
            else {
                Alert.alert('Error','Add to cart fail!');
            }
        } catch (error) {
            console.log('Error', error);
        }
    }
    return (
        <View style={styles.viewButton}>
            <TouchableOpacity style={styles.btnAdd} onPress={onPressHandle}>
                <Text style={styles.btnTextAdd}>+ Add To Cart</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    viewButton: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      btnAdd: {
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems:'center',
        width: 300,
        borderRadius: 15,
        marginBottom: 10,
      },
      btnTextAdd: {
        padding: 20,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
      }
})

export default BtnAddCart;
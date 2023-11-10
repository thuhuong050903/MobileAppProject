import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default ItemProduct = (props) => {
    const navigation = useNavigation();
    const {data} = props;
    return (
        <TouchableOpacity style={styles.ItemContainer} onPress={ () => navigation.navigate('detail', {data})}>
            <Image style={styles.image} source={{uri: data.image}}></Image>
            <View style={styles.content}> 
                <Text style={styles.name}>{data.name}</Text>
                <Text style={styles.type}>{data.type}</Text>
            </View>
            <View style={{justifyContent: 'center', flex: 2}}>
                <Text style={styles.price}>${data.price}</Text>
            </View>
        </TouchableOpacity>
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
      }
})

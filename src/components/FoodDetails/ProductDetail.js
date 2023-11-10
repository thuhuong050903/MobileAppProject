import React, { Component } from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default ProductDetail = (props) => {
    const {data} = props;
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.nameProduct}>{data.name}</Text>
            </View>
            <View style={styles.icon}>
                <View style={styles.subicon}>
                    <Image source={require('../../assets/icons/Icon-map-pin.png')} />
                    <Text style={styles.iconInfo}>{data.distant} km</Text>
                </View>
                <View style={styles.subicon}>
                    <Image source={require('../../assets/icons/IconStar.png')} />
                    <Text style={styles.iconInfo}>4.8 Rating</Text>
                </View>
            </View>
            <View style={styles.description}>
                <Text style={styles.des}>
                    Nulla occaecat velit laborum exercitation ullamco. Elit labore eu aute elit nostrud culpa velit excepteur deserunt sunt. 
                    Velit non est cillum consequat cupidatat ex Lorem laboris labore aliqua ad duis eu laborum. Strowberry Cream wheat Nulla 
                    occaecat velit laborum exercitation ullamco. Elit labore eu aute elit nostrud culpa velit excepteur deserunt sunt.
                </Text>
                <View style={{flexDirection: 'row', marginBottom: 10}}>
                    <Text>Strowberry</Text>
                </View>
                <View style={{flexDirection: 'row', marginBottom: 10}}>
                    <Text>Cream</Text>
                </View>
                <View style={{flexDirection: 'row', marginBottom: 10}}>
                    <Text>wheat</Text>
                </View>
                <Text style={styles.des}>
                    Nulla occaecat velit laborum exercitation ullamco. Elit labore eu aute elit nostrud culpa velit excepteur deserunt sunt.
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        marginHorizontal: 25,
        backgroundColor: '#fff',
    },
    title: {
        marginBottom: 20,
        marginTop: 10,
    },
    nameProduct: {
        fontSize: 34,
        fontWeight: 'bold',
    },
    icon: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '60%',
    },
    subicon: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconInfo: {
        color: '#22242E',
        fontSize: 14,
        marginLeft: 8,
    },
    description: {
        marginTop: 20,
    },
    des: {
        color: '#22242E',
        fontSize: 14,
        fontStyle: 'normal',
        marginBottom: 20,
    }
})
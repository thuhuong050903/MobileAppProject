import React, { Component, useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Dimensions,
    FlatList
} from 'react-native';
import PopularMenu from './PopularMenu';

export default function NearestRestaurant() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const respone = await fetch('https://6471cfab6a9370d5a41ab469.mockapi.io/restaurant', {method: "GET"});
                const data = await respone.json();
                setData(data);
            }
            catch{
                console.error('Error');
            }
        }
        fetchData();
    }, [])

    const [showAllRestaurant, setShowAllRestaurant] = useState(false);

    const Item = ({data}) =>  (
        <View style={styles.itemShow}>
            <Image style={styles.imageItem} source={{uri: data.image}} />
            <Text style={styles.name}>{data.name}</Text>
            <Text style={styles.minutes}>{data.minutes} minutes</Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.ViewContent}>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/Promo-Advertising.png')}
                    resizeMode="cover"
                    style={[styles.image, { borderRadius: 15 }]}
                    />
                    <Text style={styles.titleAd}>Special Deal for October</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textBtn}>Buy now</Text>
                    </TouchableOpacity>
            </View>
            <View style={styles.titleRestaurant}>
                    <Text style={styles.titleName}>Nearest Restaurant</Text>
                    <TouchableOpacity onPress={() => setShowAllRestaurant(!showAllRestaurant)}>
                        {showAllRestaurant ?
                            <Text style={styles.viewMore} >Hide less</Text> :
                            <Text style={styles.viewMore} >View more</Text>
                        }
                    </TouchableOpacity>
            </View>
            <View style={styles.FlatList}>
                <FlatList
                    data={showAllRestaurant ? data : data.slice(0, 2)}
                    renderItem={({ item }) => <Item data={item} />}
                    keyExtractor={item => item.id}
                    numColumns={2}
                    contentContainerStyle={styles.item}
                />
            </View>
            <PopularMenu />
        </SafeAreaView>
    );
}
 
const styles = StyleSheet.create({

    ViewContent: {
        flex: 1,
        marginHorizontal: 25,
        paddingTop: StatusBar.currentHeight,
    },
    
    image: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 200,
        width: '100%'
    },
    imageContainer: {
        flex: 1, 
    },
    titleAd: {
        color: '#fff',
        fontSize: 17,
        textAlign: 'left',
        fontWeight: 'bold',
        width: '50%',
        position: 'absolute',
        top: '20%',
        left: "55%"
    },
    button: {
        marginTop: 10,
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 19,
        alignItems: 'center',
        borderRadius: 6,
        position: 'absolute',
        top: '45%',
        left: "55%"
    },
    textBtn:{
        fontSize: 14,
        color: '#6B50F6',
        alignSelf: 'center'
    },
    titleRestaurant: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
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
    titleName: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#22242E',
    },
    viewMore: {
        color: 'blue',
        fontSize: 15,
    },
    item: {
        flex: 1,
        flexDirection: 'column',
    },
    FlatList: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flex: 1,
        // height: Dimensions.get('window').width / 2,
    },
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
});
import React, { Component, useState } from 'react';
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
import Data from '../data/db';
import PopularMenu from './PopularMenu';

export default function NearestRestaurant() {
    const data = Data;
    const [showAllRestaurant, setShowAllRestaurant] = useState(false);
    const [showAllMenu, setShowAllMenu] = useState(false);

    const Item = ({ data }) => (
        <View style={styles.itemShow}>
            <Image style={styles.imageItem} source={data.image} />
            <Text style={styles.name}>{data.name}</Text>
            <Text style={styles.minutes}>{data.minutes} minutes</Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.ViewContent}>
            <ScrollView style={styles.scrollView}>
                <ImageBackground source={require('../assets/Promo-Advertising.png')} resizeMode="cover" style={styles.image}>
                    <View style={{ flex: 1 }}></View>
                    <View style={{ flex: 1, marginLeft: 30 }}>
                        <Text style={styles.titleAd}>Special Deal for October</Text>
                        <TouchableOpacity style={styles.button}>
                            <Text>Buy now</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
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
            </ScrollView>
        </SafeAreaView>
    );
}
 
const styles = StyleSheet.create({

    ViewContent: {
        flex: 1,
        // backgroundColor: 'lightgray',
        paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        marginHorizontal: 10,
    },
    image: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 200,
    },
    titleAd: {
        color: '#fff',
        fontSize: 24,
        textAlign: 'left',
        fontWeight: 'bold',
    },
    button: {
        marginTop: 10,
        backgroundColor: '#fff',
        padding: 15,
        width: 130,
        alignItems: 'center',
        borderRadius: 20,
    },
    titleRestaurant: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
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
        width: 100,
        height: 100,
        objectFit: 'cover',
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
        alignItems: 'center',
        padding: 10,
        borderRadius: 15,
        marginBottom: 10,
    },
});
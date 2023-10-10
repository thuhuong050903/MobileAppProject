
import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Find Your Favorite Food </Text>
            <View style={styles.iconContainer}>
                <Image style={styles.icon} source={require('../assets/Vector.png')} />
            </View>

        </View>

    );
}

export default Header;

const styles = StyleSheet.create({
    container: {
        marginTop: 60,
        flexDirection: "row",
        marginLeft: 25,
        gap: 38
    },

    title: {
        color: "#22242E",
        fontSize: 31,
        width: '60%',
    },

    icon: {
        display: 'flex',
        backgroundColor: 'white',

    },
    iconContainer: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        marginLeft: '10%',
        alignSelf: 'center'
    }

});
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Find Your Favorite Food </Text>
            <Icon style={styles.icon} name="bell" size={25} color={'#6B50F6'}  />
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    container: {
        marginTop: 60,
        marginLeft: 0,
        flexDirection: "row",
        flex: 0.3,
        gap:15
    },

    title: {
        color: "#22242E",
        fontSize: 31,
        // marginLeft: -15,
        width: 250,
    },

    icon: {
        marginTop:25,
    }

});
import { View, Text, StyleSheet, Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.search}>
                <Icon style={styles.icon} name="search" size={25} color={'#6B50F6'} />
                <Text style={styles.title}>What do you want to order?</Text>
            </View>
            <View style={styles.btn}>
                <Image
                    source={require('../assets/Filter.png')} 
                    style={styles.icon} 
                />
            </View>
        </View>
    );
}

export default SearchBar;

const styles = StyleSheet.create({
    container: {
        bottom: 450,
        flex: 4,
        gap: 10,
        maxHeight: 60,
        flexDirection: "row",
    },

    search: {
        borderRadius: 15,
        backgroundColor: "#999",
        width: 240,
        gap: 10,
        flexDirection: "row",
        opacity: 0.6 ,
    },

    btn: {
        backgroundColor: "#999",
        width: 60,
        borderRadius: 15,
        opacity: 0.6,
    },

    title: {
        maxHeight: 60,
        padding: 20,
        fontSize: 12,
        color: "#6B50F6",
    },

    icon: {
        opacity: 1.0 ,
        left: 18,
        top: 18
    }


});
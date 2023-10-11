import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import React, { useState } from 'react';
import { TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';


const SearchBar = () => {
    const navigation = useNavigation();

    const handleFilterPress = () => {
        navigation.navigate('Filter');
      };
    
    const [inputText, setInputText] = useState('');
    return (
        <View style={styles.container}>
            <View style={styles.search}>
                <Image
                    source={require('../assets/IconSearch.png')}
                    style={styles.icon}
                />
                <TextInput
                    style={styles.title} 
                    placeholder="What do you want to order?" 
                    value={inputText}
                    onChangeText={text => setInputText(text)} 
                />

            </View>
            <TouchableOpacity style={styles.btn} onPress={handleFilterPress}>
                <Image
                    source={require('../assets/icons/Filter.png')} 
                    style={styles.icon} 
                />
            </TouchableOpacity>
        </View>
    );
}

export default SearchBar;

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginHorizontal: 25,
        flex: 1,
        gap: 10,
        maxHeight: 60,
        flexDirection: "row",
    },

    search: {
        borderRadius: 15,
        backgroundColor: "#EAE6F9",
        width: '80%',
        flexDirection: "row",
    },

    btn: {
        backgroundColor: "#EAE6F9",
        width: '17%',
        borderRadius: 15,
    },

    title: {
        maxHeight: 60,
        paddingVertical: 20,
        fontSize: 13,
        color: "#6B50F6",
        opacity: 0.6,

    },

    icon: {
        opacity: 1.0,
        alignSelf: 'center',
        marginVertical: 15,
        marginHorizontal: 20
    }

});
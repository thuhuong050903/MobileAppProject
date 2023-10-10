import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import React, { useState } from 'react';

const SearchBar = () => {
    const [inputText, setInputText] = useState('');
    return (
        <View style={styles.container}>
            <View style={styles.search}>
                <Image
                    source={require('../assets/IconSearch.png')}
                    style={styles.icon}
                />
                <TextInput
                    style={styles.title} // Đặt kiểu cho TextInput
                    placeholder="What do you want to order?" // Dòng hướng dẫn
                    value={inputText} // Giá trị nhập văn bản (cần định nghĩa inputText trong state)
                    onChangeText={text => setInputText(text)} // Xử lý sự kiện thay đổi giá trị
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
        marginLeft: 10,
        flex: 1,
        gap: 25,
        maxHeight: 60,
        flexDirection: "row",
    },

    search: {
        borderRadius: 15,
        backgroundColor: "#999",
        minWidth: 255,
        gap: 8,
        flexDirection: "row",
        opacity: 0.6,
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
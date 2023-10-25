import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import React, { useState, useEffect } from 'react';
import { TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';


const SearchBar = () => {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    
    const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://6471cfab6a9370d5a41ab469.mockapi.io/menu',{method: "GET"});
        const data = await response.json();
        setData(data);
      }
      catch{
        console.error('Error');
      }
    }
    fetchData();
  }, [])


    const updateSearch = (text) => {
        setSearch(text);
        if (text === "") {
            setResults([]);
        } else {
            filteredData(text);
        }
    };

    const filteredData = () => {
        const newData = data.filter(item => {
            return item.name.toLowerCase().includes(search.toLowerCase());
        });
        setResults(newData);
    }

    const navigation = useNavigation();

    const handleFilterPress = () => {
        navigation.navigate('Filter');
      };

    return (
        <View style={{flex: 1}}>
            <View style={styles.container}>
                <View style={styles.search}>
                    <Image
                        source={require('../assets/IconSearch.png')}
                        style={styles.icon}
                    />
                    <TextInput
                        style={styles.title} 
                        placeholder="What do you want to order?" 
                        value={search}
                        onChangeText={updateSearch}
                    />

                </View>
                <TouchableOpacity style={styles.btn} onPress={handleFilterPress}>
                    <Image
                        source={require('../assets/icons/Filter.png')} 
                        style={styles.icon} 
                    />
                </TouchableOpacity>
            </View>
            <FlatList
                style={styles.show}
                data={results}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.ItemContainer}>
                        <Image style={styles.image} source={{uri: item.image}} />
                        <View style={styles.content}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.subname}>{item.subname}</Text>
                        </View>
                        <View style={{ justifyContent: 'center' }}>
                            <Text style={styles.price}>${item.price}</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    )
}

export default SearchBar;

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginHorizontal: 25,
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
    },
    show: {
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        borderRadius: 20,
        backgroundColor: 'white',
    },
    ItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },

    image: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    content: {
        flex: 1,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    subname: {
        fontSize: 14,
        color: 'gray',
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'green',
    },

});
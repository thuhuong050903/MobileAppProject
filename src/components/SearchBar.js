import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

const SearchBar = () => {
    const navigation = useNavigation();

  const handleFilterPress = () => {
    navigation.navigate('Filter');
  };

    return (
        <View style={styles.container}>
            <View style={styles.search}>
                <Text style={styles.title}>What do you want to order?</Text>
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
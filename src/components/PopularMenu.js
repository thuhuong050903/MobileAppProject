import { StyleSheet, Text, View, FlatList} from 'react-native'
import React from 'react'
import { Image } from 'react-native';
import popularMenu from '../data/db'

export default function PopularMenu() {
    const renderItem = ({ item }) => (
        <View>
            <Image source={item.image}></Image>
          <Text>{item.name}</Text>
        </View>
      );

      
  return (
    <View style={styles.containerPopularMenu}>
      <Text style={styles.titlePopular}>Popular Menu</Text>
        <FlatList     data={popularMenu}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}>
        
        </FlatList>

    </View>
  )
}

const styles = StyleSheet.create({
    titlePopular: {
        fontWeight: "600",
        fontSize: 20    },
    containerPopularMenu: {
        marginTop: "40%",
        marginLeft: '10%'
    }
})
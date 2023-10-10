import { StyleSheet, Text, View, FlatList} from 'react-native'
import React, { useState } from 'react'
import { Image, TouchableOpacity, } from 'react-native';
import DataMenu from '../data/dbMenu';

export default function PopularMenu() {

  const [showAllMenu, setShowAllMenu] = useState(true);
  const renderItem = ({ item }) => (
    <View style={styles.ItemContainer}>
      <Image style={styles.image} source={item.image}></Image>
      <View style={styles.content}> 
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.type}>{item.type}</Text>
      </View>
      <View style={{justifyContent: 'center'}}>
        <Text style={styles.price}>${item.price}</Text>
      </View>
    </View>
  );
      
  return (
    <View style={styles.containerPopularMenu}>
      <View style={styles.titleRestaurant}>
        <Text style={styles.titleName}>PopularMenu</Text>
        <TouchableOpacity onPress={() => setShowAllMenu(!showAllMenu)}>
          {showAllMenu ? 
            <Text style={styles.viewMore} >View more</Text>:
            <Text style={styles.viewMore} >Hide less</Text>
          }
      </TouchableOpacity>
      </View>
      <FlatList     
        data={showAllMenu ? DataMenu.slice(0,2): DataMenu}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}>
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  titleRestaurant: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  titleName: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#22242E',
  },
  viewMore: {
    color: 'blue',
  },
  ItemContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 15,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
  },
  content: {
    alignItems: 'left',
    justifyContent: 'center',
    marginLeft: 15,
    width: '60%',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  type: {
    fontSize: 12,
  },
  price: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold',
  },
})
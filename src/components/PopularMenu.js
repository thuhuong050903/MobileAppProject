import { StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React, { useEffect, useState } from 'react';
import ItemProduct from './Item/ItemProduct';
import DataProduct from '../data/dataProduct';

export default function PopularMenu() {
  const DataMenu = DataProduct();
  const [showAllMenu, setShowAllMenu] = useState(true);

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
        renderItem={({ item }) => <ItemProduct data={item} />}
        keyExtractor={(item) => item.id.toString()}>
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  titleRestaurant: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  titleName: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#22242E',
  },
  viewMore: {
    color: 'blue',
  }
})
import { StyleSheet, Text, View, FlatList} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Image, TouchableOpacity, } from 'react-native';

export default function PopularMenu() {
  const [DataMenu, setDataMenu] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://6471cfab6a9370d5a41ab469.mockapi.io/menu',{method: "GET"});
        const data = await response.json();
        setDataMenu(data);
      }
      catch{
        console.error('Error');
      }
    }
    fetchData();
  }, [])

  const [showAllMenu, setShowAllMenu] = useState(true);

  const renderItem = ({ item }) => (
    <View style={styles.ItemContainer}>
      <Image style={styles.image} source={{uri: item.image}}></Image>
      <View style={styles.content}> 
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.type}>{item.type}</Text>
      </View>
      <View style={{justifyContent: 'center', flex: 2}}>
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
    marginVertical: 20,
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 15,
    backgroundColor: '#fff',
    padding: 10,
    display: 'flex',
    borderRadius: 10,
    minHeight: 100
  },
  content: {
    alignItems: 'left',
    justifyContent: 'center',
    marginLeft: 15,
    width: '60%',
    flex: 4
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
  image: {
    flex: 2,
    borderRadius: 14
  }
})
import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from 'react-native';
import Data from '../data/db';
import { FlatList } from 'react-native';

export default function NearestRestaurant() {
  const data = Data[0];

  const Item = ({ data }) => (
    <View style={styles.itemShow}>
      <Image style={styles.imageItem} source={{ uri: data.image }} />
      <Text style={styles.name}>{data.name}</Text>
      <Text style={styles.minutes}>{data.minutes} minutes</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.ViewContent}>
      <ImageBackground
        source={require('../assets/Promo-Advertising.png')}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={{ flex: 1 }}></View>
        <View style={{ flex: 1, marginLeft: 30 }}>
          <Text style={styles.titleAd}>Special Deal for October</Text>
          <TouchableOpacity style={styles.button}>
            <Text>Buy now</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={styles.titleRestaurant}>
        <Text style={styles.titleName}>Nearest Restaurant</Text>
        <Text style={styles.viewMore}>View more</Text>
      </View>
      <View style={styles.FlatList}>
        <FlatList
          data={data.items}
          renderItem={({ item }) => <Item data={item} />}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.item}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  ViewContent: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: StatusBar.currentHeight,
  },
  image: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 200,
  },
  titleAd: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  button: {
    marginTop: 10,
    backgroundColor: '#fff',
    padding: 15,
    width: 130,
    alignItems: 'center',
    borderRadius: 20,
  },
  titleRestaurant: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5,
  },
  imageItem: {
    width: 100,
    height: 100,
  },
  titleName: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#22242E',
  },
  viewMore: {
    color: 'blue',
    fontSize: 15,
  },
  item: {
    flex: 1,
    flexDirection: 'column',
  },
  FlatList: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1,
    margin: 5,
  },
  itemShow: {
    margin: 10,
    backgroundColor: '#fff',
    width: 200,
    height: 'auto',
    alignItems: 'center',
    paddingTop: 20,
    borderRadius: 15,
    marginBottom: 10,
  },
});

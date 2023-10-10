import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BtnFilter from '../components/BtnFilter';
import BtnLarge from '../components/BtnLarge';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';


export default function Filter() {
  const filterData = [
    { title: 'Type', options: ['Restaurant', 'Menu'] },
    { title: 'Location', options: ['1 Km', '> 10 Km', '< 10 Km'] },
    { title: 'Food', options: ['Cake', 'Soup', 'Main Course', 'Appetizer', 'Dessert'] },
  ];

  const handleSearch = () => (
    console.log("hiihi")
  )
  return (
    <View style={styles.filterContainer}>
      <Header/>
      <SearchBar/>
      {filterData.map((filterGroup, index) => (
        <View key={index}>
          <Text style={styles.title}>{filterGroup.title}</Text>
          <View style={styles.groupBtn}>
            {filterGroup.options.map((option, optionIndex) => (
              <BtnFilter key={optionIndex} title={option} />
            ))}
          </View>
        </View>
      ))}
      <BtnLarge onPress={handleSearch} title={"Search"}/>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 20,
    marginLeft: '10%',
  },
  groupBtn: {
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
    marginLeft: '10%',
    marginTop: 10,
    flexWrap: 'wrap',
  },
  filterContainer: {
    marginTop: 10,
    flex: 1
  },
});

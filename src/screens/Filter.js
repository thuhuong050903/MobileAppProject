import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Touchable, TouchableOpacity } from 'react-native';
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
  const [data, setData] = useState([]);
  const [KeySearch, setKeySearch] = useState('');
  const [results, setResults] = useState([]);

  useEffect(()=> {
    const getData = async () => {
      try {
        const respone = await fetch('https://6410c403da042ca131fb737e.mockapi.io/Order',{method: 'GET'});
        const data = await respone.json();
        setData(data);
      } catch  {
        console.log('Error');
      }
    }
    getData();
  },[])

  const updateKey = (text) => {
    setKeySearch(text);
    console.log(text);
    fillData();
  }
  const fillData = () => {
    const newData = data[0].KeySearch;
    setResults(newData);
    console.log(newData);
  }
  
  return (
    <View style={styles.filterContainer}>
      <Header/>
      <SearchBar/>
      {filterData.map((filterGroup, index) => (
        <View key={index}>
          <Text style={styles.title}>{filterGroup.title}</Text>
          <View style={styles.groupBtn}>
            {filterGroup.options.map((option, optionIndex) => (
              // <BtnFilter onPress={() => updateKey(title)} key={optionIndex} title={option} />
              <TouchableOpacity style={styles.btnFilter} onPress={() => updateKey(option)} key={optionIndex}>
                <Text style= {styles.btnText}>{option}</Text>
            </TouchableOpacity>
            ))}
          </View>
        </View>
      ))}
      <BtnLarge  title={"Search"}/>

      <FlatList
      data={results}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.resultItem}>
          <Text>{item.name}</Text>
          <Text>jhijehfiber</Text>
        </View>
      )}
    />
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
  resultItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  noResults: {
    marginTop: 10,
    textAlign: 'center',
  },
  btnFilter: {
    backgroundColor: '#00FF661A',
    width: 'auto',
    paddingHorizontal: 20,
    borderRadius: 15
},
btnText: {
    color: '#6B50F6',
    fontWeight: '400',
    paddingTop: 14,
    paddingBottom: 14   }
});

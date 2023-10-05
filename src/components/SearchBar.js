import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

export default function SearchBar() {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', searchText);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="What do you want to order?"
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
      />
      <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
        {/* <Icon name="search" type="font-awesome" color="#333" size={20} /> */}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 40,
    padding: 5,
  },
  searchButton: {
    padding: 10,
  },
});

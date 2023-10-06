import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BtnFilter from './BtnFilter';

export default function Filter() {
  const filterData = [
    { title: 'Type', options: ['Restaurant', 'Menu'] },
    { title: 'Location', options: ['1 Km', '> 10 Km', '< 10 Km'] },
    { title: 'Food', options: ['Cake', 'Soup', 'Main Course', 'Appetizer', 'Dessert'] },
  ];

  return (
    <View style={styles.filterContainer}>
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
  },
});

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import DataMenu from '../data/dbMenu';
import Swipeable from 'react-native-swipeable';

export default function OrderCard({ onTotalChange, total }) {
  const [itemQuantities, setItemQuantities] = useState({});
  const [menuItems, setMenuItems] = useState(DataMenu);

  const decrementQuantity = (itemId) => {
    const currentQuantity = itemQuantities[itemId] || 1;
    const newQuantity = Math.max(1, currentQuantity - 1);
    setItemQuantities({ ...itemQuantities, [itemId]: newQuantity });
  };

  const incrementQuantity = (itemId) => {
    const currentQuantity = itemQuantities[itemId] || 1;
    if (currentQuantity < 10) {
      const newQuantity = currentQuantity + 1;
      setItemQuantities({ ...itemQuantities, [itemId]: newQuantity });
    }
  };

  const handleDeleteItem = (itemId) => {
    const updatedItems = menuItems.filter((item) => item.id !== itemId);
    setMenuItems(updatedItems);
  };


  const calculateTotal = () => {
    let total = 0;
    for (const item of menuItems) {
      total += (item.price * (itemQuantities[item.id] || 1));
    }
    onTotalChange(total);

    return total;
  };
  useEffect(() => {
    const newTotal = calculateTotal();
    onTotalChange(newTotal);
  }, [itemQuantities, menuItems]);

  const renderItem = (item) => (
    <Swipeable
      rightButtons={[
        <TouchableOpacity
          style={{
            backgroundColor: '#6B50F6',
            width: 100,
            minHeight: 100,
            borderRadius: 22,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginVertical: 10,
            justifyContent: 'space-evenly',
          }}
          onPress={() => handleDeleteItem(item.id)}
        >
          <Image
            style={{ tintColor: 'white', width: 30, height: 30 }}
            source={require('../assets/icons/iconDelete.png')}
          />
        </TouchableOpacity>,
      ]}
    >
      <View style={styles.cardContainer}>
        <View style={styles.firstContent}>
          <Image source={item.image} />
          <View style={styles.infor}>
            <Text style={styles.menuTitle}>{item.name}</Text>
            <Text style={styles.menuText}>{item.type}</Text>
            <Text style={styles.price}>$ {item.price}</Text>
          </View>
        </View>
        <View style={styles.calculate}>
          <TouchableOpacity style={styles.btnM} onPress={() => decrementQuantity(item.id)}>
            <Text style={styles.buttonTextM}>-</Text>
          </TouchableOpacity>
          <Text style={styles.number}>{itemQuantities[item.id] || 1}</Text>
          <TouchableOpacity style={styles.btnP} onPress={() => incrementQuantity(item.id)}>
            <Text style={styles.buttonTextP}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Swipeable>
  );

  return (
    <View style={{flex: 8}}>
      {menuItems.map((item) => renderItem(item))}
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 22,
    minHeight: 100,
    display: 'flex',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: '5%',
    justifyContent: 'space-between',
  },
  elevation: {
    elevation: 10,
    shadowColor: '#52006A',
  },
  firstContent: {
    gap: 20,
    marginLeft: 20,
    flexDirection: 'row',
    flex: 7
  },
  infor: {
    flexDirection: 'column',
    gap: 3,
  },
  menuTitle: {
    fontSize: 15,
    fontWeight: '400',
  },
  menuText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#22242E',
    lineHeight: 14,
    letterSpacing: 0.5,
    opacity: 0.3,
  },
  price: {
    fontSize: 19,
    fontWeight: '400',
    color: '#6B50F6',
  },
  calculate: {
    flexDirection: 'row',
    alignSelf: 'center',
    gap: 15,
    flex: 4
  },
  btnM: {
    backgroundColor: 'rgba(107, 80, 246, 0.1)',
    borderRadius: 7,
    width: '16%',
    height: '45%',
  },
  btnP: {
    backgroundColor: '#6B50F6',
    borderRadius: 7,
    width: '16%',
    height: '45%',
  },
  buttonTextM: {
    textAlign: 'center',
    color: '#6B50F6',
    fontSize: 20,
  },
  buttonTextP: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
  },
});

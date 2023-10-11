import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList,  } from 'react-native';
import React,  {useState}from 'react';
import DataMenu from '../data/dbMenu';
export default function OrderCard() {
    const [quantity, setQuantity] = useState(1);

    const decrementQuantity = () => {
      if (quantity > 0) {
        setQuantity(quantity - 1);
      }
    };
  
    const incrementQuantity = () => {
      setQuantity(quantity + 1);
    };

    const renderItem = ({item}) => (
        <View style={[styles.cardContainer, styles.elevation]}>
            <View style={styles.firstContent}>
                <Image source={item.image} />
                <View style={styles.infor}>  
                    <Text style={styles.menuTitle}>{item.name}</Text>
                    <Text style={styles.menuText}>{item.type}</Text>
                    <Text style={styles.price}>$ {item.price}</Text>
                </View>
            </View>
            <View style={styles.calculate}>
                <TouchableOpacity style={styles.btnM} onPress={decrementQuantity}>
                    <Text style={styles.buttonTextM}>-</Text>
                </TouchableOpacity>
                <Text style={styles.number}>{quantity}</Text>
                <TouchableOpacity style={styles.btnP} onPress={incrementQuantity}>
                    <Text style={styles.buttonTextP}>+</Text>
                </TouchableOpacity>
            </View>
    </View>
    )
  return (
    <FlatList 
    data={DataMenu}
    renderItem={renderItem}
    keyExtractor={(item) => item.id.toString()}
    >
    </FlatList>
  );
}

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 22,
        minHeight: 100,
        alignItems: 'center',
        marginVertical: 10,
        justifyContent: 'space-between',
        marginRight: '5%'
    },
    elevation: {
        elevation: 10,
        shadowColor: '#52006A',
      },
      firstContent: {
        gap:20,
        marginLeft:20,
        flexDirection: 'row'
      },
    infor: {
        flexDirection: 'column',
        gap: 3
    },
    menuTitle: {
        fontSize: 15,
        fontWeight: '400'
    },
    menuText: {
        fontSize: 14,
        fontWeight: '400',
        color: '#22242E',
        lineHeight: 14,
        letterSpacing: 0.5,
        opacity: 0.3
    },
    price: {
        fontSize: 19,
        fontWeight: '400',
        color: '#6B50F6'
    },
    calculate: {

        flexDirection: 'row',
        alignSelf: 'center',
        gap: 15,
  
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
        height: '45%',    },

    buttonTextM: {
        textAlign: 'center',
        color: '#6B50F6',
        fontSize: 20,
    },
    buttonTextP: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
    }
});

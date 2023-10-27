import { StyleSheet, Text, View, Image, useWindowDimensions} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/core'
export default function Payment() {
    const navigation = useNavigation();

    const handleBackBtn = () => (
        navigation.navigate('ShoppingCard')
    )
    const handleEdit = () => (
        navigation.navigate('EditPayment')
    )
  return (
    <View style={styles.orderContainer}>
        <TouchableOpacity onPress={handleBackBtn}>
        <Image source={require('../assets/Group.png')}></Image>
        </TouchableOpacity>      
        <Text style={styles.title}>Confirm Order</Text>
      <View style= {styles.subContainer}>
        <View style={styles.firstRow}>
            <Text style={styles.deliveryText}>Delivery to</Text>
            <TouchableOpacity onPress={handleEdit}>
            <Text style={styles.editButton}>Edit</Text>
            </TouchableOpacity>
        </View>
        <View>
            <Image source={require('../assets/icons/IconLocation.png')} style={styles.locationImage} />
            <Text style={styles.locationText}>4517 Washington Ave. Manchester, Kentucky 39495</Text>
        </View>

      </View>
    </View>
  )
}

    const styles = StyleSheet.create({
        orderContainer: {
          marginTop: '10%',
          display: 'flex',
          flexDirection: 'column',
        },

        imgBack: {
          marginLeft: '5%',
        },
        title: {
          fontSize: 25,
          fontWeight: '500',
          marginVertical: 10,
          marginLeft: '5%',
        },
        subContainer: {
            flexDirection:'column'
        },
        
        deliveryText: {
          fontSize: 16,
          fontWeight: 'bold',
        },
        editButton: {
          color: 'blue',
        },
        locationImage: {
          width: 20,
          height: 20,
        },
        locationText: {
          fontSize: 16,
        },
      
})
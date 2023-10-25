import { StyleSheet, Text, View, Image, useWindowDimensions} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/core'
export default function Payment() {
    const navigation = useNavigation();
    const handleEdit = () => (
        navigation.navigate('EditPayment')
    )
  return (
    <View style={styles.orderContainer}>
      <Image source={require('../assets/Group.png')} style={styles.imgBack}></Image>
      <Text style={styles.title}>Confirm Order</Text>
      <View style= {styles.subContainer}>
        <View style={styles.firstRow}>
            <Text style={styles.deliveryText}>Delivery to</Text>
            <TouchableOpacity onPress={handleEdit}>
            <Text style={styles.editButton}>Edit</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.secondRow}>
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
          marginHorizontal: '5%',

        },

        title: {
          fontSize: 25,
          fontWeight: '500',
          marginVertical: 10,
        },
        subContainer: {
            flexDirection:'column',
            backgroundColor: 'white',
            paddingHorizontal: '5%',
            paddingVertical: '2%'
        },
        firstRow: {
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        deliveryText: {
          fontSize: 14,
          color: '#C7C9CF'
        },
        editButton: {
          color: '#6B50F6',
          fontSize: 14
        },
        secondRow: {
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            gap: '10%'
        },
        locationImage: {
          width: 30,
          height: 30,
        },
        locationText: {
          fontSize: 15,
          fontWeight: '500',
        },
      
})
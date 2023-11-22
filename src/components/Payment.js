import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native'; 
import { useNavigation } from '@react-navigation/native';
const image = require('../assets/Bg.png')
const imagebg = require('../assets/Pattern.png')

const Payment = () => {
  const navigation = useNavigation();

  const handleBackBtn = () => (
      navigation.navigate('ShoppingCard')
  )
  const handleEdit = () => (
      navigation.navigate('EditPayment')
  )
    return (
        <View style={StyleSheet.container}>
          <ImageBackground source={image}  style={styles.img}>
            <TouchableOpacity style={styles.icon} onPress={handleBackBtn}>
            <Image source={require('../assets/icons/backbtn.png')} />
            </TouchableOpacity>
            <View style={styles.header}>
                <Text style={styles.confirm}>Cofirm Oder</Text>
            </View>
            <View style={styles.location}>
                <Text style={styles.delivery}>Deliver To</Text>
                  <TouchableOpacity onPress={handleEdit}>
                  <Text style={styles.edit} >Edit</Text>
                  </TouchableOpacity>
                <View style={styles.icon_location}>
                    <Image source={require('../assets/icons/IconLocation.png')}></Image>
                    <Text style={styles.address}>4517 Washington Ave. Manchester,</Text>
                    <Text style={styles.address}>Kentucky 39495</Text>
                </View>
            </View>
            <View style={styles.card}>
                <Text style={styles.delivery}>Payment Method</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Payment')}>
                  <Text style={styles.edit} >Edit</Text>
                  </TouchableOpacity>
                <View style={styles.icon_location}>
                    <Image source={require('../assets/icons/PayoneerLogo.png')}></Image>
                    <Text style={styles.seri}>2121 6352 8465 ****</Text>
                </View>
            </View>
            <View style={styles.checkout}>
                <ImageBackground source={imagebg} resizeMode='cover' style={styles.imagebg}></ImageBackground>
                <Text style={styles.sub}>Sub - Total</Text>
                <Text style={styles.price_one}>120 $</Text>
                <Text style={styles.charge}>Delivery Charge</Text>
                <Text style={styles.price_two}>10 $</Text>
                <Text style={styles.discount}>Discount</Text>
                <Text style={styles.price_three}>20 $</Text>
                <Text style={styles.total}>Total</Text>
                <Text style={styles.Total_price}>150 $</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.plOrder}>Place My Order</Text>
                </TouchableOpacity>
            </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 20
    },
    img: {
        width: '100%',
        height: '100%',
      },
    imagebg: {
        width: 390,
        height: '100%',
        },
    icon: {
      marginLeft:'7%',
      marginTop: '10%'
      },
      confirm: {
        fontSize: 25,
        fontWeight: '700'
      },
      header: {
       marginLeft: '7%',
       marginTop: '2%'
      
      },
      location: {
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
      },
      delivery: {
       color: 'gray'
      },
      edit: {
        color:'#6B50F6'
      },
      icon_location: {
        
      },
      address: {
        
      },
      seri: {
       
      },
      card: {
        
      },
      checkout: {
        
      },
      sub: {
       
      },
      price_one: {
       
      },
      price_two: {
       
      },
      price_three: {
        
      },
      charge: {
        
      },
      discount: {
        
      },
      total: {
       
      },
      Total_price: {
       
      },
      plOrder: {
      

      },
      button: {
     
      },
});

export default Payment;
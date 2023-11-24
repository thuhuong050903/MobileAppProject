import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function EditLocation() {
    return (
        <View style={styles.container}>
          <ImageBackground source={require('../assets/Bg.png')} style={styles.img}>
            <TouchableOpacity style={styles.icon} onPress={handleNavigation('ShoppingCard')}>
              <Image source={require('../assets/icons/backbtn.png')} />
            </TouchableOpacity>
            <View style={styles.header}>
              <Text style={styles.confirm}>Confirm Order</Text>
            </View>
    
            {renderSection('Deliver To', 'Edit', 'IconLocation.png', '4517 Washington Ave. Manchester, Kentucky 39495')}
            {renderSection('Payment Method', 'Edit', 'PayoneerLogo.png', '2121 6352 8465 ****')}
          </ImageBackground>
        </View>
      );
  
}

const styles = StyleSheet.create({})
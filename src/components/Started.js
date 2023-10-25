import { StyleSheet,
    ImageBackground, 
    Image,
    Text, 
    View,
    TextInput,
    TouchableOpacity,
   } from 'react-native'
  import React from 'react'
  import { useNavigation } from '@react-navigation/native';
  
  export default function Profile() {
    const navigation = useNavigation();
    return (
      <ImageBackground source={require('../assets/Profiles/background-signup.png')} style={styles.imageBackground}>
        <View style={{flex: 3}}>
          
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>DIDFOOD is Where Your Comfort Food Live</Text>
          <Text style={styles.subtitle}>Ejoy a fat and smooth food delivery at your doorstep</Text>
          <TouchableOpacity style={styles.btnNext} onPress={() => {navigation.navigate('Login')}}>
            <Text style={styles.btnText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    )
  }
  
  const styles = StyleSheet.create({
    imageBackground: {
      flex: 1,
    },
    content: {
      flex: 2,
      alignItems: 'center',
    },
    title: {
      fontWeight: 'bold',
      fontSize: 33,
      textAlign: 'center',
      color: '#22242E',
    },
    subtitle: {
      marginTop: 30,
      fontSize: 14,
      color: '#22242E',
    },
    btnNext: {
      marginTop: 40,
      backgroundColor: '#6B50F6',
      width: 157,
      padding: 20,
      alignItems: 'center',
      borderRadius: 15,
    },
    btnText: {
      fontWeight: 'bold',
      fontSize: 16,
      color: '#fff'
    },
  })
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
  
  export default function FormInfo() {
    const navigation = useNavigation();
    return (
      <ImageBackground source={require('../assets/Profiles/background-profiles.png')} style={styles.imageBackground}>
        <View style={styles.content}>
          <Text style={styles.title}>Fill in your bio to get started</Text>
          <Text style={styles.subtitle}>This data will be displayed in your account profile for security</Text>
        </View>
        <View style={styles.textInput}>
            <TextInput
                style={styles.input} 
                placeholder="First Name" 
            />
            <TextInput
                style={styles.input} 
                placeholder="Last Name" 
            />
            <TextInput
                style={styles.input} 
                placeholder="Mobile phone" 
            />
        </View>
        <View style={styles.bottom}>
            <TouchableOpacity style={styles.btnNext} onPress={() => {navigation.navigate('Signup')}}>
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
      flex: 1,
      alignItems: 'flex-start',
      marginTop: 100,
      marginLeft: 20,
      width: '70%'
    },
    title: {
      fontWeight: 'bold',
      fontSize: 33,
      color: '#22242E',
    },
    subtitle: {
      marginTop: 20,
      marginBottom: 20,
      fontSize: 16,
      color: '#22242E',
    },
    btnNext: {
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
    textInput: {
        flex: 2,
        margin: 20,
      },
      input: {
        marginBottom: 30,
        maxHeight: 60,
        paddingVertical: 20,
        fontSize: 15,
        color: "#000",
        paddingLeft: 40,
        borderWidth: 0.5,
        borderRadius: 15,
        borderColor: '#F4F4F4',
        backgroundColor: '#FFF',
        shadowColor: '#5A6CEA',
        shadowOffset: {
            width: 12,
            height: 26,
          },
        shadowRadius: 50,
        shadowOpacity: 0.07,
        elevation: 3,
      },
      bottom: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
      },
  })
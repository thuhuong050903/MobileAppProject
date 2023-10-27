import React, { useEffect, useState } from 'react';
import { StyleSheet,
    ImageBackground, 
    Image,
    Text, 
    View,
    TextInput,
    TouchableOpacity,
    Alert,
   } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native';
  
export default function LoginForm() {
    const navigation = useNavigation();
    const [users, setUser] = useState([]);

    useEffect(() => {
        const getUser =  async () => {
            try {
                const data = await fetch('https://6410c403da042ca131fb737e.mockapi.io/users', {method: 'GET'});
                const user = await data.json();
                setUser(user);
            }
            catch {
                console.error('Error');
            }
        }
        getUser();
    },[])

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
          Alert.alert('Success', 'Đăng nhập thành công', [
            {
              text: 'OK',
              onPress: () => {
                navigation.navigate('Home');
              },
            },
          ]);
        } else {
          Alert.alert('Error', 'Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.');
        }
    };

    return (
      <ImageBackground source={require('../assets/Profiles/background-profiles.png')} style={styles.imageBackground}>
        <View style={styles.image}>
          <Image source={require('../assets/Profiles/DIDFOOD.png')}></Image>
        </View>
        <View style={styles.form}>
          <Text style={styles.tittle}>Login To Your Account</Text>
          <View style={styles.textInput}>
            <TextInput
                style={styles.input} 
                placeholder="Email" 
                onChangeText={text => setEmail(text)}
                value={email}
            />
            <TextInput
                style={styles.input} 
                placeholder="Password" 
                onChangeText={text => setPassword(text)}
                value={password}
            />
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </View>
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.orContinue}>Or Continue With </Text>
          <View style={styles.social}>
            <TouchableOpacity style={styles.socialButton}>
              <Image source={require('../assets/Profiles/google-icon.png')} style={styles.icon}></Image>
              <Text style={styles.socialButtonText}>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Image source={require('../assets/Profiles/facebook-icon.png')} style={styles.icon}></Image>
              <Text style={styles.socialButtonText}>Google</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.newAccount} onPress={() => navigation.navigate('FormInfo')}>Don't have an account ?</Text>
          <View style={styles.btn}>
            <TouchableOpacity style={styles.btnLogin}  onPress={handleLogin}>
              <Text style={styles.textbtn}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    )
  }
  
  const styles = StyleSheet.create({
    imageBackground :  {
      flex: 1,
    },
    image: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    tittle: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign:'center',
    },
    form: {
      flex: 2,
      marginTop: 20,
      marginHorizontal: 20,
    },
    textInput: {
      margin: 20,
    },
    input: {
      marginTop: 20,
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
    orContinue: {
      textAlign:'center',
      fontWeight: 'bold',
      fontSize: 16,
      marginTop: -20,
    },
    social: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 20,
      marginBottom: 20,
      marginLeft: 30,
      marginRight: 30,
    },
    socialButton: {
      flex: 1,
      flexDirection:'row',
      justifyContent:'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: 10,
      borderWidth: 0.5,
      borderRadius: 15,    
      margin: 10,
    },
    socialButtonText: {
      color: '#000',
      paddingLeft: 10,
    },
    btn: {
      marginTop: 20,
      alignItems: 'center',
    },
    btnLogin: {
      alignItems: 'center',
      backgroundColor: 'blue',
      padding: 15,
      width: 150,
      borderRadius: 15,
    },
    textbtn: {
      fontWeight: 'bold',
      fontSize: 20,
      color: '#fff'
    },
    newAccount: {
      color: 'blue',
      textAlign:'center',
      fontSize: 15,
      textDecorationLine: 'underline',
    },
    forgotPassword: {
        padding: 10,
        color: 'blue',
        fontWeight:'bold',
    },
  })
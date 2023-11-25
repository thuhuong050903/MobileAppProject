import React, { useState } from 'react';
import { Formik } from 'formik';
import { SignupSchema } from './Validate';
import { StyleSheet,
    ImageBackground, 
    Image,
    Text, 
    View,
    TextInput,
    TouchableOpacity,
    Alert,
   } from 'react-native';
   import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

  export default function SignupForm() {
    const navigation = useNavigation();

    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);

    const handleSignup = async (userData) => {
      const dataInfo = JSON.parse(AsyncStorage.getItem('inforCustomer'));
      let user = {
        firstname: dataInfo.firstname,
        lastname: dataInfo.lastname,
        phone: dataInfo.phone,
        email: userData.email,
        password: userData.password
      }
      try {
        const response = await fetch('https://6410c403da042ca131fb737e.mockapi.io/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        });

        if (response.status === 201) {
          Alert.alert('Success', 'Đăng kí thành công! Đăng nhập ngay', [
            {
              text: 'OK',
              onPress: () => {
                navigation.navigate('Login');
              },
            },
          ]);
        } else {
          Alert.alert('Error', 'Đăng ký thất bại. Vui lòng kiểm tra lại thông tin.');
        }
      } catch (error) {
        console.error('Lỗi:', error);
      }
    };

    const toggleCheckbox1 = () => {
        setIsChecked1(!isChecked1);
    };

    const toggleCheckbox2 = () => {
        setIsChecked2(!isChecked2);
    };

    return (
      <ImageBackground source={require('../../assets/Profiles/background-profiles.png')} style={styles.imageBackground}>
        <View style={styles.image}>
          <Image source={require('../../assets/Profiles/DIDFOOD.png')}></Image>
        </View>
        <Formik
            initialValues={{
              fullName: "",
              email: "",
              password: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                handleSignup(JSON.stringify(values));
              }, 400);
            }}
          >
            {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
       }) => (
        <View style={styles.form}>
          <Text style={styles.tittle}>Sign Up For Free</Text>
            <View style={styles.textInput}>
              <TextInput
                  style={styles.input} 
                  name="fullName"
                  placeholder="Full Name"
                  value={values.fullName}
                  onChangeText={handleChange('fullName')}
                  onBlur={handleBlur('fullName')}
              />
              {errors.fullName && touched.fullName ? (
                <Text style={{color: 'red'}}>* {errors.fullName}</Text>
              ) : null}
              <TextInput
                  style={styles.input} 
                  placeholder="Email" 
                  type="email"
                  name="email"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
              />
              {errors.email && touched.email ? (
                <Text style={{color: 'red'}}>* {errors.email}</Text>
              ) : null}
              <TextInput
                  style={styles.input} 
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
              />
              {errors.password && touched.password ? (
                <Text style={{color: 'red'}}>* {errors.password}</Text>
              ) : null}
            </View>
          <View style={styles.container}>
            <View style={styles.group}>
                <TouchableOpacity
                    style={[styles.checkbox, isChecked1 ? styles.checked : styles.unchecked]}
                    onPress={toggleCheckbox1}
                >
                    {isChecked1 && (
                    <Text style={styles.checkmark}>&#10003;</Text> // Biểu tượng checkmark (✔)
                    )}
                </TouchableOpacity>
                <Text style={styles.nameCheckbox}>Keep Me Signed In</Text>
            </View>
            <View style={styles.group}>
                <TouchableOpacity
                    style={[styles.checkbox, isChecked2 ? styles.checked : styles.unchecked]}
                    onPress={toggleCheckbox2}
                >
                    {isChecked2 && (
                    <Text style={styles.checkmark}>&#10003;</Text> // Biểu tượng checkmark (✔)
                    )}
                </TouchableOpacity>
                <Text style={styles.nameCheckbox}>Email Me About SpecialPricing</Text>
            </View>
          </View>
          <View style={{flex: 1}}>
            <View style={styles.btn}>
              <TouchableOpacity style={styles.btnLogin}>
                <Text style={styles.textbtn} onPress={handleSubmit}>Create Account</Text>
              </TouchableOpacity>
              <Text style={styles.hyperlink} onPress={() => {navigation.navigate('Login')}}>Already have an account ?</Text>
            </View>
          </View>
        </View>
        )}
        </Formik>
        
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
      flex: 3,
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
      width: 180,
      borderRadius: 15,
    },
    textbtn: {
      fontWeight: 'bold',
      fontSize: 20,
      color: '#fff'
    },
    forgotPassword: {
      color: 'blue',
      textAlign:'center',
    },

    container: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: 20,
      },
      group: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
      },
      checkbox: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
      },
      checked: {
        backgroundColor: '#007AFF', 
      },
      unchecked: {
        backgroundColor: '#FFF',
      },
      checkmark: {
        color: '#FFF', 
        fontSize: 18,
      },
      nameCheckbox: {
        marginLeft: 10,
        color: '#22242E',
        fontSize: 14,
    },
    hyperlink: {
        marginTop:10,
        fontWeight: 'bold',
        fontSize: 14,
        color: 'blue',
        textDecorationLine: 'underline',
    },
})
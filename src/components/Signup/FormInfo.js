import { StyleSheet,
    ImageBackground, 
    Image,
    Text, 
    View,
    TextInput,
    TouchableOpacity,
   } from 'react-native'
import React from 'react';
import { Formik } from 'formik';
import { SignupSchema } from './Validate';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
  
  export default function FormInfo() {
    const navigation = useNavigation();

    const handleNext = (values) => {
      if (values) {
        Alert.alert('Success', 'Thông tin đã được lưu', [
          {
            text: 'Tiếp tục',
            onPress: () => {
              navigation.navigate('Signup');
            },
          },
        ]);
      } else {
        Alert.alert('Error', 'Đã có lỗi xảy ra, vui lòng thử lại!');
      }
    }
    return (
      <ImageBackground source={require('../../assets/Profiles/background-profiles.png')} style={styles.imageBackground}>
        <View style={styles.content}>
          <Text style={styles.title}>Fill in your bio to get started</Text>
          <Text style={styles.subtitle}>This data will be displayed in your account profile for security</Text>
        </View>
        <Formik
            initialValues={{
              firstname: "",
              lastname: "",
              phone: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, { setSubmitting }) => {
              // try {
                AsyncStorage.setItem('inforCustomer', JSON.stringify(values));
                handleNext(values);
              // } catch (error) {
              //   console.error('Lỗi AsyncStorage:', error);
              // }
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
        <View style={styles.textInput}>
            <TextInput
                style={styles.input} 
                placeholder="First Name" 
                name="firstname"
                value={values.firstname}
                onChangeText={handleChange('firstname')}
                onBlur={handleBlur('firstname')}
            />
            {errors.firstname && touched.firstname ? (
                <Text style={{color: 'red'}}>* {errors.firstname}</Text>
              ) : null}
            <TextInput
                style={styles.input} 
                placeholder="Last Name" 
                name="lastname"
                value={values.lastname}
                onChangeText={handleChange('lastname')}
                onBlur={handleBlur('lastname')}
            />
            {errors.lastname && touched.lastname ? (
                <Text style={{color: 'red'}}>* {errors.lastname}</Text>
              ) : null}
            <TextInput
                style={styles.input} 
                keyboardType='number'
                placeholder="Mobile phone" 
                name="phone"
                value={values.phone}
                onChangeText={handleChange('phone')}
                onBlur={handleBlur('phone')}
            />
            {errors.phone && touched.phone ? (
                <Text style={{color: 'red'}}>* {errors.phone}</Text>
              ) : null}
            <View style={styles.bottom}>
              <TouchableOpacity style={styles.btnNext} onPress={handleSubmit}>
                  <Text style={styles.btnText}>Next</Text>
              </TouchableOpacity>
            </View>
        </View>
       )}
       </Formik>
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
        flex: 2.5,
        margin: 20,
      },
      input: {
        marginTop: 20,
        marginBottom: 10,
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
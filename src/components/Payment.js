import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Payment = () => {
  const navigation = useNavigation();

  const handleNavigation = (screen) => () => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/Bg.png')} style={styles.img}>
        <TouchableOpacity style={styles.icon} onPress={handleNavigation('ShoppingCard')}>
          <Image source={require('../assets/icons/backbtn.png')} />
        </TouchableOpacity>
        <View style={styles.header}>
          <Text style={styles.confirm}>Confirm Order</Text>
        </View>

        {renderSection('Deliver To', 'Edit', 'IconLocation.png', '4517 Washington Ave. Manchester, Kentucky 39495','editLocation')}
        {renderSection('Payment Method', 'Edit', 'PayoneerLogo.png', '2121 6352 8465 ****', 'EditPayment')}
      </ImageBackground>
    </View>
  );

  function renderSection(title, editLabel, iconSource, content,navigation) {
    return (
      <View style={styles.section}>
        <View style={styles.sectionTop}>
          <Text style={styles.delivery}>{title}</Text>
          <TouchableOpacity onPress={handleNavigation({navigation})}>
            <Text style={styles.edit}>{editLabel}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.iconContent}>
          <Image source={require(`../assets/icons/${iconSource}`)} />
          <Text style={styles.content}>{content}</Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  icon: {
    marginLeft: '7%',
    marginTop: '10%',
  },
  confirm: {
    fontSize: 25,
    fontWeight: '700',
    marginLeft: '7%',
    marginTop: '2%',
  },
  header: {
    marginLeft: '7%',
    marginTop: '2%',
  },
  section: {
    width: '90%',
    backgroundColor: '#ffffff',
    elevation: 5,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 20,
    marginTop: 20,
  },
  sectionTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  delivery: {
    color: 'gray',
  },
  edit: {
    color: '#6B50F6',
  },
  iconContent: {
    flexDirection: 'row',
    gap: 20,
  },
  content: {
    flex: 3,
  },
});

export default Payment;

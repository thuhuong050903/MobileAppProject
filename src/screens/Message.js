import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import React from 'react'

export default function Message() {
  return (
    <ImageBackground source={require('../assets/Pattern.png')} style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.icon}>
          <Image style={styles.vector} source={require('../assets/Back.png')} ></Image>
        </View>
        <Text style={styles.chat}>Chat</Text>

        <View style={styles.container_notification}>
          <View style={styles.notification}>
            <View style={styles.protofile}>
              <Image style={styles.vector} source={require('../assets/Profile_Louis.png')}></Image>
            </View>
            <View style={styles.information}>
              <Text style={styles.name}>Louis Kelly</Text>
              <Text style={styles.status}>Your Order Just Arrived!</Text>
            </View>
            <Text style={styles.time}>20:00</Text>
          </View>

          <View style={styles.notification}>
            <View style={styles.protofile}>
              <Image style={styles.vector} source={require('../assets/PaulKoch.png')}></Image>
            </View>

            <View style={styles.information}>
              <Text style={styles.name}>Paul Koch</Text>
              <Text style={styles.status}>Your Order Just Arrived!</Text>
            </View>
            
            <Text style={styles.time}>20:00</Text>
          </View>

          <View style={styles.notification}>
            <View style={styles.protofile}>
              <Image style={styles.vector} source={require('../assets/CarlaKlein.png')}></Image>
            </View>
            <View style={styles.information}>
              <Text style={styles.name}>Carla Klein</Text>
              <Text style={styles.status}>Your Order Just Arrived!</Text>
            </View>
            <Text style={styles.time}>20:00</Text>
          </View>
        </View>


      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    color: "#22242E",
  },
  icon: {
    borderRadius: 15,
    marginLeft: 15,
    marginTop: 30,
    backgroundColor: "#6B50F6",
    opacity: 0.1,
    height: 45,
    maxWidth: 45,
    justifyContent: "center", // Để căn giữa theo chiều dọc
    alignItems: "center", // Để căn giữa theo chiều ngang
  },
  vector: {

  },
  chat: {
    marginLeft: 15,
    marginTop: 20,
    fontSize: 25,
    fontFamily: "BentonSans Bold"
  },

  container_notification: {
    marginTop: 20,
    gap: 20,
  },

  notification: {
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 22,
    gap: 20,
    flexDirection: "row",

  },

  information: {
    gap: 8,
    justifyContent: "center",
  },
  name: {
    fontSize: 15,
  },
  status: {
    fontSize: 14,
    opacity: 0.5
  },

  time: {
    fontSize: 14,
    opacity: 0.5,
    right: 30,
  }
})
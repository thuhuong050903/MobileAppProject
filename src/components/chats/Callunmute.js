import React from 'react';
import { StyleSheet,ImageBackground,Image,Text, View } from 'react-native'
const Callunmute = () => {
    return (
        <ImageBackground source={require('../../assets/bgChat.png')} style={{ flex: 1 }}>
            <View style={styles.container}>
                <Image style={styles.imgchat} source={require('../../assets/ImageChat.png')} ></Image>
                <View style={styles.text}>
                    <Text style={styles.name}>Richard Lewis</Text>
                    <Text style={styles.status}>Loading...</Text>
                </View>
                <Image style={styles.imgchat} source={require('../../assets/ImageChat.png')} ></Image>
                <View style={styles.btn}>
                    <View style={styles.speakericon}>
                        
                    </View>
                     <Image style={styles.Volumeup} source={require('../../assets/CloseIcon.png')} ></Image>
                </View>
            </View>
        </ImageBackground>
    );
};

export default Callunmute;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: "center",
        justifyContent:"center"
    },
    imgchat:{
        marginBottom:50,
    },
    name: {
        color: "#22242E",
        fontSize: 25,
        fontFamily: "BentonSans Bold",
        marginBottom:20
    },
    status: {
        textAlign:"center",
        fontSize: 19,
        opacity: 0.3,
        marginBottom:150
    },

    btn: {
        gap:50,
       flexDirection:"row" 
    },

    speakericon: {
        backgroundColor:"#6B50F6",
        width: 78,
        height: 78,
        opacity: 0.1,
        borderRadius:50
    }

})
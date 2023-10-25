import { StyleSheet, Text, View, ImageBackground, Image, TextInput, Dimensions, Platform } from 'react-native'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const { height } = Dimensions.get('window');

export default function Message() {
    return (
        <KeyboardAwareScrollView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ImageBackground source={require('../assets/bgChat.png')} style={{ flex: 1 }}>
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
                                <Text style={styles.status}>
                                    <Text style={styles.rectangle}></Text>Online</Text>
                            </View>

                            <Image style={styles.call} source={require('../assets/CallLogo.png')}></Image>
                        </View>

                    </View>

                    <View style={styles.content}>
                        <Text style={styles.user} >Just to order</Text>
                        <Text style={styles.admin} >Okay, for what level of spiciness?</Text>
                        <Text style={styles.user} >Okay, wait a minute 👍</Text>
                        <Text style={styles.admin} >Okay I'm waiting  👍</Text>
                    </View>

                    <View style={styles.form_text}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Okay I'm waiting  👍"
                        // Các thuộc tính khác của TextInput
                        />
                        <Image style={styles.send} source={require('../assets/IconSend.png')}></Image>
                    </View>
                </View>
            </ImageBackground>
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: height,
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
        justifyContent: "space-between"
    },

    information: {
        right: 40,
        gap: 8,
        justifyContent: "center",
    },
    rectangle: {
        width: 10,
        height: 10,
        backgroundColor: "#6B50F6",
    },
    name: {
        fontSize: 15,
    },
    status: {
        fontSize: 14,
        opacity: 0.5
    },

    content: {
        marginTop: 10,
        flex: 1,
    },
    user: {
        alignSelf: "flex-start",
        marginTop: 20,
        maxWidth: 210,
        paddingTop: 12,
        paddingRight: 29,
        paddingBottom: 15,
        paddingLeft: 12,
        backgroundColor: "#F6F6F6",
        borderRadius: 13,
        fontSize: 14,
    },

    admin: {
        marginTop: 20,
        right: 0,
        alignSelf: "flex-end",
        maxWidth: 284,
        paddingTop: 12,
        paddingRight: 29,
        paddingBottom: 15,
        paddingLeft: 12,
        color: "#fff",
        backgroundColor: "#6B50F6",
        borderRadius: 13,
        fontSize: 14,
    },

    form_text: {
        bottom: 0,
        width: '100%',
        justifyContent: "space-between",
        paddingTop: 20,
        paddingRight: 29,
        paddingBottom: 20,
        paddingLeft: 12,
        flexDirection: "row",
        backgroundColor: "#F6F6F6",
        borderRadius: 22,
        alignItems: "center",
        paddingVertical: 12, // Khoảng cách dọc ở hai bên
    },

})
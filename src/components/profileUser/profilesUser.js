import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useRef, useState, useEffect } from "react";
import {
  Animated,
  PanResponder,
  Platform,
  StyleSheet,
  Dimensions,
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  Image,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import FavouriteFood from '../Item/FavouriteFood';

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("window");
const BOTTOM_SHEET_MAX_HEIGHT = WINDOW_HEIGHT * 0.96;
const BOTTOM_SHEET_MIN_HEIGHT = WINDOW_HEIGHT * 0.65;
const MAX_UPWARD_TRANSLATE_Y =
BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT;
const MAX_DOWNWARD_TRANSLATE_Y = 0;
const DRAG_THRESHOLD = 50;

const ProfilesUser = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        const getUser = async () => {
            try {
                const userString = await AsyncStorage.getItem('user');

                if (userString) {
                    const userObject = JSON.parse(userString);
                    setUser(userObject);
                    console.log(userObject);
                } else {
                    console.log('Không tìm thấy người dùng trong AsyncStorage');
                }
            } catch (error) {
                console.log(error);
            }
        }
        getUser();
    },[])

  const animatedValue = useRef(new Animated.Value(0)).current;
  const lastGestureDy = useRef(0);
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        animatedValue.setOffset(lastGestureDy.current);
      },
      onPanResponderMove: (e, gesture) => {
        animatedValue.setValue(gesture.dy);
      },
      onPanResponderRelease: (e, gesture) => {
        animatedValue.flattenOffset();
        lastGestureDy.current += gesture.dy;

        if (gesture.dy > 0) {
          // dragging down
          if (gesture.dy <= DRAG_THRESHOLD) {
            springAnimation("up");
          } else {
            springAnimation("down");
          }
        } else {
          // dragging up
          if (gesture.dy >= -DRAG_THRESHOLD) {
            springAnimation("down");
          } else {
            springAnimation("up");
          }
        }
      },
    })
  ).current;

  const springAnimation = (direction) => {
    console.log("direction", direction);
    lastGestureDy.current =
      direction === "down" ? MAX_DOWNWARD_TRANSLATE_Y : MAX_UPWARD_TRANSLATE_Y;
Animated.spring(animatedValue, {
      toValue: lastGestureDy.current,
      useNativeDriver: true,
    }).start();
  };

  const bottomSheetAnimation = {
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [MAX_UPWARD_TRANSLATE_Y, MAX_DOWNWARD_TRANSLATE_Y],
          outputRange: [MAX_UPWARD_TRANSLATE_Y, MAX_DOWNWARD_TRANSLATE_Y],
          extrapolate: "clamp",
        }),
      },
    ],
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={{uri: 'https://i.pinimg.com/736x/24/21/85/242185eaef43192fc3f9646932fe3b46.jpg'}} style={styles.imageBackground} resizeMode="cover"/>
      <Animated.View style={[styles.bottomSheet, bottomSheetAnimation]}>
        <ScrollView>
          <View style={styles.draggableArea} {...panResponder.panHandlers}>
            <View style={styles.dragHandle} />
          </View>
          <View style={styles.btnPopular}>
            <Text style={styles.btnPopularText}>Member Gold</Text>
          </View>
          <View style={styles.user}>
            <View style={styles.userInfo}>
                <Text style={styles.name}>{user.name}</Text>
                <Text style={styles.email}>{user.email}</Text>
            </View>
            <View style={styles.voucher}>
                <Image source={require('../../assets/icons/Voucher-Icon.png')}></Image>
                <Text style={{fontSize: 16, fontWeight: 'bold', marginLeft: 30,}}>You have 3 voucher</Text>
            </View>
          </View>
          {/* <ProductDetail data={data}/> */}
          <Text style={{marginHorizontal: 20, fontSize: 16, fontWeight: 'bold'}}>Favourite food</Text>
          <FavouriteFood />
        </ScrollView>
      </Animated.View>      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomSheet: {
    position: "absolute",
    width: "100%",
    height: BOTTOM_SHEET_MAX_HEIGHT,
    
    bottom: BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT,
    ...Platform.select({
      android: { elevation: 3 },
      ios: {
        shadowColor: "#a8bed2",
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowOffset: {
          width: 2,
          height: 2,
        },
      },
    }),
    backgroundColor: "#fff",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  draggableArea: {
    width: 132,
    height: 32,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  dragHandle: {
    width: 100,
    height: 6,
    backgroundColor: "#d3d3d3",
    borderRadius: 10,
  },
  imageBackground: {
    width: "100%",
    height: "65%",
    object: 'fit',
  },
  btnPopular: {
    marginHorizontal: 20,
    paddingVertical: 8,
    width: 120,
    backgroundColor: "#e6fff0",
    borderRadius: 23,
    textAlign: "center",
    alignItems: "center",
  },
  btnPopularText: {
    color: "#6B50F6",
    fontWeight: "500",
  },
  user: {
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  voucher: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginTop: 20,
    // marginBottom: 20,
    // marginLeft: 10,
    padding: 10,
    margin: 20,
    minWidth: 300,
    minHeight: 40,
    backgroundColor: '#fff',
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 15,
        borderColor: '#F4F4F4',
        shadowColor: '#5A6CEA',
        shadowOffset: {
            width: 12,
            height: 26,
        },
        shadowRadius: 50,
        shadowOpacity: 0.07,
        elevation: 3,
  }
});

export default ProfilesUser;

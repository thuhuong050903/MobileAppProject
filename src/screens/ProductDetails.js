import React, { useRef } from "react";
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
} from "react-native";
import ProductDetail from "../components/FoodDetails/ProductDetail";
import ProductRelevant from "../components/FoodDetails/ProductRelevant";
import BtnAddCart from "../components/Item/btnAddCart";
import ItemComment from "../components/Item/commentRestaurant";
import { ScrollView } from "react-native-gesture-handler";

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("window");
const BOTTOM_SHEET_MAX_HEIGHT = WINDOW_HEIGHT * 0.96;
const BOTTOM_SHEET_MIN_HEIGHT = WINDOW_HEIGHT * 0.65;
const MAX_UPWARD_TRANSLATE_Y =
BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT;
const MAX_DOWNWARD_TRANSLATE_Y = 0;
const DRAG_THRESHOLD = 50;

const Details = ({route}) => {
  const {data} = route.params;
  console.log(data.comment);
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
      <ImageBackground source={{uri: data.image}} style={styles.imageBackground} resizeMode="cover"/>
      <Animated.View style={[styles.bottomSheet, bottomSheetAnimation]}>
        <ScrollView>
          <View style={styles.draggableArea} {...panResponder.panHandlers}>
            <View style={styles.dragHandle} />
          </View>
          <View style={styles.btnPopular}>
            <Text style={styles.btnPopularText}>Popular</Text>
          </View>
          <ProductDetail data={data}/>
          <Text style={{marginHorizontal: 20, fontSize: 16, fontWeight: 'bold'}}>Food Relevant</Text>
          <ProductRelevant data={data} />
          <Text style={{marginHorizontal: 20, marginBottom: 10, fontSize: 16, fontWeight: 'bold'}}>Comment</Text>
          <ItemComment data={data.comment}/>
        </ScrollView>
      </Animated.View>
      <BtnAddCart data={data}/>
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
});

export default Details;
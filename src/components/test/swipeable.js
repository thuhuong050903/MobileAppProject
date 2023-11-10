import React, { useRef } from 'react';
import { View, Text, Animated } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';

function SwipeableBottomPanel() {
  const translateY = useRef(new Animated.Value(0)).current;

  const onGestureEvent = Animated.event([{ nativeEvent: { translationY: translateY } }], {
    useNativeDriver: false,
  });

  const onHandlerStateChange = ({ nativeEvent }) => {
    if (nativeEvent.oldState === 4) {
      // Panel has been released, you can handle this event here.
    }
  };

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent} onHandlerStateChange={onHandlerStateChange}>
      <Animated.View
        style={{
          flex: 1,
          backgroundColor: 'black',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          transform: [{ translateY }],
        }}
      >
        <Text>Swipeable Bottom Panel Content</Text>
      </Animated.View>
    </PanGestureHandler>
  );
}

export default SwipeableBottomPanel;

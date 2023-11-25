import { useState } from 'react';
import { StyleSheet } from 'react-native';
import Navigation from './src/navigator/Navigation';
import { createStackNavigator } from '@react-navigation/stack';
import Filter from './src/screens/Filter';
import { NavigationContainer } from '@react-navigation/native';
import Chatmessage from './src/components/chats/Chatmessage'
import PaymentCard from './src/components/Cart/PaymentCard';
import Callunmute from './src/components/chats/Callunmute';
import Payment from './src/components/Cart/Payment';
import BottomSheet from './src/components/BottomSheet';
import Details from './src/screens/ProductDetails';
import Message from './src/screens/Message';

import LoginForm from './src/components/Login/LoginForm';
import Started from './src/components/Signup/Started';
import SignupForm from './src/components/Signup/SignupForm';
import FormInfo from './src/components/Signup/FormInfo';

const Stack = createStackNavigator();

export default function App() {
    const [chatData, setChatData] = useState({
      messages: [],
    });
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="MainStack"
          component={Navigation}
          initialParams={{ chatData }}
        />
        {/* <Stack.Screen name="MainStack" component={Navigation} /> */}
        <Stack.Screen name="Filter" component={Filter} />
        <Stack.Screen name="ChatMessage" component={Chatmessage} />
        <Stack.Screen name="EditPayment" component={PaymentCard} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="Call" component={Callunmute} />
        <Stack.Screen name="Back" component={Chatmessage} />
        <Stack.Screen name="Chatback" component={Message} />
        <Stack.Screen name="bottomSheet" component={BottomSheet} />
        <Stack.Screen name="detail" component={Details} />

        {/* Đăng nhập */}
        <Stack.Screen name="Start" component={Started} />
        <Stack.Screen name="Login" component={LoginForm} />
        <Stack.Screen name="Signup" component={SignupForm}/>
        <Stack.Screen name="FormInfo" component={FormInfo}/>
        
     </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

import { useState } from 'react';
import { StyleSheet } from 'react-native';
import Navigation from './src/navigator/Navigation';
import { createStackNavigator } from '@react-navigation/stack';
import Filter from './src/screens/Filter';
import Message from './src/screens/Message';
import { NavigationContainer } from '@react-navigation/native';
import Chatmessage from './src/components/Chatmessage'
import PaymentCard from './src/components/PaymentCard';
import Callunmute from './src/components/chats/Callunmute';
import Payment from './src/components/Payment';
import BottomSheet from './src/components/BottomSheet';
import Details from './src/screens/ProductDetails';
import EditLocation from './src/components/EditLocation';

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

        <Stack.Screen name="Filter" component={Filter} />
        <Stack.Screen name="ChatMessage" component={Chatmessage} />
        <Stack.Screen name="EditPayment" component={PaymentCard} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="Call" component={Callunmute} />
        <Stack.Screen name="Back" component={Chatmessage} />
        <Stack.Screen name="Chatback" component={Message} />
        <Stack.Screen name="bottomSheet" component={BottomSheet} />
        <Stack.Screen name="detail" component={Details} />
        <Stack.Screen name="editLocation" component={EditLocation} />

     </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

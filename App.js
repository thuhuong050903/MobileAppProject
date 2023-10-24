import { StyleSheet } from 'react-native';
import Navigation from './src/navigator/Navigation';
import { createStackNavigator } from '@react-navigation/stack';
import Filter from './src/screens/Filter';
import { NavigationContainer } from '@react-navigation/native';
import Chatmessage from './src/components/Chatmessage'
const Stack = createStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="MainStack" component={Navigation} />
        <Stack.Screen name="Filter" component={Filter} />
        <Stack.Screen name="ChatMessage" component={Chatmessage} />
      </Stack.Navigator>
  </NavigationContainer>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

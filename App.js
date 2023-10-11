import { StyleSheet } from 'react-native';
import Navigation from './src/navigator/Navigation';
import { createStackNavigator } from '@react-navigation/stack';
import Filter from './src/screens/Filter';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="MainStack" component={Navigation} />
        <Stack.Screen name="Filter" component={Filter} />
      </Stack.Navigator>
  </NavigationContainer>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

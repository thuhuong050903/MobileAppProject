import { createStackNavigator } from '@react-navigation/stack';
import LoginForm from '../components/LoginForm';
import Started from '../components/Started';
import SignupForm from '../components/SignupForm';
import FormInfo from '../components/FormInfo';

const Stack = createStackNavigator();

export default function Profile() {
  return (
    <Stack.Navigator initialRouteName="Start"  screenOptions={{headerShown: false}}>
      <Stack.Screen name="Start" component={Started} />
      <Stack.Screen name="Login" component={LoginForm} />
      <Stack.Screen name="Signup" component={SignupForm}/>
      <Stack.Screen name="FormInfo" component={FormInfo}/>
    </Stack.Navigator>
  );
}


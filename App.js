import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NearestRestaurant from './src/components/NearestRestaurant';

export default function App() {
  return (
    <View style={styles.container}>
      <NearestRestaurant />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

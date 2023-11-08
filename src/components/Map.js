import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as FileSystem from 'expo-file-system';
import { shareAsync } from 'expo-sharing';


let locationsOfInterest = [
  {
    title: "Ha Noi",
    location: {
      latitude: 21.0278,
      longitude: 105.8342
    },
    description: "Ha Noi"
  },
  {
    title: "Da Nang",
    location: {
      latitude: 16.0545,
      longitude: 108.0717
    },
    description: "Da Nang"
  }
]

const mapJson = [
  {
    "featureType": "water",
    "stylers": [
      {
        "color": "#3f94ee"
      }
    ]
  }
]

export default function Map() {
  const [count, setCount] = useState(0);
  const [draggableMarkerCoord, setDraggableMarkerCoord] = useState({
    longitude: 106.6297,
    latitude: 10.8231
  });
  const mapRef = useRef();

  const onRegionChange = (region) => {
    console.log(region);
  };

  const showLocationsOfInterest = () => {
    return locationsOfInterest.map((item, index) => {
      return (
        <Marker 
          key={index}
          coordinate={item.location}
          title={item.title}
          description={item.description}
        />
      )
    });
  };

  const takeSnapshotAndShare = async () => {
    const snapshot = await mapRef.current.takeSnapshot({ width: 300, height: 300, result: 'base64'});
    const uri = FileSystem.documentDirectory + "snapshot.png";
    await FileSystem.writeAsStringAsync(uri, snapshot, { encoding: FileSystem.EncodingType.Base64 });
    await shareAsync(uri);
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        ref={mapRef} 
        style={styles.map}
        onRegionChange={onRegionChange}
        initialRegion={{
          latitude: 16.0545,
          latitudeDelta: 21.0278,
          longitude:108.0717,
          longitudeDelta: 105.8342,
        }}
        customMapStyle={mapJson}
      >
        {showLocationsOfInterest()}
        <Marker 
          draggable
          pinColor='#000'
          coordinate={draggableMarkerCoord}
          onDragEnd={(e) => setDraggableMarkerCoord(e.nativeEvent.coordinate)}
        />
        <Marker
          pinColor='#000'
          coordinate={{ latitude: 10.8231, longitude: 106.6297}}
        >
          <Callout>
            <Text>Count: {count}</Text>
            <Button title='Increment Count' onPress={() => setCount(count + 1)} />
            <Button title='Take Snapshot and Share' onPress={takeSnapshotAndShare} />
          </Callout>
        </Marker>
        <Text style={styles.mapOverlay}>Longitude: {draggableMarkerCoord.longitude}, latitude: {draggableMarkerCoord.latitude}</Text>
      </MapView>
      <StatusBar style="auto" />
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
  map: {
    width:'100%',
    height: '100%'
  },
  mapOverlay: {
    position: "absolute",
    bottom: 50,
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderRadius: 5,
    padding: 16,
    left: "25%",
    width: "50%",
    textAlign: "center"
  }
});
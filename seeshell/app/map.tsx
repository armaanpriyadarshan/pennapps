import { StyleSheet, View } from 'react-native';
import { MapView, Marker } from 'react-native-maps';
import mapStyle from './mapStyle.json';

const Map = () => {
  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map} 
        customMapStyle={mapStyle} 
        region={{
          latitude: 43,
          longitude: -72,
          latitudeDelta: 10,
          longitudeDelta: 10
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default Map;
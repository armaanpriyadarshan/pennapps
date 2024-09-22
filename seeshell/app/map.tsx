import { StyleSheet, View, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import BeachMarker from '../components/BeachMarker';
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
        }}>
        <BeachMarker
          badge={require('../assets/images/badges/1.png')}
          name='Cape Cod National Seashore'
          latitude={41.6688}
          longitude={-70.2962}
          description='Cape Cod National Seashore offers 40 miles of stunning sandy beaches, marshes, and scenic trails, showcasing diverse wildlife and rich cultural history. Visitors can explore lighthouses, enjoy recreational activities, and immerse themselves in the natural beauty of this protected coastal area.'
        />
        <BeachMarker
          badge={require('../assets/images/badges/2.png')}
          name='Fire Island National Seashore'
          latitude={40.6868}
          longitude={-72.9987}
          description='Fire Island National Seashore is a barrier island that stretches 26 miles along the Atlantic Ocean. The park offers a variety of recreational activities, including swimming, fishing, and hiking. Visitors can explore the island’s diverse ecosystems, historic sites, and scenic beaches.'
        />
        <BeachMarker
          badge={require('../assets/images/badges/3.png')}
          name='Sandy Hook Beach'
          latitude={40.4333}
          longitude={-73.9885}
          description='Sandy Hook Beach is a popular destination for swimming, sunbathing, and picnicking. The beach offers stunning views of the New York City skyline and the Atlantic Ocean. Visitors can explore historic lighthouses, nature trails, and wildlife habitats.'
        />
        <BeachMarker
          badge={require('../assets/images/badges/4.png')}
          name='Cape May'
          latitude={38.9351}
          longitude={-74.9060}
          description='Cape May is a charming seaside town known for its historic Victorian architecture, pristine beaches, and vibrant arts scene. Visitors can explore the town’s historic sites, enjoy outdoor activities, and sample fresh seafood at local restaurants.'
        />
        <BeachMarker
          badge={require('../assets/images/badges/5.png')}
          name='Rehoboth Beach'
          latitude={38.7209}
          longitude={-75.0760 }
          description='Rehoboth Beach is a popular seaside resort town known for its beautiful beaches, lively boardwalk, and vibrant arts community. Visitors can enjoy swimming, sunbathing, and water sports, as well as shopping, dining, and entertainment options.'
        />
        <BeachMarker
          badge={require('../assets/images/badges/6.png')}
          name='Narragansett Town Beach'
          latitude={41.4354}
          longitude={-71.4558 }
          description='Narragansett Town Beach is a popular destination for swimming, sunbathing, and surfing. The beach offers stunning views of the Atlantic Ocean and the historic Narragansett Pier. Visitors can enjoy a variety of recreational activities, as well as explore nearby shops, restaurants, and attractions.'
        />
        <BeachMarker
          badge={require('../assets/images/badges/7.png')}
          name='Old Orchard Beach'
          latitude={43.5178}
          longitude={-70.3773}
          description='Old Orchard Beach is a classic New England beach town known for its sandy beaches, lively boardwalk, and family-friendly attractions. Visitors can enjoy swimming, sunbathing, and water sports, as well as shopping, dining, and entertainment options.'
        />
        <BeachMarker
          badge={require('../assets/images/badges/8.png')}
          name='Hampton Beach'
          latitude={42.932}
          longitude={-70.7981}
          description='Hampton Beach is a popular seaside resort town known for its sandy beaches, lively boardwalk, and family-friendly attractions. Visitors can enjoy swimming, sunbathing, and water sports, as well as shopping, dining, and entertainment options.'
        />
      </MapView>
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
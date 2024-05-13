import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default ({ onLongPress, points }) => {
  return (
    <MapView style={styles.map} onLongPress={onLongPress}>
      {points.map((x) => (
        <Marker key={x.name} coordinate={x.coordinate} title={x.name} />
      ))}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: Dimensions.get('window').height - 150,
    width: Dimensions.get('window').width,
  },
});

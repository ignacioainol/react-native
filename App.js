import { useEffect } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import * as Location from 'expo-location';
import MapView from 'react-native-maps';
import Constants from 'expo-constants';

export default function App() {
  const searchLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      return Alert.alert(
        'No tenemos los permisos necesarios para acceder a la location'
      );
    }
    const location = await Location.getCurrentPositionAsync({});
    console.log(location);
  };

  useEffect(() => {
    searchLocation();
  });

  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  container: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

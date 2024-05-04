import { StyleSheet, View } from 'react-native';
import { Map, Modal, Panel } from './components';
import { useState } from 'react';

export default function App() {
  const [points, setPoints] = useState([]);
  const handleLongPress = ({ nativeEvent }) => {
    const newPoints = points.concat({ coordinate: nativeEvent.coordinate });
    setPoints(newPoints);
  };

  console.log(points);

  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress} />
      <Panel />
      <Modal />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

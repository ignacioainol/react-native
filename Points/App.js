import { Button, StyleSheet, Text, View } from 'react-native';
import { Map, Modal, Panel, Input } from './components';
import { useState } from 'react';

export default function App() {
  const [points, setPoints] = useState([]);
  const [pointTemp, setPointTemp] = useState({});
  const [name, setName] = useState('');
  const [visibility, setVisibility] = useState(false);

  const handleLongPress = ({ nativeEvent }) => {
    setPointTemp(nativeEvent.coordinate);
    setVisibility(true);
  };

  const handleChangeText = (text) => {
    setName(text);
  };

  const handleSubmit = () => {
    const newPoint = { coordinate: pointTemp, nombre: name };
    setPoints(points.concat(newPoint));
    setVisibility(false);
    setName('');
  };

  console.log(points);

  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress} />
      <Panel />
      <Modal visibility={visibility}>
        <Input
          title="Nombre"
          placeholder="Point Name"
          onChange={handleChangeText}
        />
        <Button title="Aceptar" onPress={handleSubmit}></Button>
      </Modal>
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

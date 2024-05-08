import { Button, StyleSheet, Text, View } from 'react-native';
import { Map, Modal, Panel, Input, List } from './components';
import { Fragment, useState } from 'react';

export default function App() {
  const [points, setPoints] = useState([]);
  const [pointTemp, setPointTemp] = useState({});
  const [name, setName] = useState('');
  const [visibilityFilter, setVisibilityFilter] = useState('new_punto');
  const [visibility, setVisibility] = useState(false);

  const handleLongPress = (e) => {
    e.persist();
    setVisibilityFilter('new_punto');
    setPointTemp(e.nativeEvent.coordinate);
    setVisibility(true);
  };

  const handleChangeText = (text) => {
    setName(text);
  };

  const handleSubmit = () => {
    const newPoint = { coordinate: pointTemp, name };
    setPoints(points.concat(newPoint));
    setVisibility(false);
    setName('');
  };

  const handleList = () => {
    setVisibilityFilter('show_list');
    setVisibility(true);
  };

  console.log(points);

  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress} />
      <Panel onPressLeft={handleList} textLeft="Lista" />
      <Modal visibility={visibility}>
        {visibilityFilter === 'new_punto' ? (
          <Fragment>
            <Input
              title="Nombre"
              placeholder="Point Name"
              onChangeText={handleChangeText}
            />
            <Button title="Aceptar" onPress={handleSubmit}></Button>
          </Fragment>
        ) : (
          <List puntos={points}></List>
        )}
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

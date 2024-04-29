import { useState } from 'react';
import { StyleSheet, View, Text, Button, Modal, Alert } from 'react-native';

const createDialog = () =>
  Alert.alert(
    'Titulo',
    'Subtitle o message',
    [
      {
        text: 'Cancelar',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'Aceptar',
        onPress: () => console.log('Button pressed'),
      },
    ],
    {
      cancelable: false,
    }
  );

export default function App() {
  const [modal, setModal] = useState(false);

  return (
    <View style={styles.container}>
      <Button title="Open Dialog" onPress={createDialog}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

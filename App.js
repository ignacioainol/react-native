import { useState } from 'react';
import { StyleSheet, View, Text, Button, Modal } from 'react-native';

export default function App() {
  const [modal, setModal] = useState(false);

  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={false} visible={modal}>
        <View style={styles.center}>
          <View style={styles.content}>
            <Text>I am a Modal</Text>
            <Button title="Close Modal" onPress={() => setModal(!modal)} />
          </View>
        </View>
      </Modal>
      <Text>I am not a modal</Text>
      <Text>I am not a modal</Text>
      <Text>I am not a modal</Text>
      <Text>I am not a modal</Text>
      <Text>I am not a modal</Text>
      <Text>I am not a modal</Text>
      <Text>I am not a modal</Text>
      <Text>I am not a modal</Text>
      <Button title="Open Modal" onPress={() => setModal(!modal)} />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#eee',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 25,
  },
  center: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  container: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

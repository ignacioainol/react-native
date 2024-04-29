
import { useState } from 'react';
import { StyleSheet, View,Text, Button, Modal } from 'react-native';

export default function App() {

  const [modal, setModal] = useState(false)

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={ modal}
      >
        <View style={styles.center}>
          <View style={styles.content}>
            <Text>I am a Modal</Text>
            <Button title="Close Modal" onPress={ () => setModal(!modal)  } />
          </View>
        </View>
      </Modal>
      <Button title="Open Modal" onPress={ () => setModal(!modal) } />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {

  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

import { useEffect, useState } from 'react';
import { Button, Dimensions, StyleSheet, Text, View } from 'react-native';
import { Camera } from 'expo-camera';

export default function App() {
  const [permisos, setPermisos] = useState(null);
  const [typeCamera, setTypeCamera] = useState(Camera.Constants.Type.front);

  const getPermisos = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setPermisos(status == 'granted');
    console.log(status);
  };

  useEffect(() => {
    getPermisos();
  }, []);

  if (permisos === null) {
    return (
      <View>
        <Text>Esperando Permisos ... </Text>
      </View>
    );
  }

  if (permisos === false) {
    return (
      <View>
        <Text>No tenemos acceso a la camara </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={typeCamera}>
        <Button
          style={styles.button}
          title="Voltear"
          onPress={() => {
            const { front, back } = Camera.Constants.Type;
            const newType = typeCamera === back ? front : back;
            setTypeCamera(newType);
          }}
        />
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  camera: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
  container: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flex: 2,
    width: 10,
  },
});


import { StyleSheet, View, ImageBackground,Text } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.photo}
        source={{ uri: 'https://as1.ftcdn.net/v2/jpg/01/34/53/74/1000_F_134537443_VendrqyXIWyHrZgxdIsfyKUost734JDP.jpg' }}>
        <Text>LALALAL</Text>
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  photo: {
    height: 200,
    width: 200
  },
  container: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

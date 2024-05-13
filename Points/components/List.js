import React, { Fragment } from 'react';
import {
  Button,
  FlatList,
  Text,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';

export default ({ puntos, closeModal }) => {
  return (
    <Fragment>
      <View style={styles.list}>
        <FlatList
          data={puntos.map((x) => x.name)}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>{item}</Text>
            </View>
          )}
          keyExtractor={(item) => item}
        />
      </View>
      <View style={styles.button}>
        <Button title="Close" onPress={closeModal} />
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  list: {
    height: Dimensions.get('window').height - 250,
    // width: Dimensions.get('window').width,
  },
  item: {
    borderBottomWidth: 1,
    paddingLeft: 10,
    borderColor: '#ccc',
    height: 50,
    justifyContent: 'center',
  },
  button: {
    paddingBottom: 15,
    paddingHorizontal: 15,
  },
});

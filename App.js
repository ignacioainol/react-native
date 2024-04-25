
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
 
  return (
    <View style={styles.container}>
      <FlatList data={[
        {key:1, name: 'Happy Pig'},
        {key:2, name: 'Sad Pig'},
        {key:3, name: 'Pesula'},
        {key:4, name: 'Kui kui'},
        { key: 5, name: 'Cuchito' },
        {key:1, name: 'Happy Pig'},
        {key:2, name: 'Sad Pig'},
        {key:3, name: 'Pesula'},
        {key:4, name: 'Kui kui'},
        { key: 5, name: 'Cuchito' },
        {key:1, name: 'Happy Pig'},
        {key:2, name: 'Sad Pig'},
        {key:3, name: 'Pesula'},
        {key:4, name: 'Kui kui'},
        { key: 5, name: 'Cuchito' },
        {key:1, name: 'Happy Pig'},
        {key:2, name: 'Sad Pig'},
        {key:3, name: 'Pesula'},
        {key:4, name: 'Kui kui'},
        {key:5, name: 'Cuchito'},
      ]}
        renderItem={({ item }) => <Text style={ styles.item }>{ item.name}</Text>}
      >
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  item: {
    padding: 10,
    fontSize: 22,
    height: 50,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  }
});

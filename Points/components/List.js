import React from 'react';
import { FlatList, Text } from 'react-native';

export default ({ puntos }) => {
  return (
    <FlatList
      data={puntos.map((x) => x)}
      renderItem={({ item }) => <Text>{item}</Text>}
      keyExtractor={(item) => item}
    />
  );
};

// const styles = StyleSheet.create({
//   map: {
//     height: Dimensions.get('window').height - 150,
//     width: Dimensions.get('window').width,
//   },
// });

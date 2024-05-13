import React from 'react';
import { StyleSheet, Dimensions, Button, View } from 'react-native';

export default ({ onPressLeft, textLeft, togglePoints }) => {
  return (
    <View style={styles.panel}>
      <Button onPress={onPressLeft} title={textLeft} />
      <Button title="Show/Hide" onPress={togglePoints} />
    </View>
  );
};

const styles = StyleSheet.create({
  panel: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

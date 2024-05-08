import React from 'react';
import { StyleSheet, Dimensions, Button, View } from 'react-native';

export default ({ onPressLeft, textLeft }) => {
  return (
    <View style={styles.panel}>
      <Button onPress={onPressLeft} title={textLeft} />
      <Button title="Show/Hide" />
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

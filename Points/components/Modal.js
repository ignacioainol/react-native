import React from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';

export default () => {
  return (
    <Modal animationType="slide" transparent={true} visible={false}>
      <View style={styles.center}>
        <View style={styles.modalView}>
          <Text>dss</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: '#fff',
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
});

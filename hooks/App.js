import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const decrement = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={() => increment()}>
        +
      </Text>
      <Text style={styles.text}>{count}</Text>
      <Text style={styles.text} onPress={() => decrement()}>
        -
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
  },
});

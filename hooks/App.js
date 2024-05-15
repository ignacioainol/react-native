import React, { useEffect, useReducer, useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment': {
      return { count: state.count + 1 };
    }
    case 'decrement': {
      return { count: state.count - 1 };
    }
    default: {
      return state;
    }
  }
};

const users = [
  { name: 'Ignacio', age: 32 },
  { name: 'Nidia', age: 34 },
];

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const totalAge = useMemo(() => {
    let age = 0;

    console.log('calculating ...');
    users.forEach((x) => {
      age = age + x.age;
    });
    return age;
  }, [users]);

  console.log('total age:', totalAge);

  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={() => dispatch({ type: 'increment' })}>
        +
      </Text>
      <Text style={styles.text}>{state.count}</Text>
      <Text style={styles.text} onPress={() => dispatch({ type: 'decrement' })}>
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

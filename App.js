
import { StyleSheet, Text, View, SectionList } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <SectionList
        sections={[
          {
            title: 'Grupo 1', data: [
              { key: 1, name: 'Happy Pig' },
              { key: 2, name: 'Sad Pig' },
              { key: 3, name: 'Pesula' },
              { key: 4, name: 'Kui kui' },
              { key: 5, name: 'Cuchito' },
            ]
          },
          {
            title: 'Grupo 2', data: [
              { key: 6, name: 'Happy Pig' },
              { key: 7, name: 'Sad Pig' },
              { key: 8, name: 'Pesula' },
              { key: 9, name: 'Kui kui' },
              { key: 10, name: 'Cuchito' },
            ]
          },
          {
            title: 'Grupo 3', data: [
              { key: 11, name: 'Happy Pig' },
              { key: 12, name: 'Sad Pig' },
              { key: 13, name: 'Pesula' },
              { key: 14, name: 'Kui kui' },
              { key: 15, name: 'Cuchito' },
            ]
          },
        ]}
        renderItem={({ item }) => <Text style={ styles.item }>{item.name}</Text>}
        renderSectionHeader={({ section }) => <Text style={ styles.section }>{section.title}</Text>}
      />
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
  },
  section: {
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#eee',
    paddingTop: 2,
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 2,
  }
});

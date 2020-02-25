import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.box1}>
        <View style={styles.box3}>
          <Text>Ejemplo 1</Text>
        </View>
        <View style={styles.box2}>
          <Text>Ejemplo 2</Text>
        </View>
      </View>
      <View style={styles.box2}>
        <View style={styles.box4}>
          <Text>CESDE</Text>
        </View>
        <View style={styles.box5}>
          <Text>Ejemplo 4</Text>
        </View>
      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column'
  },

  box1: {
    flex: 1,
    backgroundColor: '#1de9b6',
    flexDirection: 'row'
  },
  box2: {
    flex: 1,
    backgroundColor: '#ffea00',
    flexDirection: 'row'

  },
  box3: {
    flex: 1,
    backgroundColor: '#2979ff',
  },
  box4: {
    flex: 1,
    backgroundColor: '#e91e63'
  },
  box5: {
    flex: 1,
    backgroundColor: '#e65100'
  },
  box6: {
    flex: 1,
    backgroundColor: '#8d6e63'
  },
});

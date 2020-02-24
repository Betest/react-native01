import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text>cesde!</Text>
      </View>
      <View style={styles.box2}>
        <Text>Caja2!</Text>
      </View>
      <View style={styles.box3}>
        <Text>Caja 3!</Text>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e91e63',
    flexDirection : 'column'
  },
  box1: {
    flex: 1,
    backgroundColor: '#64dd17',
  },
  box2: {
    flex: 2,
    backgroundColor: '#8e9',
  },
  box3: {
    flex: 1,
    backgroundColor: '#8e9',
  },
});

import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Divider(props) {
  return (
    <View style={styles.container} />
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
  }
});
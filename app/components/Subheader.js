import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Subheader(props) {
  return (
    <View style={styles.subheader}>
      <Text>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subheader: {
    backgroundColor: 'lightgray', 
    alignItems: 'flex-end', 
    justifyContent: 'center', 
    height: 30, 
    padding: 5
  }
});
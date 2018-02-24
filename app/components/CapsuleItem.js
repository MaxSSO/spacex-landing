import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CapsuleItem(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.name}</Text>
      <Text style={styles.boldText}>
        type <Text style={styles.normalText}>{props.type}</Text>
      </Text>
      <Text style={styles.boldText}>
        active <Text style={styles.normalText}>{props.active ? 'Yes': 'No'}</Text>
      </Text>
      <Text style={styles.boldText}>
        crew capacity <Text style={styles.normalText}>{props.crewCapacity}</Text>
      </Text>
      <Text style={styles.boldText}>
        orbit duration <Text style={styles.normalText}>{props.orbitDuration} yr</Text>
      </Text>
      <Text style={styles.boldText}>
        height <Text style={styles.normalText}>{props.height} m</Text>
      </Text>
      <Text style={styles.boldText}>
        diameter <Text style={styles.normalText}>{props.diameter} m</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  title: {
    fontSize: 26, 
    marginBottom: 10
  },
  paragraph: {
    marginBottom: 10
  },
  boldText: {
    fontWeight: 'bold', 
    fontSize: 16
  },
  normalText: {
    fontWeight: 'normal'
  }
});
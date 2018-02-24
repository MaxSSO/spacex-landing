import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function LaunchpadItem(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.name}</Text>
      <Text style={styles.paragraph}>{props.details}</Text>
      <Text style={styles.boldText}>
        status <Text style={styles.normalText}>{props.status}</Text>
      </Text>
      <Text style={styles.boldText}>
        vehicles launched <Text style={styles.normalText}>{props.vehiclesLaunched.join(', ')}</Text>
      </Text>
      <Text style={styles.boldText}>
        region <Text style={styles.normalText}>{props.region}</Text>
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

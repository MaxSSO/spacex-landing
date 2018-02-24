import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function RocketItem(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.name}</Text>
      <Text style={styles.paragraph}>{props.description}</Text>
      <Text style={styles.boldText}>
        type <Text style={styles.normalText}>{props.type}</Text>
      </Text>
      <Text style={styles.boldText}>
        active <Text style={styles.normalText}>{props.active ? 'Yes': 'No'}</Text>
      </Text>
      <Text style={styles.boldText}>
        cost per launch <Text style={styles.normalText}>${props.costPerLaunch}</Text>
      </Text>
      <Text style={styles.boldText}>
        success rate <Text style={styles.normalText}>{props.successRate}%</Text>
      </Text>
      <Text style={styles.boldText}>
        country <Text style={styles.normalText}>{props.country}</Text>
      </Text>
      <Text style={styles.boldText}>
        height <Text style={styles.normalText}>{props.height} m</Text>
      </Text>
      <Text style={styles.boldText}>
        diameter <Text style={styles.normalText}>{props.diameter} m</Text>
      </Text>
      <Text style={styles.boldText}>
        mass <Text style={styles.normalText}>{props.mass} kg</Text>
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

import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function LaunchItem(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Flight # {props.flightNumber}</Text>
        <Image source={{uri: props.imgUri}} style={styles.imgCircle} />
      <Text style={styles.paragraph}>{props.details}</Text>
      <Text style={styles.boldText}>
        launch date utc <Text style={styles.normalText}>{props.launchDateUtc}</Text>
      </Text>
      <Text style={styles.boldText}>
        rocket launched <Text style={styles.normalText}>{props.rocketLaunched}</Text>
      </Text>
      <Text style={styles.boldText}>
        launch site <Text style={styles.normalText}>{props.launchSite}</Text>
      </Text>
      <Text style={styles.boldText}>
        launch success <Text style={styles.normalText}>{props.launchSuccess ? 'Yes': 'No'}</Text>
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
  },
  imgCircle: {
    width: 65, 
    height: 65, 
    borderRadius: 100,
    marginBottom: 10
  }
});
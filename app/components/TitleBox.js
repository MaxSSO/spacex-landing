import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

export default function TitleBox(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      {props.children}
    </View>
  );
}

TitleBox.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

TitleBox.defaultProps = {
  title: 'unspecified title'
};

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  title: {
    fontSize: 26,
    marginBottom: 10
  }
});

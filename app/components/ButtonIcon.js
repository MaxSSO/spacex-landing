import React from 'react';
import PropTypes from 'prop-types';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ButtonIcon(props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.container, props.style]} >
      <View style={styles.button}>
        <Image source={props.icon} style={styles.imgIcon} />
        <Text>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

ButtonIcon.propTypes = {
  icon: PropTypes.node,
  text: PropTypes.string,
  onPress: PropTypes.func,
  style: PropTypes.object
};

ButtonIcon.defaultProps = {
  text: 'unspecified text',
};

const styles = StyleSheet.create({
  container: {
    minHeight: 80
  },
  imgIcon: {
    width: 35, 
    height: 35
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#efefef',
    borderRadius: 5
  }
});

import React, { Component } from 'react';
import { Text } from 'react-native';

export default class Launches extends Component {
  static navigationOptions = {
    title: 'Launches',
  };

  render() {
    return (
      <Text>Launches Component!</Text>
    );
  }
}
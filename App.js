/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import AppStackNavigator from './app/config/router';

export default class App extends Component {
  render() {
    return (
      <AppStackNavigator />
    );
  }
}

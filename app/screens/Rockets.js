import React, { Component } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

export default class Rockets extends Component {
  static navigationOptions = {
    title: 'Rockets',
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      spacexInfo: null
    };
  }

  async componentDidMount() {
    const response = await fetch('https://api.spacexdata.com/v2/info');
    const spacexInfo = await response.json();
    this.setState({ isLoading: false, spacexInfo });
  }

  render() {
    if(this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    } else {
      return (
        <Text>Rockets Component! {this.state.spacexInfo.founder}</Text>
      );
    }
    
  }
}
import React, { Component } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';

import Subheader from '../components/Subheader';
import LaunchpadItem from '../components/LaunchpadItem';

export default class Launchpads extends Component {
  static navigationOptions = {
    title: 'Launchpads',
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      launchpads: null
    };
  }

  async componentDidMount() {
    const response = await fetch('https://api.spacexdata.com/v2/launchpads');
    const launchpads = await response.json();
    this.setState({ isLoading: false, launchpads });
  }

  render() {
    if(this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Subheader text={`launchpads ${this.state.launchpads.length}`}/>
        <FlatList
          data={this.state.launchpads}
          renderItem={({item}) => (
            <LaunchpadItem 
              name={item.location.name} 
              details={item.details}
              status={item.status}
              vehiclesLaunched={item.vehicles_launched}
              region={item.location.region}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

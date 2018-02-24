import React, { Component } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';

import Subheader from '../components/Subheader';
import CapsuleItem from '../components/CapsuleItem';

export default class Capsules extends Component {
  static navigationOptions = {
    title: 'Capsules',
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      capsules: null
    };
  }

  async componentDidMount() {
    const response = await fetch('https://api.spacexdata.com/v2/capsules');
    const capsules = await response.json();
    this.setState({ isLoading: false, capsules });
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
        <Subheader text={`capsules ${this.state.capsules.length}`}/>
        <FlatList
          data={this.state.capsules}
          renderItem={({item}) => (
            <CapsuleItem 
              name={item.name} 
              type={item.type}
              active={item.active}
              crewCapacity={item.crew_capacity}
              orbitDuration={item.orbit_duration_yr}
              height={item.height_w_trunk.meters}
              diameter={item.diameter.meters}
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
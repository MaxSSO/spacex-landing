import React, { Component } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';

import Subheader from '../components/Subheader';
import RocketItem from '../components/RocketItem';

export default class Rockets extends Component {
  static navigationOptions = {
    title: 'Rockets',
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      rockets: null
    };
  }

  async componentDidMount() {
    const response = await fetch('https://api.spacexdata.com/v2/rockets');
    const rockets = await response.json();
    this.setState({ isLoading: false, rockets });
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
        <Subheader text={`rockets ${this.state.rockets.length}`}/>
        <FlatList
          data={this.state.rockets}
          renderItem={({item}) => (
            <RocketItem 
              name={item.name} 
              description={item.description}
              type={item.type}
              active={item.active}
              costPerLaunch={item.cost_per_launch}
              successRate={item.success_rate_pct}
              country={item.country}
              height={item.height.meters}
              diameter={item.diameter.meters}
              mass={item.mass.kg}
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

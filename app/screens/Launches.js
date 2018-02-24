import React, { Component } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';

import Subheader from '../components/Subheader';
import LaunchItem from '../components/LaunchItem';

export default class Launches extends Component {
  static navigationOptions = {
    title: 'Launches',
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      launches: null
    };
  }

  async componentDidMount() {
    const response = await fetch('https://api.spacexdata.com/v2/launches');
    const launches = await response.json();
    this.setState({ isLoading: false, launches });
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
        <Subheader text={`launches ${this.state.launches.length}`}/>
        <FlatList
          data={this.state.launches}
          renderItem={({item}) => (
            <LaunchItem 
              flightNumber={item.flight_number} 
              details={item.details}
              launchDateUtc={item.launch_date_utc}
              rocketLaunched={item.rocket.rocket_name}
              launchSite={item.launch_site.site_name}
              launchSuccess={item.launch_success}
              imgUri={item.links.mission_patch}
            />
          )}
          keyExtractor={item => item.launch_date_utc}
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
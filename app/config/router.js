import React from 'react';
import { StackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import Rockets from '../screens/Rockets';
import Capsules from '../screens/Capsules';
import Launchpads from '../screens/Launchpads';
import Launches from '../screens/Launches';


const routes = {
  HomeScreen: {
    screen: Home
  },
  RocketsScreen: {
    screen: Rockets
  },
  CapsulesScreen: {
    screen: Capsules
  },
  LaunchpadsScreen: {
    screen: Launchpads
  },
  LaunchesScreen: {
    screen: Launches
  }
};

const navigationConfig = { 
  initialRouteName: 'HomeScreen',
  navigationOptions: {
    headerStyle: { backgroundColor: '#181c1f' },
    headerTintColor: '#fff'
  }
};

export default StackNavigator(routes, navigationConfig);

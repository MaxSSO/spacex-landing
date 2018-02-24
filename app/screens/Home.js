import React, { Component } from 'react';
import {
  ActivityIndicator,
  Alert,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import TitleBox from '../components/TitleBox';
import AvatarItem from '../components/AvatarItem';
import ButtonIcon from '../components/ButtonIcon';
import Divider from '../components/Divider';

const rocketIcon = require('../assets/images/rocket.png');
const capsuleIcon = require('../assets/images/capsule.png');
const launchpadIcon = require('../assets/images/launchpad.png');
const launchIcon = require('../assets/images/launch.png');

export default class App extends Component {
  static navigationOptions = {
    title: 'SpaceX',
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      spacexInfo: null,
      userName: '',
      userEmail: ''
    };

    this.goRocketsScreen = this.goRocketsScreen.bind(this);
    this.goCapsulesScreen = this.goCapsulesScreen.bind(this);
    this.goLaunchpadsScreen = this.goLaunchpadsScreen.bind(this);
    this.goLaunchesScreen = this.goLaunchesScreen.bind(this);

    this.onChangeTextName = this.onChangeTextName.bind(this);
    this.onChangeTextEmail = this.onChangeTextEmail.bind(this);
    this.sendUserInformation = this.sendUserInformation.bind(this);
  }

  goRocketsScreen() {
    this.props.navigation.navigate('RocketsScreen');
  }

  goCapsulesScreen() {
    this.props.navigation.navigate('CapsulesScreen');
  }

  goLaunchpadsScreen() {
    this.props.navigation.navigate('LaunchpadsScreen');
  }

  goLaunchesScreen() {
    this.props.navigation.navigate('LaunchesScreen');
  }

  onChangeTextName(text) {
    this.setState({userName: text});
  }

  onChangeTextEmail(text) {
    this.setState({userEmail: text});
  }

  sendUserInformation() {
    let title;
    let subtitle;

    if(this.state.userName && this.state.userEmail) {
      title = `Thanks ${this.state.userName}!`;
      subtitle = `We will send you information about our next releases to ${this.state.userEmail}`;
    } else {
      title = 'Empty fields!';
      subtitle = 'Complete the information with your name and email.';
    }
    
    Alert.alert(title, subtitle);
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
    } 

    return (
      <ScrollView>
        <Image source={{uri: 'https://goo.gl/EVv6yw'}} style={styles.imgCover} />
        <TitleBox title='What we do!'>
          <Text style={styles.paragraph}>{this.state.spacexInfo.summary}</Text>
          <AvatarItem title='CEO' subTitle={this.state.spacexInfo.ceo} imgUri='https://goo.gl/XMx25F' />
          <AvatarItem title='COO' subTitle={this.state.spacexInfo.coo} imgUri='https://goo.gl/JBL9US' />
          <AvatarItem title='CTO-Propulsion' subTitle={this.state.spacexInfo.cto_propulsion} imgUri='https://goo.gl/yzSW5z' />
        </TitleBox>
        <Divider />
        <TitleBox title='Headquarters'>
          <Text style={styles.boldText}>
            address <Text style={styles.normalText}> {this.state.spacexInfo.headquarters.address}</Text>
          </Text>
          <Text style={styles.boldText}>
            city <Text style={styles.normalText}> {this.state.spacexInfo.headquarters.city}</Text>
          </Text>
          <Text style={styles.boldText}>
            state <Text style={styles.normalText}> {this.state.spacexInfo.headquarters.state} 🐻</Text>
          </Text>
        </TitleBox>
        <Divider />
        <TitleBox title='Valuation'>
          <Text style={styles.bigText}>${this.state.spacexInfo.valuation}💰</Text>
        </TitleBox>
        <Divider />
        <TitleBox title='More Information'>
          <View style={styles.horizontalBoxContainer}>
            <View style={styles.buttonBoxContainer}>
              <ButtonIcon text='Rockets' icon={rocketIcon} onPress={this.goRocketsScreen} />
            </View>
            <View style={styles.buttonBoxContainer}>
              <ButtonIcon text='Capsules' icon={capsuleIcon} onPress={this.goCapsulesScreen} />
            </View>
          </View>
          <View style={styles.horizontalBoxContainer}>
            <View style={styles.buttonBoxContainer}>
              <ButtonIcon text='Launchpads' icon={launchpadIcon} onPress={this.goLaunchpadsScreen} />
            </View>
            <View style={styles.buttonBoxContainer}>
              <ButtonIcon text='Launches' icon={launchIcon} onPress={this.goLaunchesScreen} />
            </View>
          </View>
        </TitleBox>
        <Divider />
        <TitleBox title='Join us!'>
          <Text style={styles.paragraph}>Complete the following information to recive news about our first flight to Mars.</Text>
          <Text style={styles.textInputLabel}>Name</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Type here!"
            value={this.state.userName}
            onChangeText={this.onChangeTextName}
          />
          <Text style={styles.textInputLabel}>email</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Type here!"
            value={this.state.userEmail}
            onChangeText={this.onChangeTextEmail}
          />
          <Button
            onPress={this.sendUserInformation}
            title="send"
            color="#181c1f"
            sty
          />
        </TitleBox>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  imgCover: {
    width: undefined, 
    height: 200
  },
  paragraph: {
    marginBottom: 10
  },
  boldText: {
    fontWeight: 'bold', 
    fontSize: 16
  },
  normalText: {
    fontWeight: 'normal'
  },
  bigText: {
    fontSize: 36
  },
  horizontalBoxContainer: {
    flexDirection: 'row'
  },
  buttonBoxContainer: {
    flex: 1, 
    padding: 5
  },
  textInputLabel: {
    fontSize: 16, 
    fontWeight: 'bold'
  },
  textInput: {
    height: 40, 
    marginBottom: 10
  }
});

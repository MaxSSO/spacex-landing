import React, { Component } from 'react';
import {
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
  constructor(props) {
    super(props);
    // code here
  }

  goRocketsScreen() {
    Alert.alert('goRocketsScreen');
  }

  goCapsulesScreen() {
    Alert.alert('goCapsulesScreen');
  }

  goLaunchpadsScreen() {
    Alert.alert('goLaunchpadsScreen');
  }

  goLaunchesScreen() {
    Alert.alert('goLaunchesScreen');
  }

  onChangeTextName() {
    // code here
  }

  onChangeTextEmail() {
    // code here
  }

  sendUserInformation() {
    Alert.alert('sendUserInformation');
  }

  render() {
    return (
      <ScrollView>
        <Image source={{uri: 'https://goo.gl/EVv6yw'}} style={styles.imgCover} />
        <TitleBox title='SpaceX'>
          <Text style={styles.paragraph}>SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets.</Text>
          <AvatarItem title='CEO' subTitle='Elon Musk' imgUri='https://goo.gl/XMx25F' />
          <AvatarItem title='COO' subTitle='Gwynne Shotwell' imgUri='https://goo.gl/JBL9US' />
          <AvatarItem title='CTO-Propulsion' subTitle='Tom Mueller' imgUri='https://goo.gl/yzSW5z' />
        </TitleBox>
        <Divider />
        <TitleBox title='Headquarters'>
          <Text style={styles.boldText}>
            address <Text style={styles.normalText}> Rocket Road</Text>
          </Text>
          <Text style={styles.boldText}>
            city <Text style={styles.normalText}> Hawthorne</Text>
          </Text>
          <Text style={styles.boldText}>
            state <Text style={styles.normalText}> California 🐻</Text>
          </Text>
        </TitleBox>
        <Divider />
        <TitleBox title='Valuation'>
          <Text style={styles.bigText}>$15000000000💰</Text>
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
            onChangeText={(text) => this.setState({text})}
          />
          <Text style={styles.textInputLabel}>email</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Type here!"
            onChangeText={(text) => this.setState({text})}
          />
          <Button
            onPress={this.sendUserInformation}
            title="send"
            color="#841584"
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
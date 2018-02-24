import React from 'react';
import PropTypes from 'prop-types';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function AvatarItem(props) {
  return (
    <View style={styles.container}>
      <View style={styles.imgBox}>
        <Image source={{uri: props.imgUri}} style={styles.imgCircle} />
      </View>
      <View style={styles.descriptionBox}>
        <Text style={styles.title}>{props.title}</Text>
        <Text>{props.subTitle}</Text>
      </View>
    </View>
  );
}

AvatarItem.propTypes = {
  imgUri: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string
};

AvatarItem.defaultProps = {
  imgUri: 'https://goo.gl/aucDpM',
  title: 'unspecified title',
  subTitle: 'unspecified subtitle'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', 
    height: 80 
  },
  imgBox: {
    flex: 1, 
    justifyContent: 'center'
  },
  imgCircle: {
    width: 65, 
    height: 65, 
    borderRadius: 100
  },
  descriptionBox: {
    flex: 3, 
    justifyContent: 'center'
  },
  title: {
    fontSize: 18, 
    fontWeight: 'bold'
  }
});

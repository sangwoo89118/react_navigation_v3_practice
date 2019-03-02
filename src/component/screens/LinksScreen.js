import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import MenuButton from '../MenuButton'

export default class LinksScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
      <MenuButton navigation={this.props.navigation} />
        <Text style={styles.text}>Links</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 30,
  }
});


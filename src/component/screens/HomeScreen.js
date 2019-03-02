import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';

import MenuButton from '../MenuButton'

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MenuButton />
        <Text style={styles.text}>Home</Text>
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


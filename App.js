import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import DrawerNavigator from './src/component/navigation/DrawerNavigator'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <DrawerNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});


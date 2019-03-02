import React from 'react';
import { Platform, Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
    drawerWidth: WIDTH*0.83, //83% of the screen width
}

const DrawerNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HomeScreen
        },
    },
    DrawerConfig
);

export default createAppContainer(DrawerNavigator);
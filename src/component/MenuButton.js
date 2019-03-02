import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default class MenuButton extends React.Component {
    render(){
        return(
            <Icon 
                name='md-menu'
                size={32} 
                color='#000000'
                style={styles.menuIcon}
                onPress={() => {console.log('menu button clicked');}}
            />
        )
    }
}

const styles = StyleSheet.create({
    menuIcon: {
        zIndex: 9,
        position: 'absolute',
        top: 40,
        left: 20,
    }
})
import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import logo from '../../final-logo.png'

const screen = Dimensions.get("screen")

const Header = () => {
    return (
        <View >
        <Image
        source={require('../../final-logo.png')}
        style = {{height: 40, width:60}}
        
      ></Image>
        </View>
    );
};

// const styles = StyleSheet.create({
//     header: {
//         marginTop: 40,
//         backgroundColor: 0xAAADC4FF,
//         alignItems: 'center',
//         justifyContent: 'center',
//         width: '100%',
//         height: 75
//     },
//   });

export default Header;
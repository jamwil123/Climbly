import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';

const screen = Dimensions.get("screen")

const Header = () => {
    return (
        <View >
        <Image
        source={require('../../img/final-logo.png')}
        style = {{height: 40, width:60, marginBottom:8}}
        
      ></Image>
        </View>
    );
};

export default Header;
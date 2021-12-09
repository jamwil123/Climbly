import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const screen = Dimensions.get("screen")

const Header = () => {
    return (
        <View style={styles.header}>
            <Text>Header</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        marginTop: 40,
        backgroundColor: 0xAAADC4FF,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 75
    },
  });

export default Header;
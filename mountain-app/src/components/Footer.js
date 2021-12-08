import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Footer = () => {
    return (
        <View style={styles.footer}>
            <Text>Footer</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        // flex: 1,
        // marginBottom: 40,
        backgroundColor: 0xAAADC4FF,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 75
    },
  });

export default Footer;
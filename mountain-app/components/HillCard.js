import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HillCard = () => {
    return (
        <View style={styles.hillcard}>
            <Text>Hill Card</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    hillcard: {
        flex: 1,
        backgroundColor: 0xffff00ff,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        height: 200,
        marginTop: 3,
        marginBottom: 3
    },
  });

export default HillCard;
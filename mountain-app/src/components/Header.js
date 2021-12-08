import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

const header = () => {
    return (
        <View style={styles.header}>
            <Text>Header</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flex: 1,
        marginTop: 40,
        backgroundColor: 0x44aa44ff,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 100
    },
  });

export default header;
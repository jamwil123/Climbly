import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HillCard from './HillCard';

const MainView = () => {
    return (
        <View style={styles.mainview}>
            <HillCard />
            <HillCard />
            <HillCard />
            <HillCard />
            <HillCard />
            <HillCard />
            <HillCard />
            <HillCard />
            <HillCard />
            <HillCard />
            <HillCard />
        </View>
    );
};

const styles = StyleSheet.create({
    mainview: {
        flex: 8,
        backgroundColor: 0xaaaa00ff,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        display: 'flex',
    },
  });

export default MainView;
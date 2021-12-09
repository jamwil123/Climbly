import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

const Footer = ({navigationRef}) => {
    return (
        <View style={styles.footer}>
            <Text>Footer</Text>
            <Button title="User" onPress={() => {
                navigationRef.current.navigate("UserPage")
            }}/>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        backgroundColor: 0xAAADC4FF,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 75
    },
  });

export default Footer;
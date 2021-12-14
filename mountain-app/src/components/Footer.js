import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';  
import { FontAwesome } from '@expo/vector-icons'; 


const Footer = ({navigationRef}) => {
    const [home, setHome] = useState(true)
    const [user, setUser] = useState(false)
    return (
        <TouchableOpacity onPress={() => {setHome(!home)}}>
        <View style={styles.footer}>
<Ionicons name="home" size={40} color={home ? 'grey' : 'black'} style={styles.homebutton} onPress={() => {
    setUser(true)
    navigationRef.current.navigate("Mountain App")
    
    
}} />
<FontAwesome name="user" size={40} color={user ? 'grey' : 'black'} style={styles.userbutton} onPress={() => {
    setHome(false)
    navigationRef.current.navigate("UserPage")
}}/>
</View>
</TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    footer: {
        backgroundColor: 0xAAADC4FF,
        width: '100%',
        height: 75,
        display: "flex",
        flexDirection: 'row'
    },homebutton: {
        justifyContent: 'flex-start',
        flex: 1,
        paddingLeft:40,
        paddingTop: 15, 
        paddingRight: 40
    },
    userbutton: {
        justifyContent: 'flex-end',
        textAlign: "right",
        paddingRight : 40,
        paddingTop: 17
    }

  });

export default Footer;
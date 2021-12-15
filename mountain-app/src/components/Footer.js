import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Footer = ({ navigationRef, setSearchBarVisible }) => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={styles.footer}>
        <Ionicons
          name="home"
          size={40}
          color={"black"}
          style={styles.homebutton}
          onPress={() => {
            navigationRef.current.navigate("Mountain App");
          }}
        />
        <FontAwesome
          name="search"
          size={40}
          color={"black"}
          style={styles.userbutton}
          onPress={() => {
            setSearchBarVisible(true)
          }}
        />
        <FontAwesome
          name="user"
          size={40}
          color={"black"}
          style={styles.userbutton}
          onPress={() => {
            navigationRef.current.navigate("UserPage");
          }}
        />
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
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    homebutton: {
        // justifyContent: 'flex-start',
        flex: 1,
        paddingLeft:40,
        paddingTop: 15, 
        // paddingRight: 40
    },
    searchbutton: {
        flex: 1,
    },
    userbutton: {
        flex: 1,
        textAlign: "right",
        paddingRight : 40,
        paddingTop: 17,
        paddingLeft: 30,
    }
  });

export default Footer;

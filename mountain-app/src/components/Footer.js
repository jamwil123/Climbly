import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { ModalSearch } from "./ModalSearch";

const Footer = ({ navigationRef }) => {
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
    backgroundColor: 0xaaadc4ff,
    width: "100%",
    height: 75,
    display: "flex",
    flexDirection: "row",
  },
  homebutton: {
    justifyContent: "flex-start",
    flex: 1,
    paddingLeft: 40,
    paddingTop: 15,
    paddingRight: 40,
  },
  userbutton: {
    justifyContent: "flex-end",
    textAlign: "right",
    paddingRight: 40,
    paddingTop: 17,
  },
});

export default Footer;

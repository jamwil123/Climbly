import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

const HillCard = (props) => {

  return (
    <View style={styles.hillcard}>
      <Image
        source={{ uri: props.hillObject.img_hres_url }}
        style={styles.image}
      ></Image>
      <Text>{props.hillObject.hillname}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  hillcard: {
    flex: 1,
    backgroundColor: 0xffff00ff,
    alignItems: "center",
    justifyContent: "center",
    // width: "100%",
    height: 200,
    marginTop: 3,
    marginBottom: 3,
  },
  image: {
    width: 200,
    minHeight: 100,
    maxHeight: 200
  }
});

export default HillCard;

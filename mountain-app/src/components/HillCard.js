import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

const HillCard = (props) => {
  const LeftContent = (props) => {
    return <Avatar.Icon {...props} icon="folder" />;
  };
  return (
    <Card>
      <Card.Cover source={{ uri: props.hillObject.img_hres_url }} />
      <Card.Content>
        <Title>text</Title>
        <Paragraph>something</Paragraph>
      </Card.Content>
    </Card>
  );
};
// <View style={styles.hillcard}>
//   <Image
//     source=
//     style={styles.image}
//   ></Image>
//   <Text>{hillObject.hillname}</Text>
// </View>
const styles = StyleSheet.create({
  hillcard: {
    flex: 1,
    backgroundColor: 0xffff00ff,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height: 200,
    marginTop: 3,
    marginBottom: 3,
  },
});

export default HillCard;

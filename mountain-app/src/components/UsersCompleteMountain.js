import React from "react";
import { StyleSheet, View, FlatList, TouchableHighlight } from "react-native";
import { useContext } from "react";
import { userContext } from "../contexts/userContext";
import HillCard from "./HillCard.js";

export default function UsersCompleteMountain() {
  const { currentUser } = useContext(userContext);
  const HillCardRef = React.useRef();
  console.log(currentUser);
  return (
    <View style={styles.cardViews}>
      <FlatList
        data={currentUser.hillsClimbed}
        renderItem={({ item }) => {
          return (
            <View>
              <HillCard key={item.hillnumber} hillObject={item} />
            </View>
          );
        }}
        keyExtractor={(item) => {
          item.hillnumber;
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  cardViews: {
    backgroundColor: 0x2e2d4dff,
    alignItems: "stretch",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    padding: 0,
  },
});

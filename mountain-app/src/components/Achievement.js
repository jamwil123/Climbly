import React from "react";
import { View, Text } from "react-native";
import { useContext } from "react";
import { userContext } from "../contexts/userContext";

export default function Achievement() {
  const { currentUser } = useContext(userContext);
  function medals() {
    if (currentUser.noOfHillsClimbed < 5) {
      return (
        <View>
          <Text>no medals has being achieved yet</Text>
        </View>
      );
    }
    if (
      currentUser.noOfHillsClimbed >= 5 &&
      currentUser.noOfHillsClimbed < 10
    ) {
      return (
        <View>
          <Text>medal-1</Text>
        </View>
      );
    }
    if (
      currentUser.noOfHillsClimbed >= 10 &&
      currentUser.noOfHillsClimbed < 20
    ) {
      return (
        <View>
          <Text>medal-2</Text>
        </View>
      );
    }
    if (
      currentUser.noOfHillsClimbed >= 20 &&
      currentUser.noOfHillsClimbed < 50
    ) {
      return (
        <View>
          <Text>medal-3</Text>
        </View>
      );
    }
    if (currentUser.totalFeetClimbed >= 50) {
      return (
        <View>
          <Text>medal-4</Text>
        </View>
      );
    }
  }
  return medals();
}

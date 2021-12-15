import React from "react";
import { View, Text, Image, Alert} from "react-native";
import { useContext } from "react";
import { userContext } from "../contexts/userContext";

export default function Achievement() {
  const { currentUser } = useContext(userContext);
  function medals() {
    if (currentUser.noOfHillsClimbed < 5) {
      return (
        <View>
          <Text>Complete more mountains to win badges! </Text>
        </View>
      );
    }
    if (
      currentUser.noOfHillsClimbed >= 5 &&
      currentUser.noOfHillsClimbed < 10
    ) {
      return (
        <View>
          <Image
            source={require("../../img/final-5.png")}
            style={{ height: 150, width: 150 }}
          />
          
        </View>
      );
    }
    if (
      currentUser.noOfHillsClimbed >= 10 &&
      currentUser.noOfHillsClimbed < 20
    ) {
      return (
        <View>
          <Image
            source={require("../../img/final-5.png")}
            style={{ height: 150, width: 150 }}
          />
          <Image
            source={require("../../img/final-10.png")}
            style={{ height: 150, width: 150 }}
          />
        </View>
      )
    }
    if (
      currentUser.noOfHillsClimbed >= 20 &&
      currentUser.noOfHillsClimbed < 50
    ) {
      return (
        <View>
          <Image
            source={require("../../img/final-5.png")}
            style={{ height: 150, width: 150 }}
          />
          <Image
            source={require("../../img/final-10.png")}
            style={{ height: 150, width: 150 }}
          />
          <Image
            source={require("../../img/final-20.png")}
            style={{ height: 150, width: 150 }}
          />
        </View>
      );
    }
    if (currentUser.totalFeetClimbed >= 50) {
      return (
        <View>
          <Image
            source={require("../../img/final-5.png")}
            style={{ height: 150, width: 150 }}
          />
          <Image
            source={require("../../img/final-10.png")}
            style={{ height: 150, width: 150 }}
          />
          <Image
            source={require("../../img/final-20.png")}
            style={{ height: 150, width: 150 }}
          />
          <Image
            source={require("../../img/final-50.png")}
            style={{ height: 150, width: 150 }}
          />
        </View>
      );
    }
  }
  return medals();
}

import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, View, SafeAreaView, TouchableHighlight } from "react-native";
import { getMountains } from "../utils/api";
import HillCard from "./HillCard.js";

const MainView = ({navigation}) => {
  const [mountains, setMountain] = useState([]);
  useEffect(() => {
    getMountains().then((response) => {
      setMountain(response);
    });
  }, []);
  console.log(mountains.length);
  return (
    <View style={styles.mainview}>
      <FlatList
        data={mountains}
        renderItem={({ item, index, separators }) => {return (
          <TouchableHighlight onPress={() => navigation.push('SingleMountainPage')} underlayColor="white">
          <HillCard
            key={item.hillnumber}
            hillObject={item}
            onShowUnderlay={separators.highlight}
            onHideUnderlay={separators.unhighlight}
          ></HillCard>
          </TouchableHighlight>
        )}}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainview: {
    // flex: 8,
    backgroundColor: 0x2E2D4DFF,
    alignItems: "stretch",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    padding: 0
    // display: "flex",
  },
});

export default MainView;

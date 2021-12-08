import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, View, SafeAreaView } from "react-native";
import { getMountains } from "../utils/api";
import HillCard from "./HillCard.js";

const MainView = () => {
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
        renderItem={({ item, index, separators }) => (
          <HillCard
            key={item.key}
            hillObject={item}
            onPress={() => this._onPress(item)}
            onShowUnderlay={separators.highlight}
            onHideUnderlay={separators.unhighlight}
          ></HillCard>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainview: {
    flex: 8,
    backgroundColor: 0xaaaa00ff,
    alignItems: "stretch",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    padding: 0
    // display: "flex",
  },
});

export default MainView;

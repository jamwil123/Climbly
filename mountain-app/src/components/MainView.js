import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect } from "react";
import { StyleSheet, FlatList, View, SafeAreaView, TouchableHighlight } from "react-native";
import { getMountains } from "../utils/api";
import HillCard from "./HillCard.js";
import usePagination from "react-native-flatlist-pagination-hook";

const MainView = ({navigation}) => {

  const {
    data,         //use it in Flatlist data
    addData,      //push new group of data
    onEndReached, //callback in Flatlist onEndReached
    pageIndex,    //current pageIndex use it to query data
    ListFooterComponent, //use it in Flatlist ListFooterComponent
  } = usePagination(10);

  useEffect(() => {
    getMountains(pageIndex).then((data) => {
      addData(data);
    });
  }, [pageIndex]);

  return (
    <View style={styles.mainview}>
      <FlatList
        onEndReachedThreshold={.5}
        onEndReached={onEndReached}
        data={data}
        ListFooterComponent={ListFooterComponent}
        renderItem={({ item, index, separators }) => {return (
          <TouchableHighlight onPress={() => {
            navigation.push('SingleMountainPage', {mountain: item}) 
           }} underlayColor="white"
          >
            <HillCard
              key={item.hillnumber}
              hillObject={item}
              onShowUnderlay={separators.highlight}
              onHideUnderlay={separators.unhighlight}
            />
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

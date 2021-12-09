import React, { Children, useEffect, useRef } from "react";
import { StyleSheet, FlatList, View, TouchableHighlight } from "react-native";
import { getMountains } from "../utils/api";
import usePagination from "react-native-flatlist-pagination-hook";
import HillCard from "./HillCard.js";

const MainView = ({navigation}) => {

  const HillCardRef = useRef()

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
            <View ref={HillCardRef}>
              <HillCard
                key={item.hillnumber}
                hillObject={item}
              />
            </View>
          </TouchableHighlight>
        )}}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainview: {
    backgroundColor: 0x2E2D4DFF,
    alignItems: "stretch",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    padding: 0
  },
});

export default MainView;

import React, { Children, useContext, useEffect, useRef } from "react";
import { StyleSheet, FlatList, View, TouchableHighlight } from "react-native";
import { getMountains } from "../utils/api";
import usePagination from "react-native-flatlist-pagination-hook";
import HillCard from "./HillCard.js";
import { userContext } from "../contexts/userContext";

let lastHillId = null;

const MainView = ({navigation}) => {
const {currentUser} = useContext(userContext)
  const HillCardRef = useRef()

  const {
    data,         
    addData,      
    onEndReached, 
    pageIndex,    
    ListFooterComponent, 
  } = usePagination(10);

  useEffect(() => {
    getMountains(lastHillId).then((data) => {
      lastHillId = data[9].id
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
        keyExtractor={(item) => {
          item.hillnumber
        }}
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

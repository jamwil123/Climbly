import React, { Children, useContext, useEffect, useRef, useState } from "react";
import { StyleSheet, FlatList, View, TouchableHighlight, Modal } from "react-native";
import { getMountains } from "../utils/api";
import usePagination from "react-native-flatlist-pagination-hook";
import HillCard from "./HillCard.js";
import { userContext } from "../contexts/userContext";

let lastHillId = null;
let lastSortValue = 'hillname';
let lastOrderValue = 'ASC';
let lastSearchState = {};

const isSortChanged = (value) => {
  if (value !== lastSortValue) {
    lastSortValue = value;
    return true;
  } else {
    return false;
  }
};

const isOrderChanged = (value) => {
  if (value !== lastOrderValue) {
    lastOrderValue = value;
    return true;
  } else {
    return false;
  }
};

const isSearchChanged = (object) => {
  if (Object.keys(object).length === Object.keys(lastSearchState).length) {
    if (object.name !== lastSearchState.name || object.country !== lastSearchState.country || object.lowestHeight !== lastSearchState.lowestHeight || object.highestHeight !== lastSearchState.highestHeight) {
      lastSearchState = object
      return true
    } else {
      return false
    }
  } else {
    lastSearchState = object
    return true;
  }
};

const MainView = ({ navigation, sortQuery, searchQueryObj }) => {
  const { currentUser } = useContext(userContext);
  const HillCardRef = useRef();

  const { sort, order } = sortQuery;
  const { name, lowestHeight, highestHeight, country } = searchQueryObj
  const { data, addData, resetData, onEndReached, pageIndex, ListFooterComponent } = usePagination(10);

  if (isOrderChanged(order) || isSortChanged(sort) || isSearchChanged(searchQueryObj)) {
    lastHillId = null;
    resetData([]);
  } 

  useEffect(() => {
          getMountains(lastHillId, sort, order, searchQueryObj).then((mountains) => {
            if (mountains.length >= 9) {
              lastHillId = mountains[9].id;
            } else {
              lastHillId = null;
            }
            addData(mountains);
          });
  }, [pageIndex, sort, order, name, lowestHeight, highestHeight, country]);


  return (
    <View style={styles.mainview}>
      <FlatList
        onEndReachedThreshold={0.5}
        onEndReached={onEndReached}
        data={data}
        ListFooterComponent={ListFooterComponent}
        renderItem={({ item, index, separators }) => {
          return (
            <TouchableHighlight
              onPress={() => {
                navigation.push("SingleMountainPage", { mountain: item });
              }}
              underlayColor={0xe0e1f0FF}
              key={item.hillnumber}
            >
              <View ref={HillCardRef}>
                <HillCard hillObject={item} />
              </View>
            </TouchableHighlight>
          );
        }}
        keyExtractor={(item) => {
          item.id;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainview: {
    backgroundColor: 0xe0e1f0FF, 
    alignItems: "stretch",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    padding: 0,
  },
});

export default MainView;

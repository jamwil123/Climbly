import React, { Children, useContext, useEffect, useRef, useState } from "react";
import { StyleSheet, FlatList, View, TouchableHighlight, Modal } from "react-native";
import { getMountains } from "../utils/api";
import usePagination from "react-native-flatlist-pagination-hook";
import HillCard from "./HillCard.js";
import { userContext } from "../contexts/userContext";

let lastHillId = null;
let lastSortValue = 'hillname';
let lastOrderValue = 'ASC';

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

const MainView = ({ navigation, sortQuery }) => {
  const { currentUser } = useContext(userContext);
  const HillCardRef = useRef();

  const { sort, order } = sortQuery;
  const { data, addData, resetData, onEndReached, pageIndex, ListFooterComponent } = usePagination(10);

  if (isOrderChanged(order) || isSortChanged(sort)) {
    lastHillId = null;
    resetData([]);
  }

  useEffect(() => {
    getMountains(lastHillId, sort, order).then((mountains) => {
      lastHillId = mountains[9].id;
      addData(mountains);
    });
  }, [pageIndex, sort, order]);

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
              underlayColor="white"
            >
              <View ref={HillCardRef}>
                <HillCard key={item.hillnumber} hillObject={item} />
              </View>
            </TouchableHighlight>
          );
        }}
        keyExtractor={(item) => {
          item.hillnumber;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainview: {
    backgroundColor: 0x2e2d4dff,
    alignItems: "stretch",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    padding: 0,
  },
});

export default MainView;

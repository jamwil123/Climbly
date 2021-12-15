import React from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";

export default ClassBadge = ({classificationObj}) => {
        let arr = classificationObj.split(",");
        let imgVal = "";
    
        arr.map((classDesc) => {
          if (classDesc === "M") {
            imgVal = require("../../img/final-ms.png");
          } else if (classDesc === "W") {
            imgVal = require("../../img/final-WR.png");
          }
        });

     return imgVal === "" ? <View></View> : <Image source={imgVal} style={{height: 150, width: 150}}/>


};

import React from "react";
import { Image, StyleSheet, Text, View, Dimensions } from "react-native";

const screenSize = Dimensions.get("screen")

const HillCard = (props) => {
  let hillname = props.hillObject.hillname
  hillname.includes('[') ? hillname = hillname.slice(0, hillname.indexOf('[')) : hillname

  let difficultyRating

  if (props.hillObject.feet <= 1000) { 
      difficultyRating = '⛰'
  } else if (props.hillObject.feet > 1000 && props.hillObject.feet <2500) {
      difficultyRating = '⛰⛰⛰'
  }
  else {
    difficultyRating = '⛰⛰⛰⛰⛰'
}


  return (
    <View style={styles.hillcard}>
      <View>
        <Image
          source={{ uri: props.hillObject.img_hres_url }}
          style={styles.image}
        ></Image>
      </View>
      <View style={styles.textbox}>
        <Text style={styles.textbox_hillname}>{hillname}</Text>
        <Text>{difficultyRating}</Text>
        <Text style={styles.textbox_hillheight}>{props.hillObject.feet} feet</Text>   
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  difficulty: {
  
    
  },
  hillcard: {
    backgroundColor: 0x2B3A67FF,
    alignItems: "center",
    height: screenSize.height * 0.38,
    marginTop: 10,
    padding: 15,
    marginBottom: 3,
    marginLeft: 6,
    marginRight: 6,
    borderRadius: 25,
    borderColor: 0xAAADC4FF,
    borderWidth: 1
  },
  image: {
    borderRadius: 14,
    width: screenSize.width * 0.9,
    height: screenSize.height * 0.25
  },
  textbox: {
    width: '100%'
  },
  textbox_hillname: {
    color: 0xFFFFFFFF,
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10
  },
  textbox_hillheight: {
    textAlign: "right",
    color: 0xFFFFFFFF,
    fontSize: 20,
    marginTop: 10
  }
});

export default HillCard;

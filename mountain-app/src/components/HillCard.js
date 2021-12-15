import React from "react";
import { Image, StyleSheet, Text, View, Dimensions } from "react-native";

const screenSize = Dimensions.get("screen");

const HillCard = (props) => {
  let hillname = props.hillObject.hillname;
  hillname.includes("[")
    ? (hillname = hillname.slice(0, hillname.indexOf("[")))
    : hillname;

  let difficultyRating;

  if (props.hillObject.feet <= 1000) {
    difficultyRating = "Easy";
  } else if (props.hillObject.feet > 1000 && props.hillObject.feet < 2500) {
    difficultyRating = "Moderate";
  } else {
    difficultyRating = "Hard";
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
        <View style={styles.heightAndDifficulty}>
        <Text style={styles.difficulty}>{difficultyRating}</Text>
        <Text style={styles.textbox_hillheight}>
          {props.hillObject.feet} feet
        </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  difficulty: {
    color: "#ffffff",
    fontSize: 20,
    paddingTop: 10,
    borderRadius: 10,
  borderWidth: 1,
  borderColor: '#fff',
  padding: 5,
  backgroundColor: 'black',
  
  },
  heightAndDifficulty: {
    display:'flex',
    flexDirection: 'row'
  },
  hillcard: {
    backgroundColor: 0x2b3a67ff,
    alignItems: "center",
    height: screenSize.height * 0.38,
    marginTop: 10,
    padding: 15,
    marginBottom: 3,
    marginLeft: 6,
    marginRight: 6,
    borderRadius: 25,
    borderColor: 0xaaadc4ff,
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.6,
    shadowRadius: 3,
    elevation: 5,
  },
  image: {
    borderRadius: 14,
    width: screenSize.width * 0.9,
    height: screenSize.height * 0.25,
  },
  textbox: {
    width: "100%",
  },
  textbox_hillname: {
    color: 0xffffffff,
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
  },
  textbox_hillheight: {
    textAlign: "right",
    color: 0xffffffff,
    fontSize: 20,
    marginTop: 0,
    display:'flex',
    flex:2, 
    alignContent: 'flex-end',
    paddingTop: 10
    
  },
});

export default HillCard;

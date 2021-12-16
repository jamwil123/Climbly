import React, {useContext} from "react";
import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import { userContext } from "../contexts/userContext";

const screenSize = Dimensions.get("screen");

const HillCard = (props) => {
  const { currentUser } = useContext(userContext);
  
  let hillCardBackgroundColor;
  let difficultyRating;
  let difficultyColor;
  
  const isClimbed = currentUser.hillsClimbed.filter(mountain => mountain.hillname === props.hillObject.hillname).length > 0 ? true : false

  isClimbed ? hillCardBackgroundColor = styles.hillCardBackgroundColorClimbed : hillCardBackgroundColor = styles.hillCardBackgroundColorUnClimbed

  let hillname = props.hillObject.hillname;
  hillname.includes("[")
    ? (hillname = hillname.slice(0, hillname.indexOf("[")))
    : hillname;


  if (props.hillObject.feet <= 2200) {
    difficultyRating = "Easy";
    difficultyColor = styles.difficultyColorEasy
  } else if (props.hillObject.feet > 2200 && props.hillObject.feet < 3500) {
    difficultyRating = "Moderate";
    difficultyColor = styles.difficultyColorModerate
  } else {
    difficultyRating = "Hard";
    difficultyColor = styles.difficultyColorHard
  }

  return (
    <View style={[styles.hillcard, hillCardBackgroundColor]}>
      <View>
        <Image
          source={{ uri: props.hillObject.img_hres_url }}
          style={styles.image}
        ></Image>
      </View>
      <View style={styles.textbox}>
        <Text style={styles.textbox_hillname}>{hillname}</Text>
        <View style={styles.heightAndDifficulty}>
        <View style={[styles.difficulty, difficultyColor]}>
          <Text style={styles.difficultyText}>{difficultyRating}</Text>
        </View>
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
    marginTop: 7,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    padding: 4,
    width: screenSize.width * 0.25,
    alignItems: 'center'
  },
  difficultyColorEasy: {
    backgroundColor: 0x08630dFF,
  },
  difficultyColorModerate: {
    backgroundColor: 0x796507FF,
  },
  difficultyColorHard: {
    backgroundColor: 0x7a2d0aFF,
  },
  difficultyText: {
    color: "#ffffff",
    fontSize: 20
  },
  heightAndDifficulty: {
    display:'flex',
    flexDirection: 'row'
  },
  hillcard: {
    alignItems: "center",
    height: screenSize.height * 0.39,
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
  hillCardBackgroundColorUnClimbed: {
    backgroundColor: 0x2b3a67ff,
  },
  hillCardBackgroundColorClimbed: {
    backgroundColor: 0x284A1EFF,
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

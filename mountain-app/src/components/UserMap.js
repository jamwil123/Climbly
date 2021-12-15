import React from "react";
import { Image, Text, View, Dimensions, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import { useContext } from "react";
import { userContext } from "../contexts/userContext";

const screenSize = Dimensions.get("screen");

export default function UserMap() {
  const { currentUser } = useContext(userContext);
  return (
    <View style={styles.container}>
      <View style={styles.userTitle}>
        <View style={styles.userTitleLeft}>
          <Image
            source={{ uri: currentUser.img_url }}
            style={styles.userAvatar}
          />
        </View>
        <View style={styles.userTitleRight}>
          <Text style={styles.userName}>{currentUser.name}</Text>
        </View>
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.userInfoText}>
          Number of hills climbed: {currentUser.noOfHillsClimbed}
        </Text>
        <Text style={styles.userInfoText}>
          Total feet climbed: {currentUser.totalFeetClimbed}
        </Text>
      </View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 54.7225864,
          longitude: -4.3537658,
          latitudeDelta: 9.5,
          longitudeDelta: 9.5,
        }}
        mapType={"satellite"}
      >
        {currentUser.hillsClimbed.map((x) => {
          return (
            <MapView.Marker
              coordinate={{
                latitude: x.latitude,
                longitude: x.longitude,
              }}
              title={"title"}
              description={"description"}
            />
          );
        })}
      </MapView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 0x2b3a67ff,
    alignItems: "center",
    marginTop: 10,
    padding: 15,
    marginBottom: 3,
    marginLeft: 6,
    marginRight: 6,
    borderRadius: 25,
    borderColor: 0xaaadc4ff,
    borderWidth: 1,
  },
  map: {
    borderColor: 0x000000ff,
    borderWidth: 1,
    borderRadius: 14,
    width: screenSize.width * 0.85,
    height: screenSize.height * 0.48,
  },
  userTitle: {
    marginTop: 5,
    width: screenSize.width * 0.9,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  userTitleLeft: {
    flex: 4,
  },
  userAvatar: {
    borderRadius: screenSize.width * 0.15,
    width: screenSize.width * 0.35,
    height: screenSize.width * 0.35,
  },
  userTitleRight: {
    flex: 6,
    textAlign: "left",
    justifyContent: "flex-end",
  },
  userName: {
    color: 0xffffffff,
    fontSize: 26,
  },
  userInfo: {
    marginTop: 20,
    marginBottom: 10,
    width: screenSize.width * 0.82,
  },
  userInfoText: {
    color: 0xffffffff,
    fontSize: 18,
    marginBottom: 10,
  },
});

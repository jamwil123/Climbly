import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Button,
  TouchableOpacity,
} from "react-native";
import Swiper from "react-native-swiper";
import { useContext } from "react";
import { userContext } from "../contexts/userContext";
import UsersCompleteMountain from "./UsersCompleteMountain";
import Achievement from "./Achievement";
import UserMap from "./UserMap";
const screenSize = Dimensions.get("screen");

const UserPage = () => {
  const { currentUser, setCurrentUser } = useContext(userContext);
  const [page, setPage] = React.useState(0);
  return (
    <ScrollView style={styles.mainview}>
      <View style={styles.NavContainer}>
        <View style={styles.NavBar}>
          <TouchableOpacity
            onPress={(event) => {
              setPage(1);
            }}
          >
            <Text>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={(event) => {
              setPage(2);
            }}
          >
            <Text>Complete Mountains</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={(event) => {
              setPage(0);
            }}
          >
            <Text>Achievement</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.swipeArea}>
        <Swiper showsButtons={false} index={page}>
          <UserMap />
          <UsersCompleteMountain />
          <Achievement />
        </Swiper>
      </View>
      <Button
        title="Log Out"
        onPress={() => {
          setCurrentUser({});
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainview: {
    backgroundColor: 0x2e2d4dff,
  },
  NavContainer: {
    width: "100%",
    height: 60,
    position: "relative",
    alignItems: "center",
  },
  NavBar: {
    flexDirection: "row",
    backgroundColor: "#eee",
    width: "100%",
    justifyContent: "space-evenly",
  },
  swipeArea: {},
  IconBehave: {
    padding: 14,
  },
});

export default UserPage;

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
      <View>
        <TouchableOpacity
          onPress={(event) => {
            setPage(0);
          }}
        >
          <Text>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={(event) => {
            setPage(1);
          }}
        >
          <Text>Complete Mountains</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={(event) => {
            setPage(2);
          }}
        >
          <Text>Achievement</Text>
        </TouchableOpacity>
      </View>
      <Swiper showsButtons={true} index={page}>
        <UserMap />
        <UsersCompleteMountain />
        <Achievement />
      </Swiper>
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
});

export default UserPage;

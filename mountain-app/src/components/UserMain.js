import React from "react";
import { Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useContext } from "react";
import { userContext } from "../contexts/userContext";
import LoginPage from "./LoginPage";

const UserMain = () => {
  const { currentUser, setCurrentUser } = useContext(userContext);
  console.log(currentUser);

  return !currentUser.userToken ? (
    <LoginPage />
  ) : (
    <View>
      <Image source={{ uri: currentUser.img_url }} style={{ width: 40, height: 40 }} />
      <Text>{currentUser.name}</Text>
      <Text>{currentUser.noOfHillsClimbed}</Text>
      <Text>{currentUser.totalFeetClimbed}</Text>
    </View>
  );
};

export default UserMain;

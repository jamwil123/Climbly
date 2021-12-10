import React from "react";
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useContext } from "react";
import { userContext } from "../contexts/userContext";
import LoginPage from "./LoginPage";

const UserMain = () => {
  const { currentUser, setCurrentUser } = useContext(userContext);

  return !currentUser.userToken ? <LoginPage /> : <Text>`Welcome back ${currentUser.userToken}`</Text>;
};

export default UserMain;

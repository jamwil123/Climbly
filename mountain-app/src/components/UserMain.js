import React from "react";
import { Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useContext } from "react";
import { userContext } from "../contexts/userContext";
import LoginPage from "./LoginPage";
import UserPage from "./UserPage"

const UserMain = () => {
  const { currentUser, setCurrentUser } = useContext(userContext);

  return !currentUser.userToken ? (
    <LoginPage />
  ) : (
    <UserPage />
  );
};

export default UserMain;

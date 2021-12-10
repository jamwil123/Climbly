import React from "react";
import { Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useContext } from "react";
import { userContext } from "../contexts/userContext";
import LoginPage from "./LoginPage";
import MapView from 'react-native-maps'

const UserMain = () => {
  const { currentUser, setCurrentUser } = useContext(userContext);

  return !currentUser.userToken ? (
    <LoginPage />
  ) : (
    <View>
      <Image source={{ uri: currentUser.img_url }} style={{ width: 40, height: 40 }} />
      <Text>{currentUser.name}</Text>
      <Text>{currentUser.noOfHillsClimbed}</Text>
      <Text>{currentUser.totalFeetClimbed}</Text>
      <MapView style={{ width: 250, height: 250 }} initialRegion={{
        latitude: 53.472225,
        longitude: -2.2935021,
        latitudeDelta: 12,
        longitudeDelta: 12,
    }} mapType={'satellite'} 
    />
    </View>
  );
};

export default UserMain;

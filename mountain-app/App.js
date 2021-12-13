import React, { useRef, useState } from "react";
import { StyleSheet, Button, Modal, View, Text, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "./src/components/Header";
import MainView from "./src/components/MainView";
import Footer from "./src/components/Footer";
import SingleMountain from "./src/components/SingleMountain";
import UserMain from "./src/components/UserMain";
import { userContext } from "./src/contexts/userContext";
// import {FontAwesome} from "@expo/vector-icons"
// import {Icon} from 'react-native-elements';

const screenSize = Dimensions.get('screen')

console.log(screenSize.height)

const Stack = createNativeStackNavigator();

export default function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [modalVisible, setModalVisible] = useState(false)

  const navigationRef = useRef();

  return (
    <userContext.Provider value={{ currentUser, setCurrentUser }}>
      <NavigationContainer style={styles.container} ref={navigationRef}>
        <Header />
        <Stack.Navigator>
          <Stack.Screen
            name="Mountain App"
            component={MainView}
            options={{
              headerTitle: "Mountains",
              headerLeft: ()=>(<Button title="Sort ->" onPress={()=>{setModalVisible(true)}}/>),
            }}
          />
          <Stack.Screen name="SingleMountainPage" component={SingleMountain} initialParams={{ mountain: {} }} />
          <Stack.Screen name="UserPage" component={UserMain} />
        </Stack.Navigator>
        <Footer navigationRef={navigationRef} />
        <View>
          <Modal animationType="slide" transparent={true} visible={modalVisible} >
            <View style={styles.modalView}>
              <Text>Sort mountains by:</Text>
              <Button title="x" onPress={()=>{setModalVisible(false)}}></Button>
              <Button title="Name a-z"></Button>
              <Button title="Name z-a"></Button>
              <Button title="Feet hight to low"></Button>
              <Button title="Feet low to hight"></Button>
            </View>
          </Modal>
        </View>
      </NavigationContainer>
    </userContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 0x2e2d4dff,
    alignItems: "center",
    justifyContent: "center",
  },
  middlesection: {
    flex: 8,
  },
  modalView: {
    marginTop: 'auto',
    marginBottom: 50,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  outterView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 500
  }
});

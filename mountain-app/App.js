import React, { useRef, useState } from "react";
import { StyleSheet, Button, Modal, View, Text, Dimensions, Pressable, TouchableHighlight } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "./src/components/Header";
import MainView from "./src/components/MainView";
import Footer from "./src/components/Footer";
import SingleMountain from "./src/components/SingleMountain";
import UserMain from "./src/components/UserMain";
import { userContext } from "./src/contexts/userContext";
import { TouchableOpacity } from "react-native-web";
// import {FontAwesome} from "@expo/vector-icons"
// import {Icon} from 'react-native-elements';

const screenSize = Dimensions.get("screen");

const Stack = createNativeStackNavigator();

export default function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [sortQuery, setSortQuery] = useState({ sort: 'hillname', order: 'ASC' });

  const navigationRef = useRef();

  return (
    <userContext.Provider value={{ currentUser, setCurrentUser }}>
      <NavigationContainer style={styles.container} ref={navigationRef}>
        <Header />
        <Stack.Navigator>
          <Stack.Screen
            name="Mountain App"
            props={{ sortQuery }}
            options={{
              headerTitle: "Mountains",
              headerLeft: () => (
                <Pressable
                  style={styles.sortButton}
                  onPress={() => {
                    setModalVisible(true);
                  }}
                >
                  <Text style={styles.sortButtonText}>
                    Sort ->
                  </Text>
                </Pressable>
              ),
            }}
          >
            {(props) => <MainView {...props} sortQuery={sortQuery} />}
          </Stack.Screen>
          <Stack.Screen name="SingleMountainPage" component={SingleMountain} initialParams={{ mountain: {} }} />
          <Stack.Screen name="UserPage" component={UserMain} />
        </Stack.Navigator>
        <Footer navigationRef={navigationRef} />
        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
          >
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Sort mountains by:</Text>
              <TouchableHighlight
                  underlayColor={0x6F6DABff}
                  onPressOut={() => {
                    setSortQuery({ sort: "hillname", order: "ASC" });
                    setModalVisible(false);
                  }}
                  style={styles.modalButton}
              >
                    <Text style={styles.modalButtonText}>
                    Name a-z
                    </Text>
              </TouchableHighlight>
              <TouchableHighlight
                  underlayColor={0x6F6DABff}
                  onPressIn={(e) => {console.log(e.target)}}
                  onPress={() => {
                    setSortQuery({ sort: "hillname", order: "DESC" });
                    setModalVisible(false);
                  }}
                  style={styles.modalButton}
              >
                    <Text style={styles.modalButtonText}>
                    Name z-a
                    </Text>
              </TouchableHighlight>
              <TouchableHighlight
                  underlayColor={0x6F6DABff}
                  onPress={() => {
                    setSortQuery({ sort: "feet", order: "DESC" });
                    setModalVisible(false);
                  }}
                  style={styles.modalButton}
              >
                    <Text style={styles.modalButtonText}>
                    Feet hight to low
                    </Text>
              </TouchableHighlight>
              <TouchableHighlight
                  underlayColor={0x6F6DABff}
                  onPress={() => {
                    setSortQuery({ sort: "feet", order: "ASC" });
                    setModalVisible(false);
                  }}
                  style={styles.modalButton}
              >
                    <Text style={styles.modalButtonText}>
                    Feet low to hight
                    </Text>
              </TouchableHighlight>
              <TouchableHighlight
                  underlayColor='0x2e2d4dff'
                  onPress={() => {
                    setModalVisible(false);
                  }}
                  style={styles.modalExitButton}
              >
                    <Text style={styles.modalButtonText}>
                    X
                    </Text>
              </TouchableHighlight>
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
  sortButton: {
    borderColor: 0x2e2d4dff,
    backgroundColor: 0xDDDDF0FF,
    borderWidth: 1,
    borderRadius: 15,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 5,
    paddingBottom: 5
  },
  sortButtonText: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 17
  },
  modalView: {
    marginTop: "auto",
    marginBottom: 0,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 30,
    marginBottom: 18
  },
  outterView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 500,
  },
  modalButton: {
    width: screenSize.width * 0.8,
    backgroundColor: 0xDDDDF0FF,
    borderColor: 0x2e2d4dff,
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 12,
    padding: 6,
  },
  modalButtonText: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 22
  }
});

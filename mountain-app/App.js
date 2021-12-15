import React, { useRef, useState } from "react";
import { StyleSheet, View, Text, Dimensions, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainView from "./src/components/MainView";
import Footer from "./src/components/Footer";
import SingleMountain from "./src/components/SingleMountain";
import UserMain from "./src/components/UserMain";
import { userContext } from "./src/contexts/userContext";
import Header from "./src/components/Header";
import ModalSort from "./src/components/ModalSort";
import ModalSearch from "./src/components/ModalSearch";


const screenSize = Dimensions.get("screen");

const Stack = createNativeStackNavigator();

export default function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [searchBarVisible, setSearchBarVisible] = useState(false);
  const [sortQuery, setSortQuery] = useState({ sort: 'hillname', order: 'ASC' });
  
  const navigationRef = useRef();
  const [searchQueryObj, setSearchQueryObj] = useState({})
  
  return (
    <userContext.Provider value={{ currentUser, setCurrentUser }}>
      <NavigationContainer style={styles.container} ref={navigationRef}>
        <Stack.Navigator>
          <Stack.Screen
            name="Mountain App"
            props={{ sortQuery }}
            options={{
              headerStyle: {
                backgroundColor: 0xAAADC4FF,
              },

              headerTitle: "Mountains",
              headerLeft: () => (
                <Pressable
                  style={styles.sortButton}
                  onPress={() => {
                    setModalVisible(true);
                  }}
                >
                  <Text style={styles.sortButtonText}>
                    Sort
                  </Text>
                </Pressable>
              ),
              headerRight: (props) => <Header {...props} />
            }}
          >
            {(props) => <MainView {...props} sortQuery={sortQuery} searchQueryObj={searchQueryObj} setSearchQueryObj={setSearchQueryObj}/>}
          </Stack.Screen>
          <Stack.Screen
            name="SingleMountainPage"
            component={SingleMountain}
            options={{
              headerTitle: "",
              headerRight: (props) => <Header {...props} />,
              headerStyle: {
                backgroundColor: 0xAAADC4FF,
              },
            }}
            initialParams={{ mountain: {} }}
          />
          <Stack.Screen name="UserPage" component={UserMain}
          options={{
            headerTitle: "",
            headerRight: (props) => <Header {...props} />,
            headerStyle: {
              backgroundColor: 0xAAADC4FF,
            },
          }}
           />
        </Stack.Navigator>
        <Footer navigationRef={navigationRef} setSearchBarVisible={setSearchBarVisible}/>
         <View>
          <ModalSort modalVisible={modalVisible} setModalVisible={setModalVisible} setSortQuery={setSortQuery}/>
           <ModalSearch searchBarVisible={searchBarVisible} setSearchBarVisible={setSearchBarVisible} searchQueryObj={searchQueryObj} setSearchQueryObj={setSearchQueryObj}/>
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
  },
  searchButton: {
    borderColor: 0x2e2d4dff,
    backgroundColor: 0xDDDDF0FF,
    borderWidth: 1,
    borderRadius: 15,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 5,
    paddingBottom: 5
  },
  searchModalView: {
    marginTop: 0,
    marginBottom: 'auto',
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
  searchName: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  }
});

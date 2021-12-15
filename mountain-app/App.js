import React, { useRef, useState } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainView from "./src/components/MainView";
import Footer from "./src/components/Footer";
import SingleMountain from "./src/components/SingleMountain";
import UserMain from "./src/components/UserMain";
import { userContext } from "./src/contexts/userContext";
import Header from "./src/components/Header";

const Stack = createNativeStackNavigator();

export default function App() {
  const [currentUser, setCurrentUser] = useState({});

  const navigationRef = useRef();

  return (
    <userContext.Provider value={{ currentUser, setCurrentUser }}>
      <NavigationContainer style={styles.container} ref={navigationRef}>
        <Stack.Navigator>
          <Stack.Screen
            name="Mountain App"
            component={MainView}
            options={{
              headerStyle: {
                backgroundColor: 0xAAADC4FF,
              },
              headerTitle: "Climbly",
              headerRight: (props) => <Header {...props} />,
            }}
          />
          <Stack.Screen
            name="SingleMountainPage"
            component={SingleMountain}
            initialParams={{ mountain: {} }}
          />
          <Stack.Screen name="UserPage" component={UserMain} />
        </Stack.Navigator>
        <Footer  navigationRef={navigationRef} />
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
});

import React, {useRef} from "react";
import { StyleSheet, View, Text, Button} from "react-native";
import Header from "./src/components/Header";
import MainView from "./src/components/MainView";
import Footer from "./src/components/Footer";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, CardStyleInterpolators } from '@react-navigation/native-stack';
import SingleMountain from './src/components/SingleMountain'
import UserMain from "./src/components/UserMain"

const Stack = createNativeStackNavigator(); 

export default function App() {

  const navigationRef = useRef()

  return (
        <NavigationContainer style={styles.container} ref={navigationRef}>
          <Header />
            <Stack.Navigator>
              <Stack.Screen name="Mountain App" component={MainView}
                options={{
                headerShown: true,
                }} 
              />
              <Stack.Screen name='SingleMountainPage' component={SingleMountain} initialParams={{mountain: {}}}/>
              <Stack.Screen name='UserPage' component={UserMain}/>
            </Stack.Navigator>
          <Footer navigationRef={navigationRef}/>
        </NavigationContainer> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 0x2E2D4DFF,
    alignItems: 'center',
    justifyContent: 'center',
  },
  middlesection: {
    flex: 8,
  }
});
import * as React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import Header from "./src/components/Header";
import MainView from "./src/components/MainView";
import Footer from "./src/components/Footer";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
} 

const Stack = createNativeStackNavigator(); 

export default function App() {
  
  return (
        <NavigationContainer>
          <Header/>
          <Stack.Navigator>
            <Stack.Screen style={styles.navigator} name="Mountain App" component={MainView} options={{headerShown: true}} />
          </Stack.Navigator>
          <Footer />
        </NavigationContainer> 
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigator: {
    flex: 8
  }
});

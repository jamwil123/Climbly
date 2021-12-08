import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "./src/components/Header";
import MainView from "./src/components/MainView";
import Footer from "./src/components/Footer";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";

export default function App() {
  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: "#3498db",
      accent: "#f1c40f",
    },
  };
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Header />
        <MainView />
        <Footer />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

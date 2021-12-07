import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NativeRouter, Route, Routes, Link} from 'react-router-native'
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import MainView from './components/MainView';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';

export default function App() {
  
  return (
    <View style={styles.container}>
      <Header />
      <MainView />
      {/* <NativeRouter>
        <Routes>
          <Route exact path='/' component={<MainView />}></Route >
          <Route path='/hill/:hillnumber' component={<MainView />}></Route>
          <Route path='/loggin' component={<LoginPage />}></Route>
        </Routes>
      </NativeRouter> */}
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

import React from "react";
import { createStackNavigator, NavigationContainer } from "@react-navigation/stack"
// import data
import MainView from "../components/MainView";
import SingleMountain from "../components/SingleMountain";

const MountainStack = createStackNavigator()

const Navigation = () => {
    return (
        <MountainStack.Navigator>
            <MountainStack.Screen name="MountainList" component={MainView}/>
            <MountainStack.Screen name="SingleMountainPage" component={SingleMountain}/>
        </MountainStack.Navigator>
    )
}

export default Navigation;

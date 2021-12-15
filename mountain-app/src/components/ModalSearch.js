import React, { useState } from "react";
import { StyleSheet, Modal, View, Text, TextInput, Dimensions, Pressable, TouchableHighlight, SafeAreaView } from "react-native";
import RangeSlider, { Slider } from 'react-native-range-slider-expo';
import ToggleSwitch from 'toggle-switch-react-native'

const screenSize = Dimensions.get("screen");

const ModalSearch = ({searchBarVisible, setSearchBarVisible, setSearchQueryObj}) => {
    const [hillname, setHillname] = useState(null)
    const [lowestHeight, setLowestHeight] = useState(1640)
    const [highestHeight, setHighestHeight] = useState(4411)
    
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={searchBarVisible}
          >
            <SafeAreaView style={styles.searchModalView}>
                <TextInput
                    placeholder="Hill name: "
                    value={hillname}
                    onChangeText={(text) => setHillname(text)}
                    style={styles.searchName}
                />
                <TouchableHighlight onPress={() => {
                    setSearchQueryObj({
                        name: hillname,
                        lowestHeight: null,
                        highestHeight: null,
                        country: null
                        })
                    setSearchBarVisible(false)
                }} style={styles.searchButton}>
                    <Text style={styles.buttonOutlineText}>Search mountain by name</Text>
                </TouchableHighlight>
                <RangeSlider min={1640} max={4411}
                            fromValueOnChange={value => setLowestHeight(value)}
                            toValueOnChange={value => setHighestHeight(value)}
                            initialFromValue={1640}
                        />
                <TouchableHighlight onPress={() => {
                    setSearchQueryObj({
                        name: null,
                        lowestHeight: lowestHeight,
                        highestHeight: highestHeight,
                        country: null
                        })
                    setSearchBarVisible(false)
                    }} style={styles.searchButton}>
                    <Text style={styles.buttonOutlineText}>Show mountains from: {lowestHeight} feet, to {highestHeight} feet.</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => {
                    setSearchQueryObj({
                        name: null,
                        lowestHeight: null,
                        highestHeight: null,
                        country: 'S'
                        })
                    setSearchBarVisible(false)
                    }} style={styles.searchButton}>
                    <Text style={styles.buttonOutlineText}>Show mountians of Scotland</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => {
                    setSearchQueryObj({
                        name: null,
                        lowestHeight: null,
                        highestHeight: null,
                        country: 'E'
                        })
                    setSearchBarVisible(false)
                    }} style={styles.searchButton}>
                    <Text style={styles.buttonOutlineText}>Show mountains of England</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => {
                    setSearchQueryObj({
                        name: null,
                        lowestHeight: null,
                        highestHeight: null,
                        country: 'W'
                        })
                    setSearchBarVisible(false)
                    }} 
                    style={styles.searchButton}>
                    <Text style={styles.buttonOutlineText}>Show mountains of Wales</Text>
                </TouchableHighlight>
                
                <TouchableHighlight
                    underlayColor='0x2e2d4dff'
                    onPress={() => {
                        setSearchQueryObj({});
                    }}
                    style={styles.searchButton}
                >
                        <Text style={styles.buttonOutlineText}>
                        Show all mountains in the UK
                        </Text>
                </TouchableHighlight>

                <TouchableHighlight
                    underlayColor='0x2e2d4dff'
                    onPress={() => {
                        setSearchBarVisible(false);
                    }}
                    style={styles.modalExitButton}
                >
                        <Text style={styles.modalButtonText}>
                        X
                        </Text>
                </TouchableHighlight>
                </SafeAreaView>
          </Modal>
    );
};

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

export default ModalSearch;
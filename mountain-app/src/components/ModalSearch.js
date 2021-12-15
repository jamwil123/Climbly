import React, { useState } from "react";
import { StyleSheet, Modal, View, Text, TextInput, Dimensions, Pressable, TouchableHighlight, SafeAreaView } from "react-native";
import RangeSlider from 'react-native-range-slider-expo';

const screenSize = Dimensions.get("screen");

const ModalSearch = ({searchBarVisible, setSearchBarVisible, setSearchQueryObj}) => {
    const [hillname, setHillname] = useState(null)
    const [lowestHeight, setLowestHeight] = useState(1640)
    const [highestHeight, setHighestHeight] = useState(4411)
    
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={searchBarVisible}
          >
            <SafeAreaView style={styles.searchModalView}>
                <View style={styles.searchByNameSection}>
                    <Text style={styles.searchTitle}>Search mountain by name:</Text>
                    <TextInput
                        placeholder="Hill name: "
                        value={hillname}
                        onChangeText={(text) => setHillname(text)}
                        style={styles.searchNameInputBox}
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
                        <Text style={styles.searchButtonText}>Search</Text>
                    </TouchableHighlight>
                </View>
                        <View style={styles.searchByCountrySection}>
                            <Text style={styles.searchTitle}>Search mountain by country:</Text>
                            <TouchableHighlight onPress={() => {
                                setSearchQueryObj({
                                    name: null,
                                    lowestHeight: null,
                                    highestHeight: null,
                                    country: 'S'
                                    })
                                setSearchBarVisible(false)
                                }} style={styles.searchButton}>
                                <Text style={styles.searchButtonText}>Show mountians of Scotland</Text>
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
                                <Text style={styles.searchButtonText}>Show mountains of England</Text>
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
                                <Text style={styles.searchButtonText}>Show mountains of Wales</Text>
                            </TouchableHighlight>
                            
                        </View>
                    <Text style={styles.searchTitle}>Search mountain by hight range:</Text>
                    <RangeSlider min={1640} max={4411}
                                fromValueOnChange={value => setLowestHeight(value)}
                                toValueOnChange={value => setHighestHeight(value)}
                                initialFromValue={1640}
                                styleSize='small'
                            />
                <View style={styles.searchByRangeSection}>
                    <TouchableHighlight onPress={() => {
                        setSearchQueryObj({
                            name: null,
                            lowestHeight: lowestHeight,
                            highestHeight: highestHeight,
                            country: null
                            })
                        setSearchBarVisible(false)
                        }} style={styles.searchButton}>
                        <Text style={styles.searchButtonText}>Show mountains from: {lowestHeight} feet, to {highestHeight} feet.</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.searchSectionOther}>
                    <TouchableHighlight
                        underlayColor='0x2e2d4dff'
                        onPress={() => {
                            setSearchQueryObj({});
                        }}
                        style={styles.searchButton}
                    >
                            <Text style={styles.searchButtonText}>
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
                            Close
                            </Text>
                    </TouchableHighlight>
                </View>
                </SafeAreaView>
          </Modal>
    );
};

const styles = StyleSheet.create({
    searchButton: {
      borderColor: 0x2e2d4dff,
      backgroundColor: 0xDDDDF0FF,
      borderWidth: 1,
      borderRadius: 15,
      paddingLeft: 12,
      paddingRight: 12,
      paddingTop: 5,
      paddingBottom: 5,
      marginTop: 5,
      marginBottom: 5,
      width: screenSize.width * 0.8,
      alignItems: 'center'
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
    searchByNameSection: {
        alignItems: "center",
    },
    searchNameInputBox: {
        borderColor: 0x2e2d4dff,
        borderWidth: 1,
        borderRadius: 15,
        width: screenSize.width * 0.8,
        fontSize: 20,
        padding: 6
    },
    searchByRangeSection: {
        alignItems: "center",
    },
    searchByCountrySection: {
        marginTop: 15,
        alignItems: "center",
    },
    searchSectionOther: {
        marginTop: 30,
        marginBottom: 30,
        alignItems: "center",
    },
    searchName: {
      backgroundColor: "white",
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5,
    },
    searchTitle: {
        fontSize: 20,
        marginTop: 3,
        marginBottom: 3
    },
    modalButtonText: {
        fontSize: 20,
        marginTop: 10
    },
    searchButtonText: {
        fontSize: 16
    }
});

export default ModalSearch;
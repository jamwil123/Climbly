import React from "react";
import { StyleSheet, Modal, View, Text, TouchableHighlight, Dimensions } from "react-native";

const screenSize = Dimensions.get("screen");

const ModalSort = ({modalVisible, setModalVisible, setSortQuery}) => {
    return (
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
                    Close
                    </Text>
              </TouchableHighlight>
            </View>
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

export default ModalSort;
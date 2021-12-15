import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Button,
  TouchableOpacity,
} from "react-native";
import Swiper from "react-native-swiper";
import { useContext } from "react";
import { userContext } from "../contexts/userContext";
import UsersCompleteMountain from "./UsersCompleteMountain";
import Achievement from "./Achievement";
import UserMap from "./UserMap";
const screenSize = Dimensions.get("screen");

const UserPage = () => {
  const { currentUser, setCurrentUser } = useContext(userContext);
  const [page, setPage] = React.useState(0);
  return (
    <View>
      <View style={styles.NavContainer}>
          <View style={styles.NavBar}>
            <TouchableOpacity
              onPress={(event) => {
                setPage(1);
              }}
              style={styles.navButton}
            >
              <Text style={styles.navButtonText}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={(event) => {
                setPage(2);
              }}
              style={styles.navButton}
            >
              <Text style={styles.navButtonText}>Completed</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={(event) => {
                setPage(0);
              }}
              style={styles.navButton}
            >
              <Text style={styles.navButtonText}>Badges</Text>
            </TouchableOpacity>
          </View>
      </View>
      <View styles={styles.scrollViewWrap}>
        <ScrollView style={styles.mainview} contentInset={{bottom: 110}}>
          <View style={styles.swipeArea}>
            <Swiper showsButtons={false} showsPagination={false} index={page}>
              <UserMap />
              <UsersCompleteMountain />
              <Achievement />
            </Swiper>
          </View>
          <Button
            title="Log Out"
            onPress={() => {
              setCurrentUser({});
            }}
          />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainview: {
    backgroundColor: 0xe0e1f0FF,
  },
  NavContainer: {
    padding: 6,
    width: "100%",
    height: 50,
    position: "relative",
    alignItems: "center",
    backgroundColor: 0xe0e1f0FF,
  },
  NavBar: {
    marginTop: 0,
    flexDirection: "row",
    backgroundColor: 0xe0e1f0FF,
    width: "100%",
    justifyContent: "space-evenly",
  },
  navButton: {
    width: '33%',
    height: 40,
    borderColor: 0x2e2d4dff,
    backgroundColor: 0xDDDDF0FF,
    borderWidth: 1,
    borderRadius: 15,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 5,
    paddingBottom: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  navButtonText: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 17
  },
  swipeArea: {
    height: 740
  },
  IconBehave: {
    padding: 14,
  },
  scrollViewWrap: {
    paddingBottom: 100,
    paddingTop: 100
  }
});

export default UserPage;

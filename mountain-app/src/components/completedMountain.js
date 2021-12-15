import React from "react";
import { View, StyleSheet } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useContext } from "react";
import { userContext } from "../contexts/userContext";
import { updateUser } from "../utils/api";

export default function CompletedMountain({ mountainObj }) {
  const [checked, setChecked] = React.useState(false);
  const { currentUser, setCurrentUser } = useContext(userContext);
  React.useEffect(() => {
    updateUser(currentUser, currentUser);
  }, [checked]);

  React.useEffect(() => {
    check();
  }, [checked]);

  function check() {
    if (currentUser.userToken) {
      return currentUser.hillsClimbed.filter(
        (mountain) => mountain.hillnumber === mountainObj.hillnumber
      ).length > 0
        ? setChecked(true)
        : setChecked(false);
    }
    return setChecked(false);
  }

  function completed() {
    setCurrentUser((pre) => {
      pre.hillsClimbed.push(mountainObj);
      pre.noOfHillsClimbed += 1;
      pre.totalFeetClimbed += mountainObj.feet;
      return currentUser;
    });
    setChecked(!checked);
  }
  function removed() {
    setCurrentUser((pre) => {
      const mountainArr = pre.hillsClimbed.filter(
        (mountain) => mountain.hillnumber !== mountainObj.hillnumber
      );
      const previousValue = {
        hillsClimbed: [...mountainArr],
        name: pre.name,
        noOfHillsClimbed: (pre.noOfHillsClimbed -= 1),
        totalFeetClimbed: (pre.totalFeetClimbed -=
          mountainObj.feet),
        userToken: pre.userToken,
        img_url: pre.img_url
      };
      return previousValue;
    });
    setChecked(!checked);
  }

  return currentUser.userToken ? (
    <View>
      <BouncyCheckbox
        size={25}
        fillColor="red"
        unfillColor="#FFFFFF"
        text="Completed?"
        iconStyle={{ borderColor: "red" }}
        isChecked={checked}
        disableBuiltInState={true}
        onPress={() => {
          checked ? removed() : completed();
        }}
      />
    </View>
  ) : (
    <View></View>
  );
}

const styles = StyleSheet.create({});

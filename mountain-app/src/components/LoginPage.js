import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import { auth } from "../../firebase";
import { userContext } from "../contexts/userContext";
import { useContext } from "react";
import { getUser, postUser } from "../utils/api";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar_url, setAvatar_url] = useState("");
  const { currentUser, setCurrentUser } = useContext(userContext);
  const [register, setRegister] = useState(false);
  const image = {
    uri: "https://cdn.britannica.com/03/75503-050-F65891FA/volcanic-cone-Japan-Mount-Fuji.jpg",
  };

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        alert(`Registered with: ${user.email}`);
        return userCredentials.user.uid;
      })
      .then((uid) => {
        const newUser = {
          name: name,
          img_url: avatar_url,
        };
        postUser(uid, newUser).then((userObj) => {
          setCurrentUser(userObj);
        });
      })
      .catch((error) => alert(error.message));
  };

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        return userCredentials.user.uid;
      })
      .then((uid) => {
        getUser(uid).then((userObj) => {
          setCurrentUser(userObj);
        });
      })
      .catch((error) => alert(error.message));
  };

  return register === false ? (
    <View style={{ flex: 1, flexDirection: "column", backgroundColor: 0xA0AACCFF }}>
      <ImageBackground
        resizeMode={"cover"}
        imageStyle={{ opacity: 0.6 }}
        style={{ flex: 1, justifyContent: "center", resizeMode: "stretch" }} // must be passed from the parent, the number may vary depending upon your screen size
        source={image}
      >
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={styles.input}
              key={currentUser.userToken}
            />
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              style={styles.input}
              secureTextEntry
            />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleLogin} style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={(event) => {
                event.preventDefault();
                setRegister(true);
              }}
              style={[styles.button, styles.buttonOutline]}
            >
              <Text style={styles.buttonOutlineText}>Not got an account?</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  ) : (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <ImageBackground
        resizeMode={"cover"}
        imageStyle={{ opacity: 0.5 }}
        style={{ flex: 1, justifyContent: "center", resizeMode: "stretch" }} // must be passed from the parent, the number may vary depending upon your screen size
        source={image}
      >
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
          key={currentUser.userToken}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={(text) => setName(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Avatar URL"
          value={avatar_url}
          onChangeText={(text) => setAvatar_url(text)}
          style={styles.input}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
    </ImageBackground>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: 0x2e2d4dff,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
    fontSize: 17
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: 0x2e2d4dff,
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: 0xDDDDF0FF,
    marginTop: 5,
    borderColor: 0x2e2d4dff,
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
  buttonOutlineText: {
    color: 0x2e2d4dff,
    fontSize: 18,
  },
});

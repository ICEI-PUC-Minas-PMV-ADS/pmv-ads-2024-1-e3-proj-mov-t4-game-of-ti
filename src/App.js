import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
// import { PaperProvider } from "react-native-paper";

// import Layout from "./pages/layout";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity
} from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";
// import { View } from "react-native-reanimated/lib/typescript/Animated";
// import Container from "./components/container";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>

      <Image style={styles.image} source={require("./assets/logo.png")} />

      <StatusBar style="auto" />

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="e-mail"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="senha"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot_button}>
          Esqueceu sua senha?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.login_button_container}>
        <Text style={styles.login_button_text}>
          Entrar
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eadcdb',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    height: 500,
    width: 500,
    resizeMode: 'contain'
  },
  inputView: {
    alignSelf: 'stretch',
    width: "70%",
    height: 45,
    margin:5,
    marginLeft: 50,
    marginRight: 50,
    borderBottomColor: '#24353f',
    borderBottomWidth: 2
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 20,
  },
  login_button_container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    width: "70%",
    height: 45,
    borderRadius: 4,
    elevation: 8,
    backgroundColor: "#24353f"
  },
  login_button_text: {
    color: '#fff'
  }
});
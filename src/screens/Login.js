import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import Input from "../components/Input";
import InputPassword from "../components/InputPassword";
import ButtonFlatOpacity from "../components/ButtonFlatOpacity";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Login = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff"></StatusBar>
      <Text style={styles.textHeader1}>Login</Text>
      <View>
        <Input placeholder="Email">
          <FontAwesome name="envelope" size={22} color="#676767" />
        </Input>
        <InputPassword></InputPassword>
        <ButtonFlatOpacity text='Iniciar sesión'></ButtonFlatOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "space-evenly",
    padding: "5%",
  },
  textHeader1:{
    fontSize: 40,
    fontFamily: 'DancingScript',
    textAlign: 'center',
    marginVertical: 40
  }
});

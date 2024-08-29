import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Input from "../components/Input";
import InputPassword from "../components/InputPassword";
import ButtonFlatOpacity from "../components/ButtonFlatOpacity";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { colors } from "../global/colors";

const Login = ({ navigation }) => {
  const redirectTo = () => {
    navigation.navigate("SignUp");
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={false}
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.background}
      ></StatusBar>
      <View style={styles.headerContainer}>
        <Text style={styles.textHeader1}>Login</Text>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputsContainer}>
          <Input placeholder="Email">
            <FontAwesome name="envelope" size={22} color="#676767" />
          </Input>
          <InputPassword></InputPassword>
        </View>
        <ButtonFlatOpacity text="Iniciar sesión"></ButtonFlatOpacity>
      </View>

      <View style={styles.toSignUpContainer}>
        <Text style={styles.textParagraph}>¿Aún no tienes una cuenta?</Text>
        <TouchableOpacity activeOpacity={0.9} onPress={redirectTo}>
          <Text style={[styles.textParagraph, styles.textLink]}>
            Regístrate
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: colors.background,
    justifyContent: "space-evenly",
    padding: "5%",
  },
  imgLogo: {
    height: 150,
    width: 150,
  },
  headerContainer: {
    justifyContent: "center",
  },
  textHeader1: {
    fontSize: 60,
    fontFamily: "DancingScriptBold",
    textAlign: "center",
  },
  formContainer: {
    backgroundColor: "#fff",
    borderRadius: 24,
    paddingHorizontal: "5%",
    paddingVertical: "10%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
    justifyContent: "space-evenly",
    gap: 40,
    marginVertical: "10%",
  },
  inputsContainer: {
    gap: 30,
  },
  toSignUpContainer: {
    alignItems: "center",
    gap: 16,
  },
  textParagraph: {
    fontFamily: "OpenSansRegular",
    fontSize: 16,
  },
  textLink: {
    fontFamily: "OpenSansBold",
    color: colors.morado,
  },
});

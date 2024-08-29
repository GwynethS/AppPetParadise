import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { colors } from "../global/colors";
import ButtonFlatOpacity from "../components/ButtonFlatOpacity";

const Profile = ({ navigation }) => {
  const redirectTo = (page) => {
    navigation.navigate(page);
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.background}
      ></StatusBar>
      <View>
        <Image
          source={require("../../assets/img/account-fill.png")}
          style={styles.imgUser}
        ></Image>
        <Text style={styles.textHeader2}>Usuario</Text>
      </View>

      <View style={styles.noUserLoggedInContainer}>
        <Text style={styles.textParagraph}>
          Para ver la información de tu cuenta
        </Text>
        <View style={styles.noUserLoggedInOptionsContainer}>
          <ButtonFlatOpacity
            text="Iniciar sesión"
            onPress={() => redirectTo("Login")}
            btnStyle={{ backgroundColor: colors.morado }}
          ></ButtonFlatOpacity>
          <Text style={styles.textParagraph}>o</Text>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => redirectTo("SignUp")}
          >
            <Text style={[styles.textParagraph, styles.textLink]}>
              Regístrate
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: "5%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imgUserContainer: {
    height: 150,
    width: 150,
    backgroundColor: "red",
    objectFit: "contain",
  },
  imgUser: {
    height: 150,
    width: 150,
    objectFit: "cover",
  },
  textHeader2: {
    fontFamily: "OpenSansBold",
    fontSize: 20,
    textAlign: "center",
    marginVertical: 20,
  },
  noUserLoggedInContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 30
  },
  noUserLoggedInOptionsContainer:{
    alignItems: "center",
    justifyContent: "center",
    gap: 10
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

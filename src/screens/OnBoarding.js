import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../global/colors";
import ButtonFlatOpacity from "../components/ButtonFlatOpacity";
import Entypo from "@expo/vector-icons/Entypo";

const OnBoarding = ({ navigation }) => {
  const onPress = () => {
    navigation.replace("Main", {
      screen: "Home",
    });
  };
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.marfil}
      ></StatusBar>
      <View style={styles.container}>
        <View>
          <Text style={styles.shopName}>Pet Paradise</Text>
          <Text style={[styles.textHeader3]}>
            Todo lo que tu mascota necesita y más
          </Text>
        </View>
        <Image
          style={styles.img}
          source={{ uri: "https://i.postimg.cc/GtXCh3gj/home-banner-pet.png" }}
        ></Image>
        <ButtonFlatOpacity
          text="Ir al inicio"
          onPress={onPress}
          btnStyle={styles.btnStyle}
        >
          <Entypo name="home" size={24} color="#fff" />
        </ButtonFlatOpacity>
      </View>
    </>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.marfil,
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: "5%",
  },
  textHeader3: {
    fontFamily: "OpenSansBoldItalic",
    fontSize: 18,
    textAlign: "center",
  },
  textHeader4: {
    fontFamily: "OpenSansBold",
    fontWeight: "700",
    fontSize: 16,
    textAlign: "center",
  },
  shopName: {
    fontFamily: "DancingScriptBold",
    fontSize: 60,
    marginVertical: 30,
    textAlign: "center",
  },
  img: {
    height: 250,
    width: 250,
    objectFit: "cover",
  },
  btnStyle: {
    width: "50%",
  },
});

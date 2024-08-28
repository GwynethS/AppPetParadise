import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../global/colors";
import ButtonFlatOpacity from "../components/ButtonFlatOpacity";
import Entypo from "@expo/vector-icons/Entypo";

const OnBoarding = ({ navigation }) => {
  const onPress = () => {
    navigation.replace("Main");
  };
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.marfil}
      ></StatusBar>
      <View style={styles.container}>
        <Text style={[styles.textHeader3, { fontStyle: "italic" }]}>
          Todo lo que tu mascota necesita y más, bienvenido a
        </Text>
        <Text style={styles.shopName}>Pet Paradise</Text>
        <Image
          style={styles.imgHeroSection}
          source={{ uri: "https://i.postimg.cc/GtXCh3gj/home-banner-pet.png" }}
        ></Image>
        <Text style={styles.textParagraph}>
          ¡Descubre el paraíso de las mascotas desde la comodidad de tu hogar y
          bríndales el amor y los cuidados que se merecen!
        </Text>
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
  textHeader2: {
    fontFamily: "OpenSans",
    fontWeight: "700",
    fontSize: 20,
    textAlign: "center",
  },
  textHeader3: {
    fontFamily: "OpenSans",
    fontWeight: "700",
    fontSize: 18,
    textAlign: "center",
  },
  textHeader4: {
    fontFamily: "OpenSans",
    fontWeight: "700",
    fontSize: 16,
    textAlign: "center",
  },
  shopName: {
    fontFamily: "DancingScript",
    fontSize: 60,
  },
  textParagraph: {
    fontFamily: "OpenSans",
    fontSize: 16,
    textAlign: "center",
  },
  imgHeroSection: {
    height: 250,
    width: 250,
    objectFit: "cover",
  },
  btnStyle: {
    width: "50%",
  },
});

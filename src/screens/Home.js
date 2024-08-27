import {
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { colors } from "../global/colors";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import ButtonFlatOpacity from "../components/ButtonFlatOpacity";

const Home = () => {
  const onPress = () => {
    console.log("Pressed");
  };
  return (
    <View style={styles.contaienr}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.marfil}
      ></StatusBar>
      <View style={styles.heroSection}>
        <Text style={styles.textBold}>
          Todo lo que tu mascota necesita y más, bienvenido a
        </Text>
        <Text style={styles.shopName}>Pet Paradise</Text>
        <Text style={styles.textNormal}>
          ¡Descubre el paraíso de las mascotas desde la comodidad de tu hogar y
          bríndales el amor y los cuidados que se merecen!
        </Text>
        <ButtonFlatOpacity text="Comprar ahora" onPress={onPress}>
          <FontAwesome6 name="bag-shopping" size={24} color="#fff" />
        </ButtonFlatOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  heroSection: {
    backgroundColor: colors.marfil,
    alignItems: "center",
    justifyContent: "center",
    padding: "5%",
    gap: 20,
  },
  textBold: {
    fontFamily: "OpenSans",
    fontStyle: "italic",
    fontWeight: "700",
    fontSize: 18,
    textAlign: "center",
  },
  shopName: {
    fontFamily: "DancingScript",
    fontSize: 40,
  },
  textNormal: {
    fontFamily: "OpenSans",
    fontSize: 16,
    textAlign: "center",
  },
});

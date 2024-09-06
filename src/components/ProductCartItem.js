import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import ButtonIcon from "./ButtonIcon";
import Input from "./Input";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { colors } from "../global/colors";

const ProductCartItem = ({ item }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.imgCard} source={{ uri: item.uri }}></Image>
      <View style={{ gap: 10 }}>
        <Text style={styles.textParagraph}>{item.name}</Text>
        <Text style={styles.textHeader4}>{item.price}</Text>
        <View style={styles.inputContainer}>
        <ButtonIcon btnStyle={styles.btnIcon}>
          <FontAwesome5 name="minus" size={20} color={colors.paloRosa} />
        </ButtonIcon>
        <Input value="1" inputMode="numeric" style={{ width: 60 }} styleInputContainer={{padding: 10}}></Input>
        <ButtonIcon btnStyle={styles.btnIcon}>
          <FontAwesome5 name="plus" size={20} color={colors.paloRosa} />
        </ButtonIcon>
      </View>
      </View>
    </View>
  );
};

export default ProductCartItem;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    marginBottom: 30,
  },
  imgCard: {
    borderRadius: 16,
    height: 120,
    width: 120,
    objectFit: "cover",
  },
  textHeader4: {
    fontFamily: "OpenSansBold",
    fontSize: 16,
  },
  textParagraph: {
    fontFamily: "OpenSansRegular",
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    gap: 10,
  },
  btnIcon: {
    shadowColor: "#979797",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
});

import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import ButtonFlatOpacity from "./ButtonFlatOpacity";
import { colors } from "../global/colors";

const ProductCard = ({ item, navigation }) => {
  const screenWidth = Dimensions.get("window").width;
  const onPress = () => {
    console.log("product press");
    navigation.navigate("ProductDetail", { item });
  };
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[styles.card, { width: screenWidth / 2 - 30 }]}
      onPress={onPress}
    >
      <Image style={styles.imgCard} source={{ uri: item.uri }}></Image>
      <View style={styles.productInfoContainer}>
        <Text style={styles.textHeader4}>{item.name}</Text>
        <Text style={styles.textParagraph}>{item.price}</Text>
        <ButtonFlatOpacity
          text="Añadir"
          btnStyle={{ backgroundColor: colors.morado, width: "100%" }}
          onPress={onPress}
        ></ButtonFlatOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 2,
    marginBottom: 16,
    borderRadius: 16,
    backgroundColor: "#fff",
  },
  imgCard: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderTopEndRadius: 16,
    height: 150,
    width: "100%",
    objectFit: "cover",
  },
  productInfoContainer: {
    alignItems: "center",
    gap: 10,
    marginVertical: 10,
    paddingHorizontal: "5%",
  },
  textHeader4: {
    fontFamily: "OpenSansBold",
    fontSize: 16,
    textAlign: "center",
  },
  textParagraph: {
    fontFamily: "OpenSansRegular",
    fontSize: 16,
    textAlign: "center",
  },
});

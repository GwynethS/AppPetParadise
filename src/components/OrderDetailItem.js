import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const OrderDetailItem = ({ item }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.imgCard} source={{ uri: item.imgUrl }}></Image>
      <View style={{ gap: 10 }}>
        <Text style={styles.textParagraph}>{item.name}</Text>
        <Text style={styles.textHeader4}>S/. {item.subTotal.toFixed(2)}</Text>
      </View>
    </View>
  );
};

export default OrderDetailItem;

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
    flexWrap: "wrap",
    width: "90%",
  },
});

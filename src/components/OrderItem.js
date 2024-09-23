import {  StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../global/colors";
import { TouchableOpacity } from "react-native";

const OrderItem = ({ navigation, item }) => {
  const onViewDetail = () => {
    navigation.navigate("OrderDetail", { order: item });
  };

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.card}
      onPress={onViewDetail}
    >
      <View style={{ gap: 10 }}>
        <View style={styles.textRowContainer}>
          <Text style={styles.textHeader4}>Fecha y hora:</Text>
          <Text style={styles.textParagraph}>{item.createdAt}</Text>
        </View>
        <View style={styles.textRowContainer}>
          <Text style={styles.textHeader4}>Total:</Text>
          {item && (
            <Text style={styles.textHeader3}>S/. {item.total ? item.total.toFixed(2) : '0.00'}</Text>
          )}
        </View>
        <Text style={styles.textLink}>Ver detalle</Text>
      </View>
    </TouchableOpacity>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  card: {
    marginBottom: 30,
    padding: "5%",

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
  textRowContainer: {
    flexDirection: "row",
    width: "100%",
    gap: 10,
  },
  textHeader3: {
    fontFamily: "OpenSansBold",
    fontSize: 16,
  },
  textHeader4: {
    fontFamily: "OpenSansSemiBold",
    fontSize: 16,
  },
  textParagraph: {
    fontFamily: "OpenSansRegular",
    fontSize: 16,
    flexWrap: "wrap",
    width: "90%",
  },
  textLink: {
    textAlign: "right",
    fontFamily: "OpenSansBold",
    color: colors.morado,
  },
});

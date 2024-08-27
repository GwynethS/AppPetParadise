import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const ButtonFlatOpacity = ({children, text, btnStyle, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.9} style={[styles.btn, btnStyle]} onPress={onPress}>
      <View style={styles.btnContent}>
        {children}
        <Text style={styles.btnText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonFlatOpacity;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#000",
    borderRadius: 16,
    paddingHorizontal: "5%",
    paddingVertical: "4%",
  },
  btnContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  btnText: {
    fontFamily: "OpenSans",
    fontSize: 16,
    color: "#fff",
    fontWeight: "700",
  },
});

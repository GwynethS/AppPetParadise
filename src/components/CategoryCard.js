import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";

const CategoryCard = ({ item, onPress }) => {
  const screenWidth = Dimensions.get("window").width;
  
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={{ width: screenWidth / 2 - 30}}
      onPress={onPress}
    >
      <Image style={styles.imgCard} source={{ uri: item.imgUrl }}></Image>
      <Text style={[styles.textHeader3, { marginVertical: 10 }]}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  imgCard: {
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
    height: 150,
    width: "100%",
    objectFit: "cover",
  },
  textHeader3: {
    fontFamily: "OpenSansBold",
    fontSize: 18,
    textAlign: "center",
  },
});

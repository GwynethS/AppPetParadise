import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import ButtonIcon from "./ButtonIcon";
import Input from "./Input";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { colors } from "../global/colors";
import Feather from "@expo/vector-icons/Feather";
import { useDispatch } from "react-redux";
import {
  addItemCart,
  reduceItemCart,
  removeItemCart,
} from "../features/cart/cartSlice";
import { TouchableOpacity } from "react-native";

const ProductCartItem = ({ item }) => {
  const dispatch = useDispatch();

  const onPressRemove = () => {
    dispatch(removeItemCart({ ...item }));
  };

  const handleAddItemCart = () => {
    dispatch(addItemCart({ ...item, quantity: 1 }));
  };

  const handleReduceItemCart = () => {
    if (item.quantity > 1) dispatch(reduceItemCart({ ...item }));
  };

  return (
    <View style={styles.card}>
      <Image style={styles.imgCard} source={{ uri: item.imgUrl }}></Image>
      <View style={{ gap: 10 }}>
        <Text style={styles.textParagraph}>{item.name}</Text>
        <Text style={styles.textHeader4}>S/. {item.subTotal.toFixed(2)}</Text>
        <View style={styles.inputContainer}>
          <ButtonIcon btnStyle={styles.btnIcon} onPress={handleReduceItemCart}>
            <FontAwesome5 name="minus" size={20} color={colors.paloRosa} />
          </ButtonIcon>
          <Input
            value={item.quantity.toString()}
            inputMode="numeric"
            style={{ width: 60 }}
            styleInputContainer={{ padding: 10 }}
            readOnly={true}
          ></Input>
          <ButtonIcon btnStyle={styles.btnIcon} onPress={handleAddItemCart}>
            <FontAwesome5 name="plus" size={20} color={colors.paloRosa} />
          </ButtonIcon>
        </View>
      </View>
      <TouchableOpacity activeOpacity={0.9} style={styles.btnRemoveProduct} onPress={onPressRemove}>
        <Feather name="x" size={20} color={colors.paloRosa} />
      </TouchableOpacity>
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
    position: "relative",
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
  btnRemoveProduct: {
    position: "absolute",
    top: 0,
    right: 0,
  },
});

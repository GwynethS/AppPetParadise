import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { colors } from "../global/colors";
import ButtonFlatOpacity from "../components/ButtonFlatOpacity";
import Input from "../components/Input";
import ButtonIcon from "../components/ButtonIcon";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useDispatch } from "react-redux";
import { addItemCart } from "../features/cart/cartSlice";

const ProductDetail = ({ route, navigation }) => {
  const { item } = route.params;
  const [quantityProduct, setQuantityProduct] = useState(1);
  const dispatch = useDispatch();

  const handleButtonAdd = () => {
    setQuantityProduct(Number(quantityProduct) + 1);
  };

  const handleInputChange = () => {
    const value = Number(quantityProduct);
    if (value < 1) setQuantityProduct(1);
  };

  const handleButtonReduce = () => {
    if (quantityProduct > 1) setQuantityProduct(Number(quantityProduct) - 1);
  };

  const onAddProduct = () => {
    dispatch(addItemCart({ ...item, quantity: Number(quantityProduct) }));
    navigation.navigate("Cart");
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={false}
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.background}
      ></StatusBar>
      <Image style={styles.img} source={{ uri: item.imgUrl }}></Image>
      <View style={styles.productInfoContainer}>
        <Text style={styles.textHeader4}>{item.name}</Text>
        <Text style={styles.textHeader2}>S/. {item.price.toFixed(2)}</Text>
      </View>
      <View style={styles.inputContainer}>
        <ButtonIcon btnStyle={styles.btnIcon} onPress={handleButtonReduce}>
          <FontAwesome5 name="minus" size={20} color={colors.paloRosa} />
        </ButtonIcon>
        <Input
          value={quantityProduct.toString()}
          onChangeText={(text) => setQuantityProduct(text)}
          onBlur={handleInputChange}
          inputMode="numeric"
          style={{ width: 70 }}
          styleInputContainer={{ padding: 10 }}
        ></Input>
        <ButtonIcon btnStyle={styles.btnIcon} onPress={handleButtonAdd}>
          <FontAwesome5 name="plus" size={20} color={colors.paloRosa} />
        </ButtonIcon>
      </View>
      <ButtonFlatOpacity
        text="Añadir"
        btnStyle={{ backgroundColor: colors.morado, width: "100%" }}
        onPress={onAddProduct}
      ></ButtonFlatOpacity>
    </ScrollView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: colors.background,
    padding: "5%",
    gap: 25,
  },
  img: {
    height: 400,
    width: "100%",
    objectFit: "cover",
    borderRadius: 16,
  },
  textHeader4: {
    fontFamily: "OpenSansSemiBold",
    fontSize: 18,
  },
  textHeader2: {
    fontFamily: "OpenSansBold",
    fontSize: 24,
  },
  productInfoContainer: {
    gap: 10,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
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
  },
});

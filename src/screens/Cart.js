import { FlatList, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../global/colors";
import ProductCartItem from "../components/ProductCartItem";
import ButtonFlatOpacity from "../components/ButtonFlatOpacity";

const Cart = () => {
  const products = [
    {
      id: 1,
      name: "ROPA",
      price: "S/. 10",
      uri: "https://i.postimg.cc/9QKc7Mm8/category-clothes.jpg",
    },
    {
      id: 2,
      name: "ACCESORIOS",
      price: "S/. 10",
      uri: "https://i.postimg.cc/L8nH5fpg/category-accessories.jpg",
    },
    {
      id: 3,
      name: "JUGUETES",
      price: "S/. 10",
      uri: "https://i.postimg.cc/7LzwMkbx/category-toys.jpg",
    },
    {
      id: 4,
      name: "COMIDA",
      price: "S/. 10",
      uri: "https://i.postimg.cc/Y9wkdsmQ/category-food.jpg",
    },
    {
      id: 5,
      name: "ROPA",
      price: "S/. 10",
      uri: "https://i.postimg.cc/9QKc7Mm8/category-clothes.jpg",
    },
    {
      id: 6,
      name: "ACCESORIOS",
      price: "S/. 10",
      uri: "https://i.postimg.cc/L8nH5fpg/category-accessories.jpg",
    },
    {
      id: 7,
      name: "JUGUETES",
      price: "S/. 10",
      uri: "https://i.postimg.cc/7LzwMkbx/category-toys.jpg",
    },
    {
      id: 8,
      name: "COMIDA",
      price: "S/. 10",
      uri: "https://i.postimg.cc/Y9wkdsmQ/category-food.jpg",
    },
  ];
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.background}
      ></StatusBar>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        style={{ height: "90%" }}
        renderItem={({ item }) => (
          <ProductCartItem item={item}></ProductCartItem>
        )}
      ></FlatList>
      <View style={styles.cartFooter}>
        <View style={styles.cartTotal}>
          <Text style={styles.textHeader3}>Total: </Text>
          <Text style={styles.textTotal}>S/. 100.00</Text>
        </View>
        <ButtonFlatOpacity text="Comprar"></ButtonFlatOpacity>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    padding: "5%",
    paddingBottom: 0,
    backgroundColor: colors.background,
  },
  textHeader3: {
    fontFamily: "OpenSansSemiBold",
    fontSize: 18,
  },
  textTotal: {
    fontFamily: "OpenSansBold",
    fontSize: 18,
  },
  cartFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "10%",
  },
  cartTotal: {
    flexDirection: "row",
    alignItems: 'baseline'
  }
});

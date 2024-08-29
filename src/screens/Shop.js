import {
  FlatList,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import React from "react";
import { colors } from "../global/colors";
import SearchInput from "../components/SearchInput";
import ProductCard from "../components/ProductCard";

const Shop = ({ navigation }) => {
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
      <SearchInput placeholder="Ingresar producto"></SearchInput>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        columnWrapperStyle={{ gap: 20, marginBottom: 20 }}
        renderItem={({ item }) => <ProductCard item={item} navigation={navigation}></ProductCard>}
      ></FlatList>
    </View>
  );
};

export default Shop;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    // justifyContent: "space-evenly",
    padding: "5%",
    gap: 30,
  },
});

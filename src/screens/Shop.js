import {
  FlatList,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "../global/colors";
import SearchInput from "../components/SearchInput";
import ProductCard from "../components/ProductCard";
import { useGetProductsQuery } from "../services/shop";
import Feather from "@expo/vector-icons/Feather";

const Shop = ({ route, navigation }) => {
  const category = route?.params?.category || null;

  const { data: products, isLoading, refetch } = useGetProductsQuery(category);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchProduct, setSearchProduct] = useState("");

  useEffect(() => {
    if (products) {
      onSearch();
    } else {
      setFilteredProducts([]);
    }
  }, [products]);

  const removeCategoryFilter = () => {
    navigation.setParams({ category: null });
  };

  const onSearch = () => {
    if (searchProduct) {
      setFilteredProducts(
        products.filter((product) =>
          product.name.toLowerCase().includes(searchProduct.toLocaleLowerCase())
        )
      );
    } else setFilteredProducts(products);
  };

  useEffect(() => {
    if (!searchProduct) {
      if (products) setFilteredProducts(products);
      else setFilteredProducts([]);
    }
  }, [searchProduct]);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.background}
      ></StatusBar>
      <SearchInput
        placeholder="Ingresar producto"
        value={searchProduct}
        onChangeText={(text) => setSearchProduct(text)}
        onSearch={onSearch}
      ></SearchInput>
      {category && (
        <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
          <Pressable
            style={styles.categoryFilter}
            onPress={removeCategoryFilter}
          >
            <Text style={styles.categoryFilterText}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Text>
            <Feather name="x" size={20} color={colors.paloRosa} />
          </Pressable>
        </View>
      )}
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        columnWrapperStyle={{ gap: 20, marginBottom: 20 }}
        renderItem={({ item }) => (
          <ProductCard item={item} navigation={navigation}></ProductCard>
        )}
      ></FlatList>
    </View>
  );
};

export default Shop;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: "5%",
    paddingBottom: 0,
    gap: 30,
  },
  categoryFilter: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: colors.paloRosa,
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 5,
    padding: 5,
  },
  categoryFilterText: {
    fontFamily: "OpenSansSemiBold",
    color: colors.paloRosa,
    fontSize: 16,
  },
});

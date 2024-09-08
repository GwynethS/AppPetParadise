import { FlatList, StatusBar, StyleSheet, View } from "react-native";
import React, { useCallback } from "react";
import { colors } from "../global/colors";
import SearchInput from "../components/SearchInput";
import ProductCard from "../components/ProductCard";
import { useGetProductsQuery } from "../services/shop";
import { useFocusEffect } from "@react-navigation/native";

const Shop = ({ route, navigation }) => {
  const category = route?.params?.category || null;

  const {data: products, isLoading} = useGetProductsQuery(category);

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
});

import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import CategoryCard from "../components/CategoryCard";

const Home = () => {
  const categories = [
    {
      id: 1,
      name: "ROPA",
      uri: "https://i.postimg.cc/9QKc7Mm8/category-clothes.jpg",
    },
    {
      id: 2,
      name: "ACCESORIOS",
      uri: "https://i.postimg.cc/L8nH5fpg/category-accessories.jpg",
    },
    {
      id: 3,
      name: "JUGUETES",
      uri: "https://i.postimg.cc/7LzwMkbx/category-toys.jpg",
    },
    {
      id: 4,
      name: "COMIDA",
      uri: "https://i.postimg.cc/Y9wkdsmQ/category-food.jpg",
    },
  ];
  const onPress = () => {
    console.log("Pressed");
  };
  return (
    <View
      style={styles.container}
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#fff"
      ></StatusBar>
      <Text style={[styles.textHeader2, { marginVertical: 40 }]}>
        CATEGORÍAS
      </Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        columnWrapperStyle={{gap: 20, marginBottom: 20}}
        renderItem={({ item }) => <CategoryCard item={item}></CategoryCard>}
        style={styles.cardsContainer}
      ></FlatList>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  textHeader2: {
    fontFamily: "OpenSans",
    fontWeight: "700",
    fontSize: 20,
    textAlign: "center",
  },
  textHeader3: {
    fontFamily: "OpenSans",
    fontWeight: "700",
    fontSize: 18,
    textAlign: "center",
  },
  textHeader4: {
    fontFamily: "OpenSans",
    fontWeight: "700",
    fontSize: 16,
    textAlign: "center",
  },
  shopName: {
    fontFamily: "DancingScript",
    fontSize: 40,
  },
  textParagraph: {
    fontFamily: "OpenSans",
    fontSize: 16,
    textAlign: "center",
  },
  imgHeroSection: {
    height: 150,
    width: 150,
    objectFit: "cover",
  },
  cardsContainer: {
    marginHorizontal: "5%",
  },
});

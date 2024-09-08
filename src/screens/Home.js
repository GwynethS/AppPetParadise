import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import CategoryCard from "../components/CategoryCard";
import { colors } from "../global/colors";
import { useGetCategoriesQuery } from "../services/shop";

const Home = () => {
  const {data: categories, isLoading} = useGetCategoriesQuery();
  
  const onPress = () => {
    console.log("Pressed");
  };
  return (
    <View
      style={styles.container}
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.background}
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
    backgroundColor: colors.background,
    alignItems: "center",
  },
  textHeader2: {
    fontFamily: "OpenSansBold",
    fontSize: 20,
    textAlign: "center",
  },
  textParagraph: {
    fontFamily: "OpenSansRegular",
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

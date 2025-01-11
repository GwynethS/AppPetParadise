import { FlatList, StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import CategoryCard from "../components/CategoryCard";
import { colors } from "../global/colors";
import { useGetCategoriesQuery } from "../services/shop";
import { setLoading } from "../features/loading/loadingSlice";
import { useDispatch } from "react-redux";

const Home = ({ navigation }) => {
  const { data: categories, isLoading, refetch} = useGetCategoriesQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if(isLoading) dispatch(setLoading(true));
    else dispatch(setLoading(false));
  }, [isLoading]);

  const onPressCategory = (category) => {
    navigation.navigate("Shop", {
      screen: "Products",
      params: { category },
    });
  };
  return (
    <View style={styles.container}>
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
        columnWrapperStyle={{ gap: 20, marginBottom: 20 }}
        renderItem={({ item }) => (
          <CategoryCard
            item={item}
            onPress={() => onPressCategory(item.name.toLowerCase())}
          ></CategoryCard>
        )}
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

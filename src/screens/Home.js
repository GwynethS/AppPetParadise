import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { colors } from "../global/colors";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import ButtonFlatOpacity from "../components/ButtonFlatOpacity";
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
    <View style={styles.contaienr}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.marfil}
      ></StatusBar>
      <View style={styles.heroSection}>
        <Text style={[styles.textHeader3, { fontStyle: "italic" }]}>
          Todo lo que tu mascota necesita y más, bienvenido a
        </Text>
        <Text style={styles.shopName}>Pet Paradise</Text>
        <Image
          style={styles.imgHeroSection}
          source={{ uri: "https://i.postimg.cc/GtXCh3gj/home-banner-pet.png" }}
        ></Image>
        <Text style={styles.textParagraph}>
          ¡Descubre el paraíso de las mascotas desde la comodidad de tu hogar y
          bríndales el amor y los cuidados que se merecen!
        </Text>
        <ButtonFlatOpacity text="Comprar ahora" onPress={onPress}>
          <FontAwesome6 name="bag-shopping" size={24} color="#fff" />
        </ButtonFlatOpacity>
      </View>
      <Text style={[styles.textHeader2, { marginVertical: 20 }]}>
        CATEGORÍAS
      </Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
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
  heroSection: {
    backgroundColor: colors.marfil,
    alignItems: "center",
    justifyContent: "center",
    padding: "5%",
    gap: 20,
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
    margin: "5%",
  },
});

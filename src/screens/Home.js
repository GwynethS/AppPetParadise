import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import React from "react";

const Home = () => {
  return (
    <View style={styles.contaienr}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff"></StatusBar>
      <View>
        <Text>Todo lo que tu mascota necesita y más, bienvenido a</Text>
        <Text>Pet Paradise</Text>
        <Text>
          ¡Descubre el paraíso de las mascotas desde la comodidad de tu hogar y
          bríndales el amor y los cuidados que se merecen!
        </Text>
        <TouchableHighlight style={styles.btn}>
          <Text>Comprar ahora</Text>
        </TouchableHighlight>
      </View>
      <Text>Home</Text>
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
});

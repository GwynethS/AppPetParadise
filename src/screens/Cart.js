import { FlatList, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../global/colors";
import ProductCartItem from "../components/ProductCartItem";
import ButtonFlatOpacity from "../components/ButtonFlatOpacity";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { usePostOrderMutation } from "../services/shop";

const Cart = ({navigation}) => {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.auth);
  const localId = useSelector((state) => state.auth.localId);
  const [triggerPostOrder] = usePostOrderMutation();
  const dispatch = useDispatch();

  const onCheckout = () => {
    if (cart.items.length > 0) {
      if (user.localId) {
        const createdAt = new Date().toLocaleString();
        const order = {
          ...cart,
          createdAt,
        };
        triggerPostOrder({ localId, order });
        dispatch(clearCart());
      }else{
        navigation.navigate('Login');
      }
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.background}
      ></StatusBar>
      <FlatList
        data={cart.items}
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
          <Text style={styles.textTotal}>S/. {cart.total.toFixed(2)}</Text>
        </View>
        <ButtonFlatOpacity
          text="Comprar"
          onPress={onCheckout}
        ></ButtonFlatOpacity>
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
    alignItems: "baseline",
  },
});

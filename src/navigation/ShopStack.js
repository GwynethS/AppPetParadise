import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProductDetail, Shop } from "../screens";

const Stack = createNativeStackNavigator();

const ShopStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Products" component={Shop} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
};

export default ShopStack;
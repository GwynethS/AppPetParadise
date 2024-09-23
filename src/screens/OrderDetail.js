import { FlatList, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import OrderDetailItem from "../components/OrderDetailItem";
import { colors } from "../global/colors";

const OrderDetail = ({ route }) => {
  const { order } = route.params;

  const items = order.items;

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.background}
      ></StatusBar>
      <View style={styles.textRowContainer}>
        <Text style={styles.textHeader4}>Fecha y hora:</Text>
        <Text style={styles.textParagraph}>{order.createdAt}</Text>
      </View>
      <Text style={styles.textHeader4}>ítems: </Text>
      <FlatList
        data={order.items}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        style={{ height: "90%" }}
        renderItem={({ item }) => (
          <OrderDetailItem item={item}></OrderDetailItem>
        )}
      ></FlatList>
      <View style={[styles.textRowContainer, {justifyContent: 'flex-end'}]}>
        <Text style={styles.textHeader4}>Total: </Text>
        <Text style={styles.textTotal}>S/. {order.total.toFixed(2)}</Text>
      </View>
    </View>
  );
};

export default OrderDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: "5%",
    gap: 20
  },
  textRowContainer: {
    flexDirection: "row",
    width: "100%",
    gap: 10,
  },
  textHeader3: {
    fontFamily: "OpenSansBold",
    fontSize: 16,
  },
  textHeader4: {
    fontFamily: "OpenSansSemiBold",
    fontSize: 16,
  },
  textParagraph: {
    fontFamily: "OpenSansRegular",
    fontSize: 16,
    flexWrap: "wrap",
    width: "90%",
  },
  textTotal: {
    fontFamily: "OpenSansBold",
    fontSize: 18,
  },
});

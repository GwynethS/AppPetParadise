import {
  Image,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { colors } from "../global/colors";
import ButtonFlatOpacity from "../components/ButtonFlatOpacity";
import { useDispatch, useSelector } from "react-redux";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { clearUser } from "../features/auth/authSlice";
import { useGetOrdersByUserQuery } from "../services/shop";
import OrderItem from "../components/OrderItem";

const Profile = ({ navigation }) => {
  const user = useSelector((state) => state.auth);
  const {
    data: orders,
    isLoading,
    refetch,
  } = useGetOrdersByUserQuery(user.localId);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(clearUser());
  };

  const redirectTo = (page) => {
    navigation.navigate(page);
  };

  return (
    <View
      style={[
        styles.container,
        user.idToken
          ? { justifyContent: "flex-start" }
          : { justifyContent: "space-between" },
      ]}
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.background}
      ></StatusBar>
      <View style={{ alignItems: "center", marginTop: 30, width: "100%" }}>
        {user.idToken && (
          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.btnLogut}
            onPress={onLogout}
          >
            <MaterialIcons name="logout" size={30} color={colors.paloRosa} />
          </TouchableOpacity>
        )}
        <Image
          source={require("../../assets/img/account-fill.png")}
          style={styles.imgUser}
        ></Image>
        {user.idToken && <Text style={styles.textHeader2}>{user.email}</Text>}
      </View>

      {!user.idToken && (
        <View style={styles.noUserLoggedInContainer}>
          <Text style={styles.textParagraph}>
            Para ver la información de tu cuenta
          </Text>
          <View style={styles.noUserLoggedInOptionsContainer}>
            <ButtonFlatOpacity
              text="Iniciar sesión"
              onPress={() => redirectTo("Login")}
              btnStyle={{ backgroundColor: colors.morado }}
            ></ButtonFlatOpacity>
            <Text style={styles.textParagraph}>o</Text>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => redirectTo("SignUp")}
            >
              <Text style={[styles.textParagraph, styles.textLink]}>
                Regístrate
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {user.idToken && (
        <View style={styles.ordersContainer}>
          <Text style={styles.textHeader2}>Mis órdenes</Text>
          <FlatList
            data={orders}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <OrderItem item={item} navigation={navigation} />
            )}
            showsVerticalScrollIndicator={false}
          ></FlatList>
        </View>
      )}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: "5%",
    alignItems: "center",
  },
  btnLogut: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  imgUser: {
    height: 150,
    width: 150,
    objectFit: "cover",
  },
  textHeader2: {
    fontFamily: "OpenSansBold",
    fontSize: 20,
    textAlign: "center",
    marginVertical: 20,
  },
  noUserLoggedInContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
  },
  noUserLoggedInOptionsContainer: {
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  textParagraph: {
    fontFamily: "OpenSansRegular",
    fontSize: 16,
  },
  textLink: {
    fontFamily: "OpenSansBold",
    color: colors.morado,
  },
  ordersContainer: {
    flex: 1
  },
});

import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "../global/colors";
import ButtonFlatOpacity from "../components/ButtonFlatOpacity";
import { useDispatch, useSelector } from "react-redux";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { clearUser } from "../features/auth/authSlice";
import { useGetOrdersByUserQuery } from "../services/shop";
import OrderItem from "../components/OrderItem";
import ImageSelector from "../components/ImageSelector";
import * as ImagePicker from "expo-image-picker";
import {
  useGetUserQuery,
  usePatchImageProfileMutation,
} from "../services/user";
import { deleteSession } from "../db";
import { setLoading } from "../features/loading/loadingSlice";

const Profile = ({ navigation }) => {
  const user = useSelector((state) => state.auth);
  const {
    data: userData, isLoading: isLoadingUser
  } = useGetUserQuery({ localId: user.localId });
  const [triggerAddImageProfile] = usePatchImageProfileMutation();
  const [image, setImage] = useState(null);
  const [pressSelectImage, setPressSelectImage] = useState(false);

  const {
    data: orders,
    isLoading: isLoadingOrders,
    refetch,
  } = useGetOrdersByUserQuery(user.localId);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoadingUser || isLoadingOrders) dispatch(setLoading(true));
    else dispatch(setLoading(false));
  }, [isLoadingUser, isLoadingOrders]);

  useEffect(() => {
    if (userData) setImage(userData.image);
    else setImage(null);
  }, [userData]);

  const onLogout = async () => {
    dispatch(setLoading(true)); 
    await deleteSession(); 
    dispatch(clearUser()); 
    dispatch(setLoading(false)); 
  };

  const redirectTo = (page) => {
    navigation.navigate(page);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
      base64: true,
    });

    if (!result.canceled) {
      setImage("data:image/jpg;base64," + result.assets[0].base64);
      setPressSelectImage(true);
    }
  };

  const verifyCameraPermissions = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();

    if (!granted) {
      return false;
    }
    return true;
  };

  const takePhoto = async () => {
    const isCameraOk = await verifyCameraPermissions();

    if (isCameraOk) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
        base64: true,
      });

      if (!result.canceled) {
        setImage("data:image/jpg;base64," + result.assets[0].base64);
        setPressSelectImage(true);
      }
    }
  };

  const saveImage = () => {
    triggerAddImageProfile({ image, localId: user.localId });
    setPressSelectImage(false);
  };

  const deleteImage = () => {
    triggerAddImageProfile({ image: null, localId: user.localId });
    setImage(null);
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
        <ImageSelector
          image={image}
          pressSelectImage={pressSelectImage}
          pickImage={pickImage}
          takePhoto={takePhoto}
          saveImage={saveImage}
          deleteImage={deleteImage}
        ></ImageSelector>
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
    flex: 1,
  },
});

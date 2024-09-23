import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Input from "../components/Input";
import InputPassword from "../components/InputPassword";
import ButtonFlatOpacity from "../components/ButtonFlatOpacity";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { colors } from "../global/colors";
import { useLoginMutation } from "../services/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import { deleteSession, insertSession } from "../db";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorUsername, setErrorUsername] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [triggerLogin, { data, isSuccess, isError, error }] = useLoginMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      setErrorEmail("email existente");
    }
  }, [isError]);

  const onSubmit = async () => {
    try {
      //registerSchema.validateSync({ email, password, confirmPassword });
      const { data } = await triggerLogin({ email, password });
      deleteSession();
      insertSession(data);
      dispatch(
        setUser({
          email: data.email,
          idToken: data.idToken,
          localId: data.localId,
        })
      );

      navigation.navigate("Main", {
        screen: "Home"
      });
    } catch (error) {
      switch (error.path) {
        case "email":
          setErrorEmail(error.message);
          setErrorPassword("");
          break;
        case "password":
          setErrorEmail("");
          setErrorPassword(error.message);
          break;
      }
    }
  };

  const redirectTo = () => {
    navigation.navigate("SignUp");
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={false}
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.background}
      ></StatusBar>
      <View style={styles.headerContainer}>
        <Text style={styles.textHeader1}>Login</Text>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputsContainer}>
          <Input placeholder="Email" value={email} onChangeText={(text) => setEmail(text)}>
            <FontAwesome name="envelope" size={22} color="#676767" />
          </Input>
          <InputPassword value={password} onChangeText={(text) => setPassword(text)}></InputPassword>
        </View>
        <ButtonFlatOpacity text="Iniciar sesión" onPress={onSubmit}></ButtonFlatOpacity>
      </View>

      <View style={styles.toSignUpContainer}>
        <Text style={styles.textParagraph}>¿Aún no tienes una cuenta?</Text>
        <TouchableOpacity activeOpacity={0.9} onPress={redirectTo}>
          <Text style={[styles.textParagraph, styles.textLink]}>
            Regístrate
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: colors.background,
    justifyContent: "space-evenly",
    padding: "5%",
  },
  imgLogo: {
    height: 150,
    width: 150,
  },
  headerContainer: {
    justifyContent: "center",
  },
  textHeader1: {
    fontSize: 60,
    fontFamily: "DancingScriptBold",
    textAlign: "center",
  },
  formContainer: {
    backgroundColor: "#fff",
    borderRadius: 24,
    paddingHorizontal: "5%",
    paddingVertical: "10%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
    justifyContent: "space-evenly",
    gap: 40,
    marginVertical: "10%",
  },
  inputsContainer: {
    gap: 30,
  },
  toSignUpContainer: {
    alignItems: "center",
    gap: 16,
  },
  textParagraph: {
    fontFamily: "OpenSansRegular",
    fontSize: 16,
  },
  textLink: {
    fontFamily: "OpenSansBold",
    color: colors.morado,
  },
});

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
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { colors } from "../global/colors";
import { useSignupMutation } from "../services/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorUsername, setErrorUsername] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [triggerSignUp, { data, isSuccess, isError, error }] = useSignupMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      setErrorEmail("email existente");
    }
  }, [isError]);

  const onSubmit = async () => {
    try {
      //registerSchema.validateSync({ email, password, confirmPassword });
      const { data } = await triggerSignUp({ email, password });
      //deleteSession();
      //insertSession(data);
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
    navigation.navigate("Login");
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
        <Text style={styles.textHeader1}>Sign Up</Text>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputsContainer}>
          <Input placeholder="Email" value={email} onChangeText={(text) => setEmail(text)}>
            <FontAwesome name="envelope" size={22} color="#676767" />
          </Input>
          <InputPassword value={password} onChangeText={(text) => setPassword(text)}></InputPassword>
        </View>
        <ButtonFlatOpacity text="Regístrate" onPress={onSubmit}></ButtonFlatOpacity>
      </View>

      <View style={styles.toLoginContainer}>
        <Text style={styles.textParagraph}>¿Ya tienes una cuenta?</Text>
        <TouchableOpacity activeOpacity={0.9} onPress={redirectTo}>
          <Text style={[styles.textParagraph, styles.textLink]}>
            Iniciar sesión
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignUp;

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
  toLoginContainer: {
    alignItems: "center",
    justifyContent: "center",
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

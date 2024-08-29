import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { colors } from "../global/colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const InputPassword = ({ value, errors = [], onChangeText }) => {
  const [showValue, setShowValue] = useState(false);

  const toggleShowValue = () => setShowValue(!showValue);

  return (
    <View style={styles.container}>
      <View style={styles.inputErrorContainer}>
        <View style={styles.inputContainer}>
          <FontAwesome name="lock" size={24} color="#676767" />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            placeholderTextColor="#676767"
            secureTextEntry={!showValue}
            value={value}
            onChangeText={onChangeText}
          ></TextInput>
          <TouchableOpacity activeOpacity={0.8} onPress={toggleShowValue}>
            <MaterialCommunityIcons name={!showValue ? "eye-off" : 'eye'} size={24} color="#676767" />
          </TouchableOpacity>
        </View>
        {errors.length > 0 && (
          <View style={[styles.errorContainer]}>
            <Text style={styles.textError}>{errors.join(" ")}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default InputPassword;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  inputErrorContainer: {
    flex: 1,
  },
  inputContainer: {
    fontFamily: "OpenSansRegular",
    fontWeight: "normal",
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
    backgroundColor: "#ededed",
    padding: 16,
    borderRadius: 24,
  },
  input: {
    fontSize: 16,
    flex: 1,
  },
  inputNumeric: {
    textAlign: "center",
  },
  errorContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  textError: {
    textAlign: "right",
    paddingRight: 8,
    color: colors.errorText,
    fontWeight: "500",
    marginTop: 8,
  },
});

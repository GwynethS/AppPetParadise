import { StyleSheet, TextInput, View, Text } from "react-native";
import React from "react";
import { colors } from "../global/colors";

const Input = ({
  placeholder,
  children,
  value,
  errors = [],
  onChangeText,
  style,
  styleInputContainer,
  secureTextEntry,
  inputMode,
  readOnly,
  onBlur
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.inputErrorContainer}>
        <View style={[styles.inputContainer, styleInputContainer]}>
          {children}
          <TextInput
            style={[
              styles.input,
              inputMode === "numeric" && styles.inputNumeric,
            ]}
            placeholder={placeholder}
            placeholderTextColor="#676767"
            secureTextEntry={secureTextEntry}
            value={value}
            onChangeText={onChangeText}
            inputMode={inputMode}
            readOnly={readOnly}
            onBlur={onBlur}
          ></TextInput>
        </View>
        {errors.length > 0 && (
          <View style={[styles.errorContainer]}>
            <Text style={styles.textError}>{errors.join(' ')}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  inputErrorContainer: {
    flex: 1,
  },
  inputContainer: {
    fontFamily: "OpenSansRegular",
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
    fontFamily: "OpenSansSemiBold",
    color: colors.errorText,
    marginTop: 8,
  },
});

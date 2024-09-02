import { StyleSheet, View } from "react-native";
import React from "react";
import Input from "./Input";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { colors } from "../global/colors";
import ButtonIcon from "./ButtonIcon";

const SearchInput = ({
  placeholder,
  value,
  errors,
  onChangeText,
  onSearch,
}) => {
  return (
    <View style={styles.inputSearchContainer}>
      <Input
        placeholder={placeholder}
        value={value}
        errors={errors}
        onChangeText={onChangeText}
        style={styles.inputSearch}
      ></Input>
      <ButtonIcon
        btnStyle={{backgroundColor: colors.paloRosa, borderRadius: 24}}
        onPress={onSearch}
      >
        <FontAwesome name="search" size={24} color="#fff" />
      </ButtonIcon>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  inputSearchContainer: {
    flexDirection: "row",
    gap: 10,
  },
  inputSearch: {
    flex: 3,
  },
});

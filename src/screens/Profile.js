import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../global/colors";

const Profile = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.background}
      ></StatusBar>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: colors.background,
    padding: "5%",
  }
});

import { Platform, StatusBar, StyleSheet, View } from "react-native";
import React from "react";
import { ActivityIndicator } from "react-native-paper";
import { colors } from "../global/colors";
import { useSelector } from "react-redux";

const Loading = () => {
  const isLoading = useSelector((state) => state.loading.visible);

  return (
    <View style={[styles.container, isLoading ? {display: 'flex'} : {display: 'none'}]}>
      <View style={styles.loadingIndicatorBox}>
        <ActivityIndicator animating={true} color={colors.paloRosa} size={60} />
      </View>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.20)",
    position: "absolute",
    left: 0,
    height: "100%",
    width: '100%',
    zIndex: 1000,
  },
  loadingIndicatorBox: {
    backgroundColor: "#fff",
    width: "auto",
    padding: "5%",
    borderRadius: 20,

    shadowColor: "rgba(0, 0, 0, 0.50)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

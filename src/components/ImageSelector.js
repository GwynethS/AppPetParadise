import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Modal, Portal } from "react-native-paper";
import { colors } from "../global/colors";
import ButtonFlatOpacity from "./ButtonFlatOpacity";
import { TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

const ImageSelector = ({
  image,
  pressSelectImage,
  pickImage,
  takePhoto,
  deleteImage,
  saveImage,
}) => {
  const user = useSelector((state) => state.auth);
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <>
      <View style={styles.imageContainer}>
        <Image
          source={
            image
              ? { uri: image }
              : require("../../assets/img/account-fill.png")
          }
          style={styles.imgUser}
        ></Image>
        {!pressSelectImage && user.localId && (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={showModal}
            style={styles.btnSelectImage}
          >
            <FontAwesome name="camera" size={24} color={colors.paloRosa} />
          </TouchableOpacity>
        )}
        {pressSelectImage && user.localId && (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={saveImage}
            style={styles.btnSelectImage}
          >
            <FontAwesome6 name="check" size={24} color={colors.paloRosa} />
          </TouchableOpacity>
        )}
      </View>

      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={styles.modalContainer}
        >
          <Text style={styles.modalTitle}>Seleccione una opción</Text>
          <View style={styles.btnModalContainer}>
            <ButtonFlatOpacity
              text="Cámara"
              btnStyleContent={styles.btnColumn}
              onPress={() => {
                hideModal();
                takePhoto();
              }}
            >
              <FontAwesome name="camera" size={24} color="#fff" />
            </ButtonFlatOpacity>
            <ButtonFlatOpacity
              text="Galería"
              btnStyleContent={styles.btnColumn}
              onPress={() => {
                hideModal();
                pickImage();
              }}
            >
              <MaterialCommunityIcons
                name="folder-multiple-image"
                size={24}
                color="#fff"
              />
            </ButtonFlatOpacity>

            {image && (
              <ButtonFlatOpacity
                text="Eliminar"
                btnStyle={{ backgroundColor: colors.paloRosa }}
                btnStyleContent={styles.btnColumn}
                onPress={() => {
                  deleteImage();
                  hideModal();
                }}
              >
                <MaterialCommunityIcons name="delete" size={24} color="#fff" />
              </ButtonFlatOpacity>
            )}
          </View>
        </Modal>
      </Portal>
    </>
  );
};

export default ImageSelector;

const styles = StyleSheet.create({
  imgUser: {
    height: 150,
    width: 150,
    objectFit: "cover",
    borderRadius: 100,
  },
  imageContainer: {
    position: "relative",
  },
  btnSelectImage: {
    position: "absolute",
    right: 0,
    bottom: 10,
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  btnDelete: {
    backgroundColor: colors.errorButton,
  },
  image: {
    borderRadius: 4,
    height: 200,
    objectFit: "contain",
  },
  modalContainer: {
    borderRadius: 20,
    backgroundColor: "#fff",
    padding: "5%",
    marginHorizontal: "5%",
    height: "40%",
    justifyContent: "space-evenly",
  },
  modalTitle: {
    fontFamily: "OpenSansBold",
    fontSize: 20,
    textAlign: "center",
  },
  btnModalContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 20,
    flexWrap: "wrap",
    marginTop: 30,
  },
  btnColumn: {
    flexDirection: "column",
    paddingVertical: 5,
  },
});

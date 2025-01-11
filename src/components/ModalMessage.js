import { View, Image, StyleSheet, Text } from "react-native";
import React from "react";
import { Modal, Portal } from "react-native-paper";
import { colors } from "../global/colors";
import ButtonFlatOpacity from "./ButtonFlatOpacity";

const ModalMessage = ({
  visible = false,
  type = 'warning',
  title = "",
  message = "",
  confirmActionText = 'OK',
  onConfirmAction = () => {},
  cancelActionText = 'Cancelar',
  onCancelAction = () => {},
  showCancelAction = false,
  onDismiss = () => {}
}) => {

  const getIcon = () => {
    switch (type) {
      case "success":
        return require("../../assets/icons/success.png");
      case "warning":
        return require("../../assets/icons/warning.png");
      case "error":
      default:
        return require("../../assets/icons/error.png");
    }
  };

  const getColor = () => {
    switch (type) {
      case "success":
        return colors.successButton;
      case "warning":
        return colors.warningButton;
      case "error":
      default:
        return colors.errorButton;
    }
  };

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onDismiss}
        contentContainerStyle={styles.modalContainer}
      >
        <Image style={styles.icon} source={getIcon()}></Image>

        <Text style={styles.modalTitle}>{title}</Text>

        <Text style={styles.validationMessage}>{message}</Text>

        <View style={styles.btnContainer}>
          {showCancelAction && (
            <ButtonFlatOpacity
              styleBtn={{
                backgroundColor: colors.cancelButton,
                paddingHorizontal: 20,
              }}
              text={cancelActionText}
              onPress={onCancelAction}
            ></ButtonFlatOpacity>
          )}
          <ButtonFlatOpacity
            styleBtn={{ backgroundColor: getColor(), paddingHorizontal: 20 }}
            text={confirmActionText}
            onPress={onConfirmAction}
          ></ButtonFlatOpacity>
        </View>
      </Modal>
    </Portal>
  );
};

export default ModalMessage;

const styles = StyleSheet.create({
  modalContainer: {
    borderRadius: 20,
    backgroundColor: "#fff",
    padding: "5%",
    marginHorizontal: "5%",
    alignItems: "center",
    gap: 20,
  },
  icon: {
    height: 60,
    width: 60,
  },
  modalTitle: {
    fontFamily: "OpenSansBold",
    fontSize: 20,
    textAlign: "center",
  },
  validationMessage: {
    textAlign: "center",
    fontSize: 16,
    fontFamily: "OpenSansSemiBold",
    color: "#464646",
  },
  btnContainer: {
    width: '100%',
    flexDirection: "row",
    justifyContent: 'center',
    gap: 20,
    marginTop: 20,
  },
});

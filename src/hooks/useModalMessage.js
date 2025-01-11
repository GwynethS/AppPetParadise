import { useCallback, useState } from "react";

export const useModalMessage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalConfig, setModalConfig] = useState({
    type: "warning",
    title: "",
    message: "",
    confirmActionText: "OK",
    onConfirmAction: () => {},
    cancelActionText: "Cancelar",
    onCancelAction: () => {},
    showCancelAction: false,
    onDismiss: () => {}
  });

  const showModal = useCallback(
    (config) => {
      setModalConfig({
        ...modalConfig,
        ...config,
      });
      setModalVisible(true);
    },
    [modalConfig]
  );

  const hideModal = useCallback(() => {
    setModalVisible(false);
  }, []);

  return {
    modalVisible,
    modalConfig,
    showModal,
    hideModal
  }
};

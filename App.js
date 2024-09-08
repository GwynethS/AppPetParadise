import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { fonts } from "./src/global/fonts";
import Navigator from "./src/navigation/Navigator";
import { Provider } from "react-redux";
import { store } from "./src/app/store";

export default function App() {
  const [fontLoaded] = useFonts(fonts);

  if (!fontLoaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}

const styles = StyleSheet.create({});

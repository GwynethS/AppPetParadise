import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { fonts } from "./src/global/fonts";
import Navigator from "./src/navigation/Navigator";

export default function App() {
  const [fontLoaded] = useFonts(fonts);

  if (!fontLoaded) {
    return null;
  }
  return <Navigator />;
}

const styles = StyleSheet.create({});

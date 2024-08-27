import { StyleSheet } from "react-native";
import Home from "./src/screens/Home";
import { useFonts } from "expo-font";
import { fonts } from "./src/global/fonts";

export default function App() {
  const [fontLoaded] = useFonts(fonts);

  if (!fontLoaded) {
    return null;
  }
  return <Home></Home>;
}

const styles = StyleSheet.create({});

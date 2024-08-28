import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { fonts } from "./src/global/fonts";
import Navigator from "./src/navigation/Navigator";
import { Login } from "./src/screens";

export default function App() {
  const [fontLoaded] = useFonts(fonts);

  if (!fontLoaded) {
    return null;
  }
  return (
    //<Navigator />;
    <Login></Login>
  );
}

const styles = StyleSheet.create({});

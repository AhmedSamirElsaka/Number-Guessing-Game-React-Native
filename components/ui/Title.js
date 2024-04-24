import { View, Text, StyleSheet, Platform } from "react-native";
import { useFonts } from "expo-font";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    // fontFamily: "open-sans-bold",
    fontSize: 26,
    fontWeight: "bold",
    color: "cornsilk",
    textAlign: "center",
    borderWidth: 3,
    borderColor: "white",
    padding: 8,
    maxWidth: "90%",
    width: "300",
  },
});

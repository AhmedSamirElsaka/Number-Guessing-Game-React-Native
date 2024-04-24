import { View, StyleSheet } from "react-native";

// import {View , StyleSheet
function Card({ children }) {
  return <View style={styles.inputContainer}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginHorizontal: 16,
    borderRadius: 8,
    elevation: 16,
    marginTop: 36,
    backgroundColor: "#601733",
    alignItems: "center",
    justifyContent: "",
  },
});

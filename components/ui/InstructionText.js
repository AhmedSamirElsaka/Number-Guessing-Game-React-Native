import { View, StyleSheet, Text } from "react-native";

function InstructionText({ children }) {
  return (
    <View>
      <Text style={styles.instructionText}>{children}</Text>
    </View>
  );
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: "yellow",
    fontSize: 24,
    marginBottom: 16,
  },
});

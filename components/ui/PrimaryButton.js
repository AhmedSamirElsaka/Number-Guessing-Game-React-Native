import { Pressable, Text, View, StyleSheet } from "react-native";

function PrimaryButton({ children, onPress, newStyle }) {
  return (
    <View style={[styles.buttonOuterContainer]}>
      <Pressable
        style={({ preesed }) =>
          preesed
            ? [styles.buttonInnerContainer, styles.preesed]
            : [styles.buttonInnerContainer, newStyle]
        }
        android_ripple={{ color: "#caa235" }}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#dfc820",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 18,
  },
  preesed: {
    opacity: 0.75,
  },
});

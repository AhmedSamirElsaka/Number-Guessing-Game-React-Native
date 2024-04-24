import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

// function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
//   return (
//     <View style={styles.rootContainer}>
//       <Title>Game is over !</Title>
//       <View style={styles.imagecontainer}>
//         <Image
//           source={require("../assets/images/success.png")}
//           style={styles.image}
//         />
//       </View>
//       <Text style={styles.summaryText}>
//         Your phone needed<Text style={styles.higlight}> {roundsNumber}</Text>{" "}
//         rounds to guess the number{" "}
//         <Text style={styles.higlight}>{userNumber}</Text> .
//       </Text>
//       <View style={styles.newGameButtonContainer}>
//         <PrimaryButton newStyle={styles.newGameButton} onPress={onStartNewGame}>
//           Start new game{" "}
//         </PrimaryButton>
//       </View>
//     </View>
//   );
// }

// export default GameOverScreen;

// const styles = StyleSheet.create({
//   rootContainer: {
//     flex: 1,
//     padding: 24,
//     justifyContent: "center",
//     alignItems: "center ",
//   },
//   imagecontainer: {
//     height: 300,
//     width: 300,
//     borderRadius: 150,
//     borderWidth: 3,
//     borderColor: "yellow",
//     overflow: "hidden",
//     margin: 36,
//   },
//   image: {
//     width: "100%",
//     height: "100%",
//   },
//   higlight: {
//     color: "red",
//     fontWeight: "bold",
//     fontSize: 30,
//   },
//   summaryText: {
//     fontSize: 24,
//     textAlign: "center",
//   },
//   newGameButton: {
//     backgroundColor: "skyblue",
//   },
//   newGameButtonContainer: {
//     marginTop: 16,
//   },
// });
function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>GAME OVER!</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            style={styles.image}
            source={require("../assets/images/success.png")}
          />
        </View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.highlight}>{userNumber}</Text>.
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
}

export default GameOverScreen;

// const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    // borderRadius: deviceWidth < 380 ? 75 : 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    // fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    // fontFamily: 'open-sans-bold',
    color: "red",
    fontSize: 30,
    fontWeight: "bold",
  },
});

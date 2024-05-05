import React from "react";
import AppPicker from "../components/Picker";
import Screen from "../components/Screen";
import { StyleSheet, ImageBackground, Image } from "react-native";

const categories = [
  { label: "Demande De Congé", value: 1 },
  { label: "Modifier Le Congé", value: 2 },
  { label: "Annuler Le Congé", value: 3 },
];

function Congé(props) {
  return (
    <ImageBackground
      blurRadius={50}
      style={styles.background}
      source={require("../assets/welcomebackground.jpg")}
    >
      <Screen>
        <AppPicker
          items={categories}
          icon="apps"
          placeholder="Congé De Travaille"
        />
      </Screen>
      <Image
        style={styles.image}
        source={require("../assets/bonTravail1.png")}
      ></Image>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-start",
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginBottom: 20,
    marginTop: 150,
  },
});

export default Congé;

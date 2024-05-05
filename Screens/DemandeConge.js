import React from "react";
import {
  Text,
  StyleSheet,
  ImageBackground,
  Alert,
  ScrollView,
} from "react-native";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import * as Yup from "yup";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import { Formik } from "formik";
import axios from "axios";

function DemandeCongé({ navigation }) {
  const validationSchema = Yup.object().shape({
    nomPrenom: Yup.string().required().label("Nom et Prénom"),
    email: Yup.string().required().email().label("Email"),
    dateDebut: Yup.string().required().label("Date de début"),
    dateFin: Yup.string().required().label("Date de fin"),
  });

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post(
        "http://192.168.1.15:3000/conge/demande-conge",
        values
      );
      console.log(response.data);
      navigation.goBack();
      Alert.alert("Demande de congé envoyée avec succès!");
    } catch (error) {
      console.error("Erreur lors de l'envoi de la demande de congé:", error);
      Alert.alert(
        "Erreur",
        "Une erreur s'est produite. Veuillez réessayer plus tard."
      );
    }
  };

  return (
    <ImageBackground
      blurRadius={50}
      style={styles.background}
      source={require("../assets/welcomebackground.jpg")}
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Screen style={styles.container}>
          <Formik
            initialValues={{
              nomPrenom: "",
              email: "",
              dateDebut: "",
              dateFin: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {({ handleChange, handleSubmit, errors, touched }) => (
              <>
                <Text style={styles.title}>Demande de Congé !</Text>

                <AppTextInput
                  autoCorrect={false}
                  placeholder="Nom et Prénom"
                  onChangeText={handleChange("nomPrenom")}
                  style={styles.input}
                />
                <AppText style={{ color: "red" }}>{errors.nomPrenom}</AppText>

                <AppTextInput
                  autoCorrect={false}
                  placeholder="Email"
                  keyboardType="email-address"
                  onChangeText={handleChange("email")}
                  style={styles.input}
                />
                <AppText style={{ color: "red" }}>{errors.email}</AppText>

                <AppTextInput
                  autoCorrect={false}
                  placeholder="JJ/MM/AAAA"
                  onChangeText={handleChange("dateDebut")}
                  keyboardType="numeric"
                  style={styles.input}
                />
                <AppText style={{ color: "red" }}>{errors.dateDebut}</AppText>

                <AppTextInput
                  autoCorrect={false}
                  placeholder="JJ/MM/AAAA"
                  onChangeText={handleChange("dateFin")}
                  keyboardType="numeric"
                  style={styles.input}
                />
                <AppText style={{ color: "red" }}>{errors.dateFin}</AppText>

                <AppButton
                  style={styles.Button}
                  title="Demande de Congé"
                  onPress={handleSubmit}
                />
              </>
            )}
          </Formik>
        </Screen>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 20,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
  },
  container: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
    color: colors.marron,
    fontStyle: "italic",
    marginTop: 50,
    textAlign: "center",
  },
  input: {
    borderColor: "#ddd",
    padding: 5,
    marginBottom: 5,
    fontSize: 20,
  },
  Button: {
    backgroundColor: colors.beige,
    marginBottom: 30,
    justifyContent: "center",
  },
});

export default DemandeCongé;

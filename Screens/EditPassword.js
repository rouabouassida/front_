import React, { useState } from "react";
import { StyleSheet, Alert } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import AppForm from "../components/forms/AppForm";
import AppFormField from "../components/forms/AppFormField";
import SubmitButton from "../components/forms/SubmitButton";

const validationSchema = Yup.object().shape({
  currentPassword: Yup.string().required().label("Mot de passe actuel"),
  newPassword: Yup.string().required().min(6).label("Nouveau mot de passe"),
  confirmPassword: Yup.string()
    .oneOf(
      [Yup.ref("newPassword"), null],
      "Les mots de passe doivent correspondre"
    )
    .label("Confirmation du nouveau mot de passe"),
});

function EditPassword() {
  const handlePasswordChange = (values) => {
    const { currentPassword, newPassword } = values;
    // Insérer ici la logique pour changer le mot de passe
    console.log(
      "Changement de mot de passe effectué :",
      currentPassword,
      newPassword
    );
    Alert.alert("Succès", "Le mot de passe a été modifié avec succès.");
  };

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        }}
        onSubmit={handlePasswordChange}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCorrect={false}
          icon="lock"
          name="currentPassword"
          placeholder="Mot de passe actuel"
          secureTextEntry
        />
        <AppFormField
          autoCorrect={false}
          icon="lock"
          name="newPassword"
          placeholder="Nouveau mot de passe"
          secureTextEntry
        />
        <AppFormField
          autoCorrect={false}
          icon="lock"
          name="confirmPassword"
          placeholder="Confirmer le nouveau mot de passe"
          secureTextEntry
        />
        <SubmitButton title="Enregistrer" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: "auto",
  },
});

export default EditPassword;

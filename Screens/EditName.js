import React, { useState } from "react";
import { StyleSheet } from "react-native";

import Screen from "../components/Screen";
import AppForm from "../components/forms/AppForm";
import AppFormField from "../components/forms/AppFormField";
import SubmitButton from "../components/forms/SubmitButton";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Nom"),
});
// Composant parent où vous récupérez les informations de l'utilisateur connecté
function ParentComponent() {
  // Suppose que vous avez récupéré les informations de l'utilisateur dans cet état
  const [userData, setUserData] = useState(null);

  // Fonction pour mettre à jour le nom de l'utilisateur
  const handleSaveName = (newName) => {
    // Envoyer la demande de mise à jour du nom à votre backend
    // Assurez-vous de mettre à jour les informations de l'utilisateur dans votre backend et dans l'état local si nécessaire
  };

  // Rendu du composant EditName avec les informations de l'utilisateur
  return <EditName userData={userData} onSave={handleSaveName} />;
}

function EditName({ currentName, onSave }) {
  const [newName, setNewName] = useState(currentName);

  const handleSubmit = () => {
    // Appel de la fonction onSave avec le nouveau nom
    onSave(newName);
  };

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ name: currentName }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Nom"
          onChangeText={setNewName} // Met à jour le state avec le nouveau nom
        />
        <SubmitButton title="Enregistrer" onPress={handleSubmit} />
      </AppForm>
    </Screen>
  );
}

// Utilisation du composant EditName avec les informations de l'utilisateur
<EditName currentName={userData.name} onSave={handleSaveName} />;
const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: "auto",
  },
});

export default EditName;

// SuivieEmployer.js

import React from "react";
import { StyleSheet, Alert } from "react-native";
import * as Yup from "yup";
//import { useNavigation } from "@react-navigation/native";

import Screen from "../components/Screen";
import AppForm from "../components/forms/AppForm";
import AppFormField from "../components/forms/AppFormField";
import SubmitButton from "../components/forms/SubmitButton";

const validationSchema = Yup.object().shape({
  id: Yup.string().required().label("ID"),
  name: Yup.string().required().label("NAME"),
});

function SuivieEmployer() {
  /*const navigation = useNavigation();

  const handleFollow = () => {
    navigation.navigate("FollowEmployerScreen");
  };
*/
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ id: "", name: "" }}
        // onSubmit={() => console.log("Submit handler")}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCorrect={false}
          icon="account"
          name="id"
          placeholder="ID"
        />
        <AppFormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="NAME"
        />
        <SubmitButton
          title="Follow Employer"
          //onPress={handleFollow}
        />
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

export default SuivieEmployer;

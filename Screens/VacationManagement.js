import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import colors from "../config/colors";

const VacationManagement = ({ vacationData }) => {
  const handleConfirmation = (index) => {
    Alert.alert(
      "Confirmation",
      "Êtes-vous sûr de vouloir accorder ce congé ?",
      [
        {
          text: "Non",
          style: "cancel",
          onPress: () => {
            console.log("E-mail de refus envoyé");
          },
        },
        {
          text: "Oui",
          onPress: () => {
            console.log("E-mail d'acceptation envoyé");
          },
        },
      ]
    );
  };

  return (
    <ScrollView horizontal={true} vertical={true}>
      <View style={styles.container}>
        <View style={styles.table}>
          <View style={styles.headerRow}>
            <Text style={[styles.headerCell, styles.cell, { width: "20%" }]}>
              Nom de l'employé
            </Text>
            <Text style={[styles.headerCell, styles.cell, { width: "20%" }]}>
              Nombre d'heures de travail (3 mois)
            </Text>
            <Text style={[styles.headerCell, styles.cell, { width: "20%" }]}>
              Date de début congé
            </Text>
            <Text style={[styles.headerCell, styles.cell, { width: "20%" }]}>
              Nombre de fin congé
            </Text>
            <Text style={[styles.headerCell, styles.cell, { width: "20%" }]}>
              Action
            </Text>
          </View>
          {vacationData && vacationData.length > 0 ? (
            vacationData.map((item, index) => (
              <View key={index} style={styles.row}>
                <Text style={[styles.cell, styles.text, { width: "20%" }]}>
                  {item.employeeName}
                </Text>
                <Text style={[styles.cell, styles.text, { width: "20%" }]}>
                  {item.hoursWorked}
                </Text>
                <Text style={[styles.cell, styles.text, { width: "20%" }]}>
                  {item.vacationDate}
                </Text>
                <Text style={[styles.cell, styles.text, { width: "20%" }]}>
                  {item.daysRequested}
                </Text>
                <TouchableOpacity
                  onPress={() => handleConfirmation(index)}
                  style={[styles.button, { width: "20%" }]}
                >
                  <Text style={styles.buttonText}>Gérer</Text>
                </TouchableOpacity>
              </View>
            ))
          ) : (
            <Text>Aucune donnée de congé disponible</Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 20,
    minWidth: "100%", // Permet d'élargir la vue parente pour éviter que le bouton ne soit masqué
  },
  button: {
    backgroundColor: colors.beige,
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: "flex-end",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  table: {
    borderWidth: 1,
    borderColor: "#ddd",
  },
  headerRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    backgroundColor: "#f2f2f2",
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    alignItems: "center",
  },
  cell: {
    textAlign: "center",
    padding: 10,
    borderRightWidth: 1,
    borderRightColor: "#ddd",
  },
  text: {
    textAlign: "center",
  },
  headerCell: {
    fontWeight: "bold",
  },
});

export default VacationManagement;

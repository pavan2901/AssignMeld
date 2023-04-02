import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  DatePickerIOS
} from "react-native";
import firebase from "react-native-firebase";

export default function Page1({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [occupation, setOccupation] = useState("");
  const [company, setCompany] = useState("");
  const handlePress = () => {
    const db = firebase.firestore();
    db.collection("users")
      .add({
        firstName,
        lastName,
        dateOfBirth,
        occupation,
        company
      })
      .then(() => {
        navigation.navigate("page2", {
          firstName,
          lastName,
          dateOfBirth,
          occupation,
          company
        });
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>First Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setFirstName(text)}
        value={firstName}
      />
      <Text style={styles.label}>Last Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setLastName(text)}
        value={lastName}
      />
      <Text style={styles.label}>Date of Birth</Text>
      <DatePickerIOS
        style={styles.datePicker}
        date={dateOfBirth}
        onDateChange={(date) => setDateOfBirth(date)}
      />
      <Text style={styles.label}>Occupation</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setOccupation(text)}
        value={occupation}
      />
      <Text style={styles.label}>Company</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setCompany(text)}
        value={company}
      />
      <Button title="Save" onPress={handlePress} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 5
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10
  },
  datePicker: {
    marginBottom: 20
  }
});

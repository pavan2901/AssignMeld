import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function page2({ route }) {
  const {
    firstName,
    lastName,
    dateOfBirth,
    occupation,
    company
  } = route.params;
  const ageInMs = Date.now() - dateOfBirth.getTime();
  const ageInYears = Math.floor(ageInMs / (1000 * 60 * 60 * 24 * 365));
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {firstName} {lastName} is {ageInYears} years old and working as a{" "}
        {occupation} in {company}.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 18,
    textAlign: "center"
  }
});

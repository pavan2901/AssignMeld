import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Page1 from "./screens/page1";
import Page2 from "./screens/page2";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Page1"
          component={Page1}
          options={{ title: "page 1" }}
        />
        <Stack.Screen
          name="Page2"
          component={Page2}
          options={{ title: "page 2" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

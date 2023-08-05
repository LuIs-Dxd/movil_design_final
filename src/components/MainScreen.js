import React from "react";
import { View, Text, Button } from "react-native";

const MainScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Main Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate("Home")}
      />
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate("Settings")}
      />
    </View>
  );
};

export default MainScreen;

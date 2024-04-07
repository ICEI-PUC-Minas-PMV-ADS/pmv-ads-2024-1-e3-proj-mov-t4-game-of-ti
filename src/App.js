import React from "react";
import { PaperProvider, Text } from "react-native-paper";
import { View, StyleSheet } from "react-native";

const App = () => {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text>Hello World</Text>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
});

export default App;

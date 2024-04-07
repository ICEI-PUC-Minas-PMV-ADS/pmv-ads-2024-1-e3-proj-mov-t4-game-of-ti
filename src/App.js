import React, { useState } from "react";
import { StyleSheet, Alert } from "react-native";
import { PaperProvider, Button, Text } from "react-native-paper";

import Layout from "./pages/layout";

const App = () => {
  return (
    <PaperProvider>
      <Layout></Layout>
    </PaperProvider>
  );
};

export default App;
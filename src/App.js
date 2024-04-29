import React from "react";
import { PaperProvider } from "react-native-paper";

import Layout from "./pages/layout";

const App = () => {
  return (
    <PaperProvider>
      <Layout></Layout>
    </PaperProvider>
  );
};

export default App;
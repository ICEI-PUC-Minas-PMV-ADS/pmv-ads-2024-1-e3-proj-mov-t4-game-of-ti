import React from "react";
import { PaperProvider } from "react-native-paper";

import Layout from "./pages/layout";

const loadData = useCallback(async () => {
  try {
    const db = await connectToDatabase()
    await createTables(db)
  } catch (error) {
    console.error(error)
  }
}, [])

useEffect(() => {
  loadData()
}, [loadData])

const App = () => {
  return (
    <PaperProvider>
      <Layout></Layout>
    </PaperProvider>
  );
};

export default App;
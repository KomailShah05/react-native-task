import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import Home from "./pages/Home";
// import QueryClient from "./providers/QueryClient";
import AppQueryProvider from "./providers/QueryClient";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
});

function App() {
  return (
    <AppQueryProvider>
      <View style={styles.container}>
        <Home />
        <Text>React Native App</Text>
      </View>
    </AppQueryProvider>
  );
}

export default App;

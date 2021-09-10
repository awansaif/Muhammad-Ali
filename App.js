import React from "react";
import Route from "./routes/Route";
import { useFonts } from "expo-font";
import { ActivityIndicator, View } from "react-native";

const App = () => {
  const [fontsLoaded] = useFonts({
    poppins: require("./assets/fonts/Poppins-Light.ttf"),
    gothic: require("./assets/fonts/MS-Gothic.ttf"),
  });
  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, JustifyContent: "center" }}>
        <ActivityIndicator color="#070707" />
      </View>
    );
  }
  return <Route />;
};

export default App;

import React from "react";
import Route from "./routes/Route";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const App = () => {
  const [fontsLoaded] = useFonts({
    poppins: require("./assets/fonts/Poppins-Light.ttf"),
    gothic: require("./assets/fonts/MS-Gothic.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return <Route />;
};

export default App;

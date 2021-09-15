import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Photos from "../screens/photo/Photos";

const Stack = createNativeStackNavigator();

const SongStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Photo" component={Photos} />
    </Stack.Navigator>
  );
};

export default SongStack;

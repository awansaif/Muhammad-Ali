import React from "react";
import { Image, StatusBar, StyleSheet, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={require("../assets/images/logo.png")} />
      <StatusBar backgroundColor="#040404" />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 8,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: "#040404",
    flexDirection: "row",
    justifyContent: "center",
  },
  bar: {
    backgroundColor: "#040404",
  },
});

export default Header;

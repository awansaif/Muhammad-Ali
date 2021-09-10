import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Quote = ({ quote }) => {
  return (
    <View style={styles.quote}>
      <Text adjustsFontSizeToFit style={styles.text}>
        "{quote && quote.contents.quotes[0].quote}"
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  quote: {
    marginVertical: 30,
    paddingHorizontal: 15,
  },
  text: {
    fontFamily: "gothic",
    fontSize: 16,
    textAlign: "center",
    color: "#e6d4d4",
    textTransform: "uppercase",
  },
});

export default Quote;

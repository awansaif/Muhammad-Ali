import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const Quote = () => {
  const [quote, setQuote] = useState("");
  useEffect(() => {
    fetch("https://quotes.rest/qod?language=en", {
      accept: "application/json",
    })
      .then((res) => res.json())
      .then((data) => setQuote(data.contents.quotes[0].quote));
  }, []);
  return (
    <View style={styles.quote}>
      <Text adjustsFontSizeToFit style={styles.text}>
        "{quote && quote}"
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
    fontFamily: "poppins",
    fontSize: 16,
    textAlign: "center",
    color: "#e6d4d4",
    textTransform: "uppercase",
  },
});

export default Quote;

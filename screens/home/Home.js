import React, { useState } from "react";
import { StyleSheet, View, RefreshControl, ScrollView } from "react-native";
import Time from "./Time";
import Weather from "./Weather";
import Quote from "./Quote";
import Header from "../../components/Header";
import useFetch from "../../hooks/useFetch";

export default function Home() {
  const {
    data: weather,
    refreshing,
    setRefreshing,
  } = useFetch(
    "https://api.openweathermap.org/data/2.5/weather?q=Multan&units=metric&appid=1a5eca88b0c2cb459728b38e85285c2e"
  );

  const { data: quote } = useFetch("https://quotes.rest/qod?language=en");

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };
  return (
    <View style={styles.home}>
      <Header />
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            progressBackgroundColor="#3e3939"
            tintColor="#fff"
            colors={["#fff", "#eee"]}
            titleColor="#fff"
          />
        }
      >
        <View style={styles.content}>
          <Time />
          <Weather data={weather} />
          <Quote quote={quote} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: "#222831",
  },
  content: {
    marginTop: 5,
  },
});

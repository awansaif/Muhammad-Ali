import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  RefreshControl,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import Time from "./Time";
import Weather from "./Weather";
import Quote from "./Quote";
import Header from "../../components/Header";
import useFetch from "../../hooks/useFetch";
import * as Location from "expo-location";

export default function Home() {
  const [refreshing, setRefreshing] = useState(false);
  const [location, setLocation] = useState("");
  useEffect(() => {
    getLocation();
  }, []);
  async function getLocation() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access location was denied");
      return;
    }
    let lo = await Location.getLastKnownPositionAsync({
      accuracy: 6,
    });
    setLocation(lo.coords);
    // setLoaded(false);
  }
  const url =
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
    location.latitude +
    "&lon=" +
    location.longitude +
    "&units=metric&appid=629708f6a196e2e5354ba453f8af240f";
  const { data: weather } = useFetch(url);

  const { data: quote } = useFetch("https://quotes.rest/qod?language=en");

  const onRefresh = () => {
    setRefreshing(true);
    getLocation();
    setRefreshing(false);
  };

  if (!quote) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          backgroundColor: "#373131",
        }}
      >
        <ActivityIndicator color="#fff" size="large" />
      </View>
    );
  }

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

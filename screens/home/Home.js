import React, { useState } from "react";
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
import { useFonts } from "expo-font";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default function Home() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  };
  const [fontsLoaded] = useFonts({
    poppins: require("../../assets/fonts/Poppins-Light.ttf"),
  });
  if (!fontsLoaded) {
    return <ActivityIndicator />;
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
          <Weather />
          <Quote />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: "#373131",
  },
  content: {
    marginTop: 5,
  },
});

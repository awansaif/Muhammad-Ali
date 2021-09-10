import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Header from "../../components/Header";
import { useFonts } from "expo-font";

const Profile = () => {
  const [data, setData] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const [fontsLoaded] = useFonts({
    poppins: require("../../assets/fonts/Poppins-Light.ttf"),
  });

  fetch = () => {
    setRefreshing(true);
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setRefreshing(false);
      });
  };

  useEffect(() => {
    fetch();
  }, []);

  const onRefresh = () => {
    fetch();
  };

  if (!data || !fontsLoaded) {
    return <ActivityIndicator />;
  }
  return (
    <View style={styles.profile}>
      <Header />
      <ScrollView
        refreshControl={
          <RefreshControl
            onRefresh={onRefresh}
            refreshing={refreshing}
            progressBackgroundColor="#3e3939"
            tintColor="#fff"
            colors={["#fff", "#eee", "#070606", "#3e3e3e"]}
            titleColor="#fff"
          />
        }
      >
        <View style={styles.content}>
          <View style={styles.images}>
            <View style={styles.imageBox}>
              {data && (
                <Image
                  source={{
                    uri: data[0].thumbnailUrl,
                  }}
                  style={styles.image}
                />
              )}
              <Text style={styles.name}>MIAN MUHAMMAD</Text>
            </View>
            <View style={styles.imageBox}>
              {data && (
                <Image
                  source={{
                    uri: data[1].thumbnailUrl,
                  }}
                  style={styles.image}
                />
              )}
              <Text style={styles.name}>SIAF UR REHMAN</Text>
            </View>
            <View style={styles.imageBox}>
              {data && (
                <Image
                  source={{
                    uri: data[2].thumbnailUrl,
                  }}
                  style={styles.image}
                />
              )}
              <Text style={styles.name}>HAMZA REHMAN</Text>
            </View>
            <View style={styles.imageBox}>
              {data && (
                <Image
                  source={{
                    uri: data[3].thumbnailUrl,
                  }}
                  style={styles.image}
                />
              )}
              <Text style={styles.name}>MUHAMMAD ALI</Text>
            </View>
          </View>
          <View style={styles.aboutus}>
            <Text style={styles.heading}>About Us</Text>
            <Text style={styles.text}>
              Awan, Awan are son of Qutab Shah. We are family with large number
              of members.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  profile: {
    flex: 1,
    backgroundColor: "#373131",
  },
  content: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  images: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  imageBox: {
    position: "relative",
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    position: "absolute",
    bottom: 10,
    fontSize: 16,
    color: "#fff",
    backgroundColor: "#070606",
    overflow: "hidden",
    padding: 10,
    width: "100%",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  aboutus: {
    marginTop: 10,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 35,
    color: "#fff",
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    color: "#fff",
  },
});

export default Profile;

import React from "react";
import { useState } from "react";
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

const Profile = () => {
  const [refreshing, setRefreshing] = useState(false);

  const data = [
    {
      abu: "https://res.cloudinary.com/awansaif/image/upload/v1631704138/abu_gaf66j.jpg",
    },
    {
      saif: "https://res.cloudinary.com/awansaif/image/upload/v1631701994/WhatsApp_Image_2021-09-15_at_3.28.58_PM_txq1ts.jpg",
    },
    {
      hamza:
        "https://res.cloudinary.com/awansaif/image/upload/v1631702056/WhatsApp_Image_2021-09-15_at_3.27.28_PM_o3pqci.jpg",
    },
    {
      ali: "https://res.cloudinary.com/awansaif/image/upload/v1631701946/WhatsApp_Image_2021-09-15_at_3.26.53_PM_ddbw9j.jpg",
    },
  ];
  const onRefresh = () => {
    setRefreshing(true);
    const data = [
      {
        abu: "https://res.cloudinary.com/awansaif/image/upload/v1631704138/abu_gaf66j.jpg",
      },
      {
        saif: "https://res.cloudinary.com/awansaif/image/upload/v1631701994/WhatsApp_Image_2021-09-15_at_3.28.58_PM_txq1ts.jpg",
      },
      {
        hamza:
          "https://res.cloudinary.com/awansaif/image/upload/v1631702056/WhatsApp_Image_2021-09-15_at_3.27.28_PM_o3pqci.jpg",
      },
      {
        ali: "https://res.cloudinary.com/awansaif/image/upload/v1631701946/WhatsApp_Image_2021-09-15_at_3.26.53_PM_ddbw9j.jpg",
      },
    ];
    setRefreshing(false);
  };
  if (!data) {
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
                    uri: data[0].abu,
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
                    uri: data[1].saif,
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
                    uri: data[2].hamza,
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
                    uri: data[3].ali,
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
    backgroundColor: "#222831",
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
    height: 190,
    resizeMode: "cover",
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
    fontFamily: "gothic",
  },
});

export default Profile;

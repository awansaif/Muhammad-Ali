import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Moment from "react-moment";
const Weather = ({ data }) => {
  return (
    <View style={styles.weather}>
      <Text style={styles.city}>{data && data.name}</Text>
      <View style={styles.header}>
        <Text style={styles.heading}>Weather</Text>
        <Text style={styles.temp}>{data.main && data.main.temp} &deg;C</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.sunrise}>
          <Text style={styles.sunRiseheading}>Sunrise</Text>
          <Text style={styles.sunRiseTime}>
            {data.sys && (
              <Moment format="hh:mm:ss A" element={Text}>
                {new Date(data.sys.sunrise * 1000)}
              </Moment>
            )}
          </Text>
        </View>
        <View style={styles.sunset}>
          <Text style={styles.sunSetheading}>Sunrise</Text>
          <Text style={styles.sunSetTime}>
            {data.sys && (
              <Moment format="hh:mm:ss A" element={Text}>
                {new Date(data.sys.sunset * 1000)}
              </Moment>
            )}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  weather: {
    backgroundColor: "#5786E3",
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  city: {
    color: "#E6D4D4",
    fontSize: 28,
    textAlign: "right",
    fontFamily: "poppins",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "poppins",
  },
  heading: {
    fontSize: 40,
    color: "#E6D4D4",
    fontWeight: "700",
    fontFamily: "poppins",
  },
  temp: {
    fontSize: 25,
    color: "#E6D4D4",
    fontFamily: "poppins",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sunRiseheading: {
    fontSize: 18,
    color: "#E6D4D4",
    fontFamily: "poppins",
  },
  sunRiseTime: {
    fontSize: 18,
    color: "#E6D4D4",
    fontFamily: "poppins",
  },
  sunSetheading: {
    fontSize: 18,
    color: "#E6D4D4",
    textAlign: "right",
    fontFamily: "poppins",
  },
  sunSetTime: {
    fontSize: 18,
    color: "#E6D4D4",
    fontFamily: "poppins",
  },
});

export default Weather;

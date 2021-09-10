import React from "react";
import Moment from "react-moment";
import { StyleSheet, Text, View } from "react-native";

const Time = () => {
  return (
    <View style={styles.timeContainer}>
      <Text style={styles.heading}>Time & Date</Text>
      <Moment
        style={styles.time}
        interval={1000}
        format="hh:mm:ss A"
        element={Text}
      />
      <Moment
        style={styles.dateDay}
        interval={1000}
        format="dddd DD/MMMM/YYYY"
        element={Text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  timeContainer: {
    paddingVertical: 10,
    backgroundColor: "#258c94",
  },
  heading: {
    fontSize: 40,
    textAlign: "center",
    color: "#E6D4D4",
    fontFamily: "poppins",
  },
  time: {
    fontSize: 25,
    textAlign: "center",
    color: "#e6d4d4",
    fontFamily: "poppins",
  },
  dateDay: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 5,
    color: "#e6d4d4",
    fontFamily: "poppins",
  },
});
export default Time;

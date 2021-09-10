import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, Text, Image, View } from "react-native";
const width = Dimensions.get("window").width;

const Blog = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const AbortConst = new AbortController();
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Multan&units=metric&appid=1a5eca88b0c2cb459728b38e85285c2e",
      {
        signal: AbortConst.signal,
      }
    )
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("clear");
        }
      });
    return () => AbortConst.abort();
  });
  return (
    <View style={styles.container}>
      <View style={styles.weather}>
        <View style={styles.header}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "700",
              color: "#3e3e3e",
              textAlign: "center",
            }}
          >
            Weather
          </Text>
          {data.weather && (
            <Text
              style={{
                fontSize: 25,
                color: "#fff",
                textAlign: "center",
                marginTop: 20,
                textTransform: "uppercase",
              }}
            >
              <Image
                style={styles.image}
                source={{
                  uri:
                    "http://openweathermap.org/img/w/" +
                    data.weather[0].icon +
                    ".png",
                }}
              />
              {data.weather[0].main}
            </Text>
          )}
        </View>
        <View style={styles.body}>
          {data.main && (
            <View style={styles.tempHum}>
              <View style={styles.dataContainer}>
                <Text style={styles.dataHeading}>Temprature</Text>
                <Text style={styles.data}>{data.main.temp} &deg;C</Text>
              </View>
              <View style={styles.dataContainer}>
                <Text style={styles.dataHeading}> Humidity </Text>
                <Text style={styles.data}>{data.main.humidity} %</Text>
              </View>
            </View>
          )}
          {data.sys && (
            <View style={styles.sunriseSet}>
              <View style={styles.dataContainer}>
                <Text style={styles.dataHeading}>Sunrise</Text>
                <Text style={styles.data}>
                  {new Date(data.sys.sunrise * 1000).toLocaleTimeString(
                    "en-IN"
                  )}
                </Text>
              </View>
              <View style={styles.dataContainer}>
                <Text style={styles.dataHeading}>Sunset</Text>
                <Text style={styles.data}>
                  {new Date(data.sys.sunset * 1000).toLocaleTimeString("en-IN")}
                </Text>
              </View>
            </View>
          )}
        </View>
        <Text style={styles.cityName}>{data.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  weather: {
    backgroundColor: "#aedeff",
    borderRadius: 20,
    width: width - 80,
  },
  header: {
    flexDirection: "column",
    padding: 26,
    fontSize: 30,
    borderBottomWidth: 2,
    borderColor: "#eee",
    borderStyle: "dashed",
  },
  cityName: {
    fontSize: 30,
    textAlign: "center",
    marginVertical: 20,
  },
  body: {
    padding: 10,
    marginVertical: 10,
    flexDirection: "column",
  },
  tempHum: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sunriseSet: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  dataContainer: {
    flexDirection: "column",
    justifyContent: "center",
    fontSize: 30,
  },
  dataHeading: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "600",
  },
  data: {
    textAlign: "center",
    fontSize: 18,
  },
  image: {
    width: 50,
    height: 50,
    backgroundColor: "#3e3e3e",
    marginRight: 40,
  },
});

export default Blog;

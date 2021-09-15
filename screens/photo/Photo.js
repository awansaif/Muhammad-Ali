import React from "react";
import { Button, Image, Text, TouchableHighlight, View } from "react-native";

const Photo = ({ photo }) => {
  return (
    <TouchableHighlight>
      <View
        style={{
          position: "relative",
        }}
      >
        <Image
          source={{
            uri: photo.urls.regular,
          }}
          style={{
            width: 165,
            minHeight: 160,
            marginRight: 10,
            marginBottom: 10,
            borderRadius: 10,
            resizeMode: "cover",
          }}
        />
        <TouchableHighlight
          style={{
            position: "absolute",
            top: 1,
            right: 10,
            borderTopRightRadius: 10,
            height: 40,
            width: 25,
          }}
        >
          <Image
            source={require("../../assets/images/download.png")}
            style={{
              width: 20,
              height: 20,
              resizeMode: "center",
            }}
          />
        </TouchableHighlight>
      </View>
    </TouchableHighlight>
  );
};

export default Photo;

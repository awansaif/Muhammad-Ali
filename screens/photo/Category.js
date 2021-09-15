import React from "react";
import { Text, TouchableHighlight, View } from "react-native";

const Category = ({ category, setCat }) => {
  return (
    <TouchableHighlight
      onPress={() => {
        setCat(category.slug);
      }}
      style={{
        borderRadius: 20,
        marginRight: 5,
      }}
    >
      <View
        style={{
          backgroundColor: "#4b6587",
          padding: 10,
          height: 30,
          minwidth: 80,
          borderRadius: 20,
          flexDirection: "row",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 12, color: "#f7f6f2" }}>{category.title}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default Category;

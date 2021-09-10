import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home/Home";
import Blog from "../screens/blog/Blog";
import Profile from "../screens/profile/Profile";
import Header from "../components/Header";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();
function Route() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: {
            position: "absolute",
            bottom: 10,
            backgroundColor: "#040404",
            borderTopColor: "#040404",
            width: "80%",
            borderRadius: 50,
            marginHorizontal: 35,
          },
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="Clock"
          options={{
            tabBarIcon: () => (
              <Image
                source={require("../assets/images/home.png")}
                style={{ width: 25, height: 25 }}
              />
            ),
          }}
          component={Home}
        />
        <Tab.Screen
          name="Blog"
          options={{
            tabBarIcon: () => (
              <Image
                source={require("../assets/images/blog.png")}
                style={{ width: 25, height: 25 }}
              />
            ),
          }}
          component={Blog}
        />
        <Tab.Screen
          name="Profile"
          options={{
            tabBarIcon: () => (
              <Image
                source={require("../assets/images/user.png")}
                style={{ width: 25, height: 25 }}
              />
            ),
          }}
          component={Profile}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Route;

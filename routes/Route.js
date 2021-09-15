import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home/Home";
import Profile from "../screens/profile/Profile";
import { Image } from "react-native";
import PhotoStack from "./PhotoStack";

const Tab = createBottomTabNavigator();
function Route() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={() => ({
          tabBarStyle: {
            position: "absolute",
            bottom: 10,
            backgroundColor: "#040404",
            borderTopWidth: 0,
            width: "80%",
            borderRadius: 50,
            padding: 2,
            marginHorizontal: 35,
          },
          headerShown: false,
          tabBarShowLabel: false,
        })}
      >
        <Tab.Screen
          name="Clock"
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={require("../assets/images/home.png")}
                style={{
                  tintColor: focused ? "#346751" : "#fff",
                  width: 25,
                  height: 25,
                }}
              />
            ),
          }}
          component={Home}
        />
        <Tab.Screen
          name="Photos"
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={require("../assets/images/blog.png")}
                style={{
                  tintColor: focused ? "#346751" : "#fff",
                  width: 25,
                  height: 25,
                }}
              />
            ),
          }}
          component={PhotoStack}
        />
        <Tab.Screen
          name="Profile"
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={require("../assets/images/user.png")}
                style={{
                  tintColor: focused ? "#346751" : "#fff",
                  width: 25,
                  height: 25,
                }}
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

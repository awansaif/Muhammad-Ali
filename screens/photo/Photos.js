import React, { useEffect } from "react";
import { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  View,
} from "react-native";
import Header from "../../components/Header";
import Category from "./Category";
import Photo from "./Photo";

const Song = () => {
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const [category, setCategory] = useState(null);
  const [cat, setCat] = useState("wallpapers");
  const [photos, setPhotos] = useState(null);
  const pages = 1;
  useEffect(() => {
    Categories();
    photosList();
  }, [cat]);
  const Categories = async () => {
    await fetch(
      "https://api.unsplash.com/topics/?client_id=dHQamFBsXMhlwhS7lffG4RJMl6pH9IPDmOWFsOHf6U0&per_page=20"
    )
      .then((res) => res.json())
      .then((categories) => {
        setCategory(categories);
      });
  };
  const photosList = async () => {
    await fetch(
      "https://api.unsplash.com/topics/" +
        cat +
        "/photos/?client_id=dHQamFBsXMhlwhS7lffG4RJMl6pH9IPDmOWFsOHf6U0&page=" +
        pages +
        "&per_page=100"
    )
      .then((res) => res.json())
      .then((data) => {
        setPhotos(data);
        setLoading(false);
      });
  };
  const renderItem = ({ item }) => {
    return <Category category={item} setCat={setCat} />;
  };
  const renderPhoto = ({ item }) => {
    return <Photo photo={item} />;
  };
  const onRefresh = () => {
    setRefresh(true);
    photosList();
    setRefresh(false);
  };
  const LoadMore = async () => {
    await fetch(
      "https://api.unsplash.com/topics/" +
        cat +
        "/photos/?client_id=dHQamFBsXMhlwhS7lffG4RJMl6pH9IPDmOWFsOHf6U0&page=" +
        pages +
        1 +
        "&per_page=100"
    )
      .then((res) => res.json())
      .then((data) => {
        setPhotos([...photos, ...data]);
      });
  };
  if (loading) {
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
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <FlatList
          contentContainerStyle={{ paddingVertical: 4 }}
          data={category}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
        <FlatList
          numColumns={2}
          contentContainerStyle={{
            paddingVertical: 10,
            marginBottom: 100,
            paddingBottom: 150,
          }}
          refreshControl={
            <RefreshControl
              onRefresh={onRefresh}
              refreshing={refresh}
              progressBackgroundColor="#3e3939"
              tintColor="#fff"
              colors={["#fff", "#eee", "#070606", "#3e3e3e"]}
              titleColor="#fff"
            />
          }
          data={photos}
          renderItem={renderPhoto}
          keyExtractor={(item, index) => index}
          onEndReached={LoadMore}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222831",
  },
  content: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});

export default Song;

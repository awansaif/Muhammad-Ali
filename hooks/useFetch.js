import { React, useEffect, useState } from "react";

const useFetch = (url) => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      setRefreshing(true);
      await fetch(url, {
        accept: "application/json",
      })
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setRefreshing(false);
        });
    };
    fetchData();
  }, [url]);
  return { data, refreshing, setRefreshing, setData };
};

export default useFetch;

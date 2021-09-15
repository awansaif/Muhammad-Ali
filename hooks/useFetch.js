import { React, useEffect, useState } from "react";

const useFetch = (url, refresh) => {
  const [data, setData] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      await fetch(url, {
        accept: "application/json",
      })
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    };
    fetchData();
  }, [url, refresh]);
  return { data, setData };
};

export default useFetch;

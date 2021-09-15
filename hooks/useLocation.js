useEffect(() => {
  loadloc();
}, []);

async function loadloc() {
  try {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("DSDKADJASJDAJ");
    }
    const location = await Location.getCurrentPositionAsync();
    location && setLocation(location);
    location && setRefreshing(false);
  } catch (error) {}
  location && console.log(location.coords.longitude);
}

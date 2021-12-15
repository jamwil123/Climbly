import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import MapView from "react-native-maps";
import { getWeather } from "../utils/api";
import CompletedMountain from "./completedMountain";

const screenSize = Dimensions.get("screen");

const SingleMountain = ({ route }) => {
  const [weather, setWeather] = useState({
    current: {
      clouds: 100,
      dew_point: 1.19,
      dt: 1639476164,
      feels_like: -2.06,
      humidity: 95,
      pressure: 1015,
      sunrise: 1639471776,
      sunset: 1639496391,
      temp: 1.9,
      uvi: 0,
      visibility: 570,
      weather: [
        {
          description: "overcast clouds",
          icon: "04d",
          id: 804,
          main: "Clouds",
        },
      ],
      wind_deg: 206,
      wind_gust: 10.04,
      wind_speed: 4.18,
    },
    lat: 56.7417,
    lon: -4.9834,
    minutely: [
      {
        dt: 1639476180,
        precipitation: 0,
      },
    ],
    timezone: "Europe/London",
    timezone_offset: 0,
  });

  useEffect(() => {
    getWeather(route.params.mountain.latitude, route.params.mountain.longitude)
      .then((res) => {
        setWeather(res);
      })
      .catch((error) => console.log(error));
  }, []);

  const sunRise = new Date(weather.current.sunrise * 1000)
    .toTimeString()
    .split(" ")[0];
  const sunSet = new Date(weather.current.sunset * 1000)
    .toTimeString()
    .split(" ")[0];

  return (
    <ScrollView style={styles.mainview}>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.textbox_hillname}>
            {route.params.mountain.hillname}
          </Text>
          <CompletedMountain
            mountainObj={route.params.mountain}
          ></CompletedMountain>
        </View>
        <View>
          <TouchableOpacity disabled={true}>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: route.params.mountain.latitude,
                longitude: route.params.mountain.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              mapType={"satellite"}
            >
              <MapView.Marker
                coordinate={{
                  latitude: route.params.mountain.latitude,
                  longitude: route.params.mountain.longitude,
                }}
                title={"title"}
                description={"description"}
              />
            </MapView>
          </TouchableOpacity>
        </View>
        <View style={styles.description}>
          <Text style={styles.textbox_description}>
            {route.params.mountain.description1}
          </Text>
          <Text style={styles.textbox_description}>
            {route.params.mountain.description2}
          </Text>
        </View>
        <View style={styles.info}>
          <View style={styles.infoLeft}>
            <Text style={styles.textbox_info}>Height in feet: </Text>
            <Text style={styles.textbox_info}>Height in metres: </Text>
            <Text style={styles.textbox_info}>Longitude:</Text>
            <Text style={styles.textbox_info}>Latitude: </Text>
          </View>
          <View style={styles.infoRight}>
            <Text style={styles.textbox_info}>
              {route.params.mountain.feet}{" "}
            </Text>
            <Text style={styles.textbox_info}>
              {route.params.mountain.metres}
            </Text>
            <Text style={styles.textbox_info}>
              {route.params.mountain.longitude}
            </Text>
            <Text style={styles.textbox_info}>
              {route.params.mountain.latitude}
            </Text>
          </View>
        </View>
        <View style={styles.classification}>
          <Text>{route.params.mountain.classification}</Text>
        </View>
        <View style={styles.weather}></View>
        <View>
          <Text>{weather.current.temp} °C</Text>
          <Text>{weather.current.weather[0].description}</Text>
          <Text>{sunRise}</Text>
          <Text>{sunSet}</Text>
        </View>
        <View style={styles.img}>
          <Image
            source={{ uri: route.params.mountain.img_hres_url }}
            style={styles.image}
          ></Image>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainview: {
    backgroundColor: 0x2e2d4dff,
  },
  container: {
    backgroundColor: 0x2b3a67ff,
    alignItems: "center",
    marginTop: 10,
    padding: 15,
    marginBottom: 3,
    marginLeft: 6,
    marginRight: 6,
    borderRadius: 25,
    borderColor: 0xaaadc4ff,
    borderWidth: 1,
  },
  image: {
    borderRadius: 14,
    width: screenSize.width * 0.9,
    height: screenSize.height * 0.25,
  },
  description: {
    width: screenSize.width * 0.9,
  },
  map: {
    borderColor: 0x000000ff,
    borderWidth: 1,
    borderRadius: 14,
    width: screenSize.width * 0.95,
    height: screenSize.height * 0.35,
  },
  textbox_hillname: {
    color: 0xffffffff,
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
  textbox_description: {
    textAlign: "left",
    color: 0xffffffff,
    fontSize: 17,
    marginTop: 10,
  },
  info: {
    width: screenSize.width * 0.9,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  infoLeft: {
    flex: 1,
  },
  infoRight: {
    flex: 1,
    textAlign: "left",
  },
  textbox_info: {
    color: 0xffffffff,
    fontSize: 18,
    marginTop: 10,
  },
  classification: {
    marginTop: 20,
    marginBottom: 20,
  },
});

export default SingleMountain;

import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { getWeather } from "../utils/api";
const screenSize = Dimensions.get("screen");
export default function Weather({ lat, lon }) {
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
    getWeather(lat, lon)
      .then((res) => {
        setWeather(res);
      })
      .catch((error) => console.log(error, "Weather UseEffect"));
  }, []);

  const sunRise = new Date(weather.current.sunrise * 1000)
    .toTimeString()
    .split(" ")[0];
  const sunSet = new Date(weather.current.sunset * 1000)
    .toTimeString()
    .split(" ")[0];

  function weatherImage() {
    if (
      weather.current.weather[0].icon === "01d" ||
      weather.current.weather[0].icon === "01n"
    ) {
      return (
        <Image
          style={styles.tinyLogo}
          source={require("../../weatherPic/2682848_day_forecast_sun_sunny_weather_icon.png")}
        ></Image>
      );
    }
    if (
      weather.current.weather[0].icon === "02d" ||
      weather.current.weather[0].icon === "02n"
    ) {
      return (
        <Image
          style={styles.tinyLogo}
          source={require("../../weatherPic/118961_few_weather_clouds_icon.png")}
        ></Image>
      );
    }
    if (
      weather.current.weather[0].icon === "03n" ||
      weather.current.weather[0].icon === "03d"
    ) {
      return (
        <Image
          style={styles.tinyLogo}
          source={require("../../weatherPic/118964_weather_scattered_showers_icon.png")}
        ></Image>
      );
    }
    if (
      weather.current.weather[0].icon === "04n" ||
      weather.current.weather[0].icon === "04d"
    ) {
      return (
        <Image
          style={styles.tinyLogo}
          source={require("../../weatherPic/1530369_weather_cloud_clouds_cloudy_icon.png")}
        ></Image>
      );
    }
    if (
      weather.current.weather[0].icon === "09n" ||
      weather.current.weather[0].icon === "09d"
    ) {
      return (
        <Image
          style={styles.tinyLogo}
          source={require("../../weatherPic/1527673_heavy rain_rain_shower_weather_icon.png")}
        ></Image>
      );
    }
    if (
      weather.current.weather[0].icon === "10n" ||
      weather.current.weather[0].icon === "10d"
    ) {
      return (
        <Image
          style={styles.tinyLogo}
          source={require("../../weatherPic/4894521_cloud_drop_forecast_rain_rainy_icon.png")}
        ></Image>
      );
    }
    if (
      weather.current.weather[0].icon === "11n" ||
      weather.current.weather[0].icon === "11d"
    ) {
      return (
        <Image
          style={styles.tinyLogo}
          source={require("../../weatherPic/4102318_cloud_heavy rain_rain_storm_thunderbolt_icon.png")}
        ></Image>
      );
    }
    if (
      weather.current.weather[0].icon === "13n" ||
      weather.current.weather[0].icon === "13d"
    ) {
      return (
        <Image
          style={styles.tinyLogo}
          source={require("../../weatherPic/2995007_cloud_snow_weather_winter_icon.png")}
        ></Image>
      );
    }
    if (
      weather.current.weather[0].icon === "13n" ||
      weather.current.weather[0].icon === "13d"
    ) {
      return (
        <Image
          style={styles.tinyLogo}
          source={require("../../weatherPic/2682802_cloudy_day_fog_foggy_mist_icon.png")}
        ></Image>
      );
    }
  }

  return (
    <View style={styles.container}>
      {weatherImage()}
      <Text>{weather.current.temp} °C</Text>
      <Text>{weather.current.weather[0].description}</Text>
      <Text>{sunRise}</Text>
      <Text>{sunSet}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
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
    shadowColor: "#000",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 10,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

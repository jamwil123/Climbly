import axios from "axios";

const db = axios.create({
  baseURL: "https://mountain-server-api.herokuapp.com/api",
});

const weatherURL = axios.create({
  baseURL: "http://api.openweathermap.org",
});

export const getMountains = (lastHillId) => {
  let query = "";
  if (lastHillId !== null) {
    query += `?lastVisibleHill=${lastHillId}`;
  }
  

  return db.get(`/mountains${query}`).then((res) => {
    return res.data.mountains;
  }).catch((error) => console.log(error, '/mountains${query}'));
};

export const postUser = (uid, newUser) => {
  return db.post(`/users/${uid}`, newUser).then((res) => {
    return res.data.user;
  }).catch((error) => console.log(error, '/users/${uid}'));
};

export const updateUser = (body, user) => {
  return db.patch(`/users/${user.userToken}`, body).then((res) => {
    return res.data.user;
  });
};
export const getUser = (uid) => {
  return db.get(`/users/${uid}`).then((res) => {
    return res.data.user;
  }).catch((error) => console.log(error));
};

export const getWeather = (lat, lon) => {
  return weatherURL
    .get(
      `/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily&units=metric&appid=751c6da99643d39ece34886f441a3e1c`
    )
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.log(error));
};

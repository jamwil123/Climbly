import axios from "axios";

const db = axios.create({
  baseURL: "https://mountain-server-api.herokuapp.com/api",
});

export const getMountains = () => {
  return db.get("/mountains").then((res) => {
    return res.data.mountains;
  });
};

export const postUser = (uid) => {
  return db.post(`/users/${uid}`).then((res) => {
    return res.data.user;
  });
};

export const getUser = (uid) => {
  return db.get(`/users/${uid}`).then((res) => {
    return res.data.user;
  });
};

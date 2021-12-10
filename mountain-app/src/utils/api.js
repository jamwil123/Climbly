import axios from "axios";

const db = axios.create({
  baseURL: "https://mountain-server-api.herokuapp.com/api",
});

export const getMountains = (lastHillId) => {
  let query = ""
  if (lastHillId !== null) {
    query += `?lastVisibleHill=${lastHillId}`
  }

  return db.get(`/mountains${query}`).then((res) => {
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

import axios from "axios";

const db = axios.create({
  baseURL: "https://mountain-server-api.herokuapp.com/api",
});

export const getMountains = (lastHillId) => {
  let query = "";
  if (lastHillId !== null) {
    query += `?lastVisibleHill=${lastHillId}`;
  }

  return db.get(`/mountains${query}`).then((res) => {
    return res.data.mountains;
  });
};

export const postUser = (uid, newUser) => {
  return db.post(`/users/${uid}`, newUser).then((res) => {
    return res.data.user;
  });
};

export const updateUser = (body, user) => {
  return db.patch(`/users/${user.userToken}`, body).then((res) => {
    return res.data.user;
  });
};
export const getUser = (uid) => {
  return db.get(`/users/${uid}`).then((res) => {
    return res.data.user;
  });
};

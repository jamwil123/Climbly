import axios from "axios";

const db = axios.create({
  baseURL: "https://mountain-server-api.herokuapp.com/api",
});

export const getMountains = (lastHillId, sort, order, searchQueryObj) => {
  let query = "";

  if (lastHillId !== null) {
    query += `?lastVisibleHill=${lastHillId}`;
  }
  if (!!sort) {
    lastHillId === null ? (query += `?sortBy=${sort}`) : (query += `&sortBy=${sort}`);
  }

  if (!!order) {
    lastHillId === null && !sort ? (query += `?orderBy=${order}`) : (query += `&orderBy=${order}`);
  }

  return db
    .post(`/mountains${query}`, searchQueryObj)
    .then((res) => {
      return res.data.mountains;
    })
    .catch((err) => {
      console.log('ERRRRRRRRRRRRRRRROR', err);
    });
};

export const postUser = (uid, newUser) => {
  return db.post(`/users/${uid}`, newUser).then((res) => {
    return res.data.user;
  });
};

export const getUser = (uid) => {
  return db.get(`/users/${uid}`).then((res) => {
    return res.data.user;
  });
};

// export const sortMountains = (sort, order) => {
//   return db.get(`/mountains?sortBy=${sort}&orderBy=${order}`).then((res) => {
//     return res.data.mountains;
//   });
// };

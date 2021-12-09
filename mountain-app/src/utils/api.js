import axios from "axios";

const db = axios.create({
  baseURL: "https://mountain-server-api.herokuapp.com/api",
});

export const getMountains = () => {
  return db.get("/mountains").then((res) => {
    return res.data.mountains;
  });
};

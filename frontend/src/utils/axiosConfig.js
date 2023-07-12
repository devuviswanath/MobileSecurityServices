import axios from "axios";

export const instance = axios.create({
  withCredentials: true,
});

export const base_url = "http://localhost:5000/api/";

const getTokenfromLocalStorage = localStorage.getItem("customer")
  ? JSON.parse(localStorage.getItem("customer"))
  : null;

export const config = {
  headers: {
    authorization: `Bearer ${
      getTokenfromLocalStorage !== null ? getTokenfromLocalStorage.token : ""
    }`,
    Accept: "application/json",
  },
};

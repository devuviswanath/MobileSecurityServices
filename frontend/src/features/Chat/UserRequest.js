import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

export const getUser = (id) => API.get(`/user/${id}`);
export const getAllOPerators = () => API.get(`/user/all-operators`);

import axios from "axios";
import { base_url, instance, config } from "../../utils/axiosConfig";
const login = async (user) => {
  const response = await axios.post(`${base_url}user/operator-login`, user);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};
const updateUser = async (data) => {
  const response = await instance.put(
    `${base_url}user/edit-operator`,
    data?.data,
    data?.config2
  );
  if (response.data) {
    return response.data;
  }
};
const logout = async (userData) => {
  const response = await instance.get(`${base_url}user/logout`, userData);
  if (response.data) {
    return response.data;
  }
};
const authService = {
  login,
  updateUser,
  logout,
};

export default authService;

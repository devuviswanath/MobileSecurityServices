import axios from "axios";
import { base_url, instance, config } from "../../utils/axiosConfig";

const register = async (userData) => {
  const response = await instance.post(`${base_url}user/register`, userData);
  if (response.data) {
    if (response.data) {
      localStorage.setItem("customer", JSON.stringify(response.data));
    }
    return response.data;
  }
};
const login = async (userData) => {
  const response = await instance.post(`${base_url}user/login`, userData);
  if (response.data) {
    if (response.data) {
      localStorage.setItem("customer", JSON.stringify(response.data));
    }
    return response.data;
  }
};
const logout = async (userData) => {
  const response = await instance.get(`${base_url}user/logout`, userData);
  if (response.data) {
    return response.data;
  }
};
const forgotPasswordToken = async (email) => {
  const response = await instance.post(
    `${base_url}user/forgot-password-token`,
    email
  );
  if (response.data) {
    localStorage.setItem("userId", response.data.userId);
    return response.data;
  }
};
const ResetPassword = async (details) => {
  const response = await instance.put(
    `${base_url}user/reset-password/${details.token}`,
    { password: details?.password }
  );
  if (response.data) {
    return response.data;
  }
};
const addToCart = async (cartData) => {
  const response = await instance.post(
    `${base_url}user/addcart`,
    cartData,
    cartData.config1
  );
  if (response.data) {
    return response.data;
  }
};
const getCart = async () => {
  const response = await instance.get(`${base_url}user/getcart`, config);
  if (response.data) {
    return response.data;
  }
};
const removeProductFromCart = async (data) => {
  const response = await instance.delete(
    `${base_url}user/delete-product-cart/${data.id}`,
    data.config2
  );
  if (response.data) {
    return response.data;
  }
};
const updateProductFromCart = async (cartDetail) => {
  const response = await instance.delete(
    `${base_url}user/update-product-cart/${cartDetail.cartItemId}/${cartDetail.quantity}`,
    config
  );
  if (response.data) {
    return response.data;
  }
};
const emptyCartItems = async () => {
  const response = await instance.delete(`${base_url}user/empty-cart`, config);
  if (response.data) {
    return response.data;
  }
};
const createProductOrder = async (prodOrderDetail) => {
  const response = await instance.post(
    `${base_url}user/cart/create-product-order`,
    prodOrderDetail,
    config
  );
  if (response.data) {
    return response.data;
  }
};
const createServiceOrder = async (serviceOrderDetail) => {
  const response = await instance.post(
    `${base_url}user/cart/create-service-order`,
    serviceOrderDetail,
    config
  );
  if (response.data) {
    return response.data;
  }
};
const getOrder = async (id) => {
  const response = await instance.get(
    `${base_url}user/getorderdetails/${id}`,
    config
  );

  return response.data;
};
const getServiceOrder = async (id) => {
  const response = await instance.get(
    `${base_url}user/getserviceorderdetails/${id}`,
    config
  );

  return response.data;
};
const updateUser = async (data) => {
  const response = await instance.put(
    `${base_url}user/edit-user`,
    data?.data,
    data?.config2
  );
  if (response.data) {
    return response.data;
  }
};

export const authService = {
  register,
  login,
  logout,
  forgotPasswordToken,
  ResetPassword,
  addToCart,
  getCart,
  removeProductFromCart,
  updateProductFromCart,
  emptyCartItems,
  createProductOrder,
  createServiceOrder,
  getOrder,
  getServiceOrder,
  updateUser,
};

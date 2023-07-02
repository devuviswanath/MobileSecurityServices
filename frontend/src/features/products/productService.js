import axios from "axios";
import { base_url } from "../../utils/axiosConfig";

const getProducts = async () => {
  const response = await axios.get(`${base_url}product/all-products`);
  if (response.data) return response.data;
};

const getSingleProduct = async (id) => {
  const response = await axios.get(`${base_url}product/${id}`);
  if (response.data) return response.data;
};

const productService = {
  getProducts,
  getSingleProduct,
};

export default productService;

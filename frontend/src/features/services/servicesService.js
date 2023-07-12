import axios from "axios";
import { base_url, instance } from "../../utils/axiosConfig";

const getAllServices = async (query) => {
  const response = await instance.get(`${base_url}service/all-service`, {
    params: query,
  });
  if (response.data) return response.data;
};

const getSingleService = async (id) => {
  const response = await axios.get(`${base_url}service/${id}`);
  if (response.data) return response.data;
};

const serviceService = {
  getAllServices,
  getSingleService,
};

export default serviceService;

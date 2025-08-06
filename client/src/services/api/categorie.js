import { axiosInstance } from "./axios.config";

export const getCategories = async({signal})=> {
  return await axiosInstance.get(`api/categories`, signal);
}

export const createCategorie = async(data)=> {
  return await axiosInstance.post(`api/categories`, data);
}


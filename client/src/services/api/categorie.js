import { axiosInstance } from "./axios.config";

export const getCategories = async({signal})=> {
  return await axiosInstance.get(`api/categories`, signal);
}

export const getSingleCategorie = async({signal, categorieName})=> {
  return await axiosInstance.get(`api/categories/${categorieName}`, signal);
}

export const createCategorie = async(data)=> {
  return await axiosInstance.post(`api/categories`, data);
}


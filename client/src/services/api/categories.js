import { axiosInstance } from "./axios.config";

export const getCategories = async({signal})=> {
  return await axiosInstance.get(`api/categories`, signal);
}

export const validateTchatForm = async(data)=> {
  return await axiosInstance.post(`api/categories/validate-tchat-form`, data);
}


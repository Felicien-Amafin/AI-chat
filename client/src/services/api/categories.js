import { axiosIntance } from "./axios.config";

export const getCategories = async({signal})=> {
  return await axiosIntance.get(`api/categories`, signal);
}

export const validateTchatForm = async(data)=> {
  return await axiosIntance.post(`api/categories/validate-tchat-form`, data);
}


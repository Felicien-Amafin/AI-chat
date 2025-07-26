import { axiosIntance } from "./axios.config";

export const getCategories = async({signal})=> {
  return await axiosIntance.get(`api/categories`, signal);
}


import { axiosIntance } from "./axios.config";

export const getCategories = async({signal})=> {
  console.log('fetching categories')
  return await axiosIntance.get(`api/categories`, signal);
}

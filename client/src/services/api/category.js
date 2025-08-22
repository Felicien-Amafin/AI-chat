import { axiosInstance } from "./axios.config";

export const createCategoryWithChat = async(data)=> {
  return await axiosInstance.post(`api/categories/`, data);
}

export const addChatToCategory = async(data)=> {
  const { category, title } = data; 
  const dataToSend = { category, title };

  return await axiosInstance.post(`api/categories/${data.category}/chats`, dataToSend);
}

export const getCategories = async({signal})=> {
  return await axiosInstance.get(`api/categories`, signal);
}

export const getCategory = async({signal, categoryName})=> {
  return await axiosInstance.get(`api/categories/${categoryName}`, signal);
}

export const deleteCategory = async({categoryName})=> {
  return await axiosInstance.delete(`api/categories/${categoryName}`);
}



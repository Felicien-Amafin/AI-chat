import { axiosInstance } from "./axios.config";

export const validateTchatForm = async(data)=> {
  return await axiosInstance.post(`api/tchats/validate-form`, data);
}

export const createTchat = async(data)=> {
  return await axiosInstance.post(`api/tchats/`, data);
}

export const sendTchatMessage = async(data)=> {
  return await axiosInstance.post(`api/tchats/send-message`, data);
}

export const getTchatMessages = async({signal})=> {
  /* return await axiosInstance.get(`api/categories`, signal); */
}
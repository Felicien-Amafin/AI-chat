import { axiosInstance } from "./axios.config";

export const createTchatAndCategorie = async(data)=> {
  return await axiosInstance.post(`api/tchats/new`, data);
}

export const sendTchatMessage = async(data)=> {
  return await axiosInstance.post(`api/tchats/send-message`, data);
}

export const getTchat = async({signal, tchatId})=> {
  return await axiosInstance.get(`api/tchats/${tchatId}`, signal);
}

export const deleteTchat = async({tchat_id})=> {
  return await axiosInstance.delete(`api/tchats/${tchat_id}`);
}
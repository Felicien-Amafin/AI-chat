import { axiosInstance } from "./axios.config";

export const sendChatMessage = async(data)=> {
  return await axiosInstance.post(`api/chats/send-message`, data);
}

export const launchChatSuggestion = async(data)=> {
  return await axiosInstance.post(`api/chats/from-suggestion`, data);
}

export const getChat = async({signal, chatId})=> {
  return await axiosInstance.get(`api/chats/${chatId}`, {signal});
}

export const deleteChat = async({chat_id})=> {
  return await axiosInstance.delete(`api/chats/${chat_id}`);
}
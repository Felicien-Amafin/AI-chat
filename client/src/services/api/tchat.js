import { axiosInstance } from "./axios.config";

export const validateTchatForm = async(data)=> {
  return await axiosInstance.post(`api/tchats/validate-form`, data);
}

export const createTchat = async(data)=> {
    return await axiosInstance.post(`api/tchats/`, data);
}

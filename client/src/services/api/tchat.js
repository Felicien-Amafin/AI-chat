import { axiosInstance } from "./axios.config";

export const validateTchatForm = async(data)=> {
  return await axiosInstance.post(`api/tchats/validate-form`, data);
}
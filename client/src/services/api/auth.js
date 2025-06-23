import axios from "axios";

const BASE_URL =' http://localhost:3001/';

const axiosIntance = axios.create({baseURL:BASE_URL, withCredentials: true});

export const signUpUser = async(data)=> {
  return await axiosIntance.post('api/authentication/signup', data);
}

export const verifyEmail = async({userId, data})=> {
  return await axiosIntance.post(`api/authentication/verify-email/${userId}`, data);
}

export const sendResetEmail = async(data)=> {
  return await axiosIntance.post(`api/authentication/send-reset-email`, data);
}
import { axiosAuthInstance, axiosRefreshInstance } from "./axios.config.js";

export const signUpUser = async(data)=> {
  return await axiosAuthInstance.post('api/authentication/signup', data);
}

export const signInUser = async(data)=> {
  return await axiosAuthInstance.post('api/authentication/signin', data);
}

export const verifyEmail = async({userId, data})=> {
  return await axiosAuthInstance.post(`api/authentication/verify-email/${userId}`, data);
}

export const sendResetEmail = async(data)=> {
  return await axiosAuthInstance.post(`api/authentication/send-reset-email`, data);
}

export const resetPassword = async({token, data})=> {
  return await axiosAuthInstance.post(`api/authentication/password-reset/${token}`, data);
}

export const logout = async()=> {
  return await axiosAuthInstance.post(`api/authentication/logout`);
}

export const refreshAccessTk = async()=> {
  return await axiosRefreshInstance.post(`api/authentication/refresh-token`);
}



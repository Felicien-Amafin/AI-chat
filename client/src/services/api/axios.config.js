import axios from "axios";
import { setAccessToken } from "../../store/authSlice";

const BASE_URL ='http://localhost:3001';

//Init axios instance
export const axiosInstance = axios.create({
    baseURL:BASE_URL, 
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

const axiosRefreshInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const setUpAxiosInterceptors = (store) => {

    axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = store.getState().auth.accessToken;
       
        if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
        
        return config;
    },
    (error) =>  Promise.reject(error)
    );

    axiosInstance.interceptors.response.use(
        (response) => response, // Directly return successful responses.

        async error => {
            const originalRequest = error.config;

            if (error.response.status === 401 && !originalRequest._retry) {
                originalRequest._retry = true; // Mark the request as retried to avoid infinite loops.

                try {
                    const response = await axiosRefreshInstance.get('/api/authentication/refresh-token');
                    
                    const accessToken = response.data.accessToken;
                   
                    store.dispatch(setAccessToken(accessToken));

                    return axiosInstance(originalRequest); // Retry the original request with the new access token.

                } catch (refreshError) {
                    return Promise.reject(refreshError);
                }
            }
            // Return all other errors after originalRequest has been made
            return Promise.reject(error); 
        }
    );
}

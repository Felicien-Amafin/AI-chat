import axios from "axios";
import { setAccessToken } from "../../store/authSlice";

// Determines the base API URL based on the Vite environment mode (development or production).
const isDevelopment = import.meta.env.MODE === 'development';

const BASE_URL_DEV = import.meta.env.VITE_API_URL_DEV; 
const BASE_URL_PROD = import.meta.env.VITE_API_URL_PROD;

const BASE_URL = isDevelopment ? BASE_URL_DEV : BASE_URL_PROD;

//Init generic axios instance
export const axiosInstance = axios.create({
    baseURL:BASE_URL, 
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});
// Init axios instance for refreshing accessTk
export const axiosRefreshInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});
//Init axios instance for authentication routes
export const axiosAuthInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const setUpAxiosInterceptors = (store) => {
    //Configuring interceptors for 'before requests' and 'after requests'
    axiosInstance.interceptors.request.use(
    (config) => {
        //Getting accessTk from store + setting it in request's header
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
                //Handling 401 errors and trying to refresh accessTk
                originalRequest._retry = true; // Mark the request as retried to avoid infinite loops.

                try {
                    const response = await axiosRefreshInstance.post('/api/authentication/refresh-token');
                    
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

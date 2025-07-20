import axios from "axios";

const BASE_URL =' http://localhost:3001/';
//Init axios instance
export const axiosIntance = axios.create({
    baseURL:BASE_URL, 
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

let reduxStore;
//Create insterceptor to auto include accessToken in every requests
export const setupAxiosInterceptors = (store) => {
    reduxStore = store; 

    axiosIntance.interceptors.request.use(
        (config) => {
        const accessToken = reduxStore.getState().auth.accessToken;

        if (accessToken) {
            config.headers.authorization = `Bearer ${accessToken}`;
        }
        return config;
        },
        (error) => {
        return Promise.reject(error);
        }
    );
}
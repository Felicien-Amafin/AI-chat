import axios from "axios";

const BASE_URL =' http://localhost:3001/';
//Init axios instance
export const axiosInstance = axios.create({
    baseURL:BASE_URL, 
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});



let reduxStore;

export const setupAxiosInterceptors = (store) => {
    reduxStore = store; 
    //Create insterceptor to auto include accessToken in every requests
    axiosInstance.interceptors.request.use(
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

    axiosInstance.interceptors.response.use(
        response => response, // Directly return successful responses.
        async error => {
            const originalRequest = error.config;

            if (error.response.status === 401 && !originalRequest._retry) {
                originalRequest._retry = true; // Mark the request as retried to avoid infinite loops.
                
                try {
                    const refreshToken = localStorage.getItem('refreshToken'); // Retrieve the stored refresh token.
                    // Make a request to your auth server to refresh the token.
                    const response = await axios.post('https://your.auth.server/refresh', {
                    refreshToken,
                    });
                    const { accessToken, refreshToken: newRefreshToken } = response.data;
                    // Store the new access and refresh tokens.
                    localStorage.setItem('accessToken', accessToken);
                    localStorage.setItem('refreshToken', newRefreshToken);
                    // Update the authorization header with the new access token.
                    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
                    return axiosInstance(originalRequest); // Retry the original request with the new access token.
                } catch (refreshError) {
                    // Handle refresh token errors by clearing stored tokens and redirecting to the login page.
                    console.error('Token refresh failed:', refreshError);
                    localStorage.removeItem('accessToken');
                    localStorage.removeItem('refreshToken');
                    window.location.href = '/login';
                    return Promise.reject(refreshError);
                }
            }
            return Promise.reject(error); // For all other errors, return the error as is.
        }
    );
}
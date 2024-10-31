import axios from "axios";
import { store } from "../../redux/store";
import { Base_API_URL } from "../constant";

const axiosInstance = axios.create({
  baseURL: Base_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const token = state.auth.token;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle the request error
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Handle the response
    return response;
  },
  (error) => {
    // Handle the response error
    if (error.response && error.response.status === 401) {
      console.log(error.response.status);
      // Example: Redirect to login if unauthorized
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;

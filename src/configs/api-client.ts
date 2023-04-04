import axios from "axios";
import api from "zmp-sdk";

const apiClient = axios.create({
  baseURL: "https://api.vinaspar.fedcba.xyz/api/",
});
// Request interceptor
apiClient.interceptors.request.use(
  async (config) => {
    // Add headers, modify data, etc.
    const withCredentials = config.withCredentials;
    if (withCredentials) {
      const storage = await api.getStorage({
        keys: ["shopToken"],
      });
      config.headers.Authorization = `Bearer ${storage.shopToken}`;
      config.withCredentials = false;
    }
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => {
    // Modify response data, handle errors, etc.
    if (response.status >= 400) {
      throw new Error("Server error");
    }
    return response;
  },
  (error) => {
    // Handle response error
    return Promise.reject(error);
  }
);

export default apiClient;

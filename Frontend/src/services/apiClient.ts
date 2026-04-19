import axios from "axios";
import i18n from "../i18n";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

// Auth token interceptor
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("pharmawise_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// i18n language sync interceptor — sends current UI language to backend
apiClient.interceptors.request.use((config) => {
  const currentLang = i18n.language || "en";
  config.headers["Accept-Language"] = currentLang;
  return config;
});

// Response error interceptor — extracts the backend error message
// so catch blocks get a useful message instead of "Request failed with status 400"
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isAxiosError(error) && error.response?.data) {
      const backendMessage =
        error.response.data.error || error.response.data.message;
      if (backendMessage) {
        const enriched = new Error(backendMessage);
        enriched.name = "ApiError";
        return Promise.reject(enriched);
      }
    }
    return Promise.reject(error);
  }
);

export { apiClient };

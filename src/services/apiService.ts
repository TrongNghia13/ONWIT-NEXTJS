import axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';

// Define interface for your API response here, if needed
// interface ApiResponse {
//     // Define the structure of your typical API response
// }

// Create an Axios instance with default configuration
const apiService: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Request Interceptor
apiService.interceptors.request.use(
    (config: AxiosRequestConfig): any => {
      return config;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    },
);

// Response Interceptor
apiService.interceptors.response.use(
    (response: AxiosResponse): AxiosResponse => {
      // Any status code within the range of 2xx causes this function to trigger
      return response;
    },
    (error: AxiosError) => {
      // Any status codes outside the range of 2xx cause this function to trigger
      return Promise.reject(error);
    },
);

export default apiService;

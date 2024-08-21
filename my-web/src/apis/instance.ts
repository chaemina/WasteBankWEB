import axios from "axios";

export const instance = axios.create({
  timeout: 5000,
  baseURL: "http://ec2-43-202-58-157.ap-northeast-2.compute.amazonaws.com:8090",
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("auth");
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  async response => {
    console.log('[API RESPONSE]', response);
    
    const token = response.headers['authorization'];
    if (token) {
      await localStorage.setItem('auth', token); 
    }
    
    return response;
  },
  error => {
    console.log(`[API RESPONSE ERROR] ${error}`);
    return Promise.reject(error);
  },
);
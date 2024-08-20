import axios from "axios";

export const instance = axios.create({
  timeout: 5000,
  baseURL: "http://ec2-43-202-58-157.ap-northeast-2.compute.amazonaws.com:8090",
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("auth");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    // 응답 헤더에서 토큰을 추출하여 로컬 스토리지에 저장
    const token = response.headers['authorization'];
    if (token) {
      localStorage.setItem("auth", token);
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

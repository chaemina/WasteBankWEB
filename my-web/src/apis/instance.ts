import axios from "axios";
import { refresh } from "./user";
const REFRESH_URL = "/api/refresh-token";

axios.defaults.withCredentials = true;

export const instance = axios.create({
  timeout: 5000,
  baseURL: '/api',
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
  async (error) => {
    // const setError = useSetAtom(errorAtom);
    const { config, response } = error;
    if (
      // "만료된 JWT 토큰입니다." 추가
      response &&
      response.status === 401 &&
      config.url !== REFRESH_URL &&
      !config._retry
    ) {
      config._retry = true;
      try {
        const response = await refresh();
        if (response.data?.status === "success") {
          const token = response.headers['authorization'];
          localStorage.setItem('auth', token); 
          config.headers.Authorization = `${token}`;
          return instance(config);
        } else if (response?.data?.status === "error") {
          // refrsh token 만료
          // 토스트로 로그인 시간이 만료되었습니다. 다시 로그인 후 시도해주세요
          // 강제 로그아웃
          // 로그인 페이지로 리다이렉트
          // setError("로그인 시간이 만료되었습니다. 다시 로그인 해주세요.");
          localStorage.clear();
          window.location.reload();
          return;
        }
      } catch (refreshError) {
        // Refresh Token 요청 중 에러 처리
        // 리프레쉬 토큰 만료
        localStorage.clear();
        window.location.reload();
        return Promise.reject(refreshError);
      }
      // 토큰 만료 오류 아닌 경우
    } else {
      if (error.response) {
        const errorCode = error.response.status;
        const errorState = ["Redirect", "Client", "Server"][
          Math.floor(errorCode / 100) - 3
        ];
        console.error(
          `[API RESPONSE ERROR] ${errorCode}(${errorState}): ${error.message}`
        );
      } else {
        console.error(`[API RESPONSE ERROR] ${error}`);
      }

      return Promise.reject(error);
    }
  }
);
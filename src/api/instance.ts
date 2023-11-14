import axios, { AxiosError, AxiosResponse } from "axios";
import Endpoints from "./endpoints";
import { useAuth } from "../store/auth/auth.store";
import { getAccessToken, logoutUser } from "../store/auth/auth.action";

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_API_HOST}/api`,
  withCredentials: true,
});
const skipAuthUrls = [
  Endpoints.AUTH.SIGNUP,
  Endpoints.AUTH.SIGNIN,
  Endpoints.AUTH.REFRESH,
];
instance.interceptors.request.use(async (config) => {
  if (config.url && skipAuthUrls.includes(config.url)) {
    return config;
  }
  const accessToken = await getAccessToken();

  console.log(accessToken, "request");
  if (accessToken) {
    const authorization = `Bearer ${accessToken}`;
    config.headers.Authorization = authorization;
  }

  return config;
});
instance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const isLoggedIn = !!useAuth.getState().accessToken;

    if (
      error.response?.status === 401 &&
      isLoggedIn &&
      error.request.url !== Endpoints.AUTH.LOGOUT
    ) {
      await logoutUser();
    }

    throw error;
  },
);
export default instance;

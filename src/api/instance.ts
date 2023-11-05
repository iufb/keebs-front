import axios from "axios";
import Endpoints from "./endpoints";

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_API_HOST}/api`,
});
const skipAuthUrls = [
  Endpoints.AUTH.SIGNUP,
  Endpoints.AUTH.SIGNIN,
  Endpoints.AUTH.REFRESH,
];
instance.interceptors.request.use((config) => {
  if (config.url && skipAuthUrls.includes(config.url)) {
    return config;
  }
  return config;
});
export default instance;

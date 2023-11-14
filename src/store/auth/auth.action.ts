import axios, { AxiosPromise } from "axios";
import api from "../../api";
import {
  ISigninRequest,
  ISigninResponse,
  ISignupRequest,
} from "../../api/auth/auth.type";
import { useAuth } from "./auth.store";
import { isTokenExpired } from "../../utils/jwt";
export const signupUser = async (data: ISignupRequest) => {
  try {
    const res = await api.auth.signup(data);
    useAuth.getState().authSuccess(res.data.accessToken);
  } catch (e) {
    if (axios.isAxiosError(e))
      useAuth
        .getState()
        .authFailure(e.response?.data.message ?? "Error occured. Try again.");
  }
};
export const signinUser = async (data: ISigninRequest) => {
  try {
    useAuth.getState().authStart();
    const res = await api.auth.signin(data);
    useAuth.getState().authSuccess(res.data.accessToken);
  } catch (e) {
    console.log(e);
    if (axios.isAxiosError(e))
      useAuth.getState().authFailure(e.response?.data.message);
  }
};
export const logoutUser = async () => {
  try {
    await api.auth.logout();
    useAuth.getState().logout();
  } catch (e) {
    console.log(e);
  }
};
let refreshTokenRequest: AxiosPromise<ISigninResponse> | null = null;
export const getAccessToken = async () => {
  try {
    const accessToken = useAuth.getState().accessToken;
    if (accessToken) {
      if (refreshTokenRequest == null || isTokenExpired(accessToken)) {
        refreshTokenRequest = api.auth.refreshToken();
      }
      const response = await refreshTokenRequest;
      refreshTokenRequest = null;
      useAuth.getState().authSuccess(response.data.accessToken);
      return response.data.accessToken;
    }
    return accessToken;
  } catch (e) {
    console.log(e);
  }
};

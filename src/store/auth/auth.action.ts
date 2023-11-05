import axios from "axios";
import api from "../../api";
import { ISigninRequest } from "../../api/auth/auth.type";
import { useAuth } from "./auth.store";

export const signinUser = async (data: ISigninRequest) => {
  try {
    useAuth.getState().signinStart();
    const res = await api.auth.signin(data);
    useAuth.getState().signinSuccess(res.data.accessToken);
    console.log(res.data);
  } catch (e) {
    if (axios.isAxiosError(e)) useAuth.getState().signinFailure(e.message);
  }
};

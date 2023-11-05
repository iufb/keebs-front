import Endpoints from "../endpoints";
import instance from "../instance";
import { ISigninRequest, ISigninResponse } from "./auth.type";

export const signin = (signinForm: ISigninRequest) => {
  return instance.post<ISigninResponse>(Endpoints.AUTH.SIGNIN, signinForm);
};
export const refreshToken = () => {
  return instance.get(Endpoints.AUTH.REFRESH);
};

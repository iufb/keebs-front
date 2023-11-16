import Endpoints from "../endpoints";
import instance from "../instance";
import { IKeycap } from "./keycap.type";

export const getAllKeycaps = () => {
  return instance.get<IKeycap[]>(Endpoints.KEYCAP.all);
};

export const getKeycapById = (id: string) => {
  return instance.get<IKeycap>(Endpoints.KEYCAP.byId(id));
};

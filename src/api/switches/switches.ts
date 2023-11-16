import Endpoints from "../endpoints";
import instance from "../instance";
import { ISwitches } from "./switches.type";

export const getAllSwitches = () => {
  return instance.get<ISwitches[]>(Endpoints.SWITCHES.all);
};
export const getSwitchesById = (id: string) => {
  return instance.get<ISwitches>(Endpoints.SWITCHES.byId(id));
};

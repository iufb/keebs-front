import Endpoints from "../endpoints";
import instance from "../instance";
import { IKeyboard } from "./keyboard.type";

export const getAllKeyboards = () => {
  return instance.get<IKeyboard[]>(Endpoints.KEYBOARD.all);
};
export const getKeyboardById = (id: string) => {
  return instance.get<IKeyboard>(Endpoints.KEYBOARD.byId(id));
};

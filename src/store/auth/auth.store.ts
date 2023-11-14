import { create } from "zustand";
import { createSelectors } from "../createSelectors";
type State = {
  accessToken: string | null;
  isLoading: boolean;
  error: string | null;
};
type Action = {
  authStart: () => void;
  authSuccess: (accessToken: State["accessToken"]) => void;
  authFailure: (error: State["error"]) => void;
  logout: () => void;
};
const useAuthStoreBase = create<State & Action>((set) => ({
  accessToken: localStorage.getItem("accessToken") || null,
  isLoading: false,
  error: null,
  authStart: () =>
    set(() => ({ isLoading: true, accessToken: null, error: null })),
  authSuccess: (accessToken) => {
    set(() => ({ accessToken, isLoading: false, error: null }));
    if (accessToken) localStorage.setItem("accessToken", accessToken);
  },
  authFailure: (error) =>
    set(() => ({ isLoading: false, error, accessToken: null })),
  logout: () => {
    set(() => ({ isLoading: false, error: null, accessToken: null }));
    localStorage.removeItem("accessToken");
  },
}));

export const useAuth = createSelectors(useAuthStoreBase);

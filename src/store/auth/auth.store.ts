import { create } from "zustand";
import { createSelectors } from "../createSelectors";
type State = {
  accessToken: string | null;
  isLoading: boolean;
  error: string | null;
};
type Action = {
  signinStart: () => void;
  signinSuccess: (accessToken: State["accessToken"]) => void;
  signinFailure: (error: State["error"]) => void;
};
const useAuthStoreBase = create<State & Action>((set) => ({
  accessToken: null,
  isLoading: false,
  error: null,
  signinStart: () =>
    set(() => ({ isLoading: true, accessToken: null, error: null })),
  signinSuccess: (accessToken) =>
    set(() => ({ accessToken, isLoading: false, error: null })),
  signinFailure: (error) =>
    set(() => ({ isLoading: false, error, accessToken: null })),
}));

export const useAuth = createSelectors(useAuthStoreBase);

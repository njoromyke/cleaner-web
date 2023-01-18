import { createContext } from "react";

export const GlobalContext = createContext({
  globalState: {},
  setGlobalState: () => {},
});
export const DEFAULT_GLOBAL_STATE = {
  user: null,
  token: null,
};

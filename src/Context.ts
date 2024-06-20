import React from "react";
import { TDateRange, User } from "./utils";
import BackendApi from "./api/backend";

const AppContext = React.createContext<{
  accessToken: string;
  setAccessToken: React.Dispatch<React.SetStateAction<string>>;
  refreshToken: string;
  setRefreshToken: React.Dispatch<React.SetStateAction<string>>;
  user: User | null | undefined;
  setUser: React.Dispatch<React.SetStateAction<User | null | undefined>>;
  backendApi: BackendApi;
  dateRange: TDateRange;
  setDateRange: React.Dispatch<React.SetStateAction<TDateRange>>;
} | null>(null);

export default AppContext;

export function useAppContext() {
  const context = React.useContext(AppContext);
  if (!context) {
    throw new Error(`useAppContext must be used within a AppContext Provider`);
  }
  return context;
}

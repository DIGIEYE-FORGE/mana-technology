import { useMemo, useState } from "react";
import { Outlet } from "react-router-dom";
import { TDateRange, User } from "./utils";
import { z } from "zod";
import useLocalStorage from "./hooks/use-local-storage";
import BackendApi from "./api/backend";
import useSWR, { SWRConfig } from "swr";
import Loader from "./components/loader";
import AppContext from "./Context";
import LoginPage from "./pages/login";
import Navbar from "./components/navbar";
import BpIndicator from "./components/bp-indicator";

function App() {
  const [user, setUser] = useState<User | null | undefined>(undefined);
  const [accessToken, setAccessToken] = useLocalStorage(
    "accessToken",
    z.string().default(""),
  );
  const [refreshToken, setRefreshToken] = useLocalStorage(
    "refreshToken",
    z.string().default(""),
  );
  const [dateRange, setDateRange] = useState<TDateRange>({
    from: new Date("2024-06-01"),
    to: new Date(),
  });
  const backendApi = useMemo(
    () =>
      new BackendApi({
        accessToken,
        refreshToken,
        logoutCallback: () => {
          setUser(null);
          setAccessToken("");
          setRefreshToken("");
        },
      }),
    [accessToken, refreshToken, setAccessToken, setRefreshToken],
  );

  const { isLoading } = useSWR(
    `currentUser`,
    async () => {
      if (!backendApi.isReady()) return null;
      return await backendApi.getCurrentUser();
    },
    {
      onSuccess: (data) => {
        setUser(data);
      },
      onError: () => {
        setUser(null);
      },
      errorRetryCount: 0,
    },
  );

  if (isLoading || user === undefined) {
    return (
      <div className="flex min-h-[100svh] w-full items-center justify-center bg-black/20">
        <Loader />
      </div>
    );
  }

  return (
    <AppContext.Provider
      value={{
        accessToken,
        setAccessToken,
        refreshToken,
        setRefreshToken,
        user,
        setUser,
        backendApi,
        dateRange,
        setDateRange,
      }}
    >
      <SWRConfig
        value={{
          shouldRetryOnError: false,
          revalidateOnFocus: false,
        }}
      >
        {user === null && <LoginPage />}
        {user && backendApi.isReady() && (
          <main
            className="dark overflow-y-auto bg-[#05177E] text-foreground"
            style={{
              backgroundImage: 'url("/bg.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              // scrollbarGutter: "stable",
            }}
          >
            {/* <Navbar /> */}
            <Outlet />
          </main>
        )}
        <BpIndicator className="fixed bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 rounded-3xl bg-black p-12 text-6xl text-white opacity-20" />
      </SWRConfig>
    </AppContext.Provider>
  );
}

export default App;

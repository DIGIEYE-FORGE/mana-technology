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
    from: new Date("2021-09-01"),
    to: new Date("2024-06-30"),
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
            className="dark flex flex-col gap-6 overflow-y-auto px-8 pb-6 text-foreground [&>*]:mx-auto [&>*]:w-full [&>*]:max-w-[1954px]"
            style={{
              backgroundImage: 'url("/bg.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Navbar />
            <Outlet />
          </main>
        )}
      </SWRConfig>
    </AppContext.Provider>
  );
}

export default App;

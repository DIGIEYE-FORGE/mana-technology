import { useMemo, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { User } from "./utils";
import { z } from "zod";
import useLocalStorage from "./hooks/use-local-storage";
import BackendApi from "./api/backend";
import useSWR, { SWRConfig } from "swr";
import Loader from "./components/loader";
import AppContext from "./Context";
import LoginPage from "./pages/login";
import { Button } from "./components/ui/button";
import { LogOut } from "lucide-react";

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
      }}
    >
      <SWRConfig
        value={{
          shouldRetryOnError: false,
          revalidateOnFocus: false,
        }}
      >
        {user === null && <LoginPage />}
        <main
          className="dark flex flex-col gap-6 overflow-y-auto px-8 pb-6 text-foreground [&>*]:mx-auto [&>*]:w-full [&>*]:max-w-[1954px]"
          style={{
            backgroundImage: 'url("/bg-mesh.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <nav className="mx-auto flex items-center justify-center gap-6 divide-background py-4">
            <Link to="/">Home</Link>
            <Link to="tree">Tree</Link>
            <Link to="dashboard">Dashboard</Link>

            <Button
              variant="outline"
              onClick={() => {
                backendApi.signOut(refreshToken).then(() => {
                  setUser(null);
                  setAccessToken("");
                  setRefreshToken("");
                });
              }}
            >
              <LogOut />
              <span className="text-sm font-bold"> Logout</span>
            </Button>
          </nav>
          <Outlet />
        </main>
      </SWRConfig>
    </AppContext.Provider>
  );
}

export default App;

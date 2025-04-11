import { useEffect, useMemo, useState } from "react";
import { Outlet } from "react-router-dom";
import { TDateRange, toggleFullScreen, User } from "./utils";
import { z } from "zod";
import useLocalStorage from "./hooks/use-local-storage";
import BackendApi from "./api/backend";
import useSWR, { SWRConfig } from "swr";
import Loader from "./components/loader";
import AppContext from "./Context";
import LoginPage from "./pages/login";
import BpIndicator from "./components/bp-indicator";
import { useNavigate, useLocation } from "react-router-dom";
import { GoliaBot, GoliaWidget } from "golia-chatbot";
function App() {
  const [user, setUser] = useState<User | null | undefined>(undefined);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [fullScreen, setFullScreen] = useState(false);
  const [accessToken, setAccessToken] = useLocalStorage(
    "accessToken",
    z.string().default(""),
  );
  const [refreshToken, setRefreshToken] = useLocalStorage(
    "refreshToken",
    z.string().default(""),
  );
  const [bot, setBot] = useState<GoliaBot | null>(null);
  const [isLoadingBot, setIsLoadingBot] = useState(true);
  const [dateRange, setDateRange] = useState<TDateRange>({
    from: new Date(new Date("2024-06-01").setHours(0, 0, 0, 0)),
    to: new Date(new Date().setHours(23, 59, 59, 999)),
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

  useEffect(() => {
    if (pathname === "/") {
      navigate("/main-project");
    }
  }, []);
  useEffect(() => {
    if (!user || bot) return;
    // Initialize bot with user info
    const initBot = async () => {
      setIsLoadingBot(true);
      if (!user) return;
      const goliaBot = new GoliaBot({
        name: "Golia",
        apiEndpoint: "https://goliya.digieye.io/api/",
        destroyed: false,
        greeting:
          "Welcome to the Digital Twin demo of the Tizert Project — a cutting-edge virtual representation of one of Morocco's most strategic mining operations. This platform enables real-time monitoring, data-driven decision-making, and immersive visualization of the entire site, bridging the physical and digital worlds to optimize performance, safety, and sustainability",
        user: {
          email: "digital-twin@gmail.com",
          firstName: "digital",
          lastName: "twin",
          avatar: user?.avatar
            ? import.meta.env.VITE_BACKEND_API + "/uploads" + user.avatar
            : undefined,
        },
      });
      setTimeout(() => {
        setBot(goliaBot);
        setIsLoadingBot(false);
      }, 1000);
      // Wait a moment for authentication to complete
    };

    initBot();
  }, [user]);

  useEffect(() => {
    function preventFullScreen(event: KeyboardEvent) {
      if (event.key === "F11") {
        event.preventDefault();
        toggleFullScreen().then((isFullScreen) => {
          if (isFullScreen !== undefined) setFullScreen(isFullScreen);
        });
      }
    }
    document.addEventListener("keydown", preventFullScreen);
    return () => {
      document.removeEventListener("keydown", preventFullScreen);
    };
  }, []);

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
        fullScreen,
        setFullScreen,
        setDateRange,
      }}
    >
      <SWRConfig
        value={{
          revalidateIfStale: false,
          revalidateOnFocus: false,
          revalidateOnReconnect: false,
        }}
      >
        {user === null && <LoginPage />}
        {user && backendApi.isReady() && (
          <main
            className="dark overflow-y-auto text-foreground"
            style={{
              backgroundImage:
                "linear-gradient(to bottom,  #172f6dd0 0%, #0f172ad0 70%), url(/sky-bg.png)",
              backgroundSize: "100% 100%, 100% 100%",
            }}
          >
            {bot && (
              <GoliaWidget
                style={{
                  position: "fixed",
                  bottom: "20px",
                  right: "20px",
                  zIndex: 999999,
                }}
                launcherStyle={{
                  border: "2px solid white",
                  borderRadius: "50%",
                  width: 60,
                  height: 60,
                  boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                }}
                containerStyle={{
                  resize: "both",
                  bottom: "30px",
                  right: "90px",
                }}
                bot={bot}
                placeholder="Ask me anything..."
                maxHistoryMessages={10}
                primaryColor="#3b8eff"
              />
            )}
            <Outlet />
          </main>
        )}
        <BpIndicator className="fixed bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 rounded-3xl bg-black p-12 text-6xl text-white opacity-20" />
      </SWRConfig>
    </AppContext.Provider>
  );
}

export default App;

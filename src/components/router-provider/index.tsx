import { RouteObject, createBrowserRouter } from "react-router-dom";
import { RouterProvider as ReactRouterProvider } from "react-router-dom";

import App from "@/App";
import HomePage from "@/pages/home";
import DashboardPage from "@/pages/dashboard";
import TreePage from "@/pages/tree";
import NotfoundPage from "@/pages/notfound";
import DevPage from "@/pages/dev";
import IselDevPage from "@/pages/isel-dev";
import DashboardPage5 from "@/pages/ventilation-dashboard";
import DashboardPage3 from "@/pages/dashboard3";
import OjamilDevPage from "@/pages/ojamil-dev";
import MainProjectPage from "@/pages/main-project";
import UnderGroundPage from "@/pages/underground";
import OpSud from "@/pages/op-sud";
import Op from "@/pages/op";
import OpEst from "@/pages/op-est";
import OpSud2 from "@/pages/op-sud2";
import OpSud4 from "@/pages/op-sud4";
import UndergroundDashboardPage from "@/pages/underground/dashboard";
import VentilationDashboard from "@/pages/ventilation-dashboard";
import HomeDashboard from "@/pages/home/dashboard";
import HsePage from "@/pages/hse";
import HseDashboard from "@/pages/hse/dashboard";
import MobilePage from "@/pages/mobile";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
        children: [
          {
            path: "op-est11",
            element: <HomeDashboard />,
          },
          {
            path: "op-sud",
            element: <OpSud />,
          },
          {
            path: "",
            element: <Op />,
          },
          {
            path: "/op-est",
            element: <OpEst />,
          },
          {
            path: "op-sud2",
            element: <OpSud2 />,
          },
          {
            path: "op-sud4",
            element: <OpSud4 />,
          },
        ],
      },

      {
        path: "main-project",
        element: <MainProjectPage />,
      },
      {
        path: "underground",
        element: <UnderGroundPage />,
        children: [
          {
            path: "",
            element: <UndergroundDashboardPage />,
          },
          {
            path: "tree",
            element: <TreePage />,
          },
          {
            path: "ventilation",
            element: <VentilationDashboard />,
          },
        ],
      },
      {
        path: "hse",
        element: <HsePage />,
        children: [
          {
            path: "",
            element: <HseDashboard />,
          },
        ],
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
      },
      {
        path: "dashboard3",
        element: <DashboardPage3 />,
      },
      {
        path: "dashboard5",
        element: <DashboardPage5 />,
      },
      {
        path: "tree",
        element: <TreePage />,
      },
      {
        path: "ojamil",
        element: <OjamilDevPage />,
      },
      {
        path: "dev",
        element: <DevPage />,
      },
      {
        path: "isel-dev",
        element: <IselDevPage />,
      },
    ],
  },
  {
    path: "mobile",
    element: <MobilePage />,
  },
  { path: "*", element: <NotfoundPage /> },
];

const router = createBrowserRouter(routes);

export default function RouterProvider() {
  return <ReactRouterProvider router={router} />;
}

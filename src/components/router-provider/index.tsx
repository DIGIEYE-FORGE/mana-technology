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
import VentilationDashboard1 from "@/pages/ventilation-dashboard/index1";
import Dashboard11Page from "@/pages/dashboard11";
import Dashboard12Page from "@/pages/dashboard12";
import Dashboard13Page from "@/pages/dashboard13";
import Dashboard14Page from "@/pages/dashboard14";
import VrUndergroundPage from "@/pages/360";
import FuturePage from "@/pages/future";
import VideoPage from "@/pages/video";
import Projection360Page from "@/pages/360-projection";
import TizertVideo from "@/pages/tizert-video";
import CrushingPage from "@/pages/omniverse";
import PipeLine from "@/pages/pipe-line";
import PebbleCrusher from "@/pages/pebble-crusher";
import CrushingLayout from "@/pages/omniverse-layout";

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
            path: "",
            element: <Op />,
          },
          {
            path: "/op-est",
            element: <OpEst />,
          },
          {
            path: "op-est11",
            element: <HomeDashboard />,
          },
          {
            path: "op-sud",
            element: <OpSud />,
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
        path: "pipeline",
        element: <PipeLine />,
      },
      {
        path: "crushing",
        element: <CrushingLayout />,
        children: [
          {
            path: "",
            element: <CrushingPage />,
          },
        ],
      },
      {
        path: "pebble-crusher",
        element: <PebbleCrusher />,
      },
      {
        path: "future",
        element: <FuturePage />,
      },
      // {
      //   path: "golia",
      //   element: <GoliaPage />,
      // },
      {
        path: "main-project",
        element: <MainProjectPage />,
      },
      {
        path: "vr-underground",
        element: <VrUndergroundPage />,
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
          {
            path: "ventilation1",
            element: <VentilationDashboard1 />,
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
      // {
      //   path: "ojamil",
      //   element: <OjamilDevPage />,
      // },
      {
        path: "dev",
        element: <DevPage />,
      },
      {
        path: "isel-dev",
        element: <IselDevPage />,
      },
      {
        path: "dashboard11",
        element: <Dashboard11Page />,
      },
      {
        path: "dashboard12",
        element: <Dashboard12Page />,
      },
      {
        path: "dashboard13",
        element: <Dashboard13Page />,
      },
      {
        path: "dashboard14",
        element: <Dashboard14Page />,
      },
      {
        path: "/Tizert_video/",
        element: <TizertVideo />,
      },
    ],
  },
  {
    path: "360-projection",
    element: <Projection360Page />,
  },
  {
    path: "mobile",
    element: <MobilePage />,
  },
  {
    path: "video/:name",
    element: <VideoPage />,
  },
  { path: "*", element: <NotfoundPage /> },
];

const router = createBrowserRouter(routes);

export default function RouterProvider() {
  return <ReactRouterProvider router={router} />;
}

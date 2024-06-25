import { RouteObject, createBrowserRouter } from "react-router-dom";
import { RouterProvider as ReactRouterProvider } from "react-router-dom";

import App from "@/App";
import HomePage from "@/pages/home";
import DashboardPage from "@/pages/dashboard";
import TreePage from "@/pages/tree";
import NotfoundPage from "@/pages/notfound";
import DevPage from "@/pages/dev";
import IselDevPage from "@/pages/isel-dev";
import DashboardPage3 from "@/pages/dashboard3";
import OjamilDevPage from "@/pages/ojamil-dev";
import MainProjectPage from "@/pages/main-project";
import UnderGroundPage from "@/pages/underground";
import UndergroundDashboardPage from "@/pages/underground/dashboard";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
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
  { path: "*", element: <NotfoundPage /> },
];

const router = createBrowserRouter(routes);

export default function RouterProvider() {
  return <ReactRouterProvider router={router} />;
}

import { RouteObject, createBrowserRouter } from "react-router-dom";
import { RouterProvider as ReactRouterProvider } from "react-router-dom";

import App from "@/App";
import HomePage from "@/pages/home";
import DashboardPage from "@/pages/dashboard";
import TreePage from "@/pages/tree";
import NotfoundPage from "@/pages/notfound";

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
        path: "dashboard",
        element: <DashboardPage />,
      },
      {
        path: "tree",
        element: <TreePage />,
      },
    ],
  },
  { path: "*", element: <NotfoundPage /> },
];

const router = createBrowserRouter(routes);

export default function RouterProvider() {
  return <ReactRouterProvider router={router} />;
}

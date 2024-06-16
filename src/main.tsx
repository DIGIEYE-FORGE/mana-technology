import React from "react";
import ReactDOM from "react-dom/client";
import "@/globals.scss";
import RouterProvider from "@/components/router-provider/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider />
  </React.StrictMode>,
);

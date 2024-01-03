/* eslint-disable react-refresh/only-export-components */
import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";

import Layout from "./components/layout/Layout.jsx";
import { ThemContextProvider } from "./contexts/themContext.jsx";
import "./index.css";

const AppLyout = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};
const router = createBrowserRouter([
  {
    element: <AppLyout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/new-page",
        element: <h1>New page</h1>,
      },
      {
        path: "/popular-page",
        element: <h1>Popular Page</h1>,
      },
      {
        path: "/trending-page",
        element: <h1>Trending Page</h1>,
      },
      {
        path: "/categories-page",
        element: <h1>Categories Page</h1>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemContextProvider>
      <RouterProvider router={router} />
    </ThemContextProvider>
  </React.StrictMode>
);

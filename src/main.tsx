import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const TitleContext = createContext("Project");

import {
  RouterProvider,
  createBrowserRouter,
  useLocation,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: "<App />",
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);

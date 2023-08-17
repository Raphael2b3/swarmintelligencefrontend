import { createContext, useState } from "react";
import styles from "./App.module.scss";
import Logincard from "./components/layouts/logincard/logincard";

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
  {
    path: "/",
    element: "<App />",
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

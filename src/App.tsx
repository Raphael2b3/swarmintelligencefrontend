import { useState, useRef } from "react";
import styled from 'styled-components'
import AppProvider, { AppContext, AppContextData } from "./context/appContext";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Login from "./pages/loginPage";
import Home from "./pages/homePage";



function App() {

  const appCtxRef = useRef<AppContextData>({
    root: 'http://127.0.0.1:5555/',
  })


  const router = createBrowserRouter([
    {
      path: 'login',
      element: <Login/>
    },
    {
      path: '/',
      element: <Home/>,
    }
  ])


  return (
    <AppProvider ctx = {appCtxRef.current}>
      <RouterProvider router = {router} />
    </AppProvider>
    
  );



}

export default App;

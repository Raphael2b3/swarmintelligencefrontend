"use client";

import React, { useState } from "react";
import SideNav from "./components/layout/SideNav/SideNav";
import Topbar from "./components/layout/Topbar/Topbar";
import "./globals.scss";

export default function Mainlayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  return (
    <div className="content-wrapper">
      <SideNav setIsOpen={() => setIsSideNavOpen((prev) => !prev)} isOpen={isSideNavOpen}></SideNav>
      <div className="main-layout">
        <Topbar setIsOpen={() => setIsSideNavOpen((prev) => !prev)} isOpen={isSideNavOpen} />
        <main className="main-content">{children}</main>
      </div>
    </div>
  );
}

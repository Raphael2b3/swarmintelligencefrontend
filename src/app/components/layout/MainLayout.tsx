"use client";

import SideNav from "./SideNav.tsx/SideNav";
import Topbar from "./Topbar.tsx/Topbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="content-wrapper">
      <SideNav></SideNav>
      <div className="main-layout">
        <Topbar />
        <main className="main-content">{children}</main>
      </div>
    </div>
  );
}

import React from "react";
import NavBar from "../navbar";
import Footer from "../Footer/";
export default function Layout({ children }) {
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflowX: "clip",
      }}
    >
      <NavBar priority />
      <div style={{ zIndex: "1000" }}>{children}</div>
      <Footer />
    </div>
  );
}

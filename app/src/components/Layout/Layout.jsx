import React from "react";
import "./Layout.css";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className={`wrapper `}>
        <Sidebar />
        <div className="content">{children}</div>
      </div>
    </>
  );
};

export default Layout;

import React from "react";
import "./Layout.css";
import useSidebarControl from "../../hooks/useSidebarControl";

const Layout = ({ children }) => {
  const { isActive } = useSidebarControl();
  return <div className={`layout ${isActive ? "active" : ""}`}>{children}</div>;
};

export default Layout;

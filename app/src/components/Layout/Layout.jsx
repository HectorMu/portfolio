import React from "react";
import "./Layout.css";

const Layout = ({ children }) => {
  return <div className={`content `}>{children}</div>;
};

export default Layout;

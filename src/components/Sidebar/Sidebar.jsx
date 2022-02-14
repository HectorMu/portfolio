import React from "react";
import useSidebarControl from "../../hooks/useSidebarControl";

import "./Sidebar.css";

const Sidebar = () => {
  const { isActive } = useSidebarControl();
  return <nav className={`sidebar  ${isActive ? `active` : ``} `}>Sidebar</nav>;
};

export default Sidebar;

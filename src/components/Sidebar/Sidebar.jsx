import React from "react";
import useSidebarControl from "../../hooks/useSidebarControl";

import "./Sidebar.css";

const Sidebar = () => {
  const { isActive } = useSidebarControl();
  return (
    <aside className={`sidebar ${isActive ? `active` : ``} `}>
      <h3>Menu</h3>
      <nav className="menu">
        <a href="#" className="menu-item">
          Home
        </a>
        <a href="#" className="menu-item">
          About me
        </a>
        <a href="#" className="menu-item">
          Projects
        </a>
        <a href="#" className="menu-item">
          Skills
        </a>
        <a href="#" className="menu-item">
          Experience
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;

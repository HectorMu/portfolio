import React from "react";
import useSidebarControl from "../../hooks/useSidebarControl";

import "./Sidebar.css";

const Sidebar = () => {
  const { isActive } = useSidebarControl();
  return (
    <nav className={`sidebar ${isActive ? `active` : ``} `}>
      <div className="sidebar-links">
        <a className="link" href="#">
          About me
        </a>
        <a className="link" href="#">
          Skills
        </a>
        <a className="link" href="#">
          My projects
        </a>
        <a className="link" href="#">
          Experience
        </a>
      </div>
    </nav>
  );
};

export default Sidebar;

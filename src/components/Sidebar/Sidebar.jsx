import React from "react";
import useSidebarControl from "../../hooks/useSidebarControl";

import "./Sidebar.css";

const Sidebar = () => {
  const { isActive, setIsActive } = useSidebarControl();
  return (
    <aside className={`sidebar ${isActive ? `active` : ``} `}>
      <h3>Menu</h3>
      <nav className="menu">
        <a
          href="#"
          onClick={() => setIsActive(!isActive)}
          className="menu-item"
        >
          Home
        </a>
        <a
          href="#skills"
          onClick={() => setIsActive(!isActive)}
          className={`menu-item`}
        >
          Skills
        </a>
        <a
          href="#projects"
          onClick={() => setIsActive(!isActive)}
          className="menu-item"
        >
          Projects
        </a>

        <a
          href="#"
          onClick={() => setIsActive(!isActive)}
          className="menu-item"
        >
          Experience
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;

import React from "react";
import useSidebarControl from "../../hooks/useSidebarControl";
import useLanguage from "../../hooks/useLanguage";

import "./Sidebar.css";

const Sidebar = () => {
  const { isActive, setIsActive } = useSidebarControl();
  const { currentLangObj } = useLanguage();

  console.log(currentLangObj);
  return (
    <aside className={`sidebar ${isActive ? `active` : ``} `}>
      <h3>Menu</h3>
      <nav className="menu">
        <a
          href="#"
          onClick={() => setIsActive(!isActive)}
          className="menu-item"
        >
          {currentLangObj.sidebar.link1}
        </a>
        <a
          href="#skills"
          onClick={() => setIsActive(!isActive)}
          className={`menu-item`}
        >
          {currentLangObj.sidebar.link2}
        </a>
        <a
          href="#projects"
          onClick={() => setIsActive(!isActive)}
          className="menu-item"
        >
          {currentLangObj.sidebar.link3}
        </a>

        <a
          href="#contact"
          onClick={() => setIsActive(!isActive)}
          className="menu-item"
        >
          {currentLangObj.sidebar.link4}
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;

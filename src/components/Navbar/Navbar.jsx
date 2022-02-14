import React from "react";
import useSidebarControl from "../../hooks/useSidebarControl";

import "./navbar.css";
const Navbar = () => {
  const { setIsActive, isActive } = useSidebarControl();

  const toggleSidebarHandler = () => {
    setIsActive(!isActive);
  };
  return (
    <nav className="navbar">
      <div className="brand">
        <a href="#">Hm</a>
      </div>
      <ul className="nav-items">
        <button className="theme-chooser">
          <i className="fas fa-sun fa-2x"></i>
        </button>
        <button onClick={toggleSidebarHandler} className={`toggle-sidebar`}>
          <i className="fas fa-bars "></i>
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;

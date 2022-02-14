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
        <a className="nav-link" href="#">
          About me
        </a>
        <a className="nav-link" href="#">
          My projects
        </a>
        <a className="nav-link" href="#">
          Contact
        </a>
        <button className="theme-chooser">
          <i className="fas fa-sun fa-2x"></i>
        </button>
        <button onClick={toggleSidebarHandler} className="nav-link">
          <i className="fas fa-sun fa-2x"></i>
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;

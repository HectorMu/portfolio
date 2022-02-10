import React from "react";

const Navbar = () => {
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
      </ul>
    </nav>
  );
};

export default Navbar;

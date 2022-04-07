import React from "react";
import useSidebarControl from "../../hooks/useSidebarControl";
import useLanguage from "../../hooks/useLanguage";
import { Logout } from "../../pages/Login/services/auth";
import useSession from "../../hooks/useSession";

import "./navbar.css";
const Navbar = () => {
  const { setIsActive, isActive } = useSidebarControl();
  const { user, setUser } = useSession();

  const { lang, setLang } = useLanguage();

  const handleLogout = () => {
    Logout();
    setUser(null);
  };

  const toggleSidebarHandler = () => {
    setIsActive(!isActive);
  };
  const toggleLanguage = () => {
    if (lang === "en") {
      setLang("es");
      return;
    }
    if (lang === "es") {
      setLang("en");
    }
  };
  return (
    <nav className="navbar">
      <div className="brand">
        <a href="#">Hm</a>
      </div>
      <ul className="nav-items">
        {/* <button className="theme-chooser">
          <i className="fas fa-sun fa-2x"></i>
        </button> */}
        <button onClick={toggleLanguage} className="lang">
          {lang}
        </button>
        {user !== null && (
          <button onClick={handleLogout} className="lang">
            Logout
          </button>
        )}

        <button onClick={toggleSidebarHandler} className={`toggle-sidebar`}>
          <i className="fas fa-bars "></i>
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;

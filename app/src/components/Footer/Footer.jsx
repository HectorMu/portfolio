import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h5>Hector Muñoz ©2022 </h5>
      <div className="footer-social-media">
        <a href="">
          <i className="fab fa-facebook-square fa-2x"></i>
        </a>
        <a href="">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="">
          <i className="fab fa-github-square fa-2x"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import me from "../../assets/mifoto.jfif";
import useLanguage from "../../../../hooks/useLanguage";
import "./hero.css";
const Hero = () => {
  const { currentLangObj } = useLanguage();
  return (
    <section
      data-aos="fade-up-left"
      id="home"
      className="hero gradient-blue pt-2"
    >
      <div className="container">
        <div className="hero-items py-1">
          <div>
            <img src={me} alt="me" />
          </div>
          <div className="about">
            <p>{currentLangObj.hero.presentation}</p>
            <div className="social-media">
              <a href="#" className="btn-github">
                <i className="fab fa-github fa-3x"></i>
              </a>
              <a href="#" className="btn-linkedin">
                <i className="fab fa-linkedin fa-3x"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

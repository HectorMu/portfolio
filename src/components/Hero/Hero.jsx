import React, { useState, useEffect } from "react";
import me from "../../assets/mifoto.jfif";
import "./hero.css";
const Hero = () => {
  const [old, setOld] = useState(0);

  useEffect(() => {
    setOld(new Date(new Date() - new Date("2000/09/23")).getFullYear() - 1970);
  }, []);

  return (
    <section className="hero gradient-blue pt-2">
      <div className="container">
        <div className="hero-items py-1">
          <div>
            <img src={me} alt="me" />
          </div>
          <div className="about">
            <h5>Who i am?</h5>
            <p>
              Hi, I'm Hector Muñoz a {old} years old web developer that loves to
              learn new techonologies and take projects to the next level.
            </p>
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
        <footer className="hero-footer py-2">
          <button>
            <i className="fas fa-arrow-down fa-2x"></i>
          </button>
          <h2>Scroll down to discover much more</h2>
          <button>
            <i className="fas fa-arrow-down fa-2x"></i>
          </button>
        </footer>
      </div>
    </section>
  );
};

export default Hero;

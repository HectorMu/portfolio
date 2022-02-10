import React from "react";

const Hero = () => {
  return (
    <section className="hero bg-gray-light">
      <div className="container">
        <div className="hero-items py-1">
          <div>
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="me"
            />
          </div>
          <div className="about">
            <h5>Who i am?</h5>
            <p>
              Hi, I'm Hector Muñoz a JavaScript fullstack enginner that loves to
              learn new techonologies and take projects to the next level.
            </p>
            <div className="social-media">
              <a href="#" className="btn-github">
                <i class="fab fa-github fa-3x"></i>
              </a>
              <a href="#" className="btn-linkedin">
                <i class="fab fa-linkedin fa-3x"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

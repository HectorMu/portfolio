import React from "react";
import useLanguage from "../../hooks/useLanguage";
import "./Projects.css";

const Projects = () => {
  const { currentLangObj } = useLanguage();
  return (
    <div id="projects" className="projects bg-gray-light">
      <div className="projects-header mt-1">
        <h1>{currentLangObj.projects.header}</h1>
      </div>
      <div className="projects-cards">
        <div className="project-card shadowed">
          <img
            src="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            className="image"
            alt=""
          />
          <div className="title">
            <h5>Project #1</h5>
          </div>

          <div className="body">
            <div className="card-links">
              <a className="repository" href="repository">
                Code <i className="fab fa-github"></i>
              </a>
              <a className="website" href="webiste">
                Site <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="project-card shadowed">
          <img
            src="https://images.pexels.com/photos/326514/pexels-photo-326514.jpeg?cs=srgb&dl=pexels-tranmautritam-326514.jpg&fm=jpg"
            className="image"
            alt=""
          />
          <div className="title">
            <h5>Project #2</h5>
          </div>

          <div className="body">
            <div className="card-links">
              <a className="repository" href="repository">
                Code <i className="fab fa-github"></i>
              </a>
              <a className="website" href="webiste">
                Site <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="project-card shadowed">
          <img
            src="https://images.pexels.com/photos/33041/antelope-canyon-lower-canyon-arizona.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            className="image"
            alt=""
          />
          <div className="title">
            <h5>Project #3</h5>
          </div>

          <div className="body">
            <div className="card-links">
              <a className="repository" href="repository">
                Code <i className="fab fa-github"></i>
              </a>
              <a className="website" href="webiste">
                Site <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="project-card shadowed">
          <img
            src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            className="image"
            alt=""
          />
          <div className="title ">
            <h5>Project #4</h5>
          </div>

          <div className="body">
            <div className="card-links">
              <a className="repository" href="repository">
                Code <i className="fab fa-github"></i>
              </a>
              <a className="website" href="webiste">
                Site <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

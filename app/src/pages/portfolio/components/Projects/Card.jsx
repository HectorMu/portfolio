import React from "react";

const Card = ({ project }) => {
  return (
    <div className="project-card shadowed">
      <img
        src={`http://localhost:4000/images/${project.image}`}
        className="image"
        alt=""
      />
      <div className="title">
        <h5>{project.name}</h5>
      </div>

      <div className="body">
        <div className="card-links">
          {project.repolink === "N/A" ? null : (
            <a
              className="repository"
              href={project.repolink}
              target="_blank"
              rel="noreferrer"
            >
              Code <i className="fab fa-github"></i>
            </a>
          )}
          {project.weblink === "N/A" ? null : (
            <a
              className="repository"
              href={project.weblink}
              target="_blank"
              rel="noreferrer"
            >
              Site <i className="fas fa-arrow-right"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;

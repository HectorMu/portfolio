import React from "react";
import List from "./components/List";
import Form from "./components/Form";
import useServiceFetch from "../../hooks/useServiceFetch";
import { getProjects } from "../../services/projects";

const Projects = () => {
  const { hookData: Projects, refreshData } = useServiceFetch(getProjects);
  return (
    <div className="container-fluid" style={{ marginTop: "100px" }}>
      <div className="d-flex justify-content-between align-items-center h-100 mb-4">
        <h1>Projects</h1>
      </div>
      <Form refreshData={refreshData} />
      <List Projects={Projects} refreshData={refreshData} />
    </div>
  );
};

export default Projects;

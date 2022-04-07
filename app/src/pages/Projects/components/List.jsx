import React from "react";
import { DeleteProject } from "../../../services/projects";

const List = ({ Projects, refreshData }) => {
  const handleDelete = async (id) => {
    const results = await DeleteProject(id);
    refreshData();
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Desc</th>
          <th scope="col">Repolink</th>
          <th scope="col">Weblink</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        {Projects.length > 0 &&
          Projects.map((project) => (
            <tr key={project.id}>
              <th scope="row">{project.name}</th>
              <td>{project.description}</td>
              <td>{project.repolink}</td>
              <td>{project.weblink}</td>
              <td>
                <div className="d-flex g-3">
                  <button
                    onClick={() => handleDelete(project.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default List;

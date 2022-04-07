import { useState } from "react";
import { SaveProject } from "../../../services/projects";

const ENTRIES = {
  name: "",
  description: "",
  repolink: "",
  weblink: "",
  photo: undefined,
};

const Form = ({ refreshData }) => {
  const [project, setProject] = useState(ENTRIES);
  const [error, setError] = useState("");

  const handleChange = (key, value) => setProject({ ...project, [key]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    for (var key in project) {
      formData.append(key, project[key]);
    }

    const results = await SaveProject(formData);
    if (!results.status) {
      setError(results.statusText);
      return;
    }
    refreshData();
    setProject(ENTRIES);
  };

  return (
    <div className="col-lg-8 mx-auto mb-4">
      <div className="card">
        <div className="card-body">
          <h5 className="text-center mb-3">Add new project</h5>
          <form onSubmit={handleSubmit} encType="multipart/formdata">
            <div className="mb-3">
              <input
                className="form-control"
                placeholder="Project name"
                onChange={(e) => handleChange("name", e.target.value)}
                value={project.name}
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                placeholder="Description"
                onChange={(e) => handleChange("description", e.target.value)}
                value={project.description}
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                placeholder="Repo link"
                onChange={(e) => handleChange("repolink", e.target.value)}
                value={project.repolink}
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                placeholder="Web link"
                onChange={(e) => handleChange("weblink", e.target.value)}
                value={project.weblink}
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                placeholder="Web link"
                type={"file"}
                name="photo"
                onChange={(e) => handleChange("photo", e.target.files[0])}
              />
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;

import API from "../config/API";
import helpers from "./helpers";

export const getProjects = async () => {
  try {
    const projects = await fetch(`${API}/projects/listall`);
    return await projects.json();
  } catch (error) {
    console.log(error);
  }
};

export const SaveProject = async (formData) => {
  try {
    const results = await fetch(`${API}/projects/save`, {
      method: "POST",
      headers: { Authorization: helpers.getAndSetAccessToken() },
      body: formData,
    });
    return await results.json();
  } catch (error) {
    console.log(error);
  }
};

export const UpdateProject = async () => {
  try {
  } catch (error) {
    console.log(error);
  }
};

export const DeleteProject = async (id) => {
  try {
    const results = await fetch(
      `${API}/projects/delete/${id}`,
      helpers.authDeleteConfig()
    );
    return await results.json();
  } catch (error) {
    console.log(error);
  }
};

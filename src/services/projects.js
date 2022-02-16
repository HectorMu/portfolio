import API from "../config/API";

export const getProjects = async () => {
  try {
    const projects = await fetch(`${API}projects/listall`);
    return await projects.json();
  } catch (error) {
    console.log(error);
  }
};

export const SaveProject = async () => {
  try {
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

export const DeleteProject = async () => {
  try {
  } catch (error) {
    console.log(error);
  }
};

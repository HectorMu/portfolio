import API from "../../../config/API";
import helpers from "../../../services/helpers";

export const LoginService = async (credentials) => {
  try {
    const response = await fetch(`${API}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const Logout = () => {
  window.localStorage.removeItem("PORTSession");
};

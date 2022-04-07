import { useState } from "react";
import "./Login.css";
import { LoginService } from "./services/auth";
import useSession from "../../hooks/useSession";
import { useNavigate } from "react-router-dom";

const ENTRIES = {
  email: "",
  password: "",
};

const Login = () => {
  const { setUser } = useSession();
  const [credentials, setCredentials] = useState(ENTRIES);
  const navigate = useNavigate();
  const handleChange = (key, value) =>
    setCredentials({ ...credentials, [key]: value });

  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const results = await LoginService(credentials);
    if (!results.status) {
      setError(results.statusText);
      return;
    }

    const { SessionData } = results;
    window.localStorage.setItem("PORTSession", JSON.stringify(SessionData));
    setUser(JSON.parse(window.localStorage.getItem("PORTSession")));
    navigate("/projects");
  };

  return (
    <div id="login" className="login">
      <div className="login-container">
        <form className="login-form shadowed" onSubmit={handleLogin}>
          {error.length > 0 && <h3 onClick={() => setError("")}>{error}</h3>}
          <input
            className="form-control"
            placeholder={"Email"}
            type="email"
            onChange={(e) => handleChange("email", e.target.value)}
            value={credentials.email}
          />
          <input
            className="form-control"
            placeholder={"Password"}
            type="password"
            onChange={(e) => handleChange("password", e.target.value)}
            value={credentials.password}
          />

          <button>
            Log in <i className="fas fa-arrow-right"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

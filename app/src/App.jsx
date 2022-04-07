import "./css/animations.css";
import "./css/utilities.css";
import "./App.css";
import React, { useEffect } from "react";
import AOS from "aos";
import LangContextProvider from "./context/LangContextProvider";
import { Layout } from "./components";
import { Routes, Route } from "react-router-dom";
import Portfolio from "./pages/portfolio/Portfolio";
import Login from "./pages/Login/Login";
import IsLoggedIn from "./components/Auth/IsLoggedIn";
import Projects from "./pages/Projects/Projects";
import NotFound from "./pages/NotFound/NotFound";

const App = () => {
  return (
    <div>
      <LangContextProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/login" element={<Login />} />
            <Route path="/projects" element={<IsLoggedIn view={Projects} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </LangContextProvider>
    </div>
  );
};

export default App;

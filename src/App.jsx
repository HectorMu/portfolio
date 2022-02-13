import React, { useEffect } from "react";
import { Hero, Navbar, Layout, Skills, HeroShape, Sidebar } from "./components";
import languages from "./lang/languajes.json";

import "./css/animations.css";
import "./css/main.css";
import "./css/utilities.css";
import "./App.css";
import AOS from "aos";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Navbar />

      <Sidebar />
      <Layout>
        <Hero />
        <HeroShape />
        <Skills />
      </Layout>
    </div>
  );
};

export default App;

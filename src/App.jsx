import React from "react";

import { Hero, Navbar, Layout, Skills, HeroShape, Sidebar } from "./components";
//import languages from "./lang/languajes.json";

import "./css/animations.css";
import "./css/main.css";
import "./css/utilities.css";
import "./App.css";
import useSidebarControl from "./hooks/useSidebarControl";

const App = () => {
  const { isActive } = useSidebarControl();
  return (
    <div>
      <Navbar />

      <div className={`wrapper ${isActive ? `active` : ``}`}>
        <Sidebar />
        <Layout>
          <Hero />
          <HeroShape />
          <Skills />
        </Layout>
      </div>
    </div>
  );
};

export default App;

import React from "react";

import {
  Hero,
  Navbar,
  Layout,
  Skills,
  HeroShape,
  Sidebar,
  Projects,
  ProjectsShapeTop,
  ProjectsShapeBottom,
  Contact,
} from "./components";

import "./css/animations.css";
import "./css/utilities.css";
import "./App.css";
import useSidebarControl from "./hooks/useSidebarControl";
import LangContextProvider from "./context/LangContextProvider";

const App = () => {
  const { isActive } = useSidebarControl();
  return (
    <div>
      <LangContextProvider>
        <Navbar />
        <div className={`wrapper`}>
          <Sidebar />
          <Layout>
            <Hero />
            <HeroShape />
            <Skills />
            <ProjectsShapeTop />
            <Projects />
            <ProjectsShapeBottom />
            <Contact />
          </Layout>
        </div>
      </LangContextProvider>
    </div>
  );
};

export default App;

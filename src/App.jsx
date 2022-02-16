import React, { useEffect } from "react";
import AOS from "aos";

import LangContextProvider from "./context/LangContextProvider";

import "./css/animations.css";
import "./css/utilities.css";
import "./App.css";

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
  FooterShapetTop,
  Footer,
} from "./components";

const App = () => {
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
            <FooterShapetTop />
            <Footer />
          </Layout>
        </div>
      </LangContextProvider>
    </div>
  );
};

export default App;

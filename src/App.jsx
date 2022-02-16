import React, { useEffect } from "react";
import Aos from "aos";

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
            <FooterShapetTop />
            <Footer />
          </Layout>
        </div>
      </LangContextProvider>
    </div>
  );
};

export default App;

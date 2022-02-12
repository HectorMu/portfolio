import React from "react";
import { Hero, Navbar, Layout, Skills, HeroShape } from "./components";

import "./css/animations.css";
import "./css/main.css";
import "./css/utilities.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Layout>
        <Hero />
        <HeroShape />
        <Skills />
      </Layout>
    </div>
  );
};

export default App;
